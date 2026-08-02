import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const mdx = `---
title: ${body.title}
---

${body.description}
`;

  return NextResponse.json({
    mdx,
  });
}