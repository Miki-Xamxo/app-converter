
const initialState = {
  items: []
}

const updateDataCoins = (arr1, arr2) => {
  console.log(arr1)
  console.log(arr2)
}

const coins = (state = initialState, action) => {
  switch(action.type){
    case 'SET_COINS':
      const newObj =  updateDataCoins(state.items, action.payload)

      return {
        ...state,
        items: [...action.payload]
      }
    default:
      return state
  }
}

export default coins