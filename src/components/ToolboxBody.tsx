import React, {Component} from 'react';
import { Tally } from './Tally';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import {TallyItem} from '../tallies';

/* 
  Deploy to heroku
  make it nicer
*/
export class ToolboxBody extends Component {

  state = {
    tallies: [],
    postedTally: false
  }

  async fetchTallies() {
    try {
      const {data} = await axios.get('https://my-toolbox-shumanator.herokuapp.com/api');
      this.setState({
        tallies: data.activities,
        postedTally: false
      });
    } catch(err) {
      console.log(err);
        this.setState({
          tallies: [],
          postedTally: false
        });
    }
  }

  async postTally(activityId: number) {
    try {
      await axios.post(`https://my-toolbox-shumanator.herokuapp.com/api/${activityId}`);
      this.setState({
        postedTally: true
      })
    } catch(err) {
      console.log(err)
    }
  }

  resetPostedTally() {
    this.setState({
      postedTally: false
    })
  }

  componentDidMount() {
    this.fetchTallies();
  }

  render() {
    const tallyList:TallyItem[] = this.state.tallies; 
    return (
       <Container>    
        {
          tallyList.map(tally => {
            return <Tally key={tally.name} item={tally} handlePost={this.postTally.bind(this)} postedTally={this.state.postedTally} resetPostedTally={this.resetPostedTally.bind(this)}/>
          })
        }
      </Container>
    );
  }
}

