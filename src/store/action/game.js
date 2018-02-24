import * as types from '../constants/gameType'
export const getNav = (nav)=>{
    return {
        type:types.GET_NAV,
         nav
    }
}
export const getOrigin = (originNav)=>{  
    return {
        type:types.GET_ORIGIN,
       originNav
    }
}
export const getSportTypeAction = (sportType)=>{

    return {
        type:types.GET_SPORT_TYPE,
        sportType
    }
}
export const getListAction = (gameList)=>{
    return {
        type:types.GET_GAME_LIST,
        gameList
    }
}
export const getLeftId = (leftId) => {
    return {
        type:types.GET_GAME_LEFT_ID,
        leftId

    }
}

