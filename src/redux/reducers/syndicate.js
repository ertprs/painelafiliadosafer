import MeuSindicatoData from "../../views/sindicato/meusindicato/MeuSindicatoData";

const initialState = {
  syndicate: MeuSindicatoData,
}

const SyndicateReducer = (state = initialState, action) => {
  switch(action.type) {
    case "EDIT_SYNDICATE":
      return {...state, syndicate: action.payload.syndicate};
    default: 
    return state;
  }
}

export default SyndicateReducer;