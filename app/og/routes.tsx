import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0f172a",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: "28px", color: "#38bdf8", fontWeight: 600 }}>
          mdbahrulilmi.my.id
        </div>
        <div>
          <h1 style={{ fontSize: "64px", color: "#ffffff", margin: 0 }}>
            Muhammad Bahrul Ilmi
          </h1>
          <p style={{ fontSize: "36px", color: "#94a3b8", margin: "12px 0 0 0" }}>
            Fullstack &amp; Backend Developer
          </p>
        </div>
        <div style={{ display: "flex", gap: "16px" }}>
          {["Next.js", "React", "TypeScript", "Node.js"].map((tech) => (
            <div
              key={tech}
              style={{
                backgroundColor: "#1e293b",
                color: "#e2e8f0",
                padding: "8px 20px",
                borderRadius: "8px",
                fontSize: "20px",
                border: "1px solid #334155",
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}