import React from 'react';
import { Link } from 'react-router-dom';

const Hedaer = () => {
  return (<ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/About">우리는 누구인가?</Link></li>
  </ul>);
}

export default Hedaer;