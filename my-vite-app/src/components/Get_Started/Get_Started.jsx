import './Get_Started.scss';
import React from 'react';

const GetStarted = () => {
    return (

        <section id='about' className='get_started blue grid-x'>
            <div className="cell small-10 medium-8">
                <div className="grid-x get_started-sub-container align-center-middle text-center grid-container">
                    <h2 className="title cell ">Ready to Get started</h2>
                    <p className="cell small-10 medium-8 large-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Tristique sed scelerisque arcu scelerisque ultricies habitant
                        ac semper lorem. </p>
                    <div className="cell">
                        <div className="grid-x align-center-middle">
                            <button className="button request-call cell small-7 medium-3">Request a call</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GetStarted;