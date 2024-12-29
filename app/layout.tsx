'use client'
import { useEffect, useState } from 'react';
import { Manrope } from 'next/font/google';
import { SiteHeader } from "@/components/Site/Header";
import '../globals.css'

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-primary", // Updated variable name to match Tailwind config
    weight: ["400", "700"],
    preload: true,
});

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const handleStart = () => setIsTransitioning(true);
        const handleComplete = () => setIsTransitioning(false);
        return () => {
            // Clean up event listeners here if necessary
        };
    }, []);

    return (
        <html lang="en">
            <body className={`${manrope.variable} transition-container ${isTransitioning ? "transitioning" : ""}`}>
                <SiteHeader />
                {children}
            </body>
        </html>
    );
}

