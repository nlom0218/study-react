import React, { useState } from 'react';
import Hedaer from '../components/Header';

const Count = () => {
  const [num, setNum] = useState(0)
  const onClickPlusBtn = () => { setNum(num + 1) }
  const onClickMinusBtn = () => { setNum(num - 1) }
  const onClickResetBtn = () => { setNum(0) }
  return (<div>
    <Hedaer />
    <div>카운팅 된 숫자: {num}</div>
    <button onClick={onClickPlusBtn}>숫자 올리기 +</button>
    <button onClick={onClickMinusBtn}>숫자 내리기 -</button>
    <button onClick={onClickResetBtn}>초기화!</button>
  </div>);
}

export default Count;