import React, { Component } from 'react';
import {Segment, Form, Button} from 'semantic-ui-react';


const emptyCourse = {
    title:'',
    date:'',
    career:''
}

 class CoursePageForm extends Component {
     state={
         course:emptyCourse       
     }
     componentDidMount(){
       if(this.props.selectedCourse !== null){
        
         this.setState({
           course:this.props.selectedCourse
         })
       }
     }

     componentWillReceiveProps(nextProps){
 // console.log('current ', this.props.selectedCourse);
  //console.log('next ', nextProps.selectedCourse);
console.log(nextProps.selectedCourse );
  if(nextProps.selectedCourse !== this.props.selectedCourse) {
    this.setState({
      course: nextProps.selectedCourse || emptyCourse
    })
  }


}

     onFormSubmit=(evt)=> {
      evt.preventDefault();
         console.log(evt);
        if(this.state.course.id) {
          this.props.updateCourse(this.state.course);
        } else {
          this.props.createCourse(this.state.course);
        }
       
     }

    
     onInputChange = (evt) => {
      const newCourse = this.state.course;
      newCourse[evt.target.name] = evt.target.value
      this.setState({
         course:newCourse
      })
     }

  
  render() {
      const {handleCancle} = this.props;
      const {course} = this.state;
     
    return (
      <div>
              <Segment>
                <Form onSubmit={this.onFormSubmit}>
                  <Form.Field>
                    <label>Event Title</label>
                    <input name='title' value={course.title}  onChange={this.onInputChange} placeholder="Course Title" />
                  </Form.Field>
                  <Form.Field>
                    <label>Event Date</label>
                    <input type='date' name='date' value={course.date}  onChange={this.onInputChange}  placeholder="Starting Date" />
                  </Form.Field>
                  <Form.Field>
                    <label>Career</label>
                    <input  name='career'value={course.career}  onChange={this.onInputChange} placeholder="Career after the course" />
                  </Form.Field>
                  <Button positive type="submit">
                    Submit
                  </Button>
                  <Button onClick={handleCancle} type="button">Cancel</Button>
                </Form>
              </Segment>
      </div>
    )
  }
}
export default CoursePageForm