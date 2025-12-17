"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Send, Loader2, Mail, Phone, MapPin, CheckCircle2, AlertCircle, ArrowRight, MessageSquare } from "lucide-react";

const ContactPage = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

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
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col pt-32 pb-12">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] translate-y-1/3 translate-x-1/3 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex-grow flex flex-col lg:flex-row gap-16 lg:items-start">
        
        {/* Left Side: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-5/12 pt-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for new projects
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            Let's Start a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Conversation</span>.
          </h1>
          
          <p className="text-lg text-text-muted mb-12 leading-relaxed">
            Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.
          </p>

          <div className="space-y-6">
            <ContactInfoBlock 
              icon={<Mail className="w-5 h-5" />} 
              label="Email us at" 
              value="info@anynetsa.co.za" 
              href="mailto:info@anynetsa.co.za"
            />
            <ContactInfoBlock 
              icon={<Phone className="w-5 h-5" />} 
              label="Call us at" 
              value="+27 65 284 5981" 
              href="tel:+27652845981"
            />
            <ContactInfoBlock 
              icon={<MapPin className="w-5 h-5" />} 
              label="Visit us" 
              value="Cape Town, South Africa" 
              href="#"
            />
          </div>

          {/* Social Proof / Trust Badge */}
          <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-4">
             <div className="flex -space-x-3">
               {[1,2,3].map(i => (
                 <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-surface flex items-center justify-center text-xs text-text-muted">
                
                 </div>
               ))}
             </div>
           
          </div>
        </motion.div>

        {/* Right Side: Form Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-7/12 w-full"
        >
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            
            <div className="relative bg-surface/40 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl overflow-hidden min-h-[600px] flex items-center">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="w-full text-center py-20"
                  >
                    <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-12 h-12 text-green-500" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                    <p className="text-text-muted text-lg mb-8 max-w-md mx-auto">
                      Thank you for reaching out. One of our team members will get back to you shortly.
                    </p>
                    <button 
                      onClick={() => setStatus("idle")}
                      className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="w-full space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputField 
                        label="Name" 
                        name="name" 
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
                        placeholder="john@company.com" 
                      />
                    </div>
                    
                    <InputField 
                      label="Subject" 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleChange} 
                      placeholder="Project Inquiry" 
                    />

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-text-muted ml-1">Message</label>
                      <textarea
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us a bit about your project goals and timeline..."
                        className="w-full bg-background/50 border border-white/10 rounded-xl p-4 text-white placeholder-text-muted/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                      ></textarea>
                    </div>

                    <button 
                      disabled={status === "loading"}
                      className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? <Loader2 className="animate-spin" /> : <>Send Message <ArrowRight size={18} /></>}
                    </button>
                    
                    {status === "error" && (
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm text-center flex items-center justify-center gap-2 mt-2">
                            <AlertCircle size={16} /> Something went wrong. Please try again.
                        </motion.p>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// --- Reusable Components ---

const InputField = ({ label, name, type = "text", value, onChange, placeholder }: any) => (
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

const ContactInfoBlock = ({ icon, label, value, href }: any) => (
  <a 
    href={href} 
    className="flex items-center gap-4 p-4 rounded-2xl bg-surface/50 border border-white/5 hover:bg-surface hover:border-primary/30 transition-all group"
  >
    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
      {icon}
    </div>
    <div>
      <p className="text-xs text-text-muted font-medium mb-0.5">{label}</p>
      <p className="text-lg font-bold text-white">{value}</p>
    </div>
  </a>
);

export default ContactPage;