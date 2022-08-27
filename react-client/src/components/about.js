

import './about.css';
import TextBoxabout from './TextBox.js';

function about() {
  return (
    <div className="About" style={{backgroundColor: '#282c34',paddingBottom:"1000px"}}>
        
      <div className = "aboutbackround" style={{color:"white"}}>
<TextBoxabout  textcolor="black" fontsize="15px"/>
  </div>
    </div>
  );
}

export default about;