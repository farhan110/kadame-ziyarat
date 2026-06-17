import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header, WhatsAppButton } from "@/components/SiteChrome";
import { organizationSchema } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL("https://kadameziyarat.com"),
  title: {
    default: "Kadame Ziyarat, Hajj, Umrah and Iraq Ziyarat Packages from India",
    template: "%s"
  },
  description: "Trusted Hajj, Umrah and Iraq Ziyarat packages from India with warm guidance, transparent pricing and on ground support.",
  openGraph: {
    siteName: "Kadame Ziyarat",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
