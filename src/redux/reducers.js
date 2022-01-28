import { combineReducers } from "redux";
import notice from '../dbs/notice.json';
import review from '../dbs/review.json';


const youtubeReducer = (state={youtube:[]}, action) => {
  switch (action.type){
    case 'SET_YOUTUBE' :
      return {...state, youtube: action.playload}
    default:
      return state;
  }
}

const newsReducer = (state={news:notice.news}, action)=>{
  switch (action.type){
    case 'SET_NEWS' :
      return {...state, news: action.playload}
    default :
    return state;
  }
}

const noticeReducer = (state={notice:notice.data}, action)=>{
  switch (action.type){
    case 'SET_NOTICE' :
      return {...state, notice: action.playload}
    default:
      return state;
  }
}

const reviewReducer = (state = {review:review.basic}, action)=>{
  switch (action.type){
    case 'SET_REVIEW' :
      return {...state, review: action.playload}
    default :
    return state;
  }
}


const reducers = combineReducers({
  youtubeReducer, newsReducer, noticeReducer, reviewReducer
})

export default reducers;