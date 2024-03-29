import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import './Navbar.css';

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    handleItemClick = (url) => {
        window.location.href = url;
    }

    render() {
        return (
            <nav className="NavbarItems">

                <h1 className="navbarlogo">Antoine Bonnat </h1>
                <div className='imglogo'>
                    <img src="./Antoine.jpeg" width={100} height={90} alt='arf'></img>
                </div>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}> </i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index} onClick={() => this.handleItemClick(item.url)}>
                                <a className={item.cName} href={`/${item.title.toLowerCase()}`}>
                                        {item.title}
                                            </a>

                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar;
