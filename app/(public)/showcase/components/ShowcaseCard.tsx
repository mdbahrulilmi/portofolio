import { ExternalLink, Code2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ShowcaseCard({
  project,
}: {
  project: any;
}) {
    const router = useRouter();
    return (
        <div onClick={() => router.push(`/showcase/${project.slug}`)}>
        <div className="group relative flex flex-col justify-between p-8 rounded-3xl bg-zinc-50 border border-zinc-200 hover:shadow-xl transition-all cursor-pointer">

            <div>

            <div className="flex items-center justify-between mb-6">

                <span className="px-3 py-1 text-xs font-semibold rounded-lg bg-zinc-200">
                {project.category}
                </span>

                <div
                className="flex gap-2"
                onClick={(e) => e.stopPropagation()}
                >
                <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full hover:bg-zinc-200"
                >
                    <svg
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 24 24"
                    >
                    <path d="M12 0c-6.626 0-12 5.373-12 12..." />
                    </svg>
                </a>

                <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full hover:bg-zinc-200"
                >
                    <ExternalLink className="w-4 h-4" />
                </a>
                </div>

            </div>

            <h3 className="text-xl font-bold mb-3">
                {project.title}
            </h3>

            <p className="text-sm text-zinc-600 mb-8">
                {project.summary}
            </p>

            </div>

            <div className="flex flex-wrap gap-2 border-t pt-6">
            {project.techStack.map((tech: string) => (
                <span
                key={tech}
                className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-md border"
                >
                <Code2 className="w-3 h-3" />
                {tech}
                </span>
            ))}
            </div>

        </div>
        </div>
    );
}