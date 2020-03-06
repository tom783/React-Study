import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom'
import {PagingContainer} from 'containers/paging'
import styled from 'styled-components';


const NewsContainer = props => {

  const [value, setValue] = useState({
    tab: "1",
    lenderFirst: true,
  });

  const changeTab = e => {
    console.log("CLICK", e.target.dataset.tab);
    const targetTab = e.target.dataset.tab;
    
    setValue({
      tab: targetTab
    });
  }
  
  useEffect(() => {
    if(value.lenderFirst){
      setValue({
        lenderFirst: false
      })
    }
  },[]);

  useEffect(() => {
    if(!value.lenderFirst){
      props.history.push(`/news/${value.tab}`);
    }
  }, [value.tab, value.lenderFirst]);

  useEffect(() => {
    console.log("url path", props.location.pathname);
    const path = props.location.pathname;
    if(path === '/news/1'){
      setValue({
        tab: "1"
      })
    }else if(path === '/news/2'){
      setValue({
        tab: "2"
      })
    }
  }, [props.location.pathname]);

  
const component1 = (
  <div>
      components1
  </div>
)


const component2 = (
  <div>
    components2
  </div>
)

  return (
    <Wrap>
      {/* <PagingContainer /> */}
      <TestNav>
        <h3>testNave</h3>
        <div className="link" data-tab="1" onClick={changeTab}>
          nav1
        </div>
        <div className="link" data-tab="2" onClick={changeTab}>
          nav2
        </div>
      </TestNav>

      <Cont>
        {
          value.tab === "1"?
          component1
          :
          (
            value.tab === "2"?
            component2
            :
            null
          )
        }
      </Cont>
    </Wrap>
  );
};


const Wrap = styled.div`
  display: grid;
  grid-template-columns: 25% auto;
`

const TestNav = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1;
  
  .link{
    cursor: pointer;
  }
`

const Cont = styled.div`
  grid-column: 2;
`

export default withRouter(NewsContainer);