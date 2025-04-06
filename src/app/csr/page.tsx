/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import PageContainer from "@/layouts/PageContainer";
import PageLayout from "@/layouts/PageLayout";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [data, setData] = useState<any>("");

  useEffect(() => {
    (async () => {
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      setData(data);
    })();
  }, []);

  useEffect(() => {
    document.title = "CSR – Client Side Rendring";
  });

  return (
    <PageLayout>
      <PageContainer paddingTopBottom={1}>
        <h2>CSR - Client-Side Renderin</h2>
        <p>
          Client-Side Rendering means the page is rendered entirely in the
          browser using JavaScript. The server sends a minimal HTML shell, and
          then JavaScript takes over to render content dynamically.
        </p>
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">User List</h1>
          <ul className="space-y-2">
            {data &&
              data?.users.map((user: any) => (
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

export default Page;
