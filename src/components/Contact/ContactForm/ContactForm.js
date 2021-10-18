import React from "react"

import * as classes from "./ContactForm.module.scss"
import Button from "../../UI/Button"

import { useForm } from "react-hook-form"

const ContactForm = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm()

  const onSubmit = async data => {
    await console.log(data)
    reset()
  }

  return (
    <div className={classes["gridContent"]}>
      <h1>Get In Touch</h1>
      <p>
        Feel free to send me a message and I’ll get back to you as soon as I
        can.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={classes["gridForm"]}
        noValidate="novalidate"
      >
        <div className={classes["input"]}>
          <input
            required="true"
            // aria-invalid={errors.name ? "true" : "false"}
            // {...register("name", { required: true })}
            className={classes["inputField"]}
          />
          <label htmlFor="name" className={classes["inputLabel"]}>
            Name
          </label>

          {/* {errors.name && (
                        <span role="alert">{errors.name.message}</span>
                      )}
                      {errors.name?.type === "required" && "Name is required"} */}
        </div>

        <div className={classes["input"]}>
          <input required="true" id="email" className={classes["inputField"]} />
          <label htmlFor="email" id="email" className={classes["inputLabel"]}>
            Email
          </label>
        </div>

        <div className={classes["input"]}>
          <textarea
            required="true"
            id="message"
            rows="6"
            type="text"
            className={classes["inputField"]}
          />
          <label
            htmlFor="message"
            id="message"
            className={classes["inputLabel"]}
          >
            Message
          </label>
        </div>

        <Button classNames={`buttonSubmit`} type="submit">
          Submit
        </Button>
      </form>
    </div>
  )
}

export default ContactForm
