import React from 'react';

import {LoadingScreen} from 'components/base/helpers/loading';


function UiTest(props) {
    return (
        <div style={{height: '100vh'}}>
            <LoadingScreen visible={true} />
        </div>
    );
}

export default UiTest;