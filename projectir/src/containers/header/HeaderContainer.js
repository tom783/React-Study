import React from 'react';

import {Header} from 'components/common/header';

function HeaderContainer(props) {
    const styleConf = {
        headerHeight: 80,
        navList: [
            {href: "/", text: "Home"},
            {href: "/info", text: "Info"},
            {href: "/products", text: "Products"}
        ]
    }

    return (
        <header style={{"paddingTop": `${styleConf.headerHeight}px`}}>
            <Header {...styleConf} />
        </header>
    );
}

export default HeaderContainer;