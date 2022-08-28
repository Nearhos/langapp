import './textabout.css';

import glogo from '../svgs/mlai.svg';
function TextBox(props) {
    return (

      <div className="outside" style={{paddingTop: props.pt}}>
    <div className="col-sm" style={{ alignContent: 'center',}}>
    <div className="text" style={{color: props.textcolor, fontSize: props.fontsize, padding: "20px", }}>
    <h1>Future Features</h1>
      <p> -Tetris inspired spaced-reptition game to mememorise vocabulary<br></br><br></br> -Connect the lines grammar game<br></br>  <br></br>-A social network to connect users <br></br><br></br> -Point system and leaderboard<br></br><br></br>-Mobile app</p>
     </div>
  </div>
  </div>
    );
  }
  
  export default TextBox;
  