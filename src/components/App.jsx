import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const updateCount = name => {
    console.log(name);
    if (name === 'good') {
      setGood(prevGood => prevGood + 1);
      return;
    } else if (name === 'neutral') {
      setNeutral(prevNeutral => prevNeutral + 1);
      return;
    } else if (name === 'bad') {
      setBad(prevBad => prevBad + 1);
      return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback()
      ? ((good / countTotalFeedback()) * 100).toFixed(0)
      : '0';
  };
  const options = ['good', 'neutral', 'bad'];
  return (
    <div className="boxProfile">
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={updateCount} />
      </Section>
      {countTotalFeedback() ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
      ;
    </div>
  );
};

export default App;
