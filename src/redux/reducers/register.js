const initialState = {
  beneficiaryIdentity: {},
  plotLocation: {},
  houses: [[]],
}

const RegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BENEFICIARY_IDENTITY':
      return { ...state, beneficiaryIdentity: action.payload.beneficiaryIdentity };
    case 'SET_PLOT_LOCATION':
      return { ...state, plotLocation: action.payload.plotLocation };
    case 'SET_HOUSES':
      state.houses.push(action.payload.houses);
      break;
    case 'DELETE_HOUSE':
      state.houses.pop();
      break;
    case 'SET_RESIDENTS':
      state.houses[action.payload.houseNumber - 1].push(action.payload.resident);
    default:
      return state;
  }
}

export default RegisterReducer;