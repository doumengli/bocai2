import * as types from '../constants/gameType'
const initalState ={
    nav:null,
    originNav:null,
    sportType:'00',
    gameList:null,
    leftId:0
}
// const game = (state={},action)=>{
//     return state
// }
// export default game
const game = (state=initalState,action)=>{
    switch (action.type){
        case types.GET_NAV:
            return Object.assign({}, state, {nav:action.nav})
        case types.GET_ORIGIN:
            return Object.assign({}, state, {originNav:action.originNav})
        case types.GET_SPORT_TYPE:
            return Object.assign({}, state, {sportType:action.sportType})
        case types.GET_GAME_LIST:
            return Object.assign({}, state, {gameList:action.gameList})
        case types.GET_GAME_LEFT_ID:
            return Object.assign({}, state, {leftId:action.leftId})
            default :
         return state
    }
}
export default game
