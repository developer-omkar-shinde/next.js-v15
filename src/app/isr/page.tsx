/* eslint-disable @typescript-eslint/no-explicit-any */
import PageContainer from "@/layouts/PageContainer";
import PageLayout from "@/layouts/PageLayout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "ISR – Incremental Static Regeneration",
};

export const revalidate = 60; // ⏱️ Regenerate every 60 seconds (file lavel)

const page = async () => {
  const res = await fetch("https://dummyjson.com/users", {
    next: { revalidate: 60 }, // ✅ Enables ISR
  });

  const data = await res.json();

  return (
    <PageLayout>
      <PageContainer paddingTopBottom={1}>
        <h2>ISR – Incremental Static Regeneration</h2>
        <p>
          ISR is a hybrid of SSG + SSR. It allows pages to be statically
          generated but revalidated in the background after a specific time.
        </p>
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">User List</h1>
          <ul className="space-y-2">
            {data.users.map((user: any) => (
              <li key={user.id} className="border p-2 rounded shadow">
                <strong>
                  {user.firstName} {user.lastName}
                </strong>{" "}
                - {user.email}
              </li>
            ))}
          </ul>
        </div>
      </PageContainer>
    </PageLayout>
  );
};

export default page;
