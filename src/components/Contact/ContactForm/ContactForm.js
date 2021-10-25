// React Dependencies
import React from "react"
import { useForm } from "react-hook-form"
// Styles
import * as classes from "./ContactForm.module.scss"

// Components
import Button from "../../UI/Button"

// HTTP Requests
import ReCAPTCHA from "react-google-recaptcha"
import { axios } from "axios"
import * as qs from "query-string"

const ContactForm = () => {
  const {
    register, // register field names
    formState: { errors }, // formState for errors
    reset, // resets the form
    handleSubmit, // readies the form submission
  } = useForm({
    mode: "onSubmit", // actual form submission
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
  // console.log(handleSubmit)

  const onSubmit = async (data, e) => {
    const formData = await data
    const constructForm = new FormData()
    // Convert JSON to FormData
    for (var key in formData) {
      constructForm.append(key, formData[key])
    }
  }
  // Handles the errors
  const onError = (errors, e) => console.log(errors, e)

  return (
    <div className={classes["gridContent"]}>
      <h1>Get In Touch</h1>
      <p>
        Feel free to send me a message and I’ll get back to you as soon as I
        can.
      </p>
      <form
        name="contact_me"
        onSubmit={handleSubmit(onSubmit, onError)}
        className={classes["gridForm"]}
        noValidate="novalidate"
        method="POST"
        data-netlify="true"
        data-netlify-recaptcha="true"
      >
        <input type="hidden" name="form-name" value="contact_form" />
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
              errors.email ? `${classes["errorField"]}` : ""
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

        <br />
        <ReCAPTCHA
          sitekey="{process.env.GATSBY_RECAPTCHA_KEY}"
          size="invisible"
        />

        <Button classNames={`buttonSubmit`} type="submit">
          Submit
        </Button>
      </form>
    </div>
  )
}

export default ContactForm
