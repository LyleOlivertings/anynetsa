import OurWorkClientPage from "@/components/OurWorkClientPage";
import { Metadata } from 'next';

// This is a Server Component, so we can export metadata
export const metadata: Metadata = {
    title: 'Our Work - AnyNet SA | Web Design & Development',
    description: 'Check out some of the projects we\'ve recently launched for our amazing clients.',
};

// Data can be defined directly in a Server Component
const portfolioData = [
  {
    title: "Scottsdene High School",
    description: "A modern, comprehensive informational hub for students, parents, and staff, featuring a clean design and easy navigation.",
    liveUrl: "https://scottsdenehigh.vercel.app/",
  },
  {
    title: "SD Content Management System",
    description: "A custom-built CMS empowering school staff to manage website content, news, and events effortlessly.",
    liveUrl: "https://sd-cms.vercel.app/",
  },
  {
    title: "Muizenberg High School",
    description: "A professional and engaging website serving as a central source for school information, admissions, and community updates.",
    liveUrl: "https://www.muizenberghigh.org/",
  },
  {
    title: "St James Primary School",
    description: "A vibrant and welcoming website for St James R.C. Primary, providing essential information for parents and showcasing the school's ethos.",
    imageUrl: "https://placehold.co/600x400/1E1E1E/E0E0E0?text=St+James+Primary",
    liveUrl: "https://st-james-primary-school.vercel.app/",
  },
  {
    title: "MDT Inc.",
    description: "A sleek, corporate site for a community-focused trust, effectively communicating their mission, projects, and impact.",
    imageUrl: "https://placehold.co/600x400/1E1E1E/E0E0E0?text=MDT+Inc.",
    liveUrl: "https://mdtinc.vercel.app/",
  },
  {
    title: "FLAFSA",
    description: "A dedicated web portal for a professional forum that facilitates communication, shares resources, and promotes events.",
    imageUrl: "https://placehold.co/600x400/1E1E1E/E0E0E0?text=FLAFSA",
    liveUrl: "https://flafsa.vercel.app/",
  },
  {
    title: "AGFLC",
    description: "An informational website for a faith-based organization, providing a clear and accessible platform for their vision and programs.",
    imageUrl: "https://placehold.co/600x400/1E1E1E/E0E0E0?text=AGFLC",
    liveUrl: "https://agflc.vercel.app/",
  },
];

const OurWorkPage = () => {
  // Pass the data as a prop to the client component
  return <OurWorkClientPage portfolioData={portfolioData} />;
};

export default OurWorkPage;