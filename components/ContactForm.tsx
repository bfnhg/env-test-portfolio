"use client";

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaPaperPlane, FaCheck, FaExclamationTriangle } from "react-icons/fa";
import { initEmailJS, sendEmail } from "@/lib/emailjs";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Initialize EmailJS on component mount
  useEffect(() => {
    initEmailJS();
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t("Name is required");
    }

    if (!formData.email.trim()) {
      newErrors.email = t("Email is required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("Please enter a valid email address");
    }

    if (!formData.subject.trim()) {
      newErrors.subject = t("Subject is required");
    }

    if (!formData.message.trim()) {
      newErrors.message = t("Message is required");
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t("Message must be at least 10 characters long");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Send email using EmailJS
      const result = await sendEmail(formData);
      
      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        throw new Error(result.message);
      }
      
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
            {t("Full Name")} *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-lg border-2 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 ${
              errors.name ? 'border-red-500' : 'border-gray-600 hover:border-gray-500'
            }`}
            placeholder={t("Enter your full name")}
          />
          {errors.name && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm mt-1 flex items-center gap-1"
            >
              <FaExclamationTriangle className="text-xs" />
              {errors.name}
            </motion.p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
            {t("Email Address")} *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-lg border-2 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 ${
              errors.email ? 'border-red-500' : 'border-gray-600 hover:border-gray-500'
            }`}
            placeholder={t("Enter your email address")}
          />
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm mt-1 flex items-center gap-1"
            >
              <FaExclamationTriangle className="text-xs" />
              {errors.email}
            </motion.p>
          )}
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
            {t("Subject")} *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-lg border-2 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 ${
              errors.subject ? 'border-red-500' : 'border-gray-600 hover:border-gray-500'
            }`}
            placeholder={t("What's this about?")}
          />
          {errors.subject && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm mt-1 flex items-center gap-1"
            >
              <FaExclamationTriangle className="text-xs" />
              {errors.subject}
            </motion.p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
            {t("Message")} *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={6}
            className={`w-full px-4 py-3 rounded-lg border-2 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 resize-none ${
              errors.message ? 'border-red-500' : 'border-gray-600 hover:border-gray-500'
            }`}
            placeholder={t("Tell me about your project or question...")}
          />
          {errors.message && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm mt-1 flex items-center gap-1"
            >
              <FaExclamationTriangle className="text-xs" />
              {errors.message}
            </motion.p>
          )}
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-200 flex items-center justify-center gap-2 ${
            isSubmitting
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 active:scale-95'
          }`}
          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              {t("Sending...")}
            </>
          ) : (
            <>
              <FaPaperPlane />
              {t("Send Message")}
            </>
          )}
        </motion.button>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 flex items-center gap-3"
          >
            <FaCheck className="text-green-400 text-xl" />
            <p className="text-green-400 font-medium">
              {t("Message sent successfully! I'll get back to you soon.")}
            </p>
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 flex items-center gap-3"
          >
            <FaExclamationTriangle className="text-red-400 text-xl" />
            <p className="text-red-400 font-medium">
              {t("Something went wrong. Please try again or contact me directly.")}
            </p>
          </motion.div>
        )}
      </motion.form>
    </div>
  );
};

export default ContactForm;
