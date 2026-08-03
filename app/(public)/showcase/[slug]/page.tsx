import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

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
    <main className="max-w-5xl mx-auto px-6 py-12">

      {/* Back Button */}
      <Link
        href="/showcase"
        className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Showcase
      </Link>

      {/* Header */}
      <header className="border-b border-zinc-200 pb-8 mb-10">

        <span className="inline-flex px-3 py-1 rounded-full bg-zinc-100 text-xs font-medium text-zinc-600 mb-4">
          {project.category}
        </span>

        <h1 className="text-5xl font-bold tracking-tight">
          {project.title}
        </h1>

        <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
          {project.summary}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-6">
          {project.techStack.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-md bg-zinc-100 border border-zinc-200 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* External Links */}
        <div className="flex gap-3 mt-8">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border border-zinc-300 hover:bg-zinc-100 transition"
            >
              GitHub
            </a>
          )}

          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 transition"
            >
              Live Demo
            </a>
          )}
        </div>

      </header>

      {/* Markdown */}
      <article className="prose prose-zinc max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
        >
          {project.markdown}
        </ReactMarkdown>
      </article>

    </main>
  );
}