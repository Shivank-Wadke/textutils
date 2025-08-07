import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

{/*import About from './components/About';*/}

function App() {
  const[mode,setMode] = useState('light')
  const [text,setText] = useState('Enable Dark Mode')
  const[toggleColor,setToggleColor] = useState('dark')
  const[h1Color,setH1Color] = useState('black')
  const [alert,setAlert] = useState(null)
  const alertMessage = (message,type)=> {
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const setToggle = () => {
  if (mode === 'light') {
    setMode('dark');
    setText('Enable Light Mode');
    setToggleColor('light');
    setH1Color('white');
    document.body.style.backgroundColor = '#212529';
    alertMessage("Dark Mode has been enabled", "success");
  } else {
    setMode('light');
    setText('Enable Dark Mode');
    setToggleColor('dark');
    setH1Color('black');
    document.body.style.backgroundColor = '#ffffff';
    alertMessage("Light Mode has been enabled", "success");
  }
};

  
  return (
    <>
    <Navbar title = "TextUtils" aboutText="About" mode={mode} toggle = {setToggle} text={text} toggleColor={toggleColor} />
    <Alert alert={alert}/>
    <div className="container my-3">
      <Textform heading ="Enter the text to analyse" h1Color={h1Color} />
      {/*<About/>*/}
      
    </div>
    
    </>
  );
}

export default App;
