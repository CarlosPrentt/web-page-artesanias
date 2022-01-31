import React from 'react';
import './Image.css';


const Image = () => {
    return ( 
        <div className="design-container">
            <img className="kirbi-img" src="assets/img/keykirbi.jpg" alt="bg" />
            <div className="design-text">
                <a className='link-design' href='https://www.canva.com/design/DAEfoFSE_-c/lI-txWb04N_MoZqijCOPkw/view'>DISEÑOS</a>
                <a className='link-design' href='https://www.canva.com/design/DAEfoFSE_-c/lI-txWb04N_MoZqijCOPkw/view'>PERSONALIZABLES</a>
                <a className='link-design' href='https://www.canva.com/design/DAEfoFSE_-c/lI-txWb04N_MoZqijCOPkw/view'>➤</a>
            </div>
        </div>

     );
}
 
export default Image;