// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import d3 from 'd3';
import highcharts from 'highcharts';
import redux from 'redux';
import bootstrap from 'bootstrap';
import angular from 'angular';
import App from './App.jsx';

const useBigDependencies = () => {
	d3.toString();
	highcharts.toString();
	redux.toString();
	bootstrap.toString();
	angular.toString();
	jQuery.toString();
};

ReactDOM.render(<App />, document.getElementById('react-root'));
