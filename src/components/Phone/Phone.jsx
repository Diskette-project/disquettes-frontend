/* eslint-disable no-unused-expressions */
import React, { useState, useEffect, useContext } from 'react';
import { PhoneContext } from '../../context/Phone.context';
import Messages from '../Messages/Messages';

function Phone () {

    const { phoneExpanded } = useContext(PhoneContext);

    return (
        <div className={`iphone ${phoneExpanded ? 'expanded' : ''}`}>
            <div className="buttons">
                <div className="silent"></div>
                <div className="sleep"></div>
                <div className="vol-up"></div>
                <div className="vol-down"></div>
            </div>
            <div className="top">
                <div className="black-bar"></div>
                <div className="iphone-top"></div>
            </div>
            <div className="components">
                <div className="speaker"></div>
                <div className="camera">
                <div className="shine-left"></div>
                <div className="shine-right"></div>
                </div>
            </div>
            <div className="bottom-bar"></div>
            <div className="screen">
            
                { phoneExpanded ?
                    <Messages></Messages>
                    : 
                    <>
                        <video loop="loop shown" autoplay="autoplay" muted="muted">
                            <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1116884/iphone-vid.mp4" type="video/mp4"/>
                        </video>
                        <div className="lock-lock shown"></div>
                        <div className="info shown">
                            <div className="lock-time"> </div>
                            <div className="lock-date"> </div>
                        </div>
                    </>
                }

                <ul className="hided">
                    <li className="own">Tu sais ce qui ferait un super toboggan pour nos futurs enfants ?</li>
                    <li>Non</li>
                    <li className="own">Ta gorge</li>
                </ul>
                
                <div className="lock-bar shown"></div>
            </div>
        </div>
    );
}

export default Phone;