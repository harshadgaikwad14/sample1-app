import React from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";

const FormValidation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };
  return (
    <div className="card mb-4">
      <div className="card card-header"> Basic Information</div>
      <div className="card card-body">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              className={classNames("form-control", {
                "is-invalid": errors.fullname,
              })}
              id="fullname"
              placeholder="Enter Your Full Name"
              {...register("fullname", {
                required: "this Field Is required",
                minLength: {
                  value: 4,
                  message: "Min Length is 4",
                },
              })}
            />
            <span>
              {errors.fullname && <div>{errors.fullname.message}</div>}
            </span>
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail Address</label>
            <input
              type="text"
              className={classNames("form-control", {
                "is-invalid": errors.email,
              })}
              id="email"
              name="email"
              placeholder="Enter Your E-mail Address"
              {...register("email", {
                required: "email is required",
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Please Enter valid email id",
                },
              })}
            />
            <span>{errors.email && <div>{errors.email.message}</div>}</span>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              className={classNames("form-control", {
                "is-invalid": errors.phone,
              })}
              id="phone"
              name="phone"
              placeholder="Enter Your Phone Number"
              {...register("phone", {
                required: "Phone is required",
                pattern: {
                  value: /^\d{10}$/,
                  message: "Please Enter 10 digit Only",
                },
              })}
            />
            <span>{errors.phone && <div>{errors.phone.message}</div>}</span>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              className={classNames("form-control", {
                "is-invalid": errors.password,
              })}
              id="password"
              name="password"
              placeholder="Enter Your Password"
              {...register("password", {
                required: "password is required",
                pattern: {
                  value:
                    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                  message:
                    " Password (UpperCase, LowerCase, Number/SpecialChar and min 8 Chars)",
                },
              })}
            />
            <span>
              {errors.password && <div>{errors.password.message}</div>}
            </span>
          </div>
          <div className="form-group">
            <label htmlFor="state">Choose Your State</label>
            <select
              className={classNames("form-control", {
                "is-invalid": errors.state,
              })}
              id="state"
              name="state"
              {...register("state", { required: true })}
            >
              <option value="">--- Select Your State ---</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Assam">Assam</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Punjab">Punjab</option>
            </select>
            <span>{errors.state && "state Required"}</span>
          </div>
          <div className="form-group">
            <label htmlFor="gender" className="mr-4">
              Choose Your Gender
            </label>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="male"
                value="male"
                name="gender"
                {...register("gender", {
                  required: "Please select the gender",
                })}
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
                {...register("gender", {
                  required: "Please select the gender",
                })}
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
                {...register("gender", {
                  required: "Please select the gender",
                })}
              />
              <label className="form-check-label" htmlFor="other">
                other
              </label>
            </div>
            <span>{errors.gender && <div>{errors.gender.message}</div>}</span>
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="tnc"
                name="tnc"
                {...register("tnc", { required: "this field is required" })}
              />
              <label className="form-check-label" htmlFor="tnc">
                I agree all terms & conditions
              </label>
            </div>
            <span>{errors.tnc && <div>{errors.tnc.message}</div>}</span>
          </div>
          <button className="btn btn-primary" type="submit">
            Create New Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormValidation;
