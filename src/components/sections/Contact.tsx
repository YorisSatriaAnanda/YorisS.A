import { useState } from 'react';
import type { FormEvent } from 'react';

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/yorissatriaananda@gmail.com', {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        },
        body: formData,
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-32 border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-xl tracking-widest font-medium uppercase text-primary-400">
              [ Contact ]
            </h2>
          </div>
          
          <div className="lg:col-span-8">
            <h3 className="text-[8.5vw] md:text-7xl font-syne font-bold leading-tight mb-12 uppercase">
              Let's create something <span className="text-stroke hover-target text-transparent">unforgettable</span>.
            </h3>
            
            <form 
              onSubmit={handleSubmit}
              className="space-y-8 mt-16"
            >
              <input type="hidden" name="_subject" value="New Message from Portfolio Website" />
              <input type="hidden" name="_template" value="box" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="border-b border-white/30 pb-4">
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="WHAT'S YOUR NAME?" 
                  className="w-full bg-transparent text-2xl md:text-4xl font-sans uppercase focus:outline-none placeholder:text-primary-800 hover-target text-white"
                  disabled={status === 'loading' || status === 'success'}
                />
              </div>
              <div className="border-b border-white/30 pb-4">
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="WHAT'S YOUR EMAIL?" 
                  className="w-full bg-transparent text-2xl md:text-4xl font-sans uppercase focus:outline-none placeholder:text-primary-800 hover-target text-white"
                  disabled={status === 'loading' || status === 'success'}
                />
              </div>
              <div className="border-b border-white/30 pb-4">
                <textarea 
                  name="message"
                  required
                  placeholder="TELL ME ABOUT YOUR PROJECT" 
                  rows={3}
                  className="w-full bg-transparent text-2xl md:text-4xl font-sans uppercase focus:outline-none placeholder:text-primary-800 hover-target resize-none text-white"
                  disabled={status === 'loading' || status === 'success'}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={status === 'loading' || status === 'success'}
                className="text-xl border border-white px-12 py-6 uppercase tracking-widest hover:bg-white hover:text-black transition-colors hover-target mt-8 w-full md:w-auto disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-white disabled:cursor-not-allowed"
              >
                {status === 'loading' && 'Sending...'}
                {status === 'success' && 'Message Sent!'}
                {status === 'error' && 'Failed. Try Again.'}
                {status === 'idle' && 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
