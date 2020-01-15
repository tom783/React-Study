import React from "react";
import BaseTemplate from "components/base/templates/BaseTemplate";
import HeaderContainer from "containers/base/HeaderContainer";
import FooterContainer from "containers/base/FooterContainer";
import MoivesContainer from "containers/movies";

const Movies = () => {
  return (
    <BaseTemplate
      header={<HeaderContainer />}
      content={<MoivesContainer />}
      footer={<FooterContainer />}
    >
      <div>Moives</div>
    </BaseTemplate>
  );
};

export default Movies;
