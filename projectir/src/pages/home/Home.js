import React from 'react';

import BaseTemplate from 'components/common/templates/BaseTemplate';
import HomeContainer from 'containers/home/HomeContainer';

function Home(props) {
    return (
        <BaseTemplate>
            <HomeContainer />
        </BaseTemplate>
    );
}

export default Home;