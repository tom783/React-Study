import React from "react";
import BaseTemplate from "components/base/templates/BaseTemplate";
import HeaderContainer from "containers/base/HeaderContainer";
import HomeContainer from "containers/home";
import FooterContainer from "containers/base/FooterContainer";

const Home = () => {
  return (
    <BaseTemplate
      header={<HeaderContainer />}
      content={<HomeContainer />}
      footer={<FooterContainer />}
    >
      <div>Home</div>
    </BaseTemplate>
  );
};

export default Home;
