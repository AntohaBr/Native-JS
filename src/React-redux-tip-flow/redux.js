
const initialState = {
    items:[],
    status:'idle',
    error: null
}

const itemsReducer = (state= initialState,action)=>{
switch (action.type) {
    case 'status-changed':
        return {...state,status:action.status}
    case 'error-changed':
        return {...state,status:action.error}
    case 'items-loaded':
        return {...state,items:action.items}
    case 'item-deleted':
        return {
            ...state,items:state.items.filter(i => i.id !== action.id)
        }
    case 'item-updated':
            return {
                ...state,items:state.items.map(i => i.id !== action.id ? i :{...i,...action.data})
            }
    default:
        return state
}
}

export const itemsLoadedAC = (items)=>({type:'items-loaded',items})
export const itemDeletedAC = (itemID) =>({type:'item-deleted',itemID})
export const changeStatusAC = (status) =>({type:'status-changed',status})
export const setErrorAC = (error) =>({type:'error-changed',error})
export const itemsUpdatesdAC = (items)=>({type:'items-updates',items})

export const loadItemsTC = (categoryId) => (dispatch) => {
    dispatch(changeStatusAC('loading'))
    dispatch(setErrorAC(null))
    api.loadItems(categoryId)
        .then((res)=> {
            dispatch(itemsLoadedAC(res.data))
        })
        .catch(err =>{
            dispatch(setErrorAC(err))
        })
        .finally(()=>dispatch(changeStatusAC('idle')))
}


export const deleteItemsTC = (id) => (dispatch) => {
    dispatch(changeStatusAC('loading'))
    dispatch(setErrorAC(null))
    api.deleteItems(id)
        .then((res)=> {
            dispatch(itemDeletedAC(items.filter(i => i.id !== id)))
        })
        .catch(err =>{
            dispatch(setErrorAC(err))
        })
        .finally(()=>dispatch(changeStatusAC('idle')))
}


export const updatesItemsTC = (categoryId) => (dispatch) => {
    dispatch(itemsUpdatesdAC('loading'))
    dispatch(setErrorAC(null))
    api.updatesItems(categoryId)
        .then((res)=> {
            dispatch(itemsUpdatesdAC(items.map(i => i.id !== id ? i :{...i,...data})))
        })
        .catch(err =>{
            dispatch(setErrorAC(err))
        })
        .finally(()=>dispatch(changeStatusAC('idle')))
}
