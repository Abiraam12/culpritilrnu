import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import IndividualForm from '../src/components/IndividualForm/IndividualForm';
import TrainingCategory from '../src/components/TrainingCategory/TrainingCategory'
import * as serviceWorker from './serviceWorker';
import Signup from './components/Signup/Signup';
import TrainerSearch from './components/trainerSearch/TrainerSearch';
import Footer from './components/footer/footer';
import SwiperId from './components/SwiperId/SwiperId';
import LookingFor from './components/LookingFor/LookingFor';
import VenuePage from './pages/VenuePage';
import VenueForm from './pages/VenueForm';
// import VenuePage from './pages/VenuePage';
import TrainerDatePicker from './components/trainerSearch/TrainerDatePicker';
import TrainerResult from './components/TrainerResult/TrainerResult';
import AddFavourite from './components/AddFavourite/AddFavourite';
import Bookatrainer from './components/bookyourtrainer/Bookatrainer';
import SubHeader from './components/SubHeader';
import Subheader from './components/subheader/subheader';
import HomeSubHeader from './pages/HomeSubheader';
import Home from './pages/Home';
import LoginSignupModel from './components/LoginSignupModel/LoginSignupModel'
import Searchvenue from './components/SearchVenue/searchvenue';
import MobSearchVenue from './components/mobSearchVenue/MobSearchVenue';
import MoreFilterComp from './components/morefiltercomp/MoreFilterComp';


ReactDOM.render(<LookingFor />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
