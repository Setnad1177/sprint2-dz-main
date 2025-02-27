


const initState = {
    themeId: 1,
}
type initStateType = {
    themeId: number,
}
export type ACType = {
    type: 'SET_THEME_ID',
    id: number
}
export const themeReducer = (state = initState, action: ACType): initStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): ACType  => ({ type: 'SET_THEME_ID', id })


