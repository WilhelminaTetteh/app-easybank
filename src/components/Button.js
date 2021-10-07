import React from 'react'
import './Button.css'
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <div>
      <Link to='/request-invite'>
        <button className='inviteBtn'>Request Invite</button>
      </Link>
    </div>
  );
}

export default Button

