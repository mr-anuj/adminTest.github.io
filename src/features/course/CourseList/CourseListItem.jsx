import React, { Component } from 'react';
import {Segment, Item, Icon, Button, List,Grid,Image,Divider} from 'semantic-ui-react';
import CourseListAttendee from './CourseListAttendee';
import { Link } from 'react-router-dom'

 class CourseListItem extends Component {

  render() {
    // const {event, onEventOpen,deleteEvent} = this.props;
    const {event,deleteEvent} = this.props;
    console.log("event "+ event.id);
    return (
      
                //  <Segment.Group>
                //     <Segment>
                //       <Item.Group>
                //         <Item>
                //           <Item.Image size="tiny" circular src={event.hostPhotoURL} />
                //           <Item.Content>
                //             <Item.Header as="a">{event.title}</Item.Header>
                //             <Item.Description>
                //               Hosted by <a>{event.hostedBy}</a>
                //             </Item.Description>
                //           </Item.Content>
                //         </Item>
                //       </Item.Group>
                //     </Segment>
                //     <Segment>
                //       <span>
                //         <Icon name="clock" /> {event.date} |
                //         <Icon name="marker" /> {event.venue}
                //       </span>
                //     </Segment>
                //     <Segment secondary>
                //       <List horizontal>
                //         {event.attendees && event.attendees.map((attendee) => (
                //             <CourseListAttendee key={attendee.id} attendee={attendee}/>
                //         ))}
                        
                //       </List>
                //     </Segment>
                //     <Segment clearing>
                //         <span>{event.description}</span>
                //       <Button onClick={deleteEvent(event.id)} as="a" color="red" floated="right" content="Delete" />
                //       {/* <Button onClick={onEventOpen(event)} as="a" color="teal" floated="right" content="View" /> */}
                //        <Button as={Link} to={`/event/${event.id}`} color="teal" floated="right" content="View" /> 


                //     </Segment>
                //   </Segment.Group>

                <Grid.Column width={5}>
                <Segment.Group>
                  <Segment style={{padding:'0.5em'}}>
                  <Image size="tiny" circular src={event.hostPhotoURL} centered style={{marginTop:'-4rem'}}/>
                  </Segment>
                  <Segment textAlign='center' inverted color='black'>
                  <Item.Group>
                    <Item>
                      <Item.Content>
                        <Item.Header  style={{color:'white'}}>{event.title}</Item.Header>
                      </Item.Content>
                    </Item>
                    </Item.Group>
                  </Segment>
                  <Segment>
                  <Item.Group>
                  
                      <Item.Content>
                      <Item.Description style={{margin:'0px'}}>Carrer</Item.Description>
                      <Divider  style={{margin:'0'}}/>
                      <Item.Description>{event.hostedBy}</Item.Description>
                      </Item.Content>
                  
                    </Item.Group>
                  </Segment>
                  <Segment>
                    <span>
                            <Icon name="clock" />{event.date}
                            
                      </span>
                  </Segment>
                  <Segment clearing>
                   
                  <Button onClick={deleteEvent(event.id)} as="a" color="red" floated="right" content="Delete" />
                  <Button as={Link} to={`/event/${event.id}`} color="teal" floated="right" content="View" /> 
                  </Segment>
                 </Segment.Group>
                    </Grid.Column>
                 
    )
  }
}
export default CourseListItem



