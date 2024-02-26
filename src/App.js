import './App.css';
import  { React ,useState} from 'react';
import AnalogClock from 'analog-clock-react'
import UsForm from './UsForm';
import ComA from './ComA';


export function App(){

 
  const clockStyle = {
    backgroundImage: 'url(images/nature9.jpg)',
    backgroundSize:'cover',
    // height : '100%',
  }
  let heading = "Welcome For The React-Hook Tutorial..."
  const [Heading, setHeading] = useState(heading);

  function changeHeading(){
    let val = Heading;

    if(val === "Welcome For The React-Hook Tutorial..."){
      setHeading("This website is created by useing react hooks...")
    }
    else{
      setHeading("Welcome For The React-Hook Tutorial...")
    }
   
    document.getElementById('disableElm').style.display ='block'
  }

  return(
    <>
    <div  className='formCls'>
        <div style={clockStyle} className='p-5 text-black m-2'>
            <h1 >{Heading}</h1>
            <h3 id='disableElm'> The above heading is toggled by using react useState hook..</h3>
            <button  className='btn btn-primary' onClick={changeHeading}>Learn Hooks</button>
        </div>
        <div>
            <UsForm  />
        </div>
        {/* <div>
          <h1>Passing data throught useContex hook</h1>
          <ComA />
        </div> */}
    </div>
    </>
  )
};

export default App;
