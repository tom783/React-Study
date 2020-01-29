import React from 'react';
import reset from 'styled-reset';
import {Switch, Route, Router} from 'react-router-dom';
import {createGlobalStyle} from 'styled-components';

import {
    Home,
    Info,
    Products,
    UiTest
} from 'pages';
import {Notfound} from 'components/base/helpers/error';

function App(props) {
    return (
        <>
            <Styled.GlobalStyles />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/info" component={Info} />
                <Route path="/products" component={Products} />
                <Route path="/test" component={UiTest} />
                <Route component={Notfound} />
            </Switch>
        </>
    );
}

const Styled = {
    GlobalStyles: createGlobalStyle`
        ${reset};
        a {
            text-decoration: none;
            color: inherit;
        }
        * {
            box-sizing: border-box !important;
        }
    `
}

export default App;