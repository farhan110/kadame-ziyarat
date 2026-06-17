import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageRenderer } from "@/components/PageRenderer";
import { allPages, getPageBySlug } from "@/lib/content";

type Props = {
  params: { slug: string[] };
};

export function generateStaticParams() {
  return allPages.filter((page) => page.slug).map((page) => ({ slug: page.slug.split("/") }));
}

export function generateMetadata({ params }: Props): Metadata {
  const page = getPageBySlug(params.slug.join("/"));
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/${page.slug}` },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `/${page.slug}`,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description
    }
  };
}

export default function DynamicPage({ params }: Props) {
  const page = getPageBySlug(params.slug.join("/"));
  if (!page) notFound();
  return <PageRenderer page={page} />;
}
