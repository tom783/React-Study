
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import cx from 'classnames';

function Slide(props) {

  const { list, config } = props;
  const [current, setCurrent] = useState(0);
  const isListArray = Array.isArray(list);
  const itemBoxRef = useRef(null);

  const handleClick = (idx) => {
    moveItem(idx)
  }
  const handleButtonClick = (idx) => {
    const buttonIdx = current + idx;
    const lastListIdx = list.length - 1;
    
    if (buttonIdx > lastListIdx) {
      setCurrent(0);
    }
    else if (buttonIdx < 0) {
      setCurrent(lastListIdx);
    } else {
      setCurrent(buttonIdx);
    }

  }

  const moveItem = (idx) => {
    setCurrent(idx)
  }

  const wrapperTransform = {
    'transform': `translateX(-${current * config.width}px)`
  }

  return (
    <Styled.Slide list={list} config={config}>
      <div className="slide">
        <button className="btn prev" onClick={() => handleButtonClick(-1)}>prev</button>
        <button className="btn next" onClick={() => handleButtonClick(1)}>next</button>

        <div className="item__box" ref={itemBoxRef} style={wrapperTransform}>
          {isListArray && list.map(item => {
            return <div key={item.id} className={cx('item', { active: item.id === current })}>
              <img src={item.src} alt="" className="item__img" />
            </div>
          })}
        </div>

        <div className="dot__box">
          {isListArray && list.map(item => {
            return <div key={item.id} className="dot" onClick={() => handleClick(item.id)}></div>
          })}
        </div>
      </div>

      <div className="img__box">
        {isListArray && list.map(item => {
          return <div key={item.id} className="img__piece" onClick={() => handleClick(item.id)}>
            <img src={item.src} alt="" className="img__piece_img" />
          </div>
        })}
      </div>

    </Styled.Slide>
  );
}



const Styled = {
  Slide: styled.div`
  .slide{
    position:relative;
    border:1px solid red;
    width:${({ config }) => config.width}px;
    height:${({ config }) => config.height}px;
    margin:auto;
    margin-top:500px;
    overflow:hidden; 
  }
    
    .btn{
      position:absolute;
      top:50%;
      transform:translateY(-50%);
      cursor: pointer;
      border:0;
      padding:5px;
      z-index:5;
      &.prev{
        left:5px;
      }
      &.next{
        right:5px;
      }
      &:hover{
        background:gray;
      }
    }
    .dot__box{
      position:absolute;
      bottom:10px;
      /* border:1px solid blue; */
      width:100%;
      text-align:center;
      z-index:10;
    }
    .dot{
      display:inline-block;
      width:10px;
      height:10px;
      border-radius:100%;
      background:red;
      margin-right:8px;
      &:last-child{
        margin-right:0;
      }
      cursor: pointer;
      &:hover{
        background:#a7a7a7
      }
    }

    .item__box{
      position:relative;
      transition:.5s;
      width:${props => (props.config.width * props.list.length) + props.list.length + 'px'};
      &:after{
        content:"";
        clear: both;
        display:block;
      }
      border:1px solid purple;
    }
    .item{
      float:left;
      width:${({ config }) => config.width}px;
      height:${({ config }) => config.height}px;
      transition:.3s;
      position:relative;
      &.active:after{
        background:transparent;
      }
      &:after{
        transition:.3s;
        content:"";
        position:absolute;
        left:0;
        top:0;
        width:100%;
        height:100%;
        background:#00000080;
      }

    }
    .item__img{
      width:100%;
      height:100%;
    }

    .img__box{
      text-align:center;
      margin-top:15px;
      &:after{
        content:"";
        clear: both;
        display:block;
      }
    }
    .img__piece{
      display:inline-block;
      width:100px;
      height:100px;
      cursor: pointer;
      margin-right:5px;
      &:last-child{
        margin-right:0;
      }
      &:hover{
        opacity:.5;
      }
    }
    .img__piece_img{
      width:100%;
      height:100%;
    }
  `
}

export default Slide;