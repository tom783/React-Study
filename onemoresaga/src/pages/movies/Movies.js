import React from "react";
import BaseTemplate from "components/base/templates/BaseTemplate";
import HeaderComponent from "components/base/header";
import MoivesContainer from "containers/movies";

const Movies = () => {
  return (
    <BaseTemplate header={<HeaderComponent />} content={<MoivesContainer />}>
      <div>Moives</div>
    </BaseTemplate>
  );
};

export default Movies;
