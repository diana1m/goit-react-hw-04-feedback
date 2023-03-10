import { GlobalStyle } from 'GlobalStyle';
import { Layout } from './Layout/Layout.styled';
import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (option)=>{
    this.setState(prevState =>({
      [option]: prevState[option] + 1,
    }));
  }
  

  countTotalFeedback = () =>{
    return this.state.good+this.state.neutral+this.state.bad;
  }

  countPositiveFeedbackPercentage = () =>{
      const totalFeedback = this.countTotalFeedback();
      const percentage = totalFeedback ? (this.state.good/totalFeedback*100).toFixed(0) : "0";
      return percentage;
  }


  render(){

    return (
        <Layout>
          <Section title="Please leave feedback">
            <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback}/>
          </Section>
          <Section title="Statistics">
            {!this.countTotalFeedback() ? 
              <Notification message={"There is no feedback"}/> : 
              <Statistics 
                good={this.state.good} 
                neutral={this.state.neutral} 
                bad={this.state.bad} 
                total={this.countTotalFeedback()} 
                positivePercentage={this.countPositiveFeedbackPercentage()}/>}
            
          </Section>
          <GlobalStyle/>
        </Layout>
      );
    }
};
