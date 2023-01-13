import React from 'react';
import ReactDOM from 'react-dom';
import App from './BirthdayCard/App';
import { ToursApp } from './ToursList/ToursApp';
import { ReviewApp } from './Reviews/ReviewApp';
import { QuestionAnswerApp } from './Question-Answer/QuestionAnswerApp';
import { FoodApp } from './Food_Menu/FoodApp';
 
ReactDOM.render(
  <React.StrictMode>
    <App />
    <ToursApp />
    <ReviewApp />
    <QuestionAnswerApp />
    <FoodApp />
  </React.StrictMode>,
  document.getElementById('root')
);

