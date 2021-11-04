import React, { useEffect } from 'react';
import Header from '../components/Header';

const ChangeTitle = () => {
  useEffect(() => {
    document.title = "Hello"
  }, [])
  return (
    <div>
      <Header />
    </div>
  );
}

export default ChangeTitle;