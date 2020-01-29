import React from 'react';
import styled from 'styled-components';

import {sideImgCheck} from 'lib/util';
/**
 * 
 * @param {*} props 
 * 
 * compoConfig = {
  content: [
    {
      type: 'input:type || select:name',
      img: 'home || person || pin || mail || key || check',
      title: 'string',
      selectOption: ['string'],
      selectOption1: ['string'],
      ft: int,
      btn: {
        is: true || false,
        width: int,
        height: int,
        color: 'string',
        bg: 'string',
        ft: int
        text: 'string',
      },
      tooltip: {
        is: true || false,
        type: 'under || tooltip',
        text: 'string',
        color: 'string',
        ft: int
      }
    },
  ]
}
 */


function TxtInput(props) {
    const {content, baseStyle} = props;
    return (
        <Styled.TxtWrap>
        {
            content && content.map((i, index) => {
                return(
                    <Styled.TxtRow className="row" {...i} {...baseStyle} sideImgCheck={() => sideImgCheck(content.length, i, baseStyle.sideImgGap)}>
                    {i.type.startsWith('input:') ? 
                    (
                        <>
                        <Styled.Title className="inputTitle" {...baseStyle}>
                            <label for={"input"+index}>
                                {i.title}
                            </label>
                        </Styled.Title>
                        <Styled.Input baseStyle={baseStyle} {...i} >
                            <input id={"input"+index} type={i.type.replace(/input:/g, '')} />
                        </Styled.Input>
                        {
                            i.btn && i.btn.is ?
                            (
                            <Styled.Btn {...i.btn}>{i.btn.text}</Styled.Btn>
                            )
                            :
                            ''
                        }
                        </>
                    )
                     :
                    (
                        <>
                        <Styled.Title className="inputTitle" {...baseStyle}>
                            {i.title}
                        </Styled.Title>
                        <Styled.Select {...i} baseStyle={baseStyle} >
                            <select name={i.type.replace(/select:/g,'')}>
                                {i.selectOption && i.selectOption.map((opt, index) => {
                                    return(
                                        index === 0 ?
                                        <option value="" key={index}>{opt}</option> 
                                        : 
                                        <option value="opt" key={index}>
                                            {opt}
                                        </option>
                                    )
                                })}
                            </select>
                        </Styled.Select>
                        </>
                    )}
                    </Styled.TxtRow>
                )
            })
        }
        </Styled.TxtWrap>
    );
}


const base = {
    btnGap: 5,
    inputPadding: 15
}

const Styled = {
    TxtWrap: styled.div`
    
    `,
    TxtRow: styled.div`
        height: ${props => props.height}px;
        line-height: ${props => props.height}px;
        & + &{
            margin-top: ${props => props.inputGap}px;
        }
        font-size: ${props => props.ft}px;
        ${props => props.sideImgCheck()}
    `,
    Title: styled.div`
        position: relative;
        display: inline-block;
        height: 100%;
        width: ${props => props.contTitleWidth}px;
        & label{
            display: block;
            width: 100%;
            height: 100%;
        }
    `,
    Input: styled.div`
        display: inline-block;
        width: ${props => props.btn && props.btn.is ? 
            (props.baseStyle.contFullWidth - props.baseStyle.contTitleWidth - props.btn.width - base.btnGap)
            :
            (props.baseStyle.contFullWidth - props.baseStyle.contTitleWidth)
        }px;
        height: 100%;

        & input{
            display: block;
            width: 100%;
            height: 100%;
            font-size: inherit;
            padding-left: ${base.inputPadding}px;
        }
    `,
    Btn: styled.button`
        display:inline-block;
        height: 100%;
        width: ${props => props.width}px;
        color: ${props => props.color};
        background-color: ${props => props.bg};
        font-size: ${props => props.ft}px;
        vertical-align: middle;
        cursor: pointer;
        border: none;
        margin-left: ${base.btnGap}px;
        &:focus{
            outline: none;
        }
    `,
    Select: styled.div`
        display: inline-block;
        width: ${props => {
            return (props.baseStyle.contFullWidth - props.baseStyle.contTitleWidth) /
            Object.keys(props).filter(item => {
            return /selectOption/g.test(item);
            }).length
        }}px;
        height: 100%;
        & select{
            display: block;
            width: 100%;
            height: 100%;
        }
    `,

}

export default TxtInput;