import { useState } from 'react';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import s from './Feedback.module.css';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const increaseFeedbackOption = option => {
    if (option === 'good') {
      setGood(state => state + 1);
      return;
    }
    if (option === 'bad') {
      setBad(state => state + 1);
      return;
    } else {
      setNeutral(state => state + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return (good / countTotalFeedback()) * 100;
  };

  return (
    <div className={s.Feedback}>
      <Section
        className={s.Section}
        title="
        Please leave feedback"
      >
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onIncrease={increaseFeedbackOption}
        />
      </Section>
      <Section className={s.Section} title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            countTotalFeedback={countTotalFeedback}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
}
