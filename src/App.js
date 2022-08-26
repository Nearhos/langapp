
import Navbar from './components/Navbar';
import About from './components/about.js';
import Login from './components/Login.js';
import Home from './components/Home.js';
import './App.css';

function App() {
  let component
  switch (window.location.pathname){
    case "/":
      component = <Home/>
      break
    case "/about":
      component = <About/>
      break
      case "/Login":
        component = <Login/>
        break
  
  }
  return (
    <div className="App" style={{backgroundColor: '#282c34',paddingBottom:"10000px"}}>
        <>  <Navbar/>
          {component}
          </>
    </div>
  );
}

export default App;
