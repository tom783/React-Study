import React from 'react';
import styled from 'styled-components';
import {LoadingCircle} from 'components/base/helpers/loading';
import {_color} from 'styles/_common';

function LoadingScreen(props) {
    const {visible} = props;
    if(visible === false) return null;
    
    return (
        <Styled.ScreenCenter>
            <div className="itemCenter">
                <LoadingCircle circleSize={100} sec={2} linear={"linear"} />
            </div>    
        </Styled.ScreenCenter>
    );
}

const Styled = {
    ScreenCenter: styled.div`
        position: relative;
        width: 100%;
        height: 100%;
        background-color: ${_color.gray_bg};
        .itemCenter{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    `,
}

export default LoadingScreen;