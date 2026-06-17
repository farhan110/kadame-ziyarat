import { PageRenderer } from "@/components/PageRenderer";
import { getPageBySlug } from "@/lib/content";
import type { Metadata } from "next";

const page = getPageBySlug("");

export const metadata: Metadata = {
  title: page?.title,
  description: page?.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: page?.title,
    description: page?.description,
    url: "/",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: page?.title,
    description: page?.description
  }
};

export default function Home() {
  return <PageRenderer page={page} />;
}
