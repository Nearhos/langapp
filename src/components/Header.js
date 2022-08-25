import glogo from '../svgs/glogo.svg';
import './Header.css';

function Header() {
    return (
        
    <div className="App-header" style={{paddingBottom: "1px"}}>
       
<img src={glogo} className="App-logo" alt="logo" style={{height: '90px', padding: "10px",}} />

<p  className="HeaderText" style={{  fontSize:"50px"}}>
 Glossa
</p>

    
    

</div>

 );

}

export default Header;