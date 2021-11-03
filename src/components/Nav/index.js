import React from "react";
import { Link } from "react-router-dom";
import {AiFillLike} from "react-icons/ai"
import "./style.css";
const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Cards">Cards</Link>
        </li>
        <li>
          <Link to="/Favorite"><AiFillLike className="icon"/> </Link>
        </li>
      </ul>
    </div>
  );
};
export default Nav;
