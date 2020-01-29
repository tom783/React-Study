import React, {useState} from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {useImmer} from 'use-immer';

function Header(props) {
    const {navList} = props;
    
    return (
        <Styled.Wrap {...props}>
            <Styled.NavList {...props} length={navList.length}>
                {
                    navList.map(item => (
                        <li>
                            <Link to={item.href}>{item.text}</Link>
                        </li>
                    ))
                }
            </Styled.NavList>
        </Styled.Wrap>
    );
}

const Styled = {
    Wrap: styled.div`
        position: fixed;
        width: 100%;
        height: ${props => props.headerHeight}px;
        top: 0;
        left: 0;
    `,
    NavList: styled.ul`
        height: 100%;
        &:after{
            content: '';
            display: block;
            clear: both;
        }    
        li{
            float: left;
            height: 100%;
            width: ${props => `calc(100% / ${props.length});`}
            
            a{
                display: block;
                height: ${props => props.headerHeight}px;
                line-height: ${props => props.headerHeight}px;
                text-align: center;
            }
        }
    `,

}

export default Header;