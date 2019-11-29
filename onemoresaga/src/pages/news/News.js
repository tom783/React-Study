import React from "react";
import BaseTemplate from "components/base/templates/BaseTemplate";
import HeaderComponent from "components/base/header";
import NewsContainer from "containers/news";

const News = () => {
  return (
    <BaseTemplate header={<HeaderComponent />} content={<NewsContainer />}>
      <div>News</div>
    </BaseTemplate>
  );
};

export default News;
