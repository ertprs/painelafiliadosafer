export const setBeneficiaryIdentity = (beneficiaryIdentity) => ({
  type: "SET_BENEFICIARY_IDENTITY",
  payload: {
    beneficiaryIdentity
  }
});

export const setPlotLocation = (plotLocation) => ({
  type: "SET_PLOT_LOCATION",
  payload: {
    plotLocation
  }
});

export const setHouses = (houses) => ({
  type: "SET_HOUSES",
  payload: {
    houses
  }
});

export const deleteHouse = () => ({
  type: "DELETE_HOUSE"
});

export const setResidents = (resident, houseNumber) => ({
  type: "SET_RESIDENTS",
  payload: {
    resident,
    houseNumber
  }
})

export const setFamilyUnitIdentification = (familyUnitIdentification) => ({
  type: "SET_FAMILY_UNIT_IDENTIFICATION",
  payload: {
    familyUnitIdentification
  }
})

export const setGeneralFamilyUnitInfo = (generalFamilyUnitInfo) => ({
  type: "SET_GENERAL_FAMILY_UNIT_INFO",
  payload: {
    generalFamilyUnitInfo
  }
})