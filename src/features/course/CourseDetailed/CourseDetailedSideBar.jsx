import React from 'react'
import{Segment,List,Label,Item,Image,Button} from 'semantic-ui-react';
const CourseDetailedSideBar = ({attendees}) => {
   const isHost =false;
  return (














<Segment.Group style={{backgroundColor:'white', marginTop: '5%'}}>
    <Segment> Length: 6 weeks</Segment>
    <Segment> Mode of Class</Segment>
    
    <Segment.Group>
      <Segment>Classroom Training</Segment>
      <Segment>Online Training</Segment>
      <Segment>Corporate Training</Segment>
      <Segment>Training On Demand</Segment>

    </Segment.Group>
    <Segment  textAlign='center'>
    <Button circular color='facebook' icon='facebook' />
    <Button circular color='twitter' icon='twitter' />
    <Button circular color='linkedin' icon='linkedin' />
    <Button circular color='google plus' icon='google plus' />
    </Segment>
    
    
  </Segment.Group> 
  




  )
}

export default CourseDetailedSideBar



{/* <Segment.Group style={{backgroundColor:'white'}}>
    <Segment> Length: 6 weeks</Segment>
    <Segment> Mode of Class</Segment>
    
    <Segment.Group>
      <Segment>Classroom Training</Segment>
      <Segment>Online Training</Segment>
      <Segment>Corporate Training</Segment>
      <Segment>Training On Demand</Segment>

    </Segment.Group>
    
    
    
  </Segment.Group> */}





//  <div>
  //     <Segment
  //       textAlign="center"
  //       style={{ border: 'none' }}
  //       attached="top"
  //       secondary
  //       inverted
  //       color="black"
  //     >
  //       {attendees && attendees.length} {attendees && attendees.lenght ===1 ? 'Person' : 'People'} Going
  //     </Segment>
  //     <Segment attached>
  //       <List relaxed divided>
  //       {attendees && attendees.map((attendee) => (
  //           <Item key={attendee.id} style={{ position: 'relative' }}>
  //           {isHost && 
  //           <Label
  //             style={{ position: 'absolute' }}
  //             color="orange"
  //             ribbon="right"
  //           >
  //             Host
  //           </Label>}
  //           <Image size='tiny' src={attendee.photoURL}/>
  //           <Item.Content verticalAlign="middle">
  //             <Item.Header as="h3">
  //               <a>{attendee.name}</a>
  //             </Item.Header>
  //           </Item.Content>
  //         </Item>

  //       ))}
          
  //       </List>
  //     </Segment>
  //   </div>


{/* <div className="ui segment grid container row">




          <div className="ui content" style={{backgroundColor:'black'}}>
            <div className="header" style={{color:'white'}}>
              Length: 6 weeks
            </div>
                        </div> 
                             <div className="ui content">
                             
                             <h4 className="sub header">
                                <u>Mode of Class</u>
                             </h4>
                             <div className="ui header">
                              
                              <ul style={{listStyleType: "none",}}>
                                <li>Classroom Training</li>
                                <li>Online Training</li>
                                <li>Corporate Training</li>
                                <li>Training On Demand</li>
                              </ul>
                            </div>
                          </div>
                          <div className="ui header content" style={{backgroundColor:'black'}}>
                            <div className="content" >
                              <button className="ui circular facebook icon button">
                                <i className="facebook icon"></i>
                              </button>
                              <button className="ui circular twitter icon button">
                                <i className="twitter icon"></i>
                              </button>
                              <button className="ui circular linkedin icon button">
                                <i className="linkedin icon"></i>
                              </button>
                              <button className="ui circular google plus icon button">
                                <i className="google plus icon"></i>
                              </button>
            </div>
          </div>
        </div> */}