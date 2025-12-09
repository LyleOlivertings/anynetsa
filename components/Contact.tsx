"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Loader2, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API call or replace with actual fetch
    setTimeout(() => {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-surface/30 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Let's Discuss Your Project</h2>
            <p className="text-text-muted text-lg mb-8 leading-relaxed">
              Ready to take your business to the next level? We are here to help you navigate the digital landscape.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: <Mail className="text-primary" />, text: "info@anynetsa.site" },
                { icon: <Phone className="text-primary" />, text: "+27 (0)74 353 9953" },
                { icon: <MapPin className="text-primary" />, text: "Cape Town, South Africa" }
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/5">
                  {item.icon}
                  <span className="text-text-secondary">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background p-8 rounded-2xl border border-white/10 shadow-2xl"
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">Name</label>
                <input required type="text" className="w-full bg-surface border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">Email</label>
                <input required type="email" className="w-full bg-surface border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">Message</label>
                <textarea required rows={4} className="w-full bg-surface border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"></textarea>
              </div>
              
              <button 
                disabled={status === "loading" || status === "success"}
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <Loader2 className="animate-spin" />
                ) : status === "success" ? (
                  <span>Message Sent!</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;