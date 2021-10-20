import React from "react"

import * as classes from "./ContactForm.module.scss"
import Button from "../../UI/Button"

import { useForm } from "react-hook-form"
import { axios } from "axios"

const ContactForm = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({
    mode: "onSubmit",
  })

  // const [loading, isLoading] = useState(false)

  // document.querySelector("form").addEventListener("submit", handleSubmit)

  // const handleSubmit = e => {
  //   e.preventDefault()
  //   let myForm = document.getElementById("pizzaOrder")
  //   let formData = new FormData(myForm)
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: new URLSearchParams(formData).toString(),
  //   })
  //     .then(() => console.log("Form successfully submitted"))
  //     .catch(error => alert(error))
  // }
  const onSubmit = async data => {
    const formData = await data
    const constructForm = new FormData()
    // Convert JSON to FormData
    for (var key in formData) {
      constructForm.append(key, formData[key])
    }
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
        data-netlify="true"
        data-netlify-recaptcha="true"
      >
        <div className={classes["input"]}>
          <input
            id="name"
            type="text"
            aria-invalid={errors.name ? "true" : "false"}
            className={`${classes["inputField"]} ${
              errors.name ? `${classes["errorField"]}` : ""
            }`}
            required
            placeholder=" "
            {...register("name", {
              required: "This field is required",
            })}
          />
          <label
            htmlFor="name"
            className={`${classes["inputLabel"]} ${
              errors.name ? `${classes["errorLabel"]}` : ""
            }`}
          >
            Name
          </label>

          {errors.name && (
            <p className={classes["errorMessage"]}>{errors.name.message}</p>
          )}
        </div>

        <div className={classes["input"]}>
          <input
            id="email"
            aria-invalid={errors.email ? "true" : "false"}
            className={`${classes["inputField"]} ${
              errors.name ? `${classes["errorField"]}` : ""
            }`}
            required
            placeholder=" "
            {...register("email", {
              required: "This field is required",
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invalid email address",
              },
            })}
          />
          <label
            htmlFor="email"
            id="email"
            className={`${classes["inputLabel"]} ${
              errors.email ? `${classes["errorLabel"]}` : ""
            }`}
          >
            Email
          </label>

          {errors.email && (
            <p className={classes["errorMessage"]}>{errors.email.message}</p>
          )}
        </div>

        <div className={classes["input"]}>
          <textarea
            required
            id="message"
            rows="6"
            type="text"
            className={`${classes["inputField"]} ${
              errors.message ? `${classes["errorField"]}` : ""
            }`}
            {...register("message", {
              required: "This field is required",
              minLength: {
                value: 20,
                message: "This isn't really a message you know",
              },
            })}
          />
          <label
            htmlFor="message"
            id="message"
            className={`${classes["inputLabel"]} ${
              errors.message ? `${classes["errorLabel"]}` : ""
            }`}
          >
            Message
          </label>

          {errors.message && (
            <p className={classes["errorMessage"]}>{errors.message.message}</p>
          )}
        </div>

        <Button classNames={`buttonSubmit`} type="submit">
          Submit
        </Button>
      </form>
    </div>
  )
}

export default ContactForm
