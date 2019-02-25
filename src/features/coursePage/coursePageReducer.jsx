import {createReducer} from '../../app/common/util/reducerUtil';
import {CREATE_COURSE_PAGE,UPDATE_COURSE_PAGE,DELETE_COURSE_PAGE} from './coursePageConstants'




const initialState = [
    {
      id: '1',
      title: 'Linux System Administrator',
      date: '2018-03-27',
      category: 'Server',
      career:'Linux System Administrator, Network, System Administrator and System Analyst',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
      city: 'London, UK',
      venue: "BlackHawk, Chabahil, Kathmandu",
      hostedBy: 'Bob',
      hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    
      attendees: [
        {
          id: 'a',
          name: 'Bob',
          photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
        },
        {
          id: 'b',
          name: 'Tom',
          photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
        }
      ]
    },
    {
      id: '2',
      title: 'React js',
      date: '2018-03-28',
      category: 'Programming',
      career:'UX Desinger , Web Design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
      city: 'London, UK',
      venue: "BlackHawk, Chabahil, Kathmandu",
      hostedBy: 'Tom',
      hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
      attendees: [
        {
          id: 'b',
          name: 'Tom',
          photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
        },
        {
          id: 'a',
          name: 'Bob',
          photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
        }
      ]
    }
  ]


  export const createCoursePage=(state, payload)=> {
      return [...state, Object.assign({},payload.course)]
  }

  export const updateCoursePage=(state, payload)=> {
    return [
            ...state.filter(course => course.id !== payload.course.id),
            Object.assign({}, payload.course)
    ]
}

export const deleteCoursePage=(state, payload)=> {
    return [...state.filter(course => course.id !== payload.courseId)]
}

export default createReducer(initialState,{
    [CREATE_COURSE_PAGE]:createCoursePage,
    [UPDATE_COURSE_PAGE]:updateCoursePage,
    [DELETE_COURSE_PAGE]:deleteCoursePage

})