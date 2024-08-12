"use client";

import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/app/utils/send-email";

export type FormData = {
  name: string;
  email: string;
  message: string;
  termsAccepted: boolean;
};

const Form: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function onSubmit(data: FormData) {
    if (!data.termsAccepted) {
      alert("You must accept the terms and conditions to submit the form.");
      return;
    }

    setLoading(true);
    try {
      await sendEmail(data);
      setSuccessMessage("Email sent successfully!");
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage("An error occurred while sending the email.");
      setSuccessMessage(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <label htmlFor="name" className="mb-2 block text-sm text-white">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            {...register("name", { required: "Full Name is required" })}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="mb-2 block text-sm text-white">
            Email Address
          </label>
          <input
            type="email"
            placeholder="example@domain.com"
            className="w-full border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            {...register("email", { required: "Email Address is required" })}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-5">
          <label htmlFor="message" className="mb-2 block text-sm text-white">
            Message
          </label>
          <textarea
            rows={4}
            placeholder="Type your message"
            className="w-full resize-none border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            {...register("message", { required: "Message is required" })}
          ></textarea>
          {errors.message && (
            <p className="text-red-500">{errors.message.message}</p>
          )}
        </div>
        <div className="mb-5">
          <input
            type="checkbox"
            id="termsAccepted"
            {...register("termsAccepted", {
              required: "You must accept the terms and conditions",
            })}
          />
          <label
            htmlFor="termsAccepted"
            className="ml-2 text-sm font-medium text-white"
          >
            I accept the{" "}
            <a href="/terms" className="text-white underline">
              terms and conditions
            </a>
            .
          </label>
          {errors.termsAccepted && (
            <p className="text-red-500">{errors.termsAccepted.message}</p>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="hover:shadow-form bg-white py-3 px-8 text-base font-semibold text-black outline-none"
            disabled={loading}
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </div>
      </form>
      {successMessage && <p className="mt-4 text-white">{successMessage}</p>}
      {errorMessage && <p className="mt-4 text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default Form;
