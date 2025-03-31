import React from 'react';
import { cn } from "@/lib/utils";

export function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = React.useState('idle');
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [id]: id === 'email' ? value.toLowerCase() : value 
    }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage('An error occurred. Please try again later.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  const handleClear = React.useCallback(() => {
    setFormData({ name: '', email: '', message: '' });
    setStatus('idle');
  }, []);

  return (
    <section id="contact" className="py-16 px-4 md:px-10 lg:px-20 xl:px-40">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text text-center">Contact</h2>
        <div className="flex justify-center">
          <div className="card relative w-[450px]">
            <div className="card__border" />
            <div className="card_title__container">
              <span className="card_title">Get In Touch</span>
              <p className="card_paragraph">
                Have a project in mind? Feel free to reach out!
              </p>
            </div>
            <hr className="line" />
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                <input 
                  id="name" 
                  name="name"
                  type="text" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 bg-[#0A0A0A]/50 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#5B4DFB]"
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                <input 
                  id="email" 
                  name="email"
                  type="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-[#0A0A0A]/50 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#5B4DFB]"
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  className="w-full px-4 py-2 bg-[#0A0A0A]/50 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#5B4DFB] min-h-[100px] resize-y"
                  required
                />
              </div>
              {status === 'success' && (
                <p className="text-green-400 text-sm">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-sm">{errorMessage}</p>
              )}
              <div className="flex justify-between gap-4">
                <button
                  type="button"
                  onClick={handleClear}
                  className="button bg-[#0A0A0A] border border-white/10"
                >
                  Clear
                </button>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="button"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .card {
          --white: hsl(0, 0%, 100%);
          --black: hsl(240, 15%, 9%);
          --paragraph: hsl(0, 0%, 83%);
          --line: hsl(240, 9%, 17%);
          --primary: hsl(266, 92%, 58%);

          position: relative;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1.5rem;
          background-color: hsla(240, 15%, 9%, 1);
          background-image: radial-gradient(
              at 88% 40%,
              hsla(240, 15%, 9%, 1) 0px,
              transparent 85%
            ),
            radial-gradient(at 49% 30%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
            radial-gradient(at 14% 26%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
            radial-gradient(at 0% 64%, hsla(263, 93%, 56%, 1) 0px, transparent 85%),
            radial-gradient(at 41% 94%, hsla(284, 100%, 84%, 1) 0px, transparent 85%),
            radial-gradient(at 100% 99%, hsla(306, 100%, 57%, 1) 0px, transparent 85%);
          border-radius: 1rem;
          box-shadow: 0px -16px 24px 0px rgba(255, 255, 255, 0.25) inset;
        }

        .card .card__border {
          overflow: hidden;
          pointer-events: none;
          position: absolute;
          z-index: -10;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: calc(100% + 2px);
          height: calc(100% + 2px);
          background-image: linear-gradient(
            0deg,
            hsl(0, 0%, 100%) -50%,
            hsl(0, 0%, 40%) 100%
          );
          border-radius: 1rem;
        }

        .card .card__border::before {
          content: "";
          pointer-events: none;
          position: fixed;
          z-index: 200;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%), rotate(0deg);
          transform-origin: left;
          width: 200%;
          height: 10rem;
          background-image: linear-gradient(
            0deg,
            hsla(0, 0%, 100%, 0) 0%,
            hsl(277, 95%, 60%) 40%,
            hsl(277, 95%, 60%) 60%,
            hsla(0, 0%, 40%, 0) 100%
          );
          animation: rotate 8s linear infinite;
        }

        @keyframes rotate {
          to {
            transform: rotate(360deg);
          }
        }

        .card .card_title__container .card_title {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--white);
        }

        .card .card_title__container .card_paragraph {
          margin-top: 0.5rem;
          font-size: 0.875rem;
          color: var(--paragraph);
        }

        .card .line {
          width: 100%;
          height: 0.1rem;
          background-color: var(--line);
          border: none;
        }

        .card .button {
          cursor: pointer;
          padding: 0.75rem 1.5rem;
          width: 100%;
          background-image: linear-gradient(
            0deg,
            rgba(94, 58, 238, 1) 0%,
            rgba(197, 107, 240, 1) 100%
          );
          font-size: 0.875rem;
          color: var(--white);
          border: 0;
          border-radius: 9999px;
          box-shadow: inset 0 -2px 25px -4px var(--white);
          transition: opacity 0.2s;
        }

        .card .button:hover {
          opacity: 0.9;
        }

        .card .button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
      `}</style>
    </section>
  );
} 