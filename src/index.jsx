import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Blog from './components/blog/Blog.jsx';
import EmployerUI from './components/employer/EmployerUI.jsx';
import JobSeekerUI from './components/jobSeeker/JobSeekerUI.jsx';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Blog />, document.getElementById('root'));
// ReactDOM.render(<EmployerUI />, document.getElementById('root'));
ReactDOM.render(<JobSeekerUI />, document.getElementById('root'));
