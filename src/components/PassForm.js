import React, { useState, useRef } from 'react';

function PassForm(props) {
  const [input, setInput] = useState({ id: null, value: '', uname:'', pass:''});
  const [istoggle,settoggle]=useState(false)
  const idd = useRef(0)

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit({id: idd.current++, text: input.value, uname: input.uname, pass: input.pass});
    setInput({id:null, value:'',uname:'',pass:''});
    settoggle(false)
  };

  if (istoggle===true){
   return <>
   <form onSubmit={handleSubmit} className='pass-form'>
      <div className='form'>
      <input placeholder='Name of site' value={input.value} onChange={(e)=>setInput({ id: input.id, value: e.target.value, uname : input.uname , pass: input.pass})} name='text' className='pass-input' />
      <input placeholder='Enter Username' value={input.uname} onChange={(e)=>setInput({ id: input.id, value: input.value, uname : e.target.uname , pass: input.pass})} name='text' className='pass-input'/>
      <input placeholder='Enter Password' value={input.pass} onChange={(e)=>setInput({ id: input.id, value: input.value, uname : input.uname , pass: e.target.pass})} name='text' className='pass-input' />
      <button onClick={handleSubmit} className='pass-button'>Submit</button>
    </div>
    </form>
    </>
  }   

  return (
   <button onClick={()=>settoggle(true)}  className='pass-button'>add new</button>
  );
}

export default PassForm;
