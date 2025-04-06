import PageContainer from "@/layouts/PageContainer";
import React from "react";

const Footer = () => {
  return (
    <PageContainer>
      <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white text-center p-4 shadow">
        <p>All rights reserved @ {new Date().getFullYear()}</p>
      </footer>
    </PageContainer>
  );
};

export default Footer;
