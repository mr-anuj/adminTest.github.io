import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import CourseList from '../CourseList/CourseList';
import CourseForm from '../CourseForm/CourseForm';
import cuid from 'cuid'; // create random ID

const eventsDashboard = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  }
]



 class CourseDashboard extends Component {
  //  constructor(props) {
  //    super(props)

     state ={
       events:eventsDashboard,
       isOpen:false,
       selectedEvent:null

     }
     //this.handleFormOpen = this.handleFormOpen.bind(this);
     //this.handleCancle = this.handleCancle.bind(this);

   

   handleFormOpen =() =>{
      this.setState({
        selectedEvent:null,
        isOpen:true
      })
   }

   handleCancle =() =>{
    this.setState({
      isOpen:false
    })
 }

handleUpdateEvent = (updatedEvent) => {
  this.setState({
    events:this.state.events.map(event => {
      if(event.id === updatedEvent.id) {
        return Object.assign({}, updatedEvent);
      } else {
        return event
      }
    }),
    isOpen:false,
    selectedEvent:null
  })
}


 handleOpenEvent = (eventToOpen) => () => {
   this.setState({
     selectedEvent:eventToOpen,
     isOpen: true
   })
 }


handleDeleteEvent = (eventId) => () => {
  const updatedEvents = this.state.events.filter(e => e.id !== eventId);
  this.setState({
    events:updatedEvents
  })
}

 handleCreateEvent = (newEvent) => {
   newEvent.id = cuid();
   newEvent.hostPhotoURL='assets/user.jpg';
   const updatedEvents = [...this.state.events, newEvent];
   this.setState({
     events:updatedEvents,
     isOpen:false
   })
 }
 

  render() {
    const {selectedEvent} = this.state;
    return (
      <Grid>
          <Grid.Column width={10}>
                {/* <CourseList events={eventsDashboard}/> */}
                <CourseList deleteEvent={this.handleDeleteEvent} onEventOpen={this.handleOpenEvent} events={this.state.events}/>
          </Grid.Column>
          <Grid.Column width={6}>
                  <Button onClick={this.handleFormOpen} positive content="Create Course"/>
                  {this.state.isOpen && (
                  <CourseForm updateEvent = {this.handleUpdateEvent} selectedEvent={selectedEvent} createEvent={this.handleCreateEvent} handleCancle={this.handleCancle}/>)}
          </Grid.Column>
      </Grid>
    )
  }
}

export default CourseDashboard