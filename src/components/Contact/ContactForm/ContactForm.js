// React Dependencies
import React, { useState } from "react"
import { useForm } from "react-hook-form"
// Styles
import * as classes from "./ContactForm.module.scss"

// Components
import Button from "../../UI/Button"
import Message from "../Message/Message"
import SubmitLoader from "../../../assets/icons/SubmitLoader.svg"

// HTTP Requests
import axios from "axios"

const ContactForm = () => {
  // Messages
  const [alert, setAlert] = useState(false)

  // Forms
  const {
    register, // register field names
    formState: { errors, isSubmitting, isValid, isDirty }, // formState for errors
    reset, // resets the form
    handleSubmit, // readies the form submission
  } = useForm({
    mode: "onChange", // actual form submission
  })

  const onSubmit = async (data, e) => {
    const { name, email, message } = data
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    }

    const messageConfig = {
      service_id: process.env.GATSBY_EMAILJS_SERVICE_ID,
      template_id: process.env.GATSBY_EMAILJS_TEMPLATE_ID,
      user_id: process.env.GATSBY_EMAILJS_USER_ID,
      template_params: {
        from_name: name,
        from_email: email,
        message: message,
      },
    }

    try {
      const body = JSON.stringify(messageConfig)
      const response = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        body,
        config
      )
      if (response.status === 200) {
        reset()
        setAlert(true)
        setTimeout(() => {
          setAlert(false)
        }, 3000)
      }
    } catch (error) {
      console.log(error)
    }
  }
  // Handles the errors
  const onError = (errors, e) => console.log(errors, e)

  return (
    <div className={classes["gridContent"]}>
      <h1>Get In Touch</h1>

      <form
        name="contact_me"
        onSubmit={handleSubmit(onSubmit, onError)}
        className={classes["gridForm"]}
        noValidate="novalidate"
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
            rows="4"
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

        {alert && (
          <Message fadeState={alert}>
            Thanks for Reaching out, I'll get back to you as soon as I can
          </Message>
        )}

        <Button
          classNames={`buttonSubmit`}
          type="submit"
          disabled={!isDirty || !isValid}
        >
          Submit
          {isSubmitting && <SubmitLoader />}
        </Button>
      </form>
    </div>
  )
}

export default ContactForm
