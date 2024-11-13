
import { useState } from "react";
import { Mail, Phone, ArrowRight } from "lucide-react";

interface BetaSignupData {
  email: string;
  whatsapp: string;
}

interface FormState extends BetaSignupData {
  submitted: boolean;
  error: string;
}

export const BetaSignupForm = () => {
  const [formData, setFormData] = useState<FormState>({
    email: "",
    whatsapp: "",
    submitted: false,
    error: "",
  });

  const validateWhatsApp = (number: string): boolean => {
    const nigerianPhoneRegex = /^(\+234|0)[789][01]\d{8}$/;
    return nigerianPhoneRegex.test(number);
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

    setFormData(prev => ({...prev, submitted: true, error: ""}));
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
        <label className={`labelStyle text-[1rem] font-semibold text-gray-900`}>Email Address</label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black h-5 w-5" />
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
            className="w-full p-4 pl-12 border bg-transparent rounded-lg focus:ring-2 focus:ring-blue-500 outline-none placeholder-slate-500"
            placeholder="Enter your email"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className={`labelStyle text-[1rem] font-semibold text-gray-900`}>WhatsApp Number</label>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black h-5 w-5" />
          <input
            type="tel"
            value={formData.whatsapp}
            onChange={(e) => setFormData(prev => ({...prev, whatsapp: e.target.value}))}
            className="w-full p-4 pl-12 border bg-transparent rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-black placeholder-slate-400"
            placeholder="+2348012345678"
          />
        </div>
      </div>

      <button className="w-full p-5 pl-12 border bg-[#FF8500] rounded-xl focus:ring-2 focus:ring-[#FF8500] ring-offset-2 transition-all duration-300 outline-none text-white font-bold placeholder-slate-400 hover:bg-[#FF6500]">
        <div className="flex items-center justify-center gap-2">
          Join Beta Program
          <ArrowRight className="h-5 w-5" />
        </div>
      </button>

      <p className="text-sm text-gray-500 text-center">
        We'll add you to our WhatsApp group for exclusive beta access and updates.
      </p>
    </form>
  );
};
