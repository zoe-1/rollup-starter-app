// import "babel-polyfill";

import format from 'date-fns/format';
import React from 'react';
import ReactDOM from 'react-dom';

var span = document.querySelector('#time-now');

export default function update() {

	span.textContent = format(new Date(), 'h:mm:ssa');
	setTimeout(update, 1000);

    ReactDOM.render(
          <h1>Hello, world!</h1>,
          document.getElementById('root')
    );
}
