import React, {useRef, useEffect} from 'react';
import './App.css';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';


function App() {

  const MyRef = useRef(null)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      MyRef.current.style.cssText = `--scrollTop: ${window.scrollY}px`
      console.log(MyRef.current)
    })
  }, [])



  return (
    <div ref={MyRef} >
      <FirstComponent />
      <SecondComponent />
    </div>
  );
}

export default App;
