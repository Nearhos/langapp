import Header from './components/Header.js';
import TextBox from './components/TextBox';
import './App.css';

function App() {
  return (
    <div className="App" style={{backgroundColor: '#282c34',paddingBottom:"1000px"}}>
          <Header/>
      <div className = "backround" style={{color:"white"}}>
<TextBox text="time to get sreaddeid" textcolor="black" fontsize="15px"/>
  </div>
    </div>
  );
}

export default App;
