
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";

const docsDirectory = path.join(process.cwd(), "content/docs");

export function getAllDocs() {
  const fileNames = fs.readdirSync(docsDirectory);

  const allDocs = fileNames.map((fileName) => {
    const slug = fileName
      .replace(/\.md$/, "")
      .toLowerCase()
      .replace(/\s+/g, "_");

    const fileContents = fs.readFileSync(
      path.join(docsDirectory, fileName),
      "utf8"
    );

    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title || slug,
      category: data.category || "Uncategorized",
      date: data.date || "1970-01-01",
    };
  });

  return allDocs.sort((a, b) =>
    b.date.localeCompare(a.date)
  );
}

export async function getDocBySlug(slug: string) {
  const fileNames = fs.readdirSync(docsDirectory);

  const matchedFileName = fileNames.find((fileName) => {
    const computedSlug = fileName
      .replace(/\.md$/, "")
      .toLowerCase()
      .replace(/\s+/g, "_");

    return computedSlug === slug;
  });

  if (!matchedFileName) {
    throw new Error(`Document not found for slug: ${slug}`);
  }

  const fullPath = path.join(docsDirectory, matchedFileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(remarkGfm)
    .use(html)
    .process(content);

  return {
    slug,
    frontmatter: data,
    content: processedContent.toString(),
  };
}
