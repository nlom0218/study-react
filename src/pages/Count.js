import React, { useState } from 'react';
import Hedaer from '../components/Header';

const Count = () => {
  const [num, setNum] = useState(0)
  // 1. react에서 useState를 불러온 뒤 num이라는 변수명과 num를 변경시키는 함수 setNum를 선언합니다.
  //    useState의 기본 패턴은 const [변수, set변수] = useState(초기값)입니다.
  //    초기값으로는 Array, Object, String, Boolean, Number모두 사용가능합니다.

  const onClickPlusBtn = () => { setNum(num + 1) }
  const onClickMinusBtn = () => { setNum(num - 1) }
  const onClickResetBtn = () => { setNum(0) }
  // 4. 버튼에 연결되어 있는 함수들입니다. 함수가 호출이 되면 setNum()함수가 실행이 됩니다.
  //    setNum(num + 1): 현재 num에 1을 더한 숫자로 num를 변경해라.
  //    setNum(num - 1): 현재 num에 1을 뺀 숫자로 num를 변경해라.
  //    setNum(0): num를 0으로 변경해라.

  return (<div>
    <Hedaer />
    <div>카운팅 된 숫자: {num}</div>
    {/* 2. 카운팅 된 숫자를 보기 위해 위와 같이 작성합니다. react의 jsx영역에 변수를 사용하기 위해서는 중가로안에 변수를 넣어야 합니다. */}
    <button onClick={onClickPlusBtn}>숫자 올리기 +</button>
    <button onClick={onClickMinusBtn}>숫자 내리기 -</button>
    <button onClick={onClickResetBtn}>초기화!</button>
    {/* 3. 숫자 올리기, 숫자 내기리, 초기화 버튼입니다. 각각의 버튼에 onClick함수를 적용하여 각각의 버튼을 누를 때 마다 실행되는 함수를 다르게 설정합니다. */}
  </div>);
}

export default Count;