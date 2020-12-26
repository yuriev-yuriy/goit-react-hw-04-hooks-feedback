import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <ul>
      <li className="List">Good: {good}</li>
      <li className="List">Neutral: {neutral}</li>
      <li className="List">Bad: {bad}</li>
      <li className="List">Total: {countTotalFeedback()}</li>
      <li className="List">
        Positive Feedback: {countPositiveFeedbackPercentage() || 0}%
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
};

export default Statistics;
