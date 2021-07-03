import React from "react";
import { useForm } from "react-hook-form";

const BasicForm = () => {
  const { regiser, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="container py-5">
        <div className="card p-4 w-50">
          <h1>Hello React</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="fullname"
                name="fullname"
                ref={regiser}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                ref={regiser}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                ref={regiser}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                ref={regiser}
              />
            </div>

            <div className="form-group">
              <label htmlFor="city">Address - City</label>
              <input
                type="text"
                className="form-control"
                id="city"
                name="address.city"
                ref={regiser}
              />
            </div>

            <div className="form-group">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="male"
                  value="male"
                  name="gender"
                  ref={regiser}
                />
                <label className="form-check-label" htmlFor="male">
                  male
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="female"
                  value="female"
                  name="gender"
                  ref={regiser}
                />
                <label className="form-check-label" htmlFor="female">
                  female
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="other"
                  value="other"
                  name="gender"
                  ref={regiser}
                />
                <label className="form-check-label" htmlFor="other">
                  other
                </label>
              </div>
            </div>
            <div className="form-group">
              <select className="custom-select" name="state" ref={regiser}>
                <option value="-1">Select your state</option>
                <option value="Delhi">Delhi</option>
                <option value="Punjab">Punjab</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Bihar">Bihar</option>
              </select>
            </div>

            <div className="form-group">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="terms"
                  value="agree"
                  name="terms"
                  ref={regiser}
                />
                <label className="form-check-label" htmlFor="terms">
                  I agree all terms and conditons
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="updates"
                  name="updates"
                  ref={regiser}
                />
                <label className="form-check-label" htmlFor="updates">
                  send me latest Bootstrap updates
                </label>
              </div>
            </div>

            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BasicForm;
