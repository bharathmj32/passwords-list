import React, { useState , useEffect, useRef} from 'react';
import PassForm from './PassForm';
import Pass from './Pass';
import { makeStyles } from '@material-ui/styles';

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
  const useStyles = makeStyles({
  heading: {
    background:'linear-gradient(183deg, purple, pink)',
    WebkitBackgroundClip:'text',
    WebkitTextFillColor:'transparent',
  },
  boundary:{
    marginTop:'30px',
    background: 'linear-gradient(1deg, #000000ad, #00000040)',
    borderRadius:'40px',
    height:'110%',
    border:'5px solid white',
    boxShadow:'-1px -1px 20px 10px rgb(223 118 213 / 47%), -1px 1px 20px 0px rgb(240 89 158 / 7%)',
  },
});

  const classes = useStyles(useStyles);
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
    <div className={classes.boundary}>
      <h1 className={classes.heading} id='title'>A storage space for all your passwords</h1>
      <Pass passes={passes} removePass={removePass}  updatePass={updatePass}/>
      <PassForm onSubmit={addPass}/>  
    </div>
  );
}

export default PassList;
