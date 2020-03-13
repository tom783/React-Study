import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom'
import {PagingContainer} from 'containers/paging'
import styled from 'styled-components';
import {SVG} from 'style/img';

import 'codemirror/lib/codemirror.css';
import 'tui-editor/dist/tui-editor.min.css';
import 'tui-editor/dist/tui-editor-contents.min.css';
import Editor from 'tui-editor';
// import { Editor } from '@toast-ui/react-editor'
const NewsContainer = props => {
  let editorToast = null;
  const [value, setValue] = useState({
    tab: "1",
    lenderFirst: true,
  });
  const [editor, setEditor] = useState('');

  const changeTab = e => {
    console.log("CLICK", e.target.dataset.tab);
    const targetTab = e.target.dataset.tab;
    
    setValue({
      tab: targetTab
    });
  }

  // toast editor test function
  const test = e => {
    const setLength = 10;
    console.log("TEST", editor);
    console.log("TEST@#", editor.getUI().getToolbar());
    // editor.eventManager.addEventType('change');
    editor.eventManager.listen('change', function(){
      console.log("start change");
      console.log("!!!", editor.getValue());
      console.log("!!!", editor.getRange().endOffset);
      // editor.blur();
      // * 기호는 문자열 getValue에서 2자리로 나옴..
      if(editor.getRange().endOffset > setLength){
        console.log("FFFF over", editor.getValue());
        editor.setValue(editor.getValue().substring(0, setLength));
      }
    });
  }

  useEffect(() => {
    setEditor(new Editor({
        el: document.querySelector('#editSection'),
        initialEditType: 'wysiwyg', // 'markdown'
        previewStyle: 'vertical',
        height: '200px',
    }));

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

const styleConf = {
  width: "100px", 
  height: "100px"
}
const component1 = (
  <div>
      <img src={SVG} style={styleConf} />
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
      <button onClick={test}>test</button>
      <Cont id="editSection">
        {/* <Editor 
          height="600px"
          onChange={test}
          initialEditType="markdown"
          useCommandShortcut={true}
          exts={[
            {
              name: 'chart',
              minWidth: 100,
              maxWidth: 600,
              minHeight: 100,
              maxHeight: 300
            },
            'scrollSync',
            'colorSyntax',
            'uml',
            'mark',
            'table'
          ]}
          ref={editorRef}
        /> */}
        {/* {
          value.tab === "1"?
          component1
          :
          (
            value.tab === "2"?
            component2
            :
            null
          )
        } */}


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

  .te-toolbar-section{
    display:none;
  }
`

export default withRouter(NewsContainer);