"use client";
import { motion } from "framer-motion";
import { Smartphone, Monitor, Database, Lock } from "lucide-react";

const services = [
  {
    num: "01",
    icon: <Monitor className="w-6 h-6 text-zinc-950" />,
    title: "Web Development",
    description: "Custom, lightning-fast websites built from scratch to fit your exact business needs and goals."
  },
  {
    num: "02",
    icon: <Smartphone className="w-6 h-6 text-zinc-950" />,
    title: "Mobile Responsive",
    description: "Flawless, intuitive experiences engineered across all devices, from desktops to smartphones."
  },
  {
    num: "03",
    icon: <Database className="w-6 h-6 text-zinc-950" />,
    title: "CMS Integration",
    description: "Empowering you with easy-to-use content management systems so you control your own site."
  },
  {
    num: "04",
    icon: <Lock className="w-6 h-6 text-zinc-950" />,
    title: "Secure Hosting",
    description: "Enterprise-grade, secure, and reliable hosting solutions to keep your site online 24/7/365."
  }
];

const Services = () => {
  return (
    <section className="py-32 bg-white relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-zinc-950">Our <br/><span className="text-zinc-400">Expertise</span></h2>
          </div>
          <p className="text-lg text-zinc-500 max-w-md font-light leading-relaxed">
            Comprehensive digital solutions tailored for your success. We don't just build websites; we build businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-10 rounded-3xl bg-zinc-50 border border-zinc-200 hover:border-transparent hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05),0_0_20px_rgba(168,85,247,0.15)] transition-all duration-300 group overflow-hidden"
            >
              {/* Giant Background Number */}
              <div className="absolute -bottom-6 -right-4 text-[12rem] font-black text-zinc-100 group-hover:text-zinc-200 transition-colors leading-none pointer-events-none tracking-tighter">
                {service.num}
              </div>
              
              <div className="relative z-10">
                <div className="mb-8 p-4 bg-white rounded-full inline-block border border-zinc-200 group-hover:scale-110 group-hover:border-zinc-300 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-zinc-950 tracking-tight">{service.title}</h3>
                <p className="text-zinc-500 text-base leading-relaxed font-light max-w-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;