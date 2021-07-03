import React from "react";
import { get, useForm } from "react-hook-form";
import classNames from "classnames";

const AdvanceFormValidation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
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
            <label htmlFor="password">Password</label>
            <input
              type="password"
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
            <label htmlFor="confirm_password">Confirm Password</label>
            <input
              type="password"
              className={classNames("form-control", {
                "is-invalid": errors.confirm_password,
              })}
              id="confirm_password"
              name="confirm_password"
              placeholder="Enter Your confirm_password"
              {...register("confirm_password", {
                required: "confirm_password is required",

                pattern: {
                  value:
                    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                  message:
                    " Password (UpperCase, LowerCase, Number/SpecialChar and min 8 Chars)",
                },
                validate: (data) =>
                  data === getValues("password") || "Password does not match",
              })}
            />
            <span>
              {errors.confirm_password && (
                <div>{errors.confirm_password.message}</div>
              )}
            </span>
          </div>
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => console.log(getValues())}
          >
            Get Values Print in Console Log
          </button>
          <button className="btn btn-primary" type="submit">
            Create New Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdvanceFormValidation;
