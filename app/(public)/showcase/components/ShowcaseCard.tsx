"use client";

import { ExternalLink, Code2, ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

function getCategoryBadgeColor(category: string) {
    const c = category.toLowerCase();
    if (c.includes("web") && c.includes("mobile")) return "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/60 dark:text-indigo-300 dark:border-indigo-800";
    if (c.includes("web")) return "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-800";
    if (c.includes("mobile")) return "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800";
    if (c.includes("bot")) return "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800";
    
    return "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-800";
}

export default function ShowcaseCard({
    project,
}: {
    project: any;
}) {
    const router = useRouter();
    
    return (
        <div 
            onClick={() => router.push(`/showcase/${project.slug}`)}
            className="card h-full flex flex-col justify-between p-6 bg-white dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/50 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-md transition-all duration-200 cursor-pointer"
        >
            <div>
                {/* Header: Category Badge (Warna-warni sesuai kategori) & External Links */}
                <div className="flex items-center justify-between mb-4">
                    <span className={`px-2.5 py-1 text-xs font-semibold rounded-md border ${getCategoryBadgeColor(project.category)}`}>
                        {project.category}
                    </span>

                    <div
                        className="flex items-center gap-1"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="p-1.5 rounded-lg text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/40 transition-colors"
                                title="View Source Code"
                            >
                                <svg
                                    className="w-4 h-4 fill-current"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235.191 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        )}

                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="p-1.5 rounded-lg text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/40 transition-colors"
                                title="Live Preview"
                            >
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        )}
                    </div>
                </div>

                {/* Title & Summary */}
                <div>
                    <h3 className="text-lg font-bold text-blue-950 dark:text-blue-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center justify-between gap-2">
                        <span>{project.title}</span>
                        <ArrowUpRight className="w-4 h-4 text-blue-500" />
                    </h3>
                    <p className="text-sm text-blue-950/80 dark:text-blue-200/80 mt-2 mb-6 line-clamp-3">
                        {project.summary}
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap gap-1.5 border-t border-blue-100 dark:border-blue-950 pt-4 mt-auto">
                {project.techStack?.map((tech: string) => (
                    <span
                        key={tech}
                        className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded bg-blue-50/60 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 border border-blue-100 dark:border-blue-900/50"
                    >
                        <Code2 className="w-3 h-3 text-blue-500" />
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}