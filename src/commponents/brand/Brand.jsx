import React from 'react';
import { google, slack, atlassian, dropbox } from './import';
import './brand.scss';

const Brand = () => (
    <div className="Ecommers__brand section__padding">
        <div>
            <img src={google} alt='google' />
        </div>
        <div>
            <img src={slack} alt='slack' />
        </div>
        <div>
            <img src={atlassian} alt='atlassian' />
        </div>
        <div>
            <img src={dropbox} alt='drropbox' />
        </div>

    </div>
);

export default Brand;