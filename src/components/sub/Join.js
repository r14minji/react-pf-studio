import { useEffect, useRef, useState } from "react";

function Join(){
  const initVal={
    userid : '',
    pwd1 : '',
    pwd2 : '',
    email: '',
    gender: '',
    interests: '',
    sns: '',
    comments: '',
  }
  const [val, setVal] = useState(initVal);
  const [err, setErr] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = e => {   
    //console.log(e.target)
    const {name, value} = e.target;     
    setVal({...val, [name]: value});     
  }

  const handleCheck = e => {    
    const {name} = e.target;  
    const isCheck = e.target.checked;   
    setVal({...val, [name]: isCheck});  
  }

  const handleSelect = e => {
    const {name} = e.target;
    //console.log(e.target.options);
    const isSelected = e.target.options[e.target.selectedIndex].value;
    setVal({...val, [name]: isSelected});
  }

  const handleSubmit = e =>{ 
    e.preventDefault();   
    setIsSubmit(true);
    setErr(check(val));  
    //console.log(val);
  }

  const check = val=>{
    let errs = {};  
    let eng = /[a-zA-Z]/;
    let num = /[0-9]/;
    let spc = /[!@#$%^&*]/;

    if( !val.userid || val.userid.length <5 ){
      errs.userid='Please enter 5 or more characters';
    } 
    if( !val.pwd1 || val.pwd1.length<5 || !eng.test(val.pwd1) || !num.test(val.pwd1) || !spc.test(val.pwd1)){
      errs.pwd1='Please enter 5 or more characters, with at least 1 number and special characters';
    }
    if( !val.email || !/@/.test(val.email) ){
      errs.email='Please enter a valid email address.';
    }
    if( !val.pwd2 || val.pwd1 !== val.pwd2 ){
      errs.pwd2='Please enter same password';
    }
    if( !val.gender ){
      errs.gender='Please select gender';
    }
    if( !val.interests ){
      errs.interests='Please choose your intersets';
    }
    if( !val.sns ){
      errs.sns='Please select your sns'
    }
    if( !val.comments || val.comments.length <10 ){
      errs.comments='Please enter 5 or more characters';
    }
    return errs;
  }
 
  useEffect(()=>{        
    //console.log(err);
    const len =  Object.keys(err).length;
    if(len === 0 && isSubmit){
      console.log('인증 성공');
      setSuccess(true);     
    }else{
      console.log('인증 실패');
      setSuccess(false);
    }
  },[err]);

  return (

    <section className="content join">
    <div className="inner">
      <h1>join</h1>

      {success ? <div>Congratulations on becoming a member!</div> : null }

      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend className='hidden'>회원가입 입력 폼 양식</legend>
          
          <table>
            <caption className='hidden'>회원가입 입력</caption>
            <tbody>
              {/* userid */}
              <tr>
                <th scope='row'>
                  <label htmlFor="userid">USER ID</label>
                </th>
                <td>
                  <input 
                    type="text" 
                    id='userid'
                    name='userid'
                    placeholder='Enter your ID'                    
                    onChange={handleChange}
                  />
                  <span className='err'>{err.userid}</span>
                </td>
              </tr> 

              {/* password */}
              <tr>
                <th scope='row'>
                  <label htmlFor="pwd1">PASSWORD</label>
                </th>
                <td>
                  <input 
                    type="password" 
                    id='pwd1'
                    name='pwd1'
                    placeholder='Enter your password'                  
                    onChange={handleChange}
                  />
                  <span className='err'>{err.pwd1}</span>
                </td>
              </tr>

              {/* re password */}
              <tr>
                <th scope='row'>
                  <label htmlFor="pwd2">RE-PASSWORD</label>
                </th>
                <td>
                  <input 
                    type="password" 
                    id='pwd2'
                    name='pwd2'
                    placeholder='Re-password'                  
                    onChange={handleChange}
                  />
                  <span className='err'>{err.pwd2}</span>
                </td>
              </tr>

              {/* email */}
              <tr>
                <th scope='row'>
                  <label htmlFor="email">E-MAIL</label>
                </th>
                <td>
                  <input 
                    type="text" 
                    id='email'
                    name='email'
                    placeholder='Enter your  Email address'         
                    onChange={handleChange}
                  />
                  <span className='err'>{err.email}</span>
                </td>
              </tr>

              {/* gender */}
              <tr>
                <th scope='row'>
                  GENDER
                </th>
                <td>
                  <input 
                    type="radio" 
                    id='male' 
                    name='gender' 
                    onChange = {handleCheck}
                  />
                  <label htmlFor='male'>Male</label>
                  
                  <input 
                    type="radio" 
                    id='female' 
                    name='gender' 
                    onChange = {handleCheck} 
                  />
                  <label htmlFor='femal'>Female</label>
                  
                  <span className='err'>{err.gender}</span>
                </td>
              </tr>

              {/* interests */}
              <tr>
                <th scope='row'>
                  INTERESTS
                </th>
                <td>
                  <input 
                    type="checkbox" 
                    id='table' 
                    name='interests' 
                    onChange = {handleCheck}
                  />
                  <label htmlFor='table'>Table</label>
                  
                  <input 
                    type="checkbox" 
                    id='sofa' 
                    name='interests' 
                    onChange = {handleCheck} 
                  />
                  <label htmlFor='sofa'>Sofa</label>
                  
                  <input 
                    type="checkbox" 
                    id='chair' 
                    name='interests' 
                    onChange = {handleCheck} 
                  />
                  <label htmlFor='chair'>Chair</label>
                  
                  <span className='err'>{err.interests}</span>
                </td>
              </tr>

              {/* sns */}
              <tr>
                <th scope='row'>
                <label htmlFor='sns'>SNS</label>
                </th>
                <td>                    
                  <select name="sns" id="sns" onChange={handleSelect}>
                    <option value="">Select</option>
                    <option value="facebook">Facebook</option>
                    <option value="instagram">Instagram</option>
                    <option value="twitter">Twitter</option>
                    <option value="tiktalk">Tiktalk</option>
                  </select>
                  <span className='err'>{err.sns}</span>
                </td>
              </tr>

              {/* comments */}
              <tr>
                <th scope='row'>
                  <label htmlFor="comments">COMMENTS</label>
                </th>
                <td>
                  <textarea
                    col='30'
                    row='10'
                    id='comments'
                    name='comments'
                    placeholder='Send me your opinion'                  
                    onChange={handleChange}
                  ></textarea>
                  <span className='err'>{err.comments}</span>
                </td>
              </tr>

              {/* btn set */}
              <tr>
                <th colSpan='2' className="btnSet">
                  <input type="reset" value='CANCEL' />
                  <input type="submit" value='SEND' />
                </th>
              </tr> 
            </tbody>       
          </table>
        </fieldset>
      </form>
    </div>
  </section>






  )
}

export default Join;