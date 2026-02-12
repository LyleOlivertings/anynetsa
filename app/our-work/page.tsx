import OurWorkClientPage from "@/components/OurWorkClientPage";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Work - AnyNet SA | Digital Portfolio',
    description: 'Explore our portfolio of custom websites, ticketing systems, and school portals. All built with user-friendly CMS integration.',
};

// Data Structure
export type Category = "All" | "Corporate" | "Schools" | "Internal";

export interface PortfolioItem {
  title: string;
  category: Category;
  description: string;
  liveUrl: string;
  imageUrl?: string; // Optional: If empty, we generate a placeholder
  features?: string[];
}

const portfolioData: PortfolioItem[] = [
  // --- CORPORATE & EVENTS ---
  // {
  //   title: "Miller Du Toit (MDT Inc.)",
  //   category: "Corporate",
  //   description: "A professional corporate identity website for Miller Du Toit Inc., showcasing their legal expertise and services.",
  //   liveUrl: "https://mdtinc.vercel.app/",
  //   features: ["CMS Integrated", "Service Showcase"],
  // },
  // {
  //   title: "Annual Global Family Law Conference",
  //   category: "Corporate",
  //   description: "A comprehensive event platform featuring a full ticketing system, speaker management, and dynamic scheduling.",
  //   liveUrl: "https://www.agflc.co.za/",
  //   features: ["Ticketing System", "Full CMS", "Event Management"],
  // },
  // {
  //   title: "FLAFSA",
  //   category: "Corporate",
  //   description: "The Family Law Arbitration Federation of South Africa. A resource-heavy portal for legal professionals.",
  //   liveUrl: "https://www.flafsa.co.za/",
  //   features: ["Document Hub", "Member Portal", "CMS Integrated"],
  // },
  {
    title: "Peak Pursuit Consulting",
    category: "Corporate",
    description: "A high-performance landing page for a business consulting firm, designed to convert leads and showcase authority.",
    liveUrl: "https://www.peakpursuit.co.za/",
    features: ["Lead Generation", "CMS Integrated"],
  },
  {
    title: "TnT Infrastructure",
    category: "Corporate",
    description: "Industrial portfolio website for an infrastructure company, highlighting large-scale projects and capabilities.",
    liveUrl: "https://www.tnt-infra.co.za/",
    features: ["Project Gallery", "CMS Integrated"],
  },

  {
    title: "BrightWire Electrical",
    category: "Corporate",
    description: "A modern and responsive website for an electrical services company, featuring service listings and contact forms.",
    liveUrl: "https://www.brightwireelectrical.co.za/",
    features: ["Service Listings", "Contact Form", "CMS Integrated"],
  },

  // --- SCHOOLS ---
  {
    title: "Scottsdene High School",
    category: "Schools",
    description: "A vibrant digital hub for students and parents, featuring news updates, resources, and announcements.",
    liveUrl: "https://www.scottsdenehigh.co.za/",
    features: ["Student Portal", "News CMS", "Events Calendar"],
  },
  {
    title: "Glendale High School",
    category: "Schools",
    description: "Modern educational platform providing easy access to school policies, staff information, and academic schedules.",
    liveUrl: "https://www.glendalehigh.co.za/",
    features: ["Staff Directory", "CMS Integrated", "Downloads"],
  },
  {
    title: "St James Primary School",
    category: "Schools",
    description: "Welcoming and colorful website for primary education, focused on community engagement and parental information.",
    liveUrl: "https://www.stjamesprimary.org.za/",
    features: ["Gallery", "Newsletter", "CMS Integrated"],
  },
  {
    title: "Muizenberg High School",
    category: "Schools",
    description: "A prestigious and history-rich website serving as the central communication point for the Muizenberg High community.",
    liveUrl: "https://www.muizenberghigh.org/",
    features: ["Alumni Network", "Admissions", "CMS Integrated"],
  },

  // --- INTERNAL PROJECTS ---
  {
    title: "AnyNet Quote System",
    category: "Internal",
    description: "Our proprietary automated quoting engine. It allows users to generate instant web development estimates.",
    liveUrl: "https://quote-gen-snowy-three.vercel.app/",
    features: ["React App", "Dynamic Calculation", "PDF Generation"],
  },
];

const OurWorkPage = () => {
  return <OurWorkClientPage portfolioData={portfolioData} />;
};

export default OurWorkPage;