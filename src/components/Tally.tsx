import React, { Component } from 'react';
import { TallyItem } from '../tallies';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios'

interface TallyProps {
  item: TallyItem;
  handlePost: any;
  postedTally: boolean;
  resetPostedTally: any;
}

interface TallyState {
  tallyCount: number;
}

export class Tally extends Component<TallyProps, TallyState> {

  state = {
    tallyCount: 0,
  }

  async fetchTally() {
    const activityId = this.props.item.id;
    try {
      const {data} = await axios.get(`https://my-toolbox-shumanator.herokuapp.com/api/${activityId}`);
      this.setState({
        tallyCount: data.tallyCount,
      });
    } catch(err) {
      console.log(err);
      this.setState({
        tallyCount: 0,
      });
    }
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    if (this.props.postedTally) {
      this.fetchTally();
    }
    if (prevState.tallyCount !== this.state.tallyCount) {
      this.props.resetPostedTally()
    }
  }

  componentDidMount() {
    this.fetchTally();
  }
  
  render() {
    const {item, handlePost} = this.props;
    const {tallyCount} = this.state;
    return (
      <Card>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Card.Text>{tallyCount}</Card.Text>
        <div>
          <Button onClick={()=>handlePost(item.id)}>+</Button>
        </div>
      </Card>
    );
  }
}
