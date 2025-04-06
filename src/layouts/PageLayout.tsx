import Header from "@/components/header/Header";
import React, { ReactNode, lazy } from "react";
const Footer = lazy(() => import("@/components/footer/Footer"));

interface AppLayoutProps {
  children: ReactNode;
}

const PageLayout = (props: AppLayoutProps) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default PageLayout;
