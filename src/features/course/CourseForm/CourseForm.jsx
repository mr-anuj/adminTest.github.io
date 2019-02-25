import React, { Component } from 'react';
import { Segment, Form, Button, Grid, Header} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {composeValidators, combineValidators, isRequired,hasLengthGreaterThan} from 'revalidate';
import {  createEvent,updateEvent} from '../courseActions';
import cuid from 'cuid';
import {reduxForm, Field} from 'redux-form';
import TextInput from '../../../app/common/form/TextInput';
import TextArea from '../../../app/common/form/TextArea';
import SelectInput from '../../../app/common/form/SelectInput';
import DateInput from '../../../app/common/form/DateInput';
import moment from'moment';





// const emptyEvent = {
//   title:'',
//     date:'',
//     city:'',
//     venue:'',
//     hostedBy:''
// }

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  // let event ={
  //   title:'',
  //   date:'',
  //   city:'',
  //   venue:'',
  //   hostedBy:''
  // }

  let event={};
  if(eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }

  return {
    //event
    initialValues:event
  }

}

const actions={
  createEvent,
  updateEvent
}
const category = [
    {key: 'drinks', text: 'Drinks', value: 'drinks'},
    {key: 'culture', text: 'Culture', value: 'culture'},
    {key: 'film', text: 'Film', value: 'film'},
    {key: 'food', text: 'Food', value: 'food'},
    {key: 'music', text: 'Music', value: 'music'},
    {key: 'travel', text: 'Travel', value: 'travel'},
    {key: 'animal', text: 'animal', value: 'animal'},

];

const validate = combineValidators({
    title: isRequired({message:'The event title is required'}),
    category: isRequired({message:'Please provide a category'}),
    description:composeValidators(
      isRequired({message:'Please enter a description'}),
      hasLengthGreaterThan(4)({
        message:'Description needs to be at least 5 character'
      })
    )(),
    city: isRequired('city'),
    venue:isRequired('venue'),
    date:isRequired('date')

    
})

 class CourseForm extends Component {
    // state ={
    //   //event: emptyEvent
    //   event: Object.assign({}, this.props.event)
    // }
   
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

  
  onFormSubmit = (values) => { 
   // evt.preventDefault();
    //console.log(this.state.event);
    values.date=moment(values.date).format();
    if(this.props.initialValues.id) {
      this.props.updateEvent(values);
      this.props.history.goBack();
    } else {
      const newEvent ={
        ...values,
        id:cuid(),
        hostPhotoURL:'/assets/user.jpg',
        hostedBy:'Bob'
      }
     // this.props.createEvent(this.state.event);
      this.props.createEvent(newEvent);
      this.props.history.push('/events');

    }
   
  }

  // onInputChange =(evt) => {
  //   const newEvent = this.state.event;
  //   newEvent[evt.target.name] = evt.target.value;
  //   this.setState({
  //     // event:{
  //     //   title: evt.target.value
      
  //     // }
  //     event: newEvent
  //   })
  // }
  render() {

    // const {handleCancle}=this.props;
    // const {event} = this.state;
    const {invalid, submitting, pristine} = this.props;
    return (
              <Grid>
                  <Grid.Column width={10}>
                  <Segment>
                      <Header sub color='teal' content='Event Details'/>
                  <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
                    {/* <Form.Field>
                      <label>Event Title</label>
                      <input name="title" onChange={this.onInputChange} value={event.title} placeholder="Event Name" />
                    </Form.Field> */}
                    <Field name='title' type='text' component={TextInput} placeholder='Give your event your Name'/>
                    <Field name='category'
                     type='text'
                     component={SelectInput}
                     options={category}
                    //  multiple={true}
                     placeholder='Give your event about'/>
                    <Field name='description' type='text' rows={3} component={TextArea} placeholder='Tell us about your event'/>
                    <Header sub color='teal' content='Event Location Details'/>
                    <Field name='city' type='text' component={TextInput} placeholder='Event City'/>
                    <Field name='venue' type='text' component={TextInput} placeholder='Event Venue'/>
                    <Field name='date' type='text'
                      component={DateInput} 
                     dateFormat="MM-DD-YYYY HH:mm"
                      timeFormat='HH:mm'
                      showTimeSelect
                      placeholder='Date and Time of Event'/>

                   
                    <Button disabled={invalid || submitting || pristine} positive type="submit">
                      Submit
                    </Button>
                    {/* <Button onClick={handleCancle} type="button">Cancel</Button> */}
                    <Button onClick={this.props.history.goBack} type="button">Cancel</Button> 
                      
                  </Form>
                </Segment>

                  </Grid.Column>
              </Grid>
          
    )
  }
}
export default connect(mapState, actions)
(reduxForm({form: 'courseForm', enableReinitialize:true, validate})
(CourseForm));



 {/* <Form.Field>
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
                    </Form.Field> */}