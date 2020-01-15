import React from 'react';

const BaseTemplate = ({ children, header, content, footer }) => {
  return (
    <>
      {header && <header>{header}</header>}
      <main>
        {children}
        {content && <div>{content}</div>}
      </main>
      {footer && <footer>{footer}</footer>}
    </>
  );
};

export default BaseTemplate;