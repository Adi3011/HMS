import { useEffect, useState } from "react";
import {
  useAuthDispatch,
  useAuthState,
  updateAccount,
  logout,
  fetchPatient,
  fetchDoctor,
} from "../Context";
import { Navigation } from "./Navigation";

export const PatientAccount = (props) => {
  const initialState = {
    phone: "",
    email: "",
    customaddress: "",
    city: "",
    state: "",
    zip: "",
    allergies: "",
    bloodgroup: "",
    errorMessage: "",
    successMessage: "",
  };
  const [state, setState] = useState(initialState);

  const dispatch = useAuthDispatch();
  const { token, loading } = useAuthState();

  const handleOnChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await updateAccount(dispatch, {
        ...state,
        token: "patient " + token,
      });
      if (res.success)
        setState({
          ...initialState,
          successMessage: "Data successfully Updated!",
        });
      else setState({ ...initialState, errorMessage: "Something went wrong!" });
    } catch (error) {
      setState({ ...initialState, errorMessage: "Something went wrong!" });
    }
  };

  return (
    <div>
      <Navigation homelink="/patient" />
      <div className="container">
        <div className="row my-5 py-md-5">
          <div className="offset-md-2 col-md-8">
            <div id="accordion">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Personal
                    </button>
                  </h5>
                </div>

                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <form className="p-3" onSubmit={handleOnSubmit}>
                      <div className="form-group">
                        <input
                          type="phone"
                          className="form-control"
                          name="phone"
                          value={state.phone}
                          onChange={handleOnChange}
                          placeholder="Phone"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={state.email}
                          onChange={handleOnChange}
                          placeholder="Email"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="customaddress"
                          value={state.customaddress}
                          onChange={handleOnChange}
                          placeholder="H No. 123, Near xyz"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="city"
                          value={state.city}
                          onChange={handleOnChange}
                          placeholder="City"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="state"
                          value={state.state}
                          onChange={handleOnChange}
                          placeholder="State"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="number"
                          className="form-control"
                          name="zip"
                          aria-describedby="error"
                          value={state.zip}
                          onChange={handleOnChange}
                          placeholder="Zip"
                        />
                        <small id="error" className="form-text">
                          {state.errorMessage}
                          <div className="successMessage">
                            {state.successMessage}
                          </div>
                        </small>
                      </div>
                      <button
                        disabled={loading}
                        type="submit"
                        className="btn btn-primary"
                      >
                        Update
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Medical
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <form className="p-3" onSubmit={handleOnSubmit}>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="allergies"
                          value={state.allergies}
                          onChange={handleOnChange}
                          placeholder="Allergies eg. allergy 1, allergy 2, ..."
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="bloodgroup"
                          aria-describedby="error"
                          value={state.bloodgroup}
                          onChange={handleOnChange}
                          placeholder="Bloodgroup"
                        />
                        <small id="error" className="form-text">
                          {state.errorMessage}
                          <div className="successMessage">
                            {state.successMessage}
                          </div>
                        </small>
                      </div>
                      <button
                        disabled={loading}
                        type="submit"
                        className="btn btn-primary"
                      >
                        Update
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DoctorAccount = (props) => {
  const initialState = {
    phone: "",
    email: "",
    customaddress: "",
    city: "",
    state: "",
    zip: "",
    degree: "",
    errorMessage: "",
    successMessage: "",
  };
  const [state, setState] = useState(initialState);

  const dispatch = useAuthDispatch();
  const { token, loading } = useAuthState();

  const handleOnChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await updateAccount(dispatch, {
        ...state,
        token: "doctor " + token,
      });
      if (res.success)
        setState({
          ...initialState,
          successMessage: "Data successfully Updated!",
        });
      else setState({ ...initialState, errorMessage: "Something went wrong!" });
    } catch (error) {
      setState({ ...initialState, errorMessage: "Something went wrong!" });
    }
  };

  return (
    <div>
      <Navigation homelink="/doctor" />
      <div className="container">
        <div className="row my-5 py-md-5">
          <div className="offset-md-2 col-md-8">
            <div id="accordion">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Personal
                    </button>
                  </h5>
                </div>

                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <form className="p-3" onSubmit={handleOnSubmit}>
                      <div className="form-group">
                        <input
                          type="phone"
                          className="form-control"
                          name="phone"
                          value={state.phone}
                          onChange={handleOnChange}
                          placeholder="Phone"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={state.email}
                          onChange={handleOnChange}
                          placeholder="Email"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="degree"
                          value={state.degree}
                          onChange={handleOnChange}
                          placeholder="Degree"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="customaddress"
                          value={state.customaddress}
                          onChange={handleOnChange}
                          placeholder="H No. 123, Near xyz"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="city"
                          value={state.city}
                          onChange={handleOnChange}
                          placeholder="City"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="state"
                          value={state.state}
                          onChange={handleOnChange}
                          placeholder="State"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="number"
                          className="form-control"
                          name="zip"
                          aria-describedby="error"
                          value={state.zip}
                          onChange={handleOnChange}
                          placeholder="Zip"
                        />
                        <small id="error" className="form-text">
                          {state.errorMessage}
                          <div className="successMessage">
                            {state.successMessage}
                          </div>
                        </small>
                      </div>
                      <button
                        disabled={loading}
                        type="submit"
                        className="btn btn-primary"
                      >
                        Update
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
