"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function UserModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const { id } = React.use(params);

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "400px",
        height: "300px",
        background: "white",
        padding: 20,
        boxShadow: "0 0 20px rgba(0,0,0,0.3)",
        zIndex: 9999,
      }}
    >
      <button
        style={{ textAlign: "end", cursor: "pointer" }}
        onClick={() => router.back()}
      >
        Close
      </button>
      <br />
      <br />
      <br />
      <h3>User ID: {id}</h3>
      <p>This is the intercepted modal</p>
    </div>
  );
}
