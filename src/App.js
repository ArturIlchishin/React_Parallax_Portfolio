import React, {Suspense, lazy} from 'react';
import './App.css';
import {Preloader} from "./components/Preloader/Preloader";
const MainArea = lazy(() => import('./components/MainComponent'));


function App() {

  // const MyRef = useRef(null)

  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     MyRef.current.style.cssText = `--scrollTop: ${window.scrollY}px`
  //     console.log(MyRef.current)
  //   })
  // }, [])



  return (
      <Suspense fallback={<Preloader />}>
        <MainArea />
      </Suspense>
  );
}

export default App;
