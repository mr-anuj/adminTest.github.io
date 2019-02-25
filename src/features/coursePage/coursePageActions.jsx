import{CREATE_COURSE_PAGE,UPDATE_COURSE_PAGE,DELETE_COURSE_PAGE} from './coursePageConstants';

export const createCoursePage = (course) => {
    return {
        type: CREATE_COURSE_PAGE,
        payload:{
            course
        }
    }
}
export const updateCoursePage = (course) => {
    return {
        type: UPDATE_COURSE_PAGE,
        payload:{
            course
        }
    }
}

export const deleteCoursePage = (courseId) => {
    return {
        type: DELETE_COURSE_PAGE,
        payload:{
            courseId
        }
    }
}

