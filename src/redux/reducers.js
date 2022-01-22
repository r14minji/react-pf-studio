import { combineReducers } from "redux";
import notice from '../dbs/notice.json';

//초기상태로 들어갈 값
// const initMember = {
//   members: [
//     {name:'David', position:'CEO'},
//     {name:'Emma', position:'Designer'},
//     {name:'Michael', position:'Developer'}
//   ]
// }

// const memberReducer=(state=initMember, action)=>{
//   switch (action.type){
//     case 'SET_MEMBERS' :
//       return {...state, members: action.payload}

//     default:
//       return state;
//   }
// }

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

const reducers = combineReducers({
  youtubeReducer, newsReducer, noticeReducer
})

export default reducers;