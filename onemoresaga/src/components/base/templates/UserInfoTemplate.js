import React from 'react';
import styled from 'styled-components';
import produce from 'immer';


const baseStyle = {
    contFullWidth: 580,
    contTitleWidth: 130,
    inputGap: 30,
    sideImgGap: 6,
}

function UserInfoTemplate({children, _Input, config}) {
    return (
        <Styled.UserTemplateWrap baseStyle={baseStyle}>
            <Styled.UserTemplateBox baseStyle={baseStyle}>
                <Styled.Title>
                    {children}
                </Styled.Title>
                <Styled.Cont>
                    <_Input {...config} baseStyle={baseStyle}/>
                </Styled.Cont>
            </Styled.UserTemplateBox>
            
        </Styled.UserTemplateWrap>
    );
}

const Styled = {
    UserTemplateWrap: styled.div`
        display: table;
        height: calc(100vh - 48px);
        width: ${props => props.baseStyle.contFullWidth}px;
        margin: 0 auto;
    `,
    UserTemplateBox: styled.div`
        display: table-cell;
        vertical-align: middle;
        width: ${props => props.baseStyle.contFullWidth}px;
        margin: 0 auto;
        & .inputTitle{
            width: ${props => props.baseStyle.contTitleWidth}px;
        }
        & .row + .row{
            margin-top: ${props => props.baseStyle.inputGap}px;
        }
    `,
    Title: styled.div`
        position: relative;
        text-align: center;
        font-size: 30px;
        font-style: 'Noto Sans';
    `,
    Cont: styled.div`
        margin-top: 60px;
    `,
}

export default UserInfoTemplate;