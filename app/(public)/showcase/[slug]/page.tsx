import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";

import { getProject } from "@/lib/showcase";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({
  params,
}: Props) {
  const { slug } = await params;

  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 md:py-16">
      {/* Back Link */}
      <Link
        href="/showcase"
        className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:opacity-80 transition-all mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Showcase
      </Link>

      <header className="border-b border-blue-100 pb-8 mb-10">

        {/* Category Badge */}
        <span className="inline-flex px-3.5 py-1 rounded-md bg-blue-50 text-xs font-semibold text-blue-700 border border-blue-200 mb-4 shadow-xs">
          {project.category}
        </span>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-blue-950">
          {project.title}
        </h1>

        {/* Summary */}
        <p className="mt-4 text-base md:text-lg text-blue-950/80 leading-relaxed max-w-3xl">
          {project.summary}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-6">
          {project.techStack?.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-md bg-blue-50/60 border border-blue-200 text-xs font-semibold text-blue-900 shadow-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links & Repository Status */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          {project.links?.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl border border-blue-200 bg-white text-blue-900 text-xs font-semibold hover:border-blue-500 transition shadow-xs"
            >
              GitHub Repository
            </a>
          ) : (
            <div className="px-4 py-2 rounded-xl border border-blue-200 bg-blue-50/80 text-blue-700 text-xs font-semibold inline-block">
              🔒 Repository private milik perusahaan
            </div>
          )}

          {project.links?.live?.length > 0 && (
            <div className="flex flex-wrap items-center gap-3">
              {project.links.live.map((demo: any) => (
                <a
                  key={demo.url}
                  href={demo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 transition shadow-xs"
                >
                  {demo.name}
                </a>
              ))}
            </div>
          )}
        </div>

      </header>
      
      {/* Markdown Documentation Content */}
      <article className="prose prose-blue max-w-none prose-headings:text-blue-950 prose-p:text-blue-950/80">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight, rehypeRaw]}
        >
          {project.markdown}
        </ReactMarkdown>
      </article>

    </main>
  );
}