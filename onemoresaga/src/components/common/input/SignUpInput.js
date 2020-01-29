import React,{useState} from 'react';
import styled from 'styled-components';

const Div = styled.div`

`
function Test(){
    return (
        <Div>
            Hello
        </Div>
    )
}

const TestWorld = styled(Test)`
    color:red
`

function SignUpInput(props) {
    const {onChange,label,name} = props;

    return (
        <div>
            <TestWorld />
            <label htmlFor={name}>{label}</label>
            <input 

                type="text"
                 onChange={onChange} 
                 name={name}/>
        </div>
    );
}




export default SignUpInput;