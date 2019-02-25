import React, { Component } from 'react';
import {Segment, Item, Icon, Button,Grid,Image,Divider} from 'semantic-ui-react';

 class CoursePageListItem extends Component {
  render() {
    const {course,onCourseOpen,deleteCourse} = this.props;
  //  console.log("List"+ course.id);
    return (
     
      <Grid.Column width={5}>
          <Segment.Group>
            <Segment style={{padding:'0.5em'}}>
            <Image size="tiny" circular src={course.hostPhotoURL} centered style={{marginTop:'-4rem'}}/>
            </Segment>
            <Segment textAlign='center' inverted color='black'>
            <Item.Group>
              <Item>
                <Item.Content>
                  <Item.Header  style={{color:'white'}}>{course.title}</Item.Header>
                </Item.Content>
              </Item>
              </Item.Group>
            </Segment>
            <Segment>
            <Item.Group>
            
                <Item.Content>
                <Item.Description style={{margin:'0px'}}>Carrer</Item.Description>
                <Divider  style={{margin:'0'}}/>
                <Item.Description>{course.career}</Item.Description>
                </Item.Content>
            
              </Item.Group>
            </Segment>
            <Segment>
              <span>
                      <Icon name="clock" />{course.date}
                      
                </span>
            </Segment>
            <Segment clearing>
             
            <Button onClick={deleteCourse(course.id)} as="a" color="red" floated="left" content="Delete" /> 
              <Button onClick={onCourseOpen(course)} as='a' color='teal' floated='right' content="View"/>
            </Segment>
           </Segment.Group>
              </Grid.Column>
    )
  }
}
export default CoursePageListItem