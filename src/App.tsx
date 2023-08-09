// import React from 'react';
// import { Route, BrowserRouter as Router } from "react-router-dom";
// import './App.css';
// import Main from './components/main';
// //import Home from './components/home';

// //const Router = ReactRouter.Router;
// //const Route = ReactRouter.Route;
// //const IndexRoute = ReactRouter.IndexRoute;
// //const browserHistory = ReactRouter.browserHistory;

// function getResumePath() {
//   if (['localhost', '127.0.0.1'].indexOf(window.location.hostname) === -1) {
//       return '/public/resume.json';
//   }
//   return '/public/resume.example.json';
// }

// function getNavigation() {
//   return {
//       home: 'Home',
//       about: 'About',
//       expertise: 'Expertise',
//       work: 'Work',
//       education: 'Education',
//       skill: 'Skills',
//       //portfolio: 'Portfolio',
//       testimonials: 'References',
//       social: 'Social'
//   };
// }

// const config = {
//   resumePath: getResumePath(),
//   navigation: getNavigation()
// };

// function App() {
//   return (
//     <Router>
//       <Route path='/' element={<Main {...{ pathname: "", children : ""}}/>} />
//       {/* <Route index element={<Home config={config}/>} /> */}
//       <Route path='*' Component={NotFound}/>   
//   </Router>
//   );
// }

// export default App
