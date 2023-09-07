import React from 'react';
import {  Link } from "react-router-dom";
const navbar= () =>{
  return (
  <div>
    <li>
      <Link to="/">login</Link>
    </li>
    <li>
      <Link to="/basepage">blog</Link>
    </li>
    <li>
      <Link to="/affiliates">affiliates</Link>
    </li>
    <li>
      <Link to="/common-faq">FAQ</Link>
    </li>
    <li>
      <Link to="/games-support">Support</Link>
    </li>
  </div>
  );
}
export default navbar;