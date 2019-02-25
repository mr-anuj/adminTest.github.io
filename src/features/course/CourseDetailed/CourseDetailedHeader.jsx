import React from 'react';
import{Segment,Image,Item,Header,Button,List,Icon,Grid,Divider} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const eventImageStyle = {
    //filter: 'brightness(30%)',
    // width:'155 px', 
    // height:'55 px'
};

const eventImageTextStyle = {
 //   position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'black',
  
};

const CourseDetailedHeader = ({event}) => {
  return (
      //  <Segment.Group>
      //     <Segment basic attached="top" style={{ padding: '0' }}>
      //       <Image src={`/assets/categoryImages/${event.category}.jpg`} fluid style={eventImageStyle}/>
    
      //       <Segment basic style={eventImageTextStyle}>
      //         <Item.Group>
      //           <Item>
      //             <Item.Content>
      //               <Header
      //                 size="huge"
      //                 content={event.title}
      //                 style={{ color: 'white' }}
      //               />
      //               <p>{event.date}</p>
      //               <p>
      //                 Hosted by <strong>{event.hostedBy}</strong>
      //               </p>
      //             </Item.Content>
      //           </Item>
      //         </Item.Group>
      //       </Segment>
      //     </Segment>
    
      //     <Segment attached="bottom">
      //       <Button>Cancel My Place</Button>
      //       <Button color="teal">JOIN THIS EVENT</Button>
    
      //       <Button as={Link} to={`/manage/${event.id}`} color="orange" floated="right">
      //         Manage Event
      //       </Button>
      //     </Segment>
      //   </Segment.Group>


      < Segment.Group className="ui segment internally centered grid container">
        
      <div className="row">
          <div className="sixteen wide mobile eight wide tablet five wide computer column">
          
              
              <Image src={`/assets/categoryImages/${event.category}.jpg`} size='medium'  
              style={{ height: 200 }} alt="255 x 155"/>
      
          </div>

          <div className="sixteen wide mobile four wide tablet eight wide computer column" >
          <Item.Group>
                <Item>
                 <Item.Content>
                    <Header
                      size="huge"
                      content={event.title}
                      textAlign='center'
                    />
                    <p>{event.date}</p>
                  
                      {/* Hosted by : <strong>{event.career}</strong> */}
                      <Grid columns={2} relaxed='very'>
                            <Grid.Column>
                            Career :
                      {event.career.map((evt)=>
                         <List style={{ margin: '0' }}>
                            <List.Item>
                            
                            <List.List>
                            <span>
                            <Icon name="angle right" />{evt}
                            
                      </span>
                            </List.List>
                            </List.Item>
                            
                            
                         </List>
                        )}

                            </Grid.Column>

                            <Grid.Column>

                            Career :
                      {event.career.map((evt)=>
                         <List style={{ margin: '0' }}>
                            <List.Item>
                            
                            <List.List>
                            <span>
                            <Icon name="angle right" />{evt}
                            
                      </span>
                            </List.List>
                            </List.Item>
                            
                            
                         </List>
                        )}
                            </Grid.Column>
                
                     </Grid>
                     


                   
                    
                 </Item.Content>
                 </Item>
              </Item.Group>
         
              {/* <Header textAlign='center' size='huge'> {event.title}</Header> */}
            
        
          </div>
         



          <div className="sixteen wide mobile eight wide tablet three wide computer column">
              <button className="fluid centered ui green button" style={{marginTop: '50px'}}>
                  <h3>Enroll Now</h3>
              </button>
          </div>
      </div>
 
      </Segment.Group>




  )
}

export default CourseDetailedHeader
