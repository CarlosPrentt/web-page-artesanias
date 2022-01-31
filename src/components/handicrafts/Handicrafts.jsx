import React from 'react';
import './Handicrafts.css';

const Handicrafts = () => {

    window.addEventListener('scroll', function () {
        const handi = document.querySelector('#handi')
        handi && handi.classList.toggle('sticky-cart', window.scrollY > 3642)
    })

    return ( 
        <div id="handi" className="handicrafts-products">
            <img className="handicrafts-img" src="assets/img/handicrafts.jpg" alt="handicrafts title" />
        </div>
    );
}
 
    export default Handicrafts;