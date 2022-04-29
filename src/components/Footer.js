import React from 'react';
import './Footer.scss';

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className='footer text-center width-100'>
            <div className='footer-container'>
                <div className='additional-info-container d-flex flex-column align-center justify-center'>
                    <p className='text-center'>
                        Свяжитесь с нами для получения дополнительной информации об
                        интересующей вас услуге.
                    </p>
                    <span className='line'>&nbsp;</span>
                    <div className='social-btn-container d-flex align-center justify-center'>
                        <a href='https://www.facebook.com/Adamiustrade/' target='_blank'
                           rel="noreferrer"
                           className='social-btn fb-btn'>&nbsp;
                        </a>

                        <a href='https://instagram.com/adamiustrade?igshid=YmMyMTA2M2Y='
                           target='_blank' rel="noreferrer"
                          className='social-btn in-btn'>&nbsp;
                        </a>
                    </div>
                </div>
                <div className='copyright'>
                    Copyright © {currentYear}. All rights reserved.
                </div>
            </div>
        </div>
    );
}

export default Footer;
