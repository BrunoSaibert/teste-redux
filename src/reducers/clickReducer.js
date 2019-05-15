export const clickReducer = (state = { newValue: '' }, action) => {
  switch (action.type) {
    case 'click': return {
      ...state, newValue: action.newValue
    }

    default:
      return state;
  }
}