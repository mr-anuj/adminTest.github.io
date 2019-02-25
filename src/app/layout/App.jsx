import React, { Component } from 'react';
import CourseDashboard from '../../features/course/CourseDashboard/CourseDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import { Container } from 'semantic-ui-react';
import {Route, Switch} from 'react-router-dom';
import CourseDetailed from '../../features/course/CourseDetailed/CourseDetailed';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import CourseForm from '../../features/course/CourseForm/CourseForm';
import HomePage from '../../features/home/HomePage';
import TestComponent from '../../features/testarea/TestComponent';
import CoursePageDashboard from '../../features/coursePage/CoursePageDashboard/CoursePageDashboard';
 
class App extends Component {
  render() {
    return (
      <div>
          <Switch>
             <Route exact path='/' component={ HomePage}/>
          </Switch>
          <Route path="/(.+)" render={() => (
            <div>
               <NavBar/>
                <Container className="main">
                  <Switch>
                    <Route path='/test' component={ TestComponent}/>                       
                      <Route path='/events' component={ CourseDashboard}/>
                      <Route path='/event/:id' component={CourseDetailed}/>
                      <Route path='/manage/:id' component={CourseForm}/>
                      <Route path='/people' component={ PeopleDashboard}/>
                      <Route path='/profile/:id' component={UserDetailedPage }/>
                      <Route path='/settings' component={ SettingsDashboard}/>
                      <Route path='/createEvent' component={ CourseForm}/>
                      <Route path='/course' component={ CoursePageDashboard}/>


                      </Switch>
                  </Container>
            </div>
          )}/>
           
      </div>
      
    );
  }
}

export default App;
