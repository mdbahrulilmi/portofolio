import fs from "fs";
import path from "path";
import showcase from "@/content/showcase.json";

export function getProject(slug: string) {
  const project = showcase.projects.find(
    (project) => project.slug === slug
  );

  if (!project) return null;

  const markdown = fs.readFileSync(
    path.join(
      process.cwd(),
      "content",
      "showcase",
      project.documentation
    ),
    "utf-8"
  );

  return {
    ...project,
    markdown,
  };
}