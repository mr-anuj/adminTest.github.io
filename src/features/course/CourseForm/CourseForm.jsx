import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {  createEvent,updateEvent} from '../courseActions';
import cuid from 'cuid';


// const emptyEvent = {
//   title:'',
//     date:'',
//     city:'',
//     venue:'',
//     hostedBy:''
// }

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  let event ={
    title:'',
    date:'',
    city:'',
    venue:'',
    hostedBy:''
  }

  if(eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }

  return {
    event
  }

}

const actions={
  createEvent,
  updateEvent
}

 class CourseForm extends Component {
    state ={
      //event: emptyEvent
      event: Object.assign({}, this.props.event)
    }
   
// componentDidMount() {
//   if(this.props.selectedEvent !==null) {
//     this.setState({
//       event: this.props.selectedEvent
//     })
//   }
// }

// componentWillReceiveProps(nextProps){
//   // console.log("currrent ", this.props.selectedEvent);
//   // console.log("next  ", nextProps.selectedEvent);

//   if(nextProps.selectedEvent !== this.props.selectedEvent) 
//   {
//     this.setState({
//       event:nextProps.selectedEvent || emptyEvent
//     })
//   }

// }

  
  onFormSubmit = (evt) => { 
    evt.preventDefault();
    //console.log(this.state.event);
    if(this.state.event.id) {
      this.props.updateEvent(this.state.event);
      this.props.history.goBack();
    } else {
      const newEvent ={
        ...this.state.event,
        id:cuid(),
        hostPhotoURL:'/assets/user.jpg'
      }
     // this.props.createEvent(this.state.event);
      this.props.createEvent(newEvent);
      this.props.history.push('/events');

    }
   
  }

  onInputChange =(evt) => {
    const newEvent = this.state.event;
    newEvent[evt.target.name] = evt.target.value;
    this.setState({
      // event:{
      //   title: evt.target.value
      
      // }
      event: newEvent
    })
  }
  render() {

    const {handleCancle}=this.props;
    const {event} = this.state;
    return (
                <Segment>
                  <Form onSubmit={this.onFormSubmit}>
                    <Form.Field>
                      <label>Event Title</label>
                      <input name="title" onChange={this.onInputChange} value={event.title} placeholder="Event Name" />
                    </Form.Field>
                    <Form.Field>
                      <label>Event Date</label>
                      <input  name="date" onChange={this.onInputChange} value={event.date}  type="date" placeholder="Event Date" />
                    </Form.Field>
                    <Form.Field>
                      <label>City</label>
                      <input  name="city" onChange={this.onInputChange} value={event.city} placeholder="City event is taking place" />
                    </Form.Field>
                    <Form.Field>
                      <label>Venue</label>
                      <input  name="venue" onChange={this.onInputChange} value={event.venue} placeholder="Enter the Venue of the event" />
                    </Form.Field>
                    <Form.Field>
                      <label>Hosted By</label>
                      <input name="hostedBy" onChange={this.onInputChange} value={event.hostedBy}  placeholder="Enter the name of person hosting" />
                    </Form.Field>
                    <Button positive type="submit">
                      Submit
                    </Button>
                    {/* <Button onClick={handleCancle} type="button">Cancel</Button> */}
                    <Button onClick={this.props.history.goBack} type="button">Cancel</Button> 
                      
                  </Form>
                </Segment>
    )
  }
}
export default connect(mapState, actions) (CourseForm);