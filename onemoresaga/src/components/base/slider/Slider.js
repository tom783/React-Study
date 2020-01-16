import React, { useState, useEffect } from "react";
import styled from "styled-components";

/**
 *
 * @param {*} sliderConfig
 *  sliderConfig => {
 *      _style: {
 *          wrapPadding: int,
 *          sliderWidth: int,
 *          sliderHeight: int,
 *          sliderItemGap: int,
 *          carouselPadding: int,
 *          carouselWidth: int,
 *          carouselHeight: int,
 *          carouselItemGap: int,
 *          carouselItemShape: "circle" || "quadrangle",
 *          arrowWidth: int,
 *          arrowHeight: int,
 *      },
 *      content: {
 *          slider: ["img:path string" || "text:string"],
 *          carousel: "img:path string" || "text:number||text:alpha",
 *          arrowPrev: "img:path string" || "text:string",
 *          arrowNext: "img:path string" || "text:string",
 *      },
 *      effect: {
 *          duration: int,
 *          acceleration: "ease" || "ease-in" || "ease-out" || ...etc,
 *      },
 *      useComponent: boolean,
 *
 * }
 */

function Slider(sliderConfig) {
  const { _style, content, effect, useComponent, children } = sliderConfig;
  const targetCont = useComponent && children ? children : content.slider;
  const [viewSlider, setViewSlider] = useState(0);
  const [movePx, setMovePx] = useState(0);

  const slideBtn = (viewSlider, setViewSlider, setMovePx, length, arrow) => {
    if (arrow === "prev") {
      viewSlider = viewSlider - 1 < 0 ? length - 1 : viewSlider - 1;
      setViewSlider(viewSlider);
      setMovePx(viewSlider % length);
    } else {
      console.log(viewSlider, length -1);
      viewSlider = viewSlider + 1 > length - 1 ? 0 : (viewSlider + 1);
      console.log(viewSlider);
      setViewSlider(viewSlider);
      setMovePx(viewSlider % length);
    }
  };

  const carouselBtn = (viewSlider, setViewSlider, setMovePx, length, e) => {
    e.preventDefault();
    const prevView = viewSlider;
    setViewSlider(e.target.dataset.index);
    setMovePx(e.target.dataset.index % length);
  };

  return (
    <Styled.SliderWrap {...sliderConfig}>
      <div className="sliderCont">
        <Styled.SliderBox {...sliderConfig} movePx={movePx}>
          <ul>
            {useComponent && children
              ? 
              children.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })
              : 
              content.slider.map((item, index) => {
                  return (
                    <li key={index}>
                      <a href="#">
                        {item.startsWith("img:") ? (
                          <img src={item.replace(/img:/g, "")} />
                        ) : (
                          <span>{item.replace(/text:/g, "")}</span>
                        )}
                      </a>
                    </li>
                  );
                })}
          </ul>
        </Styled.SliderBox>
        <Styled.SliderArrow {...sliderConfig}>
          <button
            className="prev"
            onClick={() =>
              slideBtn(
                viewSlider,
                setViewSlider,
                setMovePx,
                content.slider.length,
                "prev"
              )
            }
          >
            prev</button>
          <button
            className="next"
            onClick={() =>
              slideBtn(
                viewSlider,
                setViewSlider,
                setMovePx,
                content.slider.length,
                "next"
              )
            }
          >
            next
          </button>
        </Styled.SliderArrow>
      </div>
      <Styled.SliderCarousel {...sliderConfig}>
        {targetCont.map((item, index) => {
              return (
                <li key={index}>
                  <a href="#" data-index={index}
                    onClick={(e) =>
                      carouselBtn(
                        viewSlider,
                        setViewSlider,
                        setMovePx,
                        content.slider.length,
                        e
                      )
                    }>
                    {content.carousel.startsWith("img:") ? (
                      <span>{index}</span>
                    ) : content.carousel.replace(/text:/g, "") === "number" ? (
                      index + 1
                    ) : content.carousel.replace(/text:/g, "") === "alpha" ? (
                      String.fromCharCode(97 + index)
                    ) : ""
                    }
                  </a>
                </li>
              );
            })}
      </Styled.SliderCarousel>
    </Styled.SliderWrap>
  );
}

const Styled = {
  SliderWrap: styled.div`
    position: relative;
    display: inline-block;
    padding: ${props => props._style.wrapPadding}px
      ${props => props._style.arrowWidth}px;
    & > div.sliderCont {
      display: inline-block;
      position: relative;
    }
  `,
  SliderBox: styled.div`
    position: relative;
    width: ${props =>
      props._style.sliderWidth + props._style.sliderItemGap * 2}px;
    height: ${props => props._style.sliderHeight}px;
    overflow: hidden;

    & > ul {
      position: absolute;
      width: ${props => {
        var length =
          props.useComponent && props.children
            ? props.children.length
            : props.content.slider.length;
        return (
          length * (props._style.sliderWidth + props._style.sliderItemGap * 2)
        );
      }}px;
      height: ${props => props._style.sliderHeight}px;
      transition: left ${props => props.effect.duration}s
        ${props => props.effect.acceleration};
      left: -${props => props.movePx * 100}%;
      &:after {
        content: "";
        display: block;
        clear: both;
      }
      & > li {
        float: left;
        width: ${props => props._style.sliderWidth}px;
        height: ${props => props._style.sliderHeight}px;
        padding: 0 ${props => props._style.sliderItemGap}px;

        & > a {
          display: block;
          width: 100%;
          height: 100%;

          & > img,
          span {
            display: block;
            width: 100%;
            height: 100%;
            text-align: center;
            line-height: ${props => props._style.sliderHeight}px;
          }
        }
      }
    }
  `,
  SliderArrow: styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    & > button {
      position: absolute;
      transform: translateY(-50%);
      width: ${props => props._style.arrowWidth}px;
      height: ${props => props._style.arrowHeight}px;
      border: none;
      background-color: transparent;
      cursor: pointer;
      &.prev {
        left: 50%;
        margin-left: -${props => props._style.sliderWidth / 2 + props._style.sliderItemGap + props._style.arrowWidth}px;
      }
      &.next {
        right: 50%;
        margin-right: -${props => props._style.sliderWidth / 2 + props._style.sliderItemGap + props._style.arrowWidth}px;
      }
    }
  `,
  SliderCarousel: styled.ul`
        text-align: center;
        margin-top: ${props => props._style.carouselPadding}px;
        & > li{
            display: inline-block;
            & > a{
                display: block;
                width: ${props => props._style.carouselWidth}px;
                height: ${props => props._style.carouselHeight}px;
                border: 1px solid #0f0f;
                text-decoration: none;
                overflow: hidden;
                ${props => {
                  if (props._style.carouselItemShape === "circle") {
                    return "border-radius: 50%";
                  } else if (props._style.carouselItemShape === "quadrangle") {
                    return "";
                  }
                }}
                & > span{
                    display: block;
                    width: 100%;
                    height: 100%;
                    background: url('${props =>
                      props.content.carousel.replace(
                        /img:/g,
                        ""
                      )}') no-repeat center;
                    background-size: cover;
                    text-indent: -9999px;
                }
            }
        }

        & > li + li{
            margin-left: ${props => props._style.carouselItemGap}px;
        }
    `
};

export default Slider;
