import WhatWeDoClientPage from "@/components/WhatWeDoClientPage";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'What We Do - AnyNet SA | Web Design & Development',
    description: 'We offer a range of web development services, including web design, CMS integration, eCommerce solutions, and SEO optimization.',
};

const WhatWeDoPage = () => {
  return <WhatWeDoClientPage />;
};

export default WhatWeDoPage;