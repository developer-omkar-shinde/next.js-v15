/* eslint-disable @typescript-eslint/no-explicit-any */
import UsersList from "@/components/usersList/UsersList";
import PageContainer from "@/layouts/PageContainer";
import PageLayout from "@/layouts/PageLayout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "SSG – Static Site Generation",
};

const page = async () => {
  const res = await fetch("https://dummyjson.com/users", {
    cache: "force-cache", // this api will call only on build time
  });

  const data = await res.json();

  return (
    <PageLayout>
      <PageContainer paddingTopBottom={1}>
        <h2>SSG – Static Site Generation</h2>
        <p>
          Static Site Generation means the HTML is generated at build time and
          reused for every user. (calls api only on build time)
        </p>
        <UsersList data={data} />
      </PageContainer>
    </PageLayout>
  );
};

export default page;
