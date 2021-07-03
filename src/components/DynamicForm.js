import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

const UserInformation = (props) => {
  const { register, control } = props;
  const { append, fields, remove } = useFieldArray({
    control,
    name: "users",
  });

  return (
    <div className="card mb-4">
      <div className="card card-header"> User Information</div>
      <div className="card card-body">
        {fields.map((item, index) => (
          <div className="form-row" key={item.id}>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your First name"
                name={`users[${index}].firstName`}
                defaultValue={item.firstName}
                {...register(`users[${index}].firstName`)}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Last name"
                name={`users[${index}].lastName`}
                defaultValue={item.lastName}
                {...register(`users[${index}].lastName`)}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your E-mail Address"
                name={`users[${index}].email`}
                defaultValue={item.email}
                {...register(`users[${index}].email`)}
              />
            </div>
            <div className="col">
              <select
                className="form-control"
                id="state"
                name={`users[${index}].state`}
                defaultValue={item.state}
                {...register(`users[${index}].state`)}
              >
                <option value="">Select Your State</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Bihar">Bihar</option>
                <option value="Assam">Assam</option>
                <option value="Goa">Goa</option>
                <option value="Manipur">Manipur</option>
              </select>
            </div>
            <div className="col">
              <button className="btn btn-primary" onClick={() => remove(index)}>
                Delete
              </button>
            </div>
          </div>
        ))}

        <button
          className="btn btn-primary"
          onClick={() =>
            append({
              firstName: "",
              lastName: "",
              email: "",
              state: "",
            })
          }
        >
          Add User
        </button>
      </div>
    </div>
  );
};

const DynamicForm = () => {
  const { register, handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log("data : " + data);
  };
  const form1 = (
    <div className="card mb-4">
      <div className="card card-header"> Basic Information</div>
      <div className="card card-body">
        <div className="form-group">
          <label htmlhtmlFor="fullname">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="fullname"
            name="fullname"
            {...register("fullname")}
          />
        </div>
        <div className="form-group">
          <label htmlhtmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            {...register("email")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="text" className="form-control" id="phone" name="phone" />
        </div>
        <div className="form-group">
          <label htmlhtmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            {...register("password")}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="container py-5">
      <div className="card p-4 w-90">
        <h3>Dynamic Form</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          {form1}
          <UserInformation
            register={register}
            control={control}
          ></UserInformation>

          <button className="btn btn-primary" type="submit">
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
};

export default DynamicForm;
