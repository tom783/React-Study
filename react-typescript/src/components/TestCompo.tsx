import React, { MouseEvent, ChangeEvent, useState } from "react";
// import { RouteComponentProps } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { testAction, inputTestAction } from "../store/redux";
import { Actions } from "../store/actionCreator";

interface testProps {
  testProps: string;
}

type testInfo = {
  name: string;
  age: number;
};

// export default function TestCompo(props: testProps) {
//   const { testProps } = props;
//   return <div>{`test11   ${testProps}`}</div>;
// }

const TestCompo: React.FC<testProps> = function (props) {
  const { testProps } = props;
  const show = useSelector((state) => state);
  const [state, setState] = useState("");
  const [test, setTest] = useState<testProps>({
    testProps: "",
  });
  const [test2, setTest2] = useState<testInfo>({
    name: "",
    age: 0,
  });

  const dispatch = useDispatch();

  const testClick = (e: MouseEvent) => {
    console.log("click", e.target);
    // dispatch(testAction());
    Actions.testAction();
    console.log("store", show);
  };

  const testChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    console.log("input", target);
    setState(target.value);
    // Actions.inputTestAction({ value: target.value });
    dispatch(inputTestAction({ value: target.value }));
  };

  return (
    <>
      <div onClick={testClick}>{`test11   ${testProps}`}</div>
      <input type="text" onChange={testChange} value={state} />
    </>
  );
};

export default TestCompo;
