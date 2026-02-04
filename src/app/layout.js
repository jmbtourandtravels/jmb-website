import { Roboto } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingIcons from "@/components/FloatingIcons";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.jmbtourandtravels.com"),
  title:
    "JMB Tour and Travels | Cab & Taxi Services | Safe & Affordable Rides",
  description:
    "Jai Maa Baglamukhi Tour and Travels offers reliable cab and taxi services for local, outstation, and airport travel. Book safe, affordable, and comfortable rides anytime.",
  keywords: [
    "Jai Maa Baglamukhi Tour and Travels",
    "jmb tour and travels",
    "JMB Tour And Travels",
     "cab service in Indore",
    "taxi service in Indore",
    "Indore cabs",
    "Indore taxi booking",
    "book cab in Indore",
    "airport cab Indore",
    "Indore airport transfer",
    "best cab in Indore",
    "affordable taxi Indore",
    "cheap cab Indore",
    "luxury cab Indore",
    "outstation cabs from Indore",
    "Indore to Ujjain cab",
    "Indore to Dewas taxi",
    "Indore to Bhopal cab service",
    "one way cab Indore",
    "round trip taxi Indore",
    "corporate cab Indore",
    "corporate taxi service Indore",
    "daily cab booking Indore",
    "Indore sightseeing cab",
    "Indore city taxi",
    "cab booking near me",
    "taxi near me in Indore",
    "Travel Partner Indore",
    "Indore travel agency",
    "Indore tours and travels",
    "Indore car rental",
    "Indore to Omkareshwar taxi",
    "Indore to Maheshwar cab",
    "Indore to Mandu trip",
    "cab for business meetings Indore",
    "Indore local taxi service",
    "safe taxi service Indore",
    "verified drivers Indore cab",
    "best car hire Indore",
    "24/7 taxi Indore",
    "cab booking website Indore",
    "reliable taxi in Indore",
    "travel partner cab booking",
    "cheap outstation taxi Indore",
    "Indore rental car service",
    "Indore drop service",
    "pick and drop taxi Indore",
    "family cab Indore",
    "corporate employee cab Indore",
    "Indore ride booking",
    "cab booking online Indore",
    "trusted cab company Indore",
    "Indore to airport cab",
    "taxi for office commute Indore",
    "tour and travel Indore",
    "Indore car hire service",
    "local cab provider Indore",
    "book Indore cab online",
  ],
  openGraph: {
    title:
      "Jai Maa Baglamukhi Tour and Travels | Trusted Cab & Travel Services",
    description:
      "Book safe, affordable, and reliable cab services with Jai Maa Baglamukhi Tour and Travels. Available for local, outstation & airport rides.",
    url: "https://www.jmbtourandtravels.com",
    siteName: "Jai Maa Baglamukhi Tour and Travels",
    images: [
      {
        url: "https://www.jmbtourandtravels.com/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "Jai Maa Baglamukhi Tour and Travels",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Jai Maa Baglamukhi Tour and Travels | Cab & Taxi Booking",
    description:
      "Safe and affordable cab services for local and outstation travel.",
    images: ["https://www.jmbtourandtravels.com/assets/logo.png"],
  },
  alternates: {
    canonical: "https://www.jmbtourandtravels.com",
  },
  authors: [{ name: "Jai Maa Baglamukhi Tour and Travels" }],
  themeColor: "#ffffff",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WWQ9HTT8');
          `}
        </Script>

        {/* ✅ Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LKK1D39XZY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LKK1D39XZY');
          `}
        </Script>

        {/* ✅ JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Jai Maa Baglamukhi Tour and Travels",
              url: "https://www.jmbtourandtravels.com",
              logo: "https://www.jmbtourandtravels.com/assets/logo.png",
               sameAs: [
                "https://www.facebook.com/travellpartner",
                "https://www.instagram.com/travelpartnerr001",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                 telephone: "+91-7772075970",
                contactType: "Customer Service",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi"],
              },
            }),
          }}
        />

{/* Google Search Console Verification */}   
<meta name="google-site-verification" content="WuepnCYpUxpMRQt8l9TIECNxtmHiGhyTzfHUywv78a4" />
      </head>

      <body
        className={`${roboto.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {/* ✅ Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WWQ9HTT8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Navbar />
        {children}
        <FloatingIcons />
        <Footer />
      </body>
    </html>
  );
}
