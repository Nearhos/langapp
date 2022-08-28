

import './Home.css';
import TextBox from './TextBoxhome';
import TextBox2 from './textboxhome2';
function Login() {
    return (
      <div className="Login" style={{backgroundColor: '#282c34',paddingBottom:"1000px"}}>
           
        <div className = "loginbackround" style={{color:"white"}}>
          <div className = "loginbackround" style={{paddingTop: "50px"}}>
          <div class="typewriter" >
      <p>glossa (γλῶσσα), a Greek word meaning "tongue" or "language"</p></div></div>
  <TextBox2  textcolor="white" fontsize="25px" pt="250px"/>
  <TextBox  textcolor="white" fontsize="25px" pt="250px"/>
    </div>
      </div>
    );
  }
  
  export default Login;