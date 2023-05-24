import HRPLogo from '../Logos/hrp-logo.svg';
import WifiIcon from '../Logos/Wireless-icon.svg';
import React, { Component } from 'react';
import '../Stylesheets/bootstrap.css';
import '../Stylesheets/header.css'

class HeaderComponent extends Component {

    render() {
        return (
            <div>
                <nav class="navbar navbar-dark dark navbar-hrp">
                    <div class="container-fluid">
                        <img class="navbar-brand palace-logo" src={HRPLogo}/>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <img class="navbar-brand wifi-logo" src={WifiIcon}/>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default HeaderComponent;