import React from 'react'
import{Segment,Grid,Icon,Button,List,Header} from 'semantic-ui-react';
import CourseDetailedSideBar from './CourseDetailedSideBar';
const CourseDetailedInfo = ({event}) => {
  return (
     

      <div className="ui segment grid container row">
      <div className="sixteen wide mobile eight wide tablet sixteen wide computer column">
          <Header  color='grey'>{event.title} Training in Kathmandu, Nepal from Black Hawk</Header>
          <Header>Course Overview</Header>


          {/* <Segment.Group>
          <Segment attached="top">
            <Grid>
              <Grid.Column width={1}>
                <Icon size="large" color="teal" name="info" />
              </Grid.Column>
              <Grid.Column width={15}>
                <p>{event.description}</p>
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment attached>
            <Grid verticalAlign="middle">
              <Grid.Column width={1}>
                <Icon name="calendar" size="large" color="teal" />
              </Grid.Column>
              <Grid.Column width={15}>
                <span>{event.date}</span>
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment attached>
            <Grid verticalAlign="middle">
              <Grid.Column width={1}>
                <Icon name="marker" size="large" color="teal" />
              </Grid.Column>
              <Grid.Column width={11}>
                <span>{event.venue}</span>
              </Grid.Column>
              <Grid.Column width={4}>
                <Button color="teal" size="tiny" content="Show Map" />
              </Grid.Column>
            </Grid>
          </Segment>
        </Segment.Group> */}
{/*           




  
          <div class="ui segments" style={{fontWeight:'30px'}}>
              <div class="ui segment">
                  <p>Introduction to the command line</p>
              </div>
              <div class="ui segment">
                  <p>Managing physical storage</p>
              </div>
              <div class="ui segment">
                  <p>Learning how to install and configure software components and services</p>
              </div>
              <div class="ui segment">
                  <p>Establishing network connections and firewall access</p>
              </div>
              <div class="ui segment">
                  <p>Monitoring and managing processes</p>
              </div>
              <div class="ui segment">
                  <p>Managing and securing files</p>
              </div>
              <div class="ui segment">
                  <p>Administrating users and groups</p>
              </div>
              <div class="ui segment">
                  <p>Accessing Linux file systems</p>
              </div>
              <div class="ui segment">
                  <p>Installing and using virtualized systems</p>
              </div>
              <div class="ui segment">
                  <p>Reviewing the system log files and journal</p>
              </div>
          </div> */}


{event.courseOverview.map((evt)=>  
  <Segment.Group  style={{margin:'0'}}>
    <Segment>
   
              <Grid.Column width={15}>
                <Header>{evt}</Header>
              </Grid.Column>
    
              </Segment>
  </Segment.Group>
 
 )}
         


      </div>

      {/* <div class="sixteen wide mobile eight wide tablet four wide computer column">
     <CourseDetailedSideBar attendees={event.attendees}/>
      </div> */}
  </div>

  )
}

export default CourseDetailedInfo
