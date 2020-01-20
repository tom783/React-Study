import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";


/**
 * 
 * @param {*} btnConfig 
 * btnConfig => {
 *  useChildKey: ["key1", "key2"], string type // 나열할 순서대로
 *  _style: {
 *      width: int,
 *      height: int,
 *      gap: int,
*       shape: "circle" || "quadrangle",
        bgColor: {
            label: #abab string,
            key1: #ffff string,
            key2: #0000 string
        }, 
        direction: "right" || "left" || "up" || "down" || "moveUp" || "moveDown || "moveRight" || "moveLeft",
        duration: int,
        disabled: [], array type
 *  },
    labelCont: {
        cont: "img: path string" || "text:string",
        effect: "ro" ,
    },
    content: {
        key1: "img:path string" || "text:string",
        key2: "img:path string" || "text:string"
    }, // img와 text로 prefix
    childUrl: {
        key1: url string,
        key2: url string
    },

 * }
 */
function ToggleBtnG(btnConfig) {
    const [click, setClass] = useState(false);
    const {useChildKey, _style, labelCont, content, childUrl} = btnConfig;
    return (
        <Styled.Wrap {...btnConfig}>
            <Styled.Label {...btnConfig} onClick={()=>setClass(!click)} className={click? 'active' : ''}>
                {labelCont.cont.startsWith('img:') ? 
                <img src={labelCont.cont.replace(/img:/g, '')} /> : 
                <span>{labelCont.cont.replace(/text:/g, '')}</span>}
            </Styled.Label>
            <Styled.ListChild {...btnConfig} className={click? 'active' : ''} setCss = {setCss(btnConfig)}>
                {useChildKey.map((item, index) => {
                    return (
                        <Styled.ListItem {...btnConfig} item={item} key={useChildKey[index]} 
                        className={_style.disabled.find(i => i===item) ? 'disabled' : ''} >
                        <a href={childUrl[item]}>
                            {content[item].startsWith('img:') ? 
                            <img src={content[item].replace(/img:/g, '')} /> : 
                            <span>{content[item].replace(/text:/g, '')}</span>}
                        </a>
                        </Styled.ListItem>
                    )
                    })}
            </Styled.ListChild>
        </Styled.Wrap>
    );
}

const setCss = props => {
    console.log(props);
        let css='';
        for(let i = 1; i < props.useChildKey.length+1; i ++){
            if(props._style.direction === "moveRight" || props._style.direction === "moveLeft"){
                css += `
                & > li:nth-child(${i}){
                    transform: ${props._style.direction === "moveRight"?
                    `translateX(${props._style.width * i + props._style.gap * i}px); margin-left: ${props._style.gap}px` : 
                    `translateX(-${props._style.width * i + props._style.gap * i}px); margin-right: ${props._style.gap}px`}
                }
            `
            }else {
                css += `
                & > li:nth-child(${i}){
                    transform: ${props._style.direction === "moveDown"?
                    `translateY(${props._style.height * i + props._style.gap * i}px); margin-top: ${props._style.gap}px` : 
                    `translateY(-${props._style.height * i + props._style.gap * i}px); margin-bottom: ${props._style.gap}px`}
                }
            `
            }
        }
        
        return css;
}


const Styled = {
    Wrap: styled.div`
        position: relative;
        display: inline-block;
        width: ${props => props._style.width}px;;
    `,
    Label: styled.div`
        display: block;
        position: relative;
        z-index: 11;
        width: ${props => props._style.width}px;
        height: ${props => props._style.height}px;
        line-height: ${props => props._style.height}px;
        margin: 0 auto;
        text-align: center;
        background-color: ${props => props._style.bgColor.label};
        transition: transform ${props => props._style.duration}s ease;
        ${props => props._style.shape === "circle" ? 
            `border-radius: 50%; overflow: hidden;` : `border-radius: 0%`
        }
        cursor: pointer;
        & > img, span{
            display: block;
            width: 100%;
            height: 100%; 
         }

        ${props => {
            if(props.labelCont.effect === 'ro'){
                return (
                    `&.active {
                        transform: rotate(45deg);
                    }
                    `
                )
            }
        }}

    `,
    ListChild: styled.ul`
        position: absolute;
        margin: 0 auto;
        width: ${props => (props._style.direction === "moveRight" || props._style.direction === "moveLeft")?
         "auto": `${props._style.width}px;`}
        z-index: -1;
        opacity: 0;
        overflow: hidden;
        transition: all ${props => props._style.duration}s ease-out;
        ${props => {
            if(props._style.direction === "down" || props._style.direction === "up"){
                return (
                    `${props._style.direction === "down"? 
                    "top" : "bottom"}: ${props._style.height}px;
                    height: 0;
                    & > li{
                        ${props._style.direction === "down"? 
                        "margin-top" : "margin-bottom"}: ${props._style.gap ? props._style.gap : 0}px;
                    }
                    &.active {
                        opacity: 1;
                        height: ${props.useChildKey.length * (props._style.height + props._style.gap)}px;
                    }
                    `
                )
            }else if(props._style.direction === "right" || props._style.direction === "left"){
                return (
                    `top: ${props._style.height}px;
                    height: ${props.useChildKey.length * (props._style.height + props._style.gap)}px;
                    ${props._style.direction === "right"? "left" : "right"}: -100%;
                    & > li{
                        margin-top: ${props._style.gap ? props._style.gap : 0}px;
                    }
                    &.active {
                        opacity: 1;
                        ${props._style.direction === "right"? "left" : "right"}: 0;
                    }
                    `
                )
            }else if(props._style.direction === "moveDown" || props._style.direction === "moveUp" || props._style.direction === "moveLeft" || props._style.direction === "moveRight"){
                return (
                    `height: ${props._style.height}px;
                    top: 0;
                    left: 0px;
                    opacity: 1;
                    overflow: visible;
                    & > li{
                        position: absolute;
                        left: 0;
                        transition: all ${props._style.duration}s ease-out;
                    }
                    &.active {
                        ${props.setCss}
                        z-index: 0;
                    }
                    `
                )
            }
        }}

        
    `,
    ListItem: styled.li`
        position: relative;
        display: block;
        width: ${props => props._style.width}px;
        height: ${props => props._style.height}px;
        line-height: ${props => props._style.height}px;
        ${props => props._style.shape === "circle" ? 
            `border-radius: 50%; overflow: hidden;` : `border-radius: 0%`
        }
        text-align: center;
        border: 1px solid #ddd;
        
        background-color: ${props => props._style.bgColor[props.item] ? 
            props._style.bgColor[props.item] : "#fff"}
        & > a{
            display: block;
            width: 100%;
            height: 100%;
            text-decoration: none;
            & > img, span{
               display: block;
               width: 100%;
               height: 100%; 
            }
        }
        &.disabled {
            &:after{
                content: '';
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                ${props => props._style.shape === "circle" ? 
                    `border-radius: 50%; overflow: hidden;` : `border-radius: 0%`
                }
                background-color: #ddd;
                opacity: 0.6;
            }
            & > a{
                pointer-events: none;
            }
        }
    `,


}

export default ToggleBtnG;