export const successMessage = (success) => ({
  type: "SUCCESS",
  payload: {
    success
  }
})


export const errorMessage = (error) => ({
  type: "ERROR",
  payload: {
    error
  }
})