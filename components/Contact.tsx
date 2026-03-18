"use client";
import { motion } from "framer-motion";
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
    <section id="contact" className="py-32 relative overflow-hidden bg-zinc-50 border-t border-zinc-200">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('/grid.svg')] opacity-[0.05] pointer-events-none [mask-image:linear-gradient(90deg,transparent,black)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="sticky top-24"
          >
            <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-[0.9] text-zinc-950">
              Let's <br />
              <span className="text-zinc-400">Talk.</span>
            </h2>
            <p className="text-zinc-600 text-lg mb-12 leading-relaxed max-w-md font-light">
              Ready to start your next project? Drop us a line. We typically respond within 24 hours.
            </p>
            
            <div className="space-y-8 border-t border-zinc-200 pt-8 max-w-md">
              <ContactItem icon={<Mail className="w-5 h-5" />} title="Email Us" content="info@anynetsa.co.za" />
              <ContactItem icon={<Phone className="w-5 h-5" />} title="Call Us" content="+27 65 284 5981" />
              <ContactItem icon={<MapPin className="w-5 h-5" />} title="Visit Us" content="Cape Town, South Africa" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Very subtle RGB shadow under the form */}
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/10 to-violet-500/10 rounded-3xl blur-xl"></div>
            
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-zinc-200 p-10 md:p-14 rounded-3xl relative z-10 shadow-xl shadow-zinc-200/50"
            >
              <h3 className="text-2xl font-bold mb-10 text-zinc-950 tracking-tight">Send a message</h3>
              
              <div className="space-y-8">
                <InputField label="Name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="John Doe" />
                <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                
                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-widest font-semibold text-zinc-400">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your vision..."
                    className="w-full bg-transparent border-b border-zinc-200 p-2 text-zinc-950 placeholder-zinc-300 focus:outline-none focus:border-zinc-950 transition-colors resize-none font-light"
                  ></textarea>
                </div>

                <div className="pt-8">
                   <button 
                    disabled={status === "loading" || status === "success"}
                    className={`group relative w-full py-5 rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden
                      ${status === "success" 
                        ? "bg-green-500 text-white" 
                        : status === "error"
                        ? "bg-red-500 text-white"
                        : "bg-zinc-950 text-white hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:scale-[1.02]"
                      }`}
                  >
                    {/* Hover RGB gradient on button */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-violet-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    
                    <span className="relative z-10 flex items-center gap-2">
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
                          Send Message <Send size={16} />
                        </>
                      )}
                    </span>
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

const ContactItem = ({ icon, title, content }: { icon: any, title: string, content: string }) => (
  <div className="flex items-start space-x-6 group cursor-default">
    <div className="w-12 h-12 rounded-full border border-zinc-200 bg-zinc-50 text-zinc-950 flex items-center justify-center group-hover:bg-zinc-950 group-hover:text-white group-hover:border-zinc-950 transition-all duration-300">
      {icon}
    </div>
    <div>
      <p className="text-xs text-zinc-400 uppercase tracking-widest font-bold mb-1">{title}</p>
      <p className="text-lg font-medium text-zinc-950 tracking-tight">{content}</p>
    </div>
  </div>
);

const InputField = ({ label, name, type, value, onChange, placeholder }: any) => (
  <div className="space-y-3">
    <label className="text-xs uppercase tracking-widest font-semibold text-zinc-400">{label}</label>
    <input
      required
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full bg-transparent border-b border-zinc-200 p-2 text-zinc-950 placeholder-zinc-300 focus:outline-none focus:border-zinc-950 transition-colors font-light"
    />
  </div>
);

export default Contact;