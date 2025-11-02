import emailjs from "emailjs-com";

class EmailService {
  constructor() {
    this.serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    this.templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    this.publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    this.yourEmail = import.meta.env.VITE_MY_EMAIL;

    // Initialize EmailJS
    emailjs.init(this.publicKey);
  }

  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  validateFormData(formData) {
    const errors = [];

    if (!formData.name?.trim()) {
      errors.push("Name is required");
    }

    if (!formData.email?.trim()) {
      errors.push("Email is required");
    } else if (!this.validateEmail(formData.email)) {
      errors.push("Please enter a valid email address");
    }

    if (!formData.subject?.trim()) {
      errors.push("Subject is required");
    }

    if (!formData.message?.trim()) {
      errors.push("Message is required");
    } else if (formData.message.trim().length < 10) {
      errors.push("Message should be at least 10 characters long");
    }

    return errors;
  }

  async sendEmail(formData) {
    try {
      // Validate form data
      const errors = this.validateFormData(formData);
      if (errors.length > 0) {
        throw new Error(errors.join(", "));
      }

      // Prepare template parameters
      const templateParams = {
        name: formData.name.trim(),
        from_email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        to_email: this.yourEmail,
        reply_to: formData.email.trim(),
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        this.serviceId,
        this.templateId,
        templateParams
      );

      console.log("Email sent successfully:", response);
      return {
        success: true,
        message: "Email sent successfully!",
        response: response,
      };
    } catch (error) {
      console.error("Email sending failed:", error);

      let errorMessage = "Failed to send email. Please try again.";

      if (error.text) {
        errorMessage = `Email service error: ${error.text}`;
      } else if (error.message) {
        errorMessage = error.message;
      }

      return {
        success: false,
        message: errorMessage,
        error: error,
      };
    }
  }
}

// Create singleton instance
export const emailService = new EmailService();
