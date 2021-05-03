import React from "react";
import { useForm } from "react-hook-form";
import './ContactUs.css'

function ContactUs() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
    const onSubmit = () => alert("Submitted");

    return (
        <div className="form__container">
            
            <div className="form__header">
                
                GET IN TOUCH

            </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control ">
            <label>Name</label>
                    <input
            type='text'
                        {...register("name", { required: true })} />
            {errors.name && errors.name.type === "required" && (
              <p className="errorMsg">Name is required.</p>
            )}
          </div>

          <div className="form-control ">
            <label>Email</label>
            <input
            type='text'
              {...register("email", {
                required: true,
                pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              })}
            />
            {errors.email && errors.email.type === "required" && (
              <p className="errorMsg">Email is required.</p>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <p className="errorMsg">Email is not valid.</p>
            )}
          </div>

          <div className="form-control ">
            <label>Contact Number</label>
                    <input
                    type='text'
              {...register("contact", {
                required: true
              })}
            />
            {errors.contact && errors.contact.type === "required" && (
              <p className="errorMsg">Contact Number is required.</p>
            )}
            {errors.contact && errors.contact.type === "pattern" && (
              <p className="errorMsg">Contact Number is not valid.</p>
            )}
          </div>
          <div className="form-control ">
            <label>Subject</label>
                    <input
                    type='text'
              {...register("subject", {
                required: true,
              })}
            />
            {errors.subject && errors.subject.type === "required" && (
              <p className="errorMsg">Contact Number is required.</p>
            )}
          </div>

          <div className="form-control ">
                    <label>Content</label>
                    <br/>
                    <textarea
        
              rows="4"
              cols="50"
              {...register("content", {
                required: true,
              })}
            />
            {errors.content && errors.content.type === "required" && (
              <p className="errorMsg">Content is required.</p>
            )}
          </div>

          <div className="form-control wrapper">
            <label></label>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
}

export default ContactUs;
