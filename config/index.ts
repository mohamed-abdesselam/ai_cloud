import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        // write a default title for neon a AI Tools to Edit Your Media suggest something unique and catchy don't use the same words of AI Tools to Edit Your Media give a unique name
        default: "Neon - AI Tools to Edit Your Media",
        template: `%s | Neon`
    },
    description: "Enhance images and videos using generative fill, smart cropping, background removal, and more — all from one clean, fast interface.",
    icons: {
        icon: [
            {
                url: "/icons/favicon.ico",
                href: "/icons/favicon.ico",
            }
        ]
    },
    openGraph: {
        title: "Neon - AI Tools to Edit Your Media",
        description: "Enhance images and videos using generative fill, smart cropping, background removal, and more — all from one clean, fast interface.",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        creator: "@shreyassihasane",
        title: "Neon - AI Tools to Edit Your Media",
        description: "Enhance images and videos using generative fill, smart cropping, background removal, and more — all from one clean, fast interface.",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    metadataBase: new URL("https://ai-cloud-img-ved.vercel.app/"),
};
