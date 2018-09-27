// src/reducers/selected-pizza.js

export default (currentState = null, action = {}) => {
  switch (action.type) {
  case 'SELECT_PIZZA':
    return action.payload
  default:
    return currentState
  }
}
