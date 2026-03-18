"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Loader2, Mail, Phone, MapPin, CheckCircle2, AlertCircle, ArrowRight, Send } from "lucide-react";

const ContactFormContent = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  
  const searchParams = useSearchParams();

  useEffect(() => {
    const subjectParam = searchParams.get("subject");
    if (subjectParam) {
      setFormData(prev => ({ ...prev, subject: subjectParam }));
    }
  }, [searchParams]);

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
    <div className="min-h-screen bg-zinc-50 text-zinc-950 relative overflow-hidden flex flex-col pt-32 pb-12 font-sans">
      {/* Background Ambience (Performance Optimized: Radial Gradients instead of CSS Blur) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div 
          className="absolute top-[5%] left-[-10%] w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.12) 0%, rgba(255,255,255,0) 70%)' }}
        ></div>
        <div 
          className="absolute bottom-[5%] right-[-10%] w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(217,70,239,0.12) 0%, rgba(255,255,255,0) 70%)' }}
        ></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.04]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex-grow flex flex-col lg:flex-row gap-16 lg:items-center max-w-7xl">
        
        {/* Left Side: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="lg:w-5/12 pt-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/5 border border-zinc-900/10 text-zinc-600 text-xs tracking-widest uppercase font-semibold mb-8">
            <span className="relative flex h-2 w-2 mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Available for new projects
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.9] tracking-tighter text-zinc-950">
            LET&apos;S <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-950 via-zinc-600 to-zinc-400">TALK.</span>
          </h1>
          
          <p className="text-lg text-zinc-600 mb-12 leading-relaxed font-light max-w-md">
            Have a project in mind? We&apos;d love to hear about it. Send us a message and we&apos;ll get back to you within 24 hours.
          </p>

          <div className="space-y-4">
            <ContactInfoBlock 
              icon={<Mail className="w-5 h-5" />} 
              label="Email us at" 
              value="hello@anynetsa.co.za" 
              href="mailto:hello@anynetsa.co.za"
            />
            <ContactInfoBlock 
              icon={<Phone className="w-5 h-5" />} 
              label="Call us at" 
              value="+27 65 284 5981" 
              href="tel:+27652845981"
            />
            <ContactInfoBlock 
              icon={<MapPin className="w-5 h-5" />} 
              label="Location" 
              value="Cape Town, South Africa" 
              href="#"
            />
          </div>
        </motion.div>

        {/* Right Side: Form Card */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="lg:w-7/12 w-full"
        >
          <div className="relative group">
            {/* Optimized Glass Panel */}
            <div className="relative bg-white/90 border border-zinc-200 p-8 md:p-12 rounded-3xl shadow-xl shadow-zinc-200/50 backdrop-blur-md overflow-hidden min-h-[600px] flex items-center">
              
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="w-full text-center py-20"
                  >
                    <div className="w-24 h-24 bg-green-50 border border-green-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4 tracking-tight text-zinc-950">Message Sent!</h3>
                    <p className="text-zinc-600 text-sm font-light mb-10 max-w-sm mx-auto leading-relaxed">
                      Thank you for reaching out. One of our lead developers will get back to you shortly.
                    </p>
                    <button 
                      onClick={() => setStatus("idle")}
                      className="px-8 py-3 rounded-full bg-zinc-950 text-white hover:bg-zinc-800 font-bold text-sm uppercase tracking-widest transition-all shadow-md"
                    >
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onSubmit={handleSubmit}
                    className="w-full space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputField 
                        label="Full Name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        placeholder="John Doe" 
                      />
                      <InputField 
                        label="Email Address" 
                        name="email" 
                        type="email"
                        value={formData.email} 
                        onChange={handleChange} 
                        placeholder="john@example.com" 
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
                      <label className="text-xs font-semibold text-zinc-500 uppercase tracking-widest ml-1">Message</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project goals, timeline, and budget..."
                        className="w-full bg-zinc-50/50 border border-zinc-200 rounded-xl px-5 py-4 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-all text-sm resize-none"
                      ></textarea>
                    </div>

                    <button 
                      disabled={status === "loading"}
                      className="w-full relative overflow-hidden bg-zinc-950 text-white px-6 py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all duration-200 hover:bg-zinc-800 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed mt-4 shadow-md"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {status === "loading" ? (
                          <Loader2 className="animate-spin w-5 h-5 text-white" />
                        ) : (
                          <>Send Message <Send className="w-4 h-4" /></>
                        )}
                      </span>
                    </button>
                    
                    {status === "error" && (
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-xs font-medium text-center flex items-center justify-center gap-2 mt-4">
                            <AlertCircle size={14} /> Something went wrong. Please try again.
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
    <label className="text-xs font-semibold text-zinc-500 uppercase tracking-widest ml-1">{label}</label>
    <input
      required
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full bg-zinc-50/50 border border-zinc-200 rounded-xl px-5 py-4 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-all text-sm"
    />
  </div>
);

const ContactInfoBlock = ({ icon, label, value, href }: any) => {
  const isLink = href !== "#";
  const Tag = isLink ? "a" : "div";
  
  return (
    <Tag 
      href={isLink ? href : undefined} 
      className="flex items-center gap-5 p-4 rounded-2xl bg-white/80 border border-zinc-200 hover:border-zinc-300 transition-colors group"
    >
      <div className="w-12 h-12 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-950 group-hover:bg-zinc-100 transition-colors">
        {icon}
      </div>
      <div>
        <p className="text-xs text-zinc-500 font-semibold uppercase tracking-widest mb-1">{label}</p>
        <p className="text-lg font-bold text-zinc-950 tracking-wide flex items-center gap-2">
          {value}
          {isLink && <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-zinc-400" />}
        </p>
      </div>
    </Tag>
  );
};

// --- Main Export with Suspense ---

const ContactPage = () => {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-zinc-50 flex items-center justify-center">
        <Loader2 className="animate-spin text-zinc-950 w-10 h-10" />
      </div>
    }>
      <ContactFormContent />
    </Suspense>
  );
};

export default ContactPage;