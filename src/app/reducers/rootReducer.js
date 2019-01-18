import { combineReducers } from 'redux';
import testReducer from '../../features/testarea/testReducer';
import  courseReducer from '../../features/course/courseReducer';

const rootReducer = combineReducers({
    test:testReducer,
    events:courseReducer
})

export default rootReducer