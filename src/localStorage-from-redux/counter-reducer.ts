const initialState = {
    value: 1000
}

type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "INC_VALUE":
            return {
                ...state, value: state.value + 1
            }
        case "SET_VALUE_FROM_LOCAL_STORAGE":
            return {
                ...state, value: action.value
            }
        default:
            return state
    }
}


 type incValueACType = ReturnType<typeof incValueAC>
 type setValueFromLocalStorageACType = ReturnType<typeof setValueFromLocalStorageAC>
 export type ActionType = incValueACType | setValueFromLocalStorageACType


export const incValueAC = () => ({type: 'INC_VALUE'} as const)
export const setValueFromLocalStorageAC = (value:number) => ({type: 'SET_VALUE_FROM_LOCAL_STORAGE',value} as const)