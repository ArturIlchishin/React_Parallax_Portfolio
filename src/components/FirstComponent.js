import React from 'react';
import front from '../img/front.png'
import base from '../img/base1.png'
import middle from '../img/middle.png'


function FirstComponent() {
    return (
        <>
            <header className='roboto-script main-header'>
                <div className='layers'>
                    <div className='layers__header'>
                        <div className='layers__caption'>CV: Артур Ильчишин</div>
                        <div className='layers__title'>Приветствую в своем портфолио!</div>
                    </div>
                    <div className='layer layers__base' style={{backgroundImage: `url(${base})`}}></div>
                    <div className='layer layers__middle' style={{backgroundImage: `url(${middle})`}}></div>
                    <div className='layer layers__front' style={{backgroundImage: `url(${front})`}}></div>

                </div>
            </header>
        </>
        
    )
}

export default FirstComponent;