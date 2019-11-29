import React from "react";
import BaseTemplate from "components/base/templates/BaseTemplate";
import HeaderComponent from "components/base/header";
import PlaceContainer from "containers/place";

const Place = () => {
  return (
    <BaseTemplate header={<HeaderComponent />} content={<PlaceContainer />}>
      <div>Place</div>
    </BaseTemplate>
  );
};

export default Place;
