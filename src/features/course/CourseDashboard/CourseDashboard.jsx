import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import CourseList from '../CourseList/CourseList';
// import CourseForm from '../CourseForm/CourseForm';
// import cuid from 'cuid'; // create random ID

import {connect} from 'react-redux';
// import {createEvent, deleteEvent, updateEvent  } from '../courseActions';
import { deleteEvent  } from '../courseActions'


const mapState =(state) => ({
  events:state.events
});

const actions ={
 // createEvent,
  deleteEvent,
 // updateEvent
}


 class CourseDashboard extends Component {
  //  constructor(props) {
  //    super(props)

    //  state ={
    //   // events:eventsDashboard,
    //    isOpen:false,
    //    selectedEvent:null

    //  }
     //this.handleFormOpen = this.handleFormOpen.bind(this);
     //this.handleCancle = this.handleCancle.bind(this);

   

  //  handleFormOpen =() =>{
  //     this.setState({
  //       selectedEvent:null,
  //       isOpen:true
  //     })
  //  }

//    handleCancle =() =>{
//     this.setState({
//       isOpen:false
//     })
//  }

// handleUpdateEvent = (updatedEvent) => {
//   this.props.updateEvent(updatedEvent)
//   this.setState({
//     // events:this.state.events.map(event => {
//     //   if(event.id === updatedEvent.id) {
//     //     return Object.assign({}, updatedEvent);
//     //   } else {
//     //     return event
//     //   }
//    // }),
//     isOpen:false,
//     selectedEvent:null
//   })
// }


//  handleOpenEvent = (eventToOpen) => () => {
//    this.setState({
//      selectedEvent:eventToOpen,
//      isOpen: true
//    })
//  }


handleDeleteEvent = (eventId) => () => {
  // const updatedEvents = this.state.events.filter(e => e.id !== eventId);
  // this.setState({
  //   events:updatedEvents
  // })

  this.props.deleteEvent(eventId);
}

//  handleCreateEvent = (newEvent) => {
//    newEvent.id = cuid();
//    newEvent.hostPhotoURL='assets/user.jpg';
//   // const updatedEvents = [...this.state.events, newEvent];
//   this.props.createEvent(newEvent);
//    this.setState({
//     // events:updatedEvents,
//      isOpen:false
//    })
//  }
 

  render() {
    // const {selectedEvent} = this.state;
    const {events}= this.props;
    return (
      <Grid>
          <Grid.Column width={10}>
                {/* <CourseList events={eventsDashboard}/> */}
                <CourseList 
                deleteEvent={this.handleDeleteEvent} 
                // onEventOpen={this.handleOpenEvent}
                events={events}/>
          </Grid.Column>
          <Grid.Column width={6}>
                  {/* <Button onClick={this.handleFormOpen} positive content="Create Course"/>
                  {this.state.isOpen && (
                  <CourseForm 
                  updateEvent = {this.handleUpdateEvent} 
                  selectedEvent={selectedEvent} 
                  createEvent={this.handleCreateEvent} 
                  handleCancle={this.handleCancle}/>)} */}
          </Grid.Column>
      </Grid>
    )
  }
}

export default connect(mapState, actions) (CourseDashboard);