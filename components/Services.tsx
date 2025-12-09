"use client";
import { motion } from "framer-motion";
import { Smartphone, Monitor, Database, Lock } from "lucide-react";

const services = [
  {
    icon: <Monitor className="w-8 h-8 text-primary" />,
    title: "Web Development",
    description: "Custom websites built from scratch to fit your exact business needs."
  },
  {
    icon: <Smartphone className="w-8 h-8 text-accent" />,
    title: "Mobile Responsive",
    description: "Flawless experiences across all devices, from desktops to smartphones."
  },
  {
    icon: <Database className="w-8 h-8 text-primary" />,
    title: "CMS Integration",
    description: "Easy-to-use content management systems so you can update your own site."
  },
  {
    icon: <Lock className="w-8 h-8 text-accent" />,
    title: "Secure Hosting",
    description: "Fast, secure, and reliable hosting solutions to keep your site online 24/7."
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-surface/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Expertise</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Comprehensive digital solutions tailored for your success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-background border border-white/5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all group"
            >
              <div className="mb-4 p-3 bg-white/5 rounded-lg inline-block group-hover:bg-white/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;