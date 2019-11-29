import React from "react";
import BaseTemplate from "components/base/templates/BaseTemplate";
import HeaderComponent from "components/base/header";
import HomeContainer from "containers/home";

const Home = () => {
  return (
    <BaseTemplate header={<HeaderComponent />} content={<HomeContainer />}>
      <div>Home</div>
    </BaseTemplate>
  );
};

export default Home;
