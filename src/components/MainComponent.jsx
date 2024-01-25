import {useEffect, useRef} from "react";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";

const MainComponent = () => {

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
    )
}

export default MainComponent;
