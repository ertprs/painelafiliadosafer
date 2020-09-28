
import axios from "axios";

export const registration = (data) => async (dispatch) => {
  try {

    await axios.post("")
    dispatch(successMessage(true));

  } catch (err) {
    console.error(err.message);
    dispatch(errorMessage(true));
  }
}

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