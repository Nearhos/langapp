import './texthome.css';

import glogo from '../svgs/mlai.svg';
function TextBoxabout(props) {
    return (

      <div className="outside" style={{paddingTop: props.pt}}>
    <div className="col-sm" style={{ alignContent: 'center',}}>
    <div className="text" style={{color: props.textcolor, fontSize: props.fontsize, padding: "20px", }}>
    <h1>Fluency made easy with machine learning </h1>
      <p> Glossa is language learning app enhanced by machine learning using a open AI API!  <br></br><br></br> This API runs a nural network which is computer network the mimics biological brains<br></br>  <br></br>with glossa you  get to apply your knowlege in a conversation. <br></br> <br></br>This can help you level up to speak to native speakers of you target langauge. </p>
     </div>
  </div>
  </div>
    );
  }
  
  export default TextBoxabout;
  