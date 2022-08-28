import './texthome.css';

import glogo from '../svgs/mlai2.svg';
function TextBoxabout(props) {
    return (

      <div className="outside" style={{paddingTop: props.pt}}>
    <div className="col-sm" style={{ alignContent: 'center',}}>
    <div className="text" style={{color: props.textcolor, fontSize: props.fontsize, padding: "20px", }}>
    <h1>The Problem </h1>
     
      <p> Many traditional langauge learning apps have no of have a way to apply knowlege conversationally! <br></br><br></br> This is problem because many people want to learn to speak and conect with those around them.<br></br>  <br></br> Many traditional langauge learning apps only teach you individual words but not how put it all together.<br></br> <br></br>For the kid thats want talk to his grandfather or the newcomer that wants to start a life. <br></br><br></br>Glossa is here revolutionizing langauge education! </p>
  
     </div>
  </div>
  </div>
    );
  }
  
  export default TextBoxabout;
  