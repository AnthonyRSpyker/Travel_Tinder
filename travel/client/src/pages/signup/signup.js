import React,{useState,useRef,useEffect} from "react";
import AuthService from '../../Service/AuthService';
import Message from '../../components/Alert/alert';
import "./signup.css"



const Signup=props=> {

  const [user,setUser]=useState(
    {username:"",
    password:"", 
    role:"",
    age:"",
    gender:"",
    countries:"",
    bio:""});

    const[message,setMessage]=useState(null);
    
    useEffect(()=>{
      // if we needed to load data when this component is first loaded you put it here. on signup we don't so this can be removed later
    
    },[]);

    const onChange= e=>{
      setUser({...user,[e.target.name]:e.target.value});
    }

    const resetForm=()=>{
      setUser({username:"",
      password:"", 
      role:"",
      
      age:"",
      gender:"",
      countries:"",
      bio:""});
    }
    const onSubmit=e=>{
      e.preventDefault();
      AuthService.signup(user)
      .then(resp => resp.json())
      .then(data=>{
        const{message}=data;
        setMessage(message);
        resetForm();
        if(!message.msgError){
          props.history.push('/profile')
          //does this redirect the user????
        }
      })
      .catch(err => {
        alert("Error occurred see logs");
        console.log(err)
     })
    }

  return (

    <div className="hero-full-screen">


      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet"></link>
      <form onSubmit={onSubmit}>
      <fieldset id="group-1">
        <div className="form-icons">
          <h4>Register for an account</h4>
          <div className="all-form">

            <div className="input-group">
              <span className="input-group-label">
                <i className="fa fa-user"></i>
              </span>
              <input className="input-group-field" type="text" name="username" value={user.username} onChange={onChange} placeholder="Full name" />
            </div>
            <div className="input-group">
              <span className="input-group-label">
                <i className="fa fa-user"></i>
              </span>
              <input className="input-group-field" type="text" name="age" placeholder="Age" value={user.age} onChange={onChange} />
            </div>
            <div className="input-group">
              <span className="input-group-label">
                <i className="fa fa-user"></i>
              </span>
              <input className="input-group-field" type="text" name="gender" placeholder="Prefered Gender" value={user.gender} onChange={onChange} />
            </div>

            {/* <div className="input-group">
              <span className="input-group-label">
                <i className="fa fa-envelope"></i>
              </span>
              <input className="input-group-field" type="text" placeholder="Email" value={user.email}></input>
            </div> */}

            <div className="input-group">
              <span className="input-group-label">
                <i className="fa fa-key"></i>
              </span>
              <input className="input-group-field" type="text" name="password" placeholder="Password" value={user.password} onChange={onChange} />
            </div>
            <div className="input-group">
              <span className="input-group-label">
                <i className="fa fa-key"></i>
              </span>
              <input className="input-group-field" type="text" name="password" placeholder="Confirm Password" value={user.password} onChange={onChange} />
            </div>
          </div>
        </div>


        <div className="callout" id="switch-toggle-all">



          <div className="polls">
            <h5 className="polls-question">
              <span className="polls-question-label">Q:</span>
    What Languages Do You Speak?
  </h5>
            <div className="polls-options">
              <div>
                <input id="checkbox1-a" type="checkbox"></input>
                <label className="checkbox1-a">Spanish</label>
              </div>
              <div>
                <input id="checkbox2" type="checkbox"></input>
                <label className="checkbox2">Manderine</label>
              </div>
              <div>
                <input id="checkbox3" type="checkbox"></input>
                <label className="checkbox3">French</label>
              </div>
              <div>
                <input id="checkbox4" type="checkbox"></input>
                <label className="checkbox4">German</label>
              </div>
              <div>
                <input id="checkbox4" type="checkbox"></input>
                <label className="checkbox4">English</label>
              </div>
            </div>
            
          </div>
          <h5 className="polls-question">
            <span className="polls-question-label">Q:</span>
    What Continents do you want to travel to?
  </h5>
          <div className="polls-options">

            <div>
              <input id="checkbox1" type="checkbox" name="countries" value={user.countries}></input>
              <label className="checkbox1">Asia</label>
            </div>
            <div>
              <input id="checkbox2" type="checkbox"  name="countries" value={user.countries}></input>
              <label className="checkbox2">Bangkok, Thailand</label>
            </div>
            <div>
              <input id="checkbox2" type="checkbox" value={user.countries}></input>
              <label className="checkbox2">Singapore, Singapore</label>
            </div>


            <div>
              <input id="checkbox1" type="checkbox" value={user.countries}></input>
              <label className="checkbox1">Africa</label>
            </div>
            <div>
              <input id="checkbox1" type="checkbox" value={user.countries}></input>
              <label className="checkbox2">South, Africa</label>
            </div>
            <div>
              <input id="checkbox2" type="checkbox" value={user.countries}></input>
              <label className="checkbox2">Tunisia</label>
            </div>


            <div>
              <input id="checkbox1" type="checkbox" value={user.countries}></input>
              <label className="checkbox1">Australia/ Oceania</label>
            </div>
            <div>
              <input id="checkbox2" type="checkbox" value={user.countries}></input>
              <label className="checkbox2">Sydney</label>
            </div>
            <div>
              <input id="checkbox2" type="checkbox" value={user.countries}></input>
              <label className="checkbox2">Cocos (keeling) Islands</label>
            </div>


            <div>
              <input id="checkbox1" type="checkbox" value={user.countries}></input>
              <label className="checkbox1">Europe</label>
            </div>
            <div>
              <input id="checkbox2" type="checkbox" value={user.countries}></input>
              <label className="checkbox2">Italy</label>
            </div>
            <div>
              <input id="checkbox2" type="checkbox" value={user.countries}></input>
              <label className="checkbox2">Greece</label>
            </div>

            <div>
              <input id="checkbox1" type="checkbox" value={user.countries}></input>
              <label className="checkbox1">North America</label>
            </div>
          </div>
          <div>
            <input id="checkbox2" type="checkbox" value={user.countries}></input>
            <label className="checkbox2">New York City, New York</label>
          </div>
          <div>
            <input id="checkbox2" type="checkbox" value={user.countries}></input>
            <label className="checkbox2">Miami, Florida</label>
          </div>
          <div>
            <input id="checkbox1" type="checkbox" value={user.countries}></input>
            <label className="checkbox1">South America</label>
          </div><div>
            <input id="checkbox2" type="checkbox" value={user.countries}></input>
            <label className="checkbox2">Bogota, Colombia</label>
          </div><div>
            <input id="checkbox2" type="checkbox" value={user.countries}></input>
            <label className="checkbox2">Santiago de Chile, Chile</label>
          </div>
        </div>
        </fieldset>


        <fieldset id="group-3">
        <div className="status-update-input-box">
            <div className="row input-box-container">
              <div className="columns">
                <label> Personal Bio Seciton (500 characters max.)
          <textarea rows="5" placeholder="Hey Harry, What's on your mind?" name="bio" value={user.bio} onChange={onChange}></textarea>
                </label>
              </div>
            </div>
            </div>
        </fieldset>

          {message ? <Message message={message}/> : null}
        



        <button className="button expanded" type="submit">Sign Up</button>
        </form>    

    </div>
  )
};
export default Signup;