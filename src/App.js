import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

{/*import About from './components/About';*/}

function App() {
  return (
    <>
    <Navbar title = "TextUtils" aboutText="About"/>
    <div className="container my-3">
      <Textform heading ="Enter the text to analyse"/>
      {/*<About/>*/}
    </div>
    
    </>
  );
}

export default App;
