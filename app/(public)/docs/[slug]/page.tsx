
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
      <div className="bg-white min-h-screen">
        <article
          className="
            prose prose-zinc max-w-none
            prose-table:w-full
            prose-table:border-collapse
            prose-th:border
            prose-th:border-zinc-300
            prose-th:bg-zinc-100
            prose-th:p-3
            prose-td:border
            prose-td:border-zinc-300
            prose-td:p-3
          "
          dangerouslySetInnerHTML={{ __html: doc.content }}
        />
      </div>
    );
  } catch {
    notFound();
  }
}
