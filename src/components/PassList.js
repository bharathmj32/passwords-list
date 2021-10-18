import React, { useState , useEffect, useRef} from 'react';
import PassForm from './PassForm';
import Pass from './Pass';

// const getLocalItems = () => {
//   let list =  localStorage.getItem('lists');
//   console.log(list);
//   if(list){
//     return JSON.parse(localStorage.getItem('lists'));
//   }
//   else
//     return []
// }

function PassList() {
  const [passes, setPass] = useState([]);
  // getLocalItems()
  // const idd= useRef(1);

  const addPass = pass => {
    if (!pass.text || /^\s*$/.test(pass.text)) return;
  
    const newPass = [pass, ...passes];
    setPass(newPass);
    console.log(...passes);
  };

  const updatePass = newValue => {
    if (!newValue.text || /^\s*$/.test(newValue.text))   return;
    setPass(prev => prev.map(item => (item.id === newValue.id ? newValue : item)));
  };

  const removePass = id => {
    const removedArr = [...passes].filter(pass => pass.id !== id);
    setPass(removedArr);
  };

  
  
  // useEffect(
  //   localStorage.setItem(idd.current++,JSON.stringify(passes))
  // ,[passes])


  return (
    <>
      <h1 id='title'>A storage space for all your passwords</h1>
      <Pass passes={passes} removePass={removePass}  updatePass={updatePass} />
      <PassForm onSubmit={addPass} />
    </>
  );
}

export default PassList;
