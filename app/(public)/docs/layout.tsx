import { getAllDocs } from "@/lib/docs";
import DocsSidebar from "./components/sidebar";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const allDocs = getAllDocs();

  const groupedDocs = allDocs.reduce((acc, doc) => {
    (acc[doc.category] = acc[doc.category] || []).push(doc);
    return acc;
  }, {} as Record<string, typeof allDocs>);

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto flex flex-col md:flex-row min-h-screen">
        <DocsSidebar groupedDocs={groupedDocs} />
        <main className="flex-1 min-w-0 px-6 px-5 py-8 max-w-5xl">
          {children}
        </main>
        
      </div>
    </div>
  );
}