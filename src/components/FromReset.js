import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const FormReset = () => {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users/1");
    console.log(res);
    reset(res.data);
  };
  const onSubmit = (data) => console.log(data);

  return (
    <div className="card shadow">
      <div className="card-header">Update User</div>
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              name="name"
              {...register("name")}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your User Name"
              name="username"
              {...register("username")}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Your E-mail Address"
              name="email"
              {...register("email")}
            />
          </div>
          <div className="form-group form-row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Street"
                name="address.street"
                {...register("address.street")}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Suite"
                name="address.suite"
                {...register("address.suite")}
              />
            </div>
          </div>
          <div className="form-group form-row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="City"
                name="address.city"
                {...register("address.city")}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Zipcode"
                name="address.zipcode"
                {...register("address.zipcode")}
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Phone Number"
              name="phone"
              {...register("phone")}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Website Name"
              name="website"
              {...register("website")}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Company Name"
              name="company.name"
              {...register("company.name")}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Company catch phrase"
              name="company.catchPhrase"
              {...register("company.catchPhrase")}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Company bs"
              name="company.bs"
              {...register("company.bs")}
            />
          </div>
          <button className="btn btn-warning" type="submit">
            Update User
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormReset;
