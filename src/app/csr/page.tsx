/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import UsersList from "@/components/usersList/UsersList";
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
        <UsersList data={data} />
      </PageContainer>
    </PageLayout>
  );
};

export default Page;
