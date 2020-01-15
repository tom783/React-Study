import React from 'react';
import { connect } from 'react-redux';
import ListTemplate from '../../components/base/templates/ListTemplate';

const WithContainer = (props) => {

    const {getApiReducer, containerKey, actionsF} = props;
    const searchF = query => {
        console.log(query);
        actionsF(query);
      };       
    const {[containerKey]: key} = getApiReducer;
    console.log("keke", key);
    return <ListTemplate keyF = {key} searchF = {searchF} />
};

export default connect(({getApi}) => ({
    getApiReducer: getApi
}))(WithContainer);