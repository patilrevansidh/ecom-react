import React from 'react';
import { EcomPureComponent } from '../EcomPureComponent';

class Authmenuheader extends EcomPureComponent {
    handleAuthClick = (e) => {
        console.log('clicked', e.target.id)
    }
    render() {
        return (
            <div className="bg-auth-header sub-header"> Hi!, <div id="sign" onClick={this.handleAuthClick} className="highlight-header"> Sign </div> or <div id="register" onClick={this.handleAuthClick} className="highlight-header"> Register </div>
            </div>
        );
    }
}

export default Authmenuheader;