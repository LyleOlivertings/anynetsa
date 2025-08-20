"use client";
import { motion } from "framer-motion";

const Contact = () => {
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
          Fill out the form below or send us an email, and we'll get back to you as soon as possible to discuss your needs.
        </motion.p>
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-xl mx-auto bg-primary p-8 rounded-lg border border-gray-700"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-text-secondary mb-2">Name</label>
            <input type="text" id="name" className="w-full bg-secondary p-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-text-secondary mb-2">Email</label>
            <input type="email" id="email" className="w-full bg-secondary p-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent" required />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-text-secondary mb-2">Message</label>
            <textarea id="message" rows={5} className="w-full bg-secondary p-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent" required></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-3 px-4 rounded-lg transition-colors"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;