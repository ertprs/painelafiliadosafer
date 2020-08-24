const initialState = {
  beneficiaryIdentity: {},
  plotLocation: {},
  houses: [],
  residents: [{}]
}

const RegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BENEFICIARY_IDENTITY':
      return { ...state, beneficiaryIdentity: action.payload.beneficiaryIdentity };
    case 'SET_PLOT_LOCATION':
      return { ...state, plotLocation: action.payload.plotLocation };
    case 'SET_HOUSES':
      state.houses.push(action.payload.houses);
    case 'DELETE_HOUSE':
      state.houses.pop();
    case 'SET_RESIDENTS':
      state.residents.push({
        houseNumber: state.residents.length - 1,
        residents: action.payload.residents
      })
    default:
      return state;
  }
}

export default RegisterReducer;