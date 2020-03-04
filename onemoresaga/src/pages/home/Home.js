import React from "react";
import BaseTemplate from "components/base/templates/BaseTemplate";
import HeaderContainer from "containers/base/HeaderContainer";
import HomeContainer from "containers/home";
import FooterContainer from "containers/base/FooterContainer";
import { InputSignup} from "components/common/input/StyledInput";

const Home = () => {
  const onChange = e => {
    console.log(e.target);
  };

  return (
    <BaseTemplate
      header={<HeaderContainer />}
      content={<HomeContainer />}
      footer={<FooterContainer />}
    >
      <div>Home</div>
      {/* <InputSignup label="업체명" name="store" onChange={onChange} />
      <InputSignup label="이름" name="nickName" onChange={onChange} />
      <InputSignup label="지역" name="area" onChange={onChange} /> */}
    </BaseTemplate>
  );
};

export default Home;
