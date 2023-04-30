import React, {useState} from 'react';
import './Header.css';

function Header() {

  const [showHeaderBar, setShowHeaderBar] = useState(true);

  const contactHandler = () => {
    setShowHeaderBar(!showHeaderBar);
  }

  return (
    <div className="header">
      {}

      <div className="header-logo"><span>J</span><span className='Sort'>Sort</span></div>
      {}
   </div>
  )
}

export default Header;