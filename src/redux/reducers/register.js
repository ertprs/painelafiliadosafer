const initialState = {
  beneficiaryIdentity: {},
  plotLocation: {},
  houses: [[]],
  familyUnitIdentification: {},
}

const RegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BENEFICIARY_IDENTITY':
      return { ...state, beneficiaryIdentity: action.payload.beneficiaryIdentity };
    case 'SET_PLOT_LOCATION':
      return { ...state, plotLocation: action.payload.plotLocation };
    case 'SET_HOUSES':
      return {...state, houses: [...state.houses, action.payload.houses]};
    case 'DELETE_HOUSE':
      state.houses.pop();
      return state;
    case 'SET_RESIDENTS':
      state.houses[action.payload.houseNumber - 1].push(action.payload.resident);
      return state;
    case 'SET_FAMILY_UNIT_IDENTIFICATION':
      return {...state, familyUnitIdentification: action.payload.familyUnitIdentification }
    default:
      return state;
  }
}

export default RegisterReducer;