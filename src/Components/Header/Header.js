import React, { Component } from 'react';
import './Header.css'
import { Link, withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';


class Header extends Component {
    selectedLang = (event) => {
        console.log(event.target.value);
        const { i18n } = this.props;
        i18n.changeLanguage(event.target.value);
    }
    render() {
        console.log(this.props)
        let { t } = this.props;
        return (
            <div>
                <div style={{ backgroundColor: 'black', color: '#fff' }}>
                   
                        <span className='' style={{ color: '#fff', fontSize: '30px', margin: '15%' }}> Brine </span>
                    
                </div>

            </div>  
        )
    }
}
export default withTranslation()(withRouter(Header));
