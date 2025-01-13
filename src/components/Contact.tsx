import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { sendEmail } from '../services/email';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const validateForm = () => {
    return formData.name.trim() !== '' && 
           formData.email.trim() !== '' && 
           formData.message.trim() !== '' &&
           /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await sendEmail(formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-cyan-400 sm:text-4xl neon-text">
            {t.title}
          </h2>
          <p className="mt-4 text-lg text-cyan-100">
            {t.subtitle}
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-cyan-100">
                  {t.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 block w-full rounded-md bg-black border border-cyan-400 text-cyan-100 shadow-sm focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-cyan-100">
                  {t.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 block w-full rounded-md bg-black border border-cyan-400 text-cyan-100 shadow-sm focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-cyan-100">
                  {t.form.message}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-1 block w-full rounded-md bg-black border border-cyan-400 text-cyan-100 shadow-sm focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full border border-cyan-400 text-cyan-400 py-2 px-4 rounded-md hover:bg-cyan-950 transition-colors duration-300 neon-box ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : t.form.submit}
              </button>
              {submitStatus === 'success' && (
                <p className="text-green-400 text-sm mt-2">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400 text-sm mt-2">Error sending message. Please try again.</p>
              )}
            </form>
          </div>

          <div className="space-y-8 md:space-y-8">
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
              <Mail className="h-6 w-6 text-cyan-400 mb-4 md:mb-0 md:mt-1" />
              <div className="md:ml-4">
                <h4 className="text-lg font-medium text-cyan-400">{t.info.email}</h4>
                <p className="mt-1 text-cyan-100">contacto@riosglobalexperts.com</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
              <Phone className="h-6 w-6 text-cyan-400 mb-4 md:mb-0 md:mt-1" />
              <div className="md:ml-4">
                <h4 className="text-lg font-medium text-cyan-400">{t.info.phone}</h4>
                <p className="mt-1 text-cyan-100">+54(11)6977-7846</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
              <MapPin className="h-6 w-6 text-cyan-400 mb-4 md:mb-0 md:mt-1" />
              <div className="md:ml-4">
                <h4 className="text-lg font-medium text-cyan-400">{t.info.location}</h4>
                <p className="mt-1 text-cyan-100">Buenos Aires<br />Argentina</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}