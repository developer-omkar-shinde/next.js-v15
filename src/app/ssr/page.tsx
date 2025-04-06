/* eslint-disable @typescript-eslint/no-explicit-any */
import UsersList from "@/components/usersList/UsersList";
import PageContainer from "@/layouts/PageContainer";
import PageLayout from "@/layouts/PageLayout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "SSR – Server Side Rendring",
};

const page = async () => {
  const res = await fetch("https://dummyjson.com/users", {
    cache: "no-store", // no-store will
  });

  const data = await res.json();

  return (
    <PageLayout>
      <PageContainer paddingTopBottom={1}>
        <h2>SSR - Server Side Rendring</h2>
        <p>
          Server-Side Rendering means the HTML is generated on the server at
          request time for every request. (API call on every request)
        </p>
        <UsersList data={data} />
      </PageContainer>
    </PageLayout>
  );
};

export default page;
