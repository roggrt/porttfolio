// // src/components/ContactForm.tsx
// 'use client';

// import { useState } from 'react';
// import { motion } from 'framer-motion';

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
//   const [status, setStatus] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setStatus('');

//     try {
//       const response = await fetch('/api/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
      
//       if (response.ok) {
//         setStatus('success');
//         setFormData({ name: '', email: '', subject: '', message: '' });
//       } else {
//         setStatus('error');
//       }
//     } catch (error) {
//       setStatus('error');
//     }
    
//     setLoading(false);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       <div className="grid md:grid-cols-2 gap-6">
//         <div>
//           <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//             Nombre
//           </label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             placeholder="Tu nombre"
//             className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700
//                       bg-white dark:bg-gray-800 text-gray-900 dark:text-white
//                       focus:ring-2 focus:ring-accent-red dark:focus:ring-accent-yellow
//                       focus:border-transparent transition-all duration-300"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//             Email
//           </label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             placeholder="tu@email.com"
//             className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700
//                       bg-white dark:bg-gray-800 text-gray-900 dark:text-white
//                       focus:ring-2 focus:ring-accent-red dark:focus:ring-accent-yellow
//                       focus:border-transparent transition-all duration-300"
//           />
//         </div>
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//           Asunto
//         </label>
//         <input
//           type="text"
//           name="subject"
//           value={formData.subject}
//           onChange={handleChange}
//           required
//           placeholder="Asunto de tu mensaje"
//           className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700
//                     bg-white dark:bg-gray-800 text-gray-900 dark:text-white
//                     focus:ring-2 focus:ring-accent-red dark:focus:ring-accent-yellow
//                     focus:border-transparent transition-all duration-300"
//         />
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//           Mensaje
//         </label>
//         <textarea
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           required
//           placeholder="Cuéntame sobre tu proyecto"
//           rows={4}
//           className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700
//                     bg-white dark:bg-gray-800 text-gray-900 dark:text-white
//                     focus:ring-2 focus:ring-accent-red dark:focus:ring-accent-yellow
//                     focus:border-transparent transition-all duration-300"
//         />
//       </div>

//       {status === 'success' && (
//         <div className="p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-100 rounded-lg">
//           Mensaje enviado correctamente. ¡Gracias por contactarnos!
//         </div>
//       )}

//       {status === 'error' && (
//         <div className="p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100 rounded-lg">
//           Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
//         </div>
//       )}

//       <motion.button
//         whileHover={{ scale: 1.02 }}
//         whileTap={{ scale: 0.98 }}
//         type="submit"
//         disabled={loading}
//         className="w-full px-6 py-3 text-white bg-accent-red hover:bg-accent-red/90
//                   dark:bg-accent-yellow dark:hover:bg-accent-yellow/90
//                   dark:text-gray-900 rounded-lg font-medium
//                   transition-colors duration-300 disabled:opacity-50"
//       >
//         {loading ? 'Enviando...' : 'Enviar mensaje'}
//       </motion.button>
//     </form>
//   );
// }



// src/components/ContactForm.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SendIcon, Loader2Icon, CheckCircle2Icon, AlertCircleIcon, InfoIcon } from 'lucide-react';

interface CaptchaQuestion {
  num1: number;
  num2: number;
  correct: number;
  options: number[];
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [captchaAnswer, setCaptchaAnswer] = useState<number | null>(null);
  const [captchaQuestion, setCaptchaQuestion] = useState<CaptchaQuestion>({
    num1: 0,
    num2: 0,
    correct: 0,
    options: []
  });

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const correct = num1 + num2;
    
    // Generar opciones incorrectas
    let options = [correct];
    while (options.length < 3) {
      const wrong = correct + Math.floor(Math.random() * 5) * (Math.random() < 0.5 ? 1 : -1);
      if (!options.includes(wrong) && wrong > 0) {
        options.push(wrong);
      }
    }
    
    // Mezclar las opciones
    options = options.sort(() => Math.random() - 0.5);

    setCaptchaQuestion({
      num1,
      num2,
      correct,
      options
    });
    setCaptchaAnswer(null);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (captchaAnswer !== captchaQuestion.correct) {
      setStatus('captcha');
      generateCaptcha();
      return;
    }

    setLoading(true);
    setStatus('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setCaptchaAnswer(null);
        generateCaptcha();
      } else {
        setStatus('error');
        console.error('Server response:', data);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
    
    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Nombre
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Tu nombre"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700
                      bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                      focus:ring-2 focus:ring-accent-red dark:focus:ring-accent-yellow
                      focus:border-transparent transition-all duration-300"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="tu@email.com"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700
                      bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                      focus:ring-2 focus:ring-accent-red dark:focus:ring-accent-yellow
                      focus:border-transparent transition-all duration-300"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Asunto
        </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          placeholder="Asunto de tu mensaje"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700
                    bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                    focus:ring-2 focus:ring-accent-red dark:focus:ring-accent-yellow
                    focus:border-transparent transition-all duration-300"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Mensaje
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Cuéntame sobre tu proyecto"
          rows={4}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700
                    bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                    focus:ring-2 focus:ring-accent-red dark:focus:ring-accent-yellow
                    focus:border-transparent transition-all duration-300"
        />
      </div>

      {/* Custom Captcha */}
      <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
        <p className="text-center text-gray-700 dark:text-gray-300 mb-4">
          Para verificar que eres humano, resuelve esta suma:
        </p>
        <div className="text-center text-xl font-bold text-gray-900 dark:text-white mb-4">
          {captchaQuestion.num1} + {captchaQuestion.num2} = ?
        </div>
        <div className="grid grid-cols-3 gap-3">
          {captchaQuestion.options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setCaptchaAnswer(option)}
              className={`p-3 rounded-lg transition-all duration-300 
                ${captchaAnswer === option 
                  ? 'bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 font-medium'
                  : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600'}
                border border-gray-200 dark:border-gray-600`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-100 rounded-lg flex items-center"
        >
          <CheckCircle2Icon className="w-5 h-5 mr-2" />
          ¡Mensaje enviado correctamente! Te responderemos pronto.
        </motion.div>
      )}

      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100 rounded-lg flex items-center"
        >
          <AlertCircleIcon className="w-5 h-5 mr-2" />
          Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
        </motion.div>
      )}

      {status === 'captcha' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-100 rounded-lg flex items-center"
        >
          <InfoIcon className="w-5 h-5 mr-2" />
          Respuesta incorrecta. Por favor, intenta de nuevo.
        </motion.div>
      )}

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={loading || captchaAnswer === null}
        className="w-full px-6 py-3 text-white bg-accent-red hover:bg-accent-red/90
                  dark:bg-accent-yellow dark:hover:bg-accent-yellow/90
                  dark:text-gray-900 rounded-lg font-medium
                  transition-colors duration-300 disabled:opacity-50
                  flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader2Icon className="w-5 h-5 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <SendIcon className="w-5 h-5" />
            Enviar mensaje
          </>
        )}
      </motion.button>
    </form>
  );
}