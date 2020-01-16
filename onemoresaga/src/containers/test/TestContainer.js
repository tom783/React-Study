import React from 'react';
import withAjax from './withAjax';
import { Actions } from "store/actionCreator";


function Hello(props) {
    return (
        <div>
            Hello
        </div>
    );
}

function TestContainer(props) {
    console.log('he')
    console.log(props) // data

    return (
        <div>
            TestContainer
            <div>
               {withAjax()(Hello)}
            </div>
        </div>
    );
}
export default TestContainer
// export default withAjax(TestContainer)(Actions.getMovie);

