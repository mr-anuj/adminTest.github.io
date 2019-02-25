import { combineReducers } from 'redux';
import {reducer as FormReducer} from 'redux-form';
import testReducer from '../../features/testarea/testReducer';
import  courseReducer from '../../features/course/courseReducer';
import coursePageReducer from '../../features/coursePage/coursePageReducer';

const rootReducer = combineReducers({
    test:testReducer,
    events:courseReducer,
    courses:coursePageReducer,


     form:FormReducer
})

export default rootReducer