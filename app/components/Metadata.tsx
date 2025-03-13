"use client";

import { usePathname } from 'next/navigation';
import Script from 'next/script';

export interface SEOProps {
    title: string;
    description: string;
    keywords?: string[];
    canonical?: string;
    ogImage?: string;
    ogType?: string;
}

interface MetadataProps {
    seo: SEOProps;
}

export default function Metadata({ seo }: MetadataProps) {
    const pathname = usePathname();
    const canonicalUrl = seo.canonical || `https://evanjaquez.com${pathname}`;
    const ogImageUrl = seo.ogImage || '/og-image.jpg';

    return (
        <>
            {/* JSON-LD for SEO */}
            <Script
                id="webpage-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": seo.title,
                        "description": seo.description,
                        "url": canonicalUrl,
                        "image": ogImageUrl
                    })
                }}
            />
        </>
    );
}