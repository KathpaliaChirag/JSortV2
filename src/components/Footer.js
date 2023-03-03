import React, {useState} from 'react';
import './Footer.css';

function Footer() {

  const [showFooterBar, setShowFooterBar] = useState(true);

  const contactHandler = () => {
    setShowFooterBar(!showFooterBar);
  }

  return (
    <div className="footer">
      <div id="footer__bar" style = {{transform: showFooterBar? `translateY(-60px)`: `translateY(600px)`}}>
        <h3 className="footer__bar__title">CHIRAG KATHPALIA</h3>
        <div className="footer__bar__icons">
          <a href="#" target='_blank'><img src="https://img.icons8.com/ios/50/000000/facebook--v1.png"/></a>
          <a href="#" target='_blank'><img src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png"/></a>
          <a href="https://github.com/KathpaliaChirag" target='_blank'><img src="https://img.icons8.com/ios/50/000000/github--v1.png"/></a>
          <a href="https://www.linkedin.com/in/kathpaliachirag/" target='_blank'><img src="https://img.icons8.com/ios/50/000000/linkedin.png"/></a>
        </div>
      </div>

      {/* <div className="footer-logo"><span>J</span><span className='Sort'>Sort</span></div> */}
       <div className="footer__options">
         <h3 className="footer__option" onClick = {contactHandler}><span>C</span>onnect <span>T</span>o <span>D</span>eveloper</h3>
      </div> 
   </div>
  )
}

export default Footer;