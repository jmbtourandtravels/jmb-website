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
  metadataBase: new URL("https://www.travellpartner.com"),
  title:
    "Travel Partner | Best Cab & Taxi Services in Indore | Book Affordable Rides 24/7",
  description:
    "Travel Partner provides the best cab and taxi services in Indore for city rides, airport transfers, outstation trips, and corporate travel. Book safe, clean, and affordable cabs anytime with verified drivers and 24/7 support.",
  keywords: [
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
      "Travel Partner — Indore’s Most Trusted Cab & Travel Service | Affordable Taxi Booking 24/7",
    description:
      "Book city rides, airport transfers, and outstation trips with Travel Partner — Indore’s reliable, safe, and affordable taxi service. Available 24/7 with professional drivers.",
    url: "https://www.travellpartner.com",
    siteName: "Travel Partner",
    images: [
      {
        url: "https://www.travellpartner.com/assets/logo3.png",
        width: 1200,
        height: 630,
        alt: "Travel Partner Cab Service in Indore",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Travel Partner — Best Cab & Taxi Services in Indore | Affordable 24/7 Rides",
    description:
      "Travel Partner offers safe, affordable, and verified cab and taxi services in Indore for local, outstation, and airport rides. Book your ride instantly!",
    images: ["https://www.travellpartner.com/assets/logo3.png"],
  },
  alternates: {
    canonical: "https://www.travellpartner.com",
  },
  authors: [{ name: "Travel Partner Team" }],
  themeColor: "#ffffff",
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
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
            })(window,document,'script','dataLayer','GTM-NLL3CPS6');
          `}
        </Script>

        {/* ✅ Google Ads Conversion Tag */}
        <Script
          id="google-ads-tag"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-17753542939"
        />

        <Script id="google-ads-config" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-17753542939');
  `}
        </Script>x

        {/* ✅ Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X5DVJBF0RB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X5DVJBF0RB');
          `}
        </Script>

        {/* ✅ JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Travel Partner",
              url: "https://www.travellpartner.com",
              logo: "https://www.travellpartner.com/assets/logo3.png",
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
      </head>

      <body
        className={`${roboto.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {/* ✅ GTM (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NLL3CPS6"
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
