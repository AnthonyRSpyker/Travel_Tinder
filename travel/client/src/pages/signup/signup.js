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
    
    let timerID=useRef(null);

    useEffect(()=>{
      return()=>{
        clearTimeout(timerID);
      }
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
      AuthService.signup(user).then(data=>{
        const{message}=data;
        setMessage(message);
        resetForm();
        if(!message.msgError){
          timerID=setTimeout(()=>{
            props.history.push('/profile')
          },2000)
        }
      });
    }

  return (

    <div className="hero-full-screen">


      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet"></link>
      <form onSubmit={onSubmit}>
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
      </form>


        
        <div className="status-update-input-box">
          <form>
            <div className="row input-box-container">
              <div className="columns">
                <label> Personal Bio Seciton (500 characters max.)
          <textarea rows="5" placeholder="Hey Harry, What's on your mind?" name="bio" value={user.bio} onChange={onChange}></textarea>
                </label>
              </div>
            </div>
            {/* <div className="row medium-collapse user-action-container">
              <div className="small-12 medium-7 columns">
                <div className="user-action-box">
                  <div className="action-area">
                    <a href="#" className="action-anchor has-tip bottom" data-tooltip aria-haspopup="true" data-disable-hover="false" tabindex="2" title="Upload a Photo">
                      <i className="fa fa-picture-o" aria-hidden="true"></i>
                      <span className="show-for-sr">Upload a Photo</span>
                    </a>
                  </div>
                  <div className="action-area">
                    <a href="#" className="action-anchor has-tip bottom" data-tooltip aria-haspopup="true" data-disable-hover="false" tabindex="2" title="Upload a Video">
                      <i className="fa fa-video-camera" aria-hidden="true"></i>
                      <span className="show-for-sr">Upload a Video</span>
                    </a>
                  </div>
                  <div className="action-area">
                    <a href="#" className="action-anchor has-tip bottom" data-tooltip aria-haspopup="true" data-disable-hover="false" tabindex="2" title="Check in">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      <span className="show-for-sr">Check in</span>
                    </a>
                  </div>
                  <div className="action-area">
                    <a href="#" className="action-anchor has-tip bottom" data-tooltip aria-haspopup="true" data-disable-hover="false" tabindex="2" title="Add a Feeling">
                      <i className="fa fa-smile-o" aria-hidden="true"></i>
                      <span className="show-for-sr">Add a Feeling</span>
                    </a>
                  </div>
                  <div className="action-area">
                    <a href="#" className="action-anchor has-tip bottom" data-tooltip aria-haspopup="true" data-disable-hover="false" tabindex="2" title="Tag a Friend">
                      <i className="fa fa-tags" aria-hidden="true"></i>
                      <span className="show-for-sr">Tag a Friend</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="small-12 medium-5 columns">
                <div className="user-submit-box">
                  <input type="submit" className="button small" value="POST"></input>
                </div>
              </div>
            </div> */}
          </form>
          {message ? <Message message={message}/> : null}
        </div>



        <button className="button expanded" type="submit">Sign Up</button>
     

    </div>
  )
};
export default Signup;