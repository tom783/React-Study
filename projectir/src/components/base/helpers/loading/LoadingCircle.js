import React from 'react';
import styled from 'styled-components';
import {_color} from 'styles/_common';

function LoadingCircle(props) {

    return (
        <Styled.Wrap {...props}>
            
        </Styled.Wrap>
    );
}

const Styled = {
    Wrap: styled.div`
        width: ${props => props.circleSize}px;
        height: ${props => props.circleSize}px;
        animation: spin ${props => props.sec}s ${props => props.linear} infinite;
        border: 3px solid;
        border-radius: 50%;
        border-color: ${_color.orange} transparent transparent;
        background-color: white;
        @keyframes spin{
            100%{
                transform: rotate(360deg);
                filter: hue-rotate(360deg);
            }
        }
    `
}

export default LoadingCircle;