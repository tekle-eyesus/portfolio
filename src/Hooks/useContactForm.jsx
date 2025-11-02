import { useState, useCallback } from "react";
import { emailService } from "../services/emailService";

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));

      // Clear submit status when user starts typing
      if (submitStatus) {
        setSubmitStatus(null);
        setSubmitMessage("");
      }
    },
    [submitStatus]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage("");

    try {
      const result = await emailService.sendEmail(formData);

      if (result.success) {
        setSubmitStatus("success");
        setSubmitMessage(
          "Thank you for your message! I will get back to you soon."
        );

        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
        setSubmitMessage(
          result.message || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setSubmitMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearStatus = useCallback(() => {
    setSubmitStatus(null);
    setSubmitMessage("");
  }, []);

  return {
    formData,
    handleChange,
    handleSubmit,
    isSubmitting,
    submitStatus,
    submitMessage,
    clearStatus,
  };
};
