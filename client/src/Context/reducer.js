let patient = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).patient
  : false;
let doctor = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).doctor
  : false;
let token = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).token
  : false;

export const initialState = {
  patient: false || patient,
  doctor: false || doctor,
  token: false || token,
  loading: false,
  errorMessage: null,
};

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...initialState,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        patient: action.payload.patient,
        doctor: action.payload.doctor,
        token: action.payload.token,
        loading: false,
      };
    case "LOGOUT":
      return {
        ...initialState,
        patient: "",
        doctor: "",
        token: "",
      };

    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };
    case "REQUEST_REGISTER":
      return {
        ...initialState,
        loading: true,
      };
    case "REGISTER_SUCCESS":
      return {
        ...initialState,
        patient: action.payload.patient,
        doctor: action.payload.doctor,
        token: action.payload.token,
        loading: false,
      };
    case "REGISTER_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };

    case "PATIENT_FETCH_SUCCESS":
      return {
        ...initialState,
        patient: action.payload.patient,
      };

    case "DOCTOR_FETCH_SUCCESS":
      return {
        ...initialState,
        doctor: action.payload.doctor,
      };

    case "REQUEST_CHANGE_PASSWORD":
      return {
        ...initialState,
        loading: true,
      };

    case "CHANGE_PASSWORD_SUCCESS":
      return {
        ...initialState,
        patient: action.payload.patient,
        doctor: action.payload.doctor,
        token: action.payload.token,
        loading: false,
      };

    case "CHANGE_PASSWORD_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
