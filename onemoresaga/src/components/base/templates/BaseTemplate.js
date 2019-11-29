import React from "react";

const BaseTemplate = ({ children, header, content }) => {
  return (
    <>
      {header && <header>{header}</header>}
      <main>
        {children}
        {content && <div>{content}</div>}
      </main>
    </>
  );
};

export default BaseTemplate;
