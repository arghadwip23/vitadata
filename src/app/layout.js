
import { Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import Navbar from "./Components/Navbar";
import PageFooter from "./Components/Footer";
import AOSProvider from "./Components/AOSProvider";
const roboto = Roboto({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://vitadata.tech"),
  title: {
    default: "VitaData Solutions | Clinical Data and Healthcare Technology",
    template: "%s | VitaData Solutions",
  },
  description:
    "VitaData Solutions builds secure, intelligent healthcare platforms including patient engagement, clinical cloud storage, AI/ML analytics, and modern web and mobile applications.",
  applicationName: "VitaData Solutions",
  keywords: [
    "VitaData",
    "healthcare technology",
    "clinical data platform",
    "hospital management system",
    "AI in healthcare",
    "medical data analytics",
    "clinical cloud storage",
    "patient engagement platform",
  ],
  authors: [{ name: "VitaData Solutions" }],
  creator: "VitaData Solutions",
  publisher: "VitaData Solutions",
  category: "Healthcare Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    title: "VitaData Solutions | Clinical Data and Healthcare Technology",
    description:
      "Secure and scalable healthcare solutions for hospitals, laboratories, physicians, and patients powered by intelligent clinical data systems.",
    siteName: "VitaData Solutions",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "VitaData Solutions logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VitaData Solutions | Clinical Data and Healthcare Technology",
    description:
      "Transforming healthcare operations with secure platforms, AI/ML insights, and patient-centric digital experiences.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white">
        <AOSProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <PageFooter />
        </AOSProvider>
      </body>
    </html>
  );
}
