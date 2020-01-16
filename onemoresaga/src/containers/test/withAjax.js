import React from 'react';
import { connect } from 'react-redux';


function withAjax(props) {
    return function(Component){
        return <Component />
    }
}

export default connect(({getApi}) => ({
    getApiReducer: getApi
}))(withAjax);
