import WhatWeDoClientPage from "@/components/WhatWeDoClientPage";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Services | Web Design, SEO & Custom Development - AnyNet SA',
    description: 'We build high-performance websites that rank. From custom web design and CMS integration to technical SEO and eCommerce solutions. Based in Cape Town.',
    keywords: ['Web Design', 'SEO Optimization', 'Web Development', 'eCommerce', 'CMS', 'Cape Town', 'AnyNet SA'],
    openGraph: {
        title: 'Our Services | Web Design, SEO & Custom Development',
        description: 'Transforming businesses with fast, secure, and SEO-optimized websites.',
        url: 'https://anynetsa.co.za/what-we-do',
        siteName: 'AnyNet SA',
        locale: 'en_ZA',
        type: 'website',
    },
};

const WhatWeDoPage = () => {
  return <WhatWeDoClientPage />;
};

export default WhatWeDoPage;