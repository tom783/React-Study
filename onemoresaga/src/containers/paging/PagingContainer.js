import React , { useEffect } from 'react';
import {useImmer} from 'use-immer';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';
import Pagination from "react-js-pagination";
import axios from 'axios';
// import { useDidUpdateEffect } from 'lib/utils'
// import cx from 'classnames';
// import { useSelector } from 'react-redux';


const limit = (count, page) => `limit=${count}&offset=${page ? page * count : 0}`
const apiAddress = `https://conduit.productionready.io/api/articles`;
const Acx = config => {
  console.log(`=======ajax=======`);
  console.log(config);
  return axios(config).catch(err=>({error:err}))
};

const initialState={
  list:[],
  pagingData:{
    page:1,
    total:10,
  }
}

function PagingContainer(props) {
  const WithPatination = withRouter(Paging);
  const [values,setValues] = useImmer(initialState);
  const pagingData = values.pagingData;

  // NOTE: paging click
  const handlePageChange = async config=>{
    const page = config;
    const {data,error} = await Acx({url:`${apiAddress}/?${limit(5,page)}`});
    if(data && !error){
      setValues(draft=>{
        draft.pagingData.page = page;
        draft.list = data.articles
      });
      props.history.push(`/news/${config}`);
    }
  }

  // NOTE: url change
  useEffect(async () => {
    const page = props.match.params.list;
    const {data,error} = await Acx({url:`${apiAddress}/?${limit(5,page)}`});
    if(data && !error){
      setValues(draft=>{
        draft.pagingData.page = page;
        draft.list = data.articles
      });
    }
  }, [props.match.params.list]);

  // NOTE: 초기
  useEffect( () => {
    const page = props.match.params.list;
    const {data,error} =  Acx({url:`${apiAddress}/?${limit(5,page)}`});
    if(data && !error){
      setValues(draft=>{
        draft.pagingData.page = page;
        draft.list = data.articles
      });
    }
  }, []);



  return (
    <Styled.PageNationComponent>
      <div className="box">
        {values.list.map((item,idx)=>{
          return <div key={idx}>{item.title}</div>
        })}
      </div>
      <WithPatination  
        page={parseInt(pagingData.page)}
        total={pagingData.total}
        onChange={handlePageChange}
        countPerPage={1}
        getPageUrl={(i) => `/news/${i}`}
      />
    </Styled.PageNationComponent>
  );
}

function Paging({
  page = 1,
  total = 1,
  onChange = () => {},
  getPageUrl = () => {},
  countPerPage = 10,
  pageLen = 5,
}){
  return (
    <Styled.Pagination>
      {/* {pageList} */}
      <Pagination
        activePage={page}
        totalItemsCount={total}
        onChange={onChange}
    
        itemsCountPerPage={countPerPage}
        pageRangeDisplayed={pageLen}

        getPageUrl={getPageUrl}

        innerClass="pagination"
        activeLinkClass="active"
    
        // firstPageText={<span className="page__list"><span className="txt">first</span></span>}
        prevPageText={<span className="page__list"><span className="txt">prev</span></span>}
        nextPageText={<span className="page__list"><span className="txt">next</span></span>}
        // lastPageText={<span className="page__list"><span className="txt">last</span></span>}
      />

    </Styled.Pagination>
  )
}

const Styled = {
  PageNationComponent:styled.div`
    .box{
      margin-bottom:50px;
    }
  `,
  Pagination:styled.div`
    & >{
      .pagination li{
        float:left;
        &.active{
          font-weight:bold;
        }
      }
      .pagination a{
        display:inline-block;
        padding:5px;
        border:1px solid #ececec;
        &:hover{
          background:#ececec;
        }
      }
      
    }
  `
}

  // const {info} = props;
  
  // let pageList=[];
  // for(let i =info.startPage; i <= info.endPage; i++){
  //   pageList.push(
  //     <span key={i} className={}>
  //       {i}
  //     </span>
  //   )
  // }

export default withRouter(PagingContainer);