import {useEffect, useRef} from "react";
import loader from '../../img/loading_4.png';


export const Preloader = () => {

    const preloaderRef = useRef();

    useEffect( () => {
        console.log('DID MOUNT');
        return () => {
            console.log('WILL UNMOUNT');
            // preloaderRef.current.style.opacity = 0;
        }
    },[] )

    return (
        <div ref={preloaderRef} className={'preloader'}>
            <div className={'preloader__img-animated'}>
                <img src={loader} alt={'Loading'} className={'preloader__thumb'}/>
            </div>
        </div>
    )
}