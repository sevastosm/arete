// utils/send-email.ts

import { FormData } from "@/components/Form";

export async function sendEmail(data: FormData) {
  const response = await fetch("api/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to send email");
  }
}
