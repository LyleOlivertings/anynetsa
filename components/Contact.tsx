"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Send, Loader2, Mail, Phone, MapPin, CheckCircle2, AlertCircle } from "lucide-react";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        // Reset status after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] translate-y-1/3 translate-x-1/3"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Let's Build Something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Extraordinary</span>
            </h2>
            <p className="text-text-muted text-lg mb-10 leading-relaxed max-w-lg">
              Whether you need a new website, SEO optimization, or a custom application, we are ready to bring your vision to life.
            </p>
            
            <div className="space-y-6">
              <ContactItem 
                icon={<Mail className="w-6 h-6 text-white" />} 
                title="Email Us" 
                content="info@anynetsa.co.za" 
                delay={0}
              />
              <ContactItem 
                icon={<Phone className="w-6 h-6 text-white" />} 
                title="Call Us" 
                content="+27 65 284 5981"  // UPDATED NUMBER
                delay={0.1}
              />
              <ContactItem 
                icon={<MapPin className="w-6 h-6 text-white" />} 
                title="Visit Us" 
                content="Cape Town, South Africa" 
                delay={0.2}
              />
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glow Effect behind form */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

            <form
              onSubmit={handleSubmit}
              className="relative bg-surface/40 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-2xl shadow-2xl"
            >
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              
              <div className="space-y-5">
                <InputField 
                  label="Name" 
                  name="name" 
                  type="text" 
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder="John Doe"
                />
                <InputField 
                  label="Email" 
                  name="email" 
                  type="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="john@example.com"
                />
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-muted ml-1">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full bg-background/50 border border-white/10 rounded-xl p-4 text-white placeholder-text-muted/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                   <button 
                    disabled={status === "loading" || status === "success"}
                    className={`w-full py-4 rounded-xl font-bold text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg
                      ${status === "success" 
                        ? "bg-green-500/20 text-green-400 border border-green-500/50" 
                        : status === "error"
                        ? "bg-red-500/20 text-red-400 border border-red-500/50"
                        : "bg-gradient-to-r from-primary to-accent hover:shadow-primary/25 hover:scale-[1.02]"
                      }`}
                  >
                    {status === "loading" ? (
                      <Loader2 className="animate-spin" />
                    ) : status === "success" ? (
                      <>
                        <CheckCircle2 size={20} /> Message Sent
                      </>
                    ) : status === "error" ? (
                      <>
                        <AlertCircle size={20} /> Failed. Try Again.
                      </>
                    ) : (
                      <>
                        Send Message <Send size={18} />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Helper Components for cleaner code

const ContactItem = ({ icon, title, content, delay }: { icon: any, title: string, content: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-default"
  >
    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-white/5">
      {icon}
    </div>
    <div>
      <p className="text-xs text-text-muted uppercase tracking-wider font-semibold">{title}</p>
      <p className="text-lg font-medium text-white">{content}</p>
    </div>
  </motion.div>
);

const InputField = ({ label, name, type, value, onChange, placeholder }: any) => (
  <div className="space-y-2">
    <label className="text-sm font-medium text-text-muted ml-1">{label}</label>
    <input
      required
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full bg-background/50 border border-white/10 rounded-xl p-4 text-white placeholder-text-muted/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
    />
  </div>
);

export default Contact;