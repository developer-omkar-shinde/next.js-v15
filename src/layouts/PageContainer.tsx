import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  paddingTopBottom?: number;
}

const PageContainer = (props: ContainerProps) => {
  return (
    <div
      className="page-container"
      style={{ padding: `${props.paddingTopBottom || 0}rem 0` }}
    >
      {props.children}
    </div>
  );
};

export default PageContainer;
