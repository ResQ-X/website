import { useState } from "react";
import { Mail, Phone, ArrowRight } from "lucide-react";
import axios from "axios";

interface BetaSignupData {
  email: string;
  whatsapp: string;
}

interface FormState extends BetaSignupData {
  submitted: boolean;
  error: string;
  loading: boolean;
}

const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY;
const BREVO_LIST_ID = parseInt(import.meta.env.VITE_BREVO_LIST_ID || "0");

// For development testing - remove in production
if (!BREVO_API_KEY) {
  console.warn('VITE_BREVO_API_KEY is not set in environment variables');
}

export const BetaSignupForm = () => {
  const [formData, setFormData] = useState<FormState>({
    email: "",
    whatsapp: "",
    submitted: false,
    error: "",
    loading: false,
  });

  const validateWhatsApp = (number: string): boolean => {
    const nigerianPhoneRegex = /^(\+234|0)[789][01]\d{8}$/;
    return nigerianPhoneRegex.test(number);
  };

  const sendToBrevo = async (data: BetaSignupData) => {
    if (!BREVO_API_KEY) {
      throw new Error('Brevo API key is not configured');
    }

    try {
      const response = await axios({
        method: 'post',
        url: 'https://api.brevo.com/v3/contacts',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'api-key': BREVO_API_KEY
        },
        data: {
          email: data.email,
          SMS: data.whatsapp,
          attributes: {
            SMS: data.whatsapp,
            WA_NUMBER: data.whatsapp,
            SIGNUP_DATE: new Date().toISOString(),
          },
          listIds: [BREVO_LIST_ID],
          updateEnabled: true,
        }
      });

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || error.message;
        throw new Error(errorMessage);
      }
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.whatsapp) {
      setFormData(prev => ({...prev, error: "Please fill in all fields"}));
      return;
    }

    if (!validateWhatsApp(formData.whatsapp)) {
      setFormData(prev => ({...prev, error: "Please enter a valid Nigerian phone number"}));
      return;
    }

    setFormData(prev => ({...prev, loading: true, error: ""}));

    try {
      await sendToBrevo({
        email: formData.email,
        whatsapp: formData.whatsapp,
      });
      
      setFormData(prev => ({
        ...prev,
        submitted: true,
        loading: false,
        error: "",
      }));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to submit form. Please try again later.";
      console.error('Error submitting form:', error);
      setFormData(prev => ({
        ...prev,
        loading: false,
        error: errorMessage,
      }));
    }
  };

  if (formData.submitted) {
    return (
      <div className="text-center space-y-4 p-8 bg-green-50 rounded-lg">
        <div className="rounded-full bg-green-100 p-3 inline-block mx-auto">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-semibold">Thanks for joining!</h2>
        <p className="text-gray-600 text-[1rem]">
          We'll add you to our WhatsApp group soon. Look out for a message from our team!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {formData.error && (
        <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm">
          {formData.error}
        </div>
      )}
      <div className="space-y-2">
        <label className="text-[1rem] font-semibold text-gray-900">Email Address</label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black h-5 w-5" />
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
            className="w-full p-4 pl-12 border bg-transparent rounded-lg focus:ring-2 focus:ring-blue-500 outline-none placeholder-slate-500"
            placeholder="Enter your email"
            disabled={formData.loading}
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-[1rem] font-semibold text-gray-900">WhatsApp Number</label>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black h-5 w-5" />
          <input
            type="tel"
            value={formData.whatsapp}
            onChange={(e) => setFormData(prev => ({...prev, whatsapp: e.target.value}))}
            className="w-full p-4 pl-12 border bg-transparent rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-black placeholder-slate-400"
            placeholder="+2348012345678"
            disabled={formData.loading}
          />
        </div>
      </div>
      <button 
        type="submit"
        disabled={formData.loading}
        className="w-full p-5 pl-12 border bg-[#FF8500] rounded-xl focus:ring-2 focus:ring-[#FF8500] ring-offset-2 transition-all duration-300 outline-none text-white font-bold placeholder-slate-400 hover:bg-[#FF6500] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <div className="flex items-center justify-center gap-2">
          {formData.loading ? "Submitting..." : "Join Beta Program"}
          <ArrowRight className="h-5 w-5" />
        </div>
      </button>
      <p className="text-sm text-gray-500 text-center">
        We'll add you to our WhatsApp group for exclusive beta access and updates.
      </p>
    </form>
  );
};