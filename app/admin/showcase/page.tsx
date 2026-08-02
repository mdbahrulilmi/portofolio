"use client";

import { useState } from "react";

export default function AdminShowcase() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function save() {
    await fetch("/api/showcase", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        filename: "ecommerce.mdx",
        title,
        description,
      }),
    });

    alert("Berhasil");
  }

  return (
    <>
      <input
        placeholder="Judul"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Deskripsi"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={save}>Save</button>
    </>
  );
}