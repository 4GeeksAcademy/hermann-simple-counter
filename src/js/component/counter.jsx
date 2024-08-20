import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

export let Counter = (props) =>{
    return (
        <div className="counter">
            <div className="clock">
                <i className="far fa-clock"></i>
            </div>
            <div className="four">{props.digitFour % 10}</div>
            <div className="three">{props.digitThree % 10}</div>
            <div className="two">{props.digitTwo % 10}</div>
            <div className="one">{props.digitOne % 10}</div>
        </div>
    );
}

Counter.propTypes = {
    digitOne: PropTypes.number,
    digitTwo: PropTypes.number,
    digitThree: PropTypes.number,
    digitFour: PropTypes.number
};

let counter = 0;
setInterval(function(){
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter/1);
    counter ++;
    ReactDOM.render(<Counter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />, document.querySelector('#app'));
}, 1000);