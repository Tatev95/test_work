import React, {Component} from 'react';
import '../assets/styles/styles.scss';
import vector from '../assets/images/Vector (3).png';
// import Rectangle from './assets/images/Rectangle 19 (1).png';
// import Select from "react-select";



class Header extends Component{
    render(){
      return(
        <>

<header>
<div className="header-section section">
   <div className="header-menu">
   <h1>Test Agency</h1>
   <nav role="navigation" className="header-menu-mob">
    <div id="menuToggle">

        <input type="checkbox" />

        <span></span>
        <span></span>
        <span></span>

        <ul id="menu">
            <a href="#" className="first-a"><li>test agency</li></a>
            <a href="#"><li className="li-2">WORK</li></a>
            <a href="#"><li className="li-2">SERVICES</li></a>
            <a href="#"><li className="li-2">WORK PROCESS</li></a>
            <hr />
            <a href="#" className="btn-parent"><li  className="btn-1-2">LET'S TALK</li></a>
        </ul>
    </div>
</nav>
    <nav className="nav-menu-list">
        <ul>
            <li>WORK</li>
            <li>SERVICES</li>
            <li>WORK PROCESS</li>
        </ul>
    </nav>
    <form>
        <button className="btn-1">LET'S TALK</button>
    </form>
    </div>
    <div className="text-section">
        <h3 className="text-section-title">Design, 
            Development, 
            Marketing
        </h3>
        <div className="text-wish">
            <span>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.
            </span>
        </div>
        <form>
            <button className="btn-2">LET'S TALK</button>
        </form>
    </div>
    
   
</div>
<div className="arrow"><img src={vector} /></div>
</header>

</>
    )
  }
}


export default Header;
