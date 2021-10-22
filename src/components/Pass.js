import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import  { IoIosArrowDropup, IoIosArrowDropdown} from 'react-icons/io'


const Pass = ({ passes, removePass, updatePass }) => {
  const [edit, setEdit] = useState({ id: null, value: '', unam:'', pas:''});
  const [istoggle,settoggle]=useState({id: null, tog: false})
 
  const submitUpdate = e => {
          e.preventDefault();
          updatePass({id:edit.id, text:edit.value, uname:edit.unam, pass:edit.pas});
          setEdit({id: null, value: '' ,unam:'' ,pas:''});  
           
  };
 
  
  if (edit.id) {
    return <><div className='form'>
      <input placeholder='Name of site' value={edit.value} onChange={(e)=>setEdit({ id: edit.id, value: e.target.value, unam : edit.unam , pas: edit.pas})} name='text' className='pass-input'  />
      <input placeholder='Enter Username' value={edit.unam} onChange={(e)=>setEdit({ id: edit.id, value: edit.value, unam : e.target.value , pas: edit.pas})} name='text' className='pass-input'  />
      <input placeholder='Enter Password' value={edit.pas} onChange={(e)=>setEdit({ id: edit.id, value: edit.value, unam : edit.unam , pas: e.target.value})} name='text' className='pass-input'  />
      <button onClick={submitUpdate} className='pass-button'>Update</button>
    </div>

    </>
  }

 
  return (
    <div className='scroll-div' >
    {passes.map((pass) => (
     <div className='one-row'>
        <strong>. {pass.text}</strong>  

      <div className='icons-div'>
          <RiCloseCircleLine onClick={() => removePass(pass.id)} className='delete-icon' />
          <TiEdit onClick={() => setEdit({ id: pass.id, value: pass.text, unam : pass.uname , pas: pass.pass})}  className='edit-icon'  />
          {istoggle.tog & istoggle.id === pass.id?
                <>
                  <IoIosArrowDropup onClick={()=>settoggle({id:pass.id,tog:false})} className='drop-icon'/>  
                  <div className='drop-text'>                  
                          UserName: {pass.uname}   
                    <br/> Password: {pass.pass}
                  </div>
                </>    
            :
                 <IoIosArrowDropdown onClick={()=>settoggle({id:pass.id,tog:true})} />
            }
          <br/><br/>
      </div>
     </div>
  ))
  }
  </div>
  );
  

};

export default Pass;
