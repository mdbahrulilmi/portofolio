import { getDocBySlug } from "@/lib/docs";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function DocPage({ params }: PageProps) {
  try {
    const { slug } = await params;
    const doc = await getDocBySlug(slug);

    return (
      <div className="prose-light bg-white min-h-screen">
        <article 
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: doc.content }} 
        />
      </div>
    );
  } catch (e) {
    notFound();
  }
}