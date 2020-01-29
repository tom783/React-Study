import React from 'react';
import FooterContainer from 'containers/footer/FooterContainer';
import HeaderContainer from 'containers/header/HeaderContainer';

const BaseTemplate = ({ children, header: Header, defaultOp=true, footer: Footer }) => {
  return (
    <>
      {!defaultOp && Header ? <Header /> : <HeaderContainer />}
      <main>
        {children}
      </main>
      {!defaultOp && Footer ? <Footer /> : <FooterContainer />}
    </>
  );
};

export default BaseTemplate;