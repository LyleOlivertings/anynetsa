"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react"; // Import new icons

type Status = "idle" | "sending" | "success" | "error";

const Contact = () => {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-4"
        >
          Ready to Start Your Project?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-text-secondary max-w-2xl mx-auto mb-12"
        >
          Fill out the form below or send us an email, and we'll get back to
          you as soon as possible to discuss your needs.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-xl mx-auto bg-primary p-8 rounded-lg border border-gray-700 min-h-[480px] flex items-center justify-center"
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="text-center"
              >
                <CheckCircle className="h-16 w-16 text-vibrant-green mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-text-secondary">
                  Thank you for reaching out. We'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="w-full"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="mb-4">
                  <label htmlFor="name" className="block text-text-secondary mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-secondary p-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-text-secondary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-secondary p-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-text-secondary mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full bg-secondary p-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center disabled:opacity-50"
                >
                  {status === "sending" ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    "Send Message"
                  )}
                </button>
                {status === "error" && (
                  <p className="text-red-500 text-center mt-4">
                    Something went wrong. Please try again.
                  </p>
                )}
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;