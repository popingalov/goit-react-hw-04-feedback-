import { useState } from 'react';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = type => {
    if (type === 'good') {
      setGood(e => e + 1);
    }
    if (type === 'neutral') {
      setNeutral(e => e + 1);
    }
    if (type === 'bad') {
      setBad(e => e + 1);
    }
  };

  const countPositiveFeedbackPercentage = () => {
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };
  const total = good + neutral + bad;
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={addFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
}

export default App;
