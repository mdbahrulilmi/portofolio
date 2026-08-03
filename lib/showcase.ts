import fs from "fs";
import path from "path";
import showcase from "@/app/(public)/showcase/content/showcase.json";

export function getProject(slug: string) {
  const project = showcase.projects.find(
    (project) => project.slug === slug
  );

  if (!project) return null;

  const markdown = fs.readFileSync(
    path.join(
      process.cwd(),
      "app",
      "(public)",
      "showcase",
      "content",
      "docs",
      project.documentation
    ),
    "utf-8"
  );

  return {
    ...project,
    markdown,
  };
}