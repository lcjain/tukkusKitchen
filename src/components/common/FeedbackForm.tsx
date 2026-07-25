import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send } from 'lucide-react';

const feedbackSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  message: z.string().min(10, 'Tell us what you loved or what we can improve'),
});

type FeedbackFormValues = z.infer<typeof feedbackSchema>;

export function FeedbackForm() {
  const [toast, setToast] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FeedbackFormValues>({
    resolver: zodResolver(feedbackSchema),
  });

  const onSubmit = async (values: FeedbackFormValues) => {
    setToast('Your feedback is ready to send via WhatsApp. Redirecting...');
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const whatsappMessage = encodeURIComponent(
      `Hi Tukku's Kitchen,%0A%0AMy name is ${values.name}.%0APhone: ${values.phone}.%0A%0AFeedback:%0A${values.message}`
    );

    reset();
    window.location.href = `https://wa.me/918962249989?text=${whatsappMessage}`;
  };

  return (
    <div className="rounded-[32px] border border-white/80 bg-white/90 p-8 shadow-soft backdrop-blur-xl">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-secondary">Feedback</p>
          <h2 className="text-3xl font-semibold text-text">Share your thoughts with Tukku’s Kitchen</h2>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary">
          <Send className="h-4 w-4" />
          Instant WhatsApp delivery
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="space-y-2 text-sm font-medium text-text">
            Name
            <input
              {...register('name')}
              className="w-full rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-3 text-base text-text outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20"
              placeholder="Your name"
            />
            {errors.name && <p className="text-sm text-rose-600">{errors.name.message}</p>}
          </label>
          <label className="space-y-2 text-sm font-medium text-text">
            Phone
            <input
              {...register('phone')}
              className="w-full rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-3 text-base text-text outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20"
              placeholder="+91 98765 43210"
            />
            {errors.phone && <p className="text-sm text-rose-600">{errors.phone.message}</p>}
          </label>
        </div>

        <label className="space-y-2 text-sm font-medium text-text">
          Message
          <textarea
            {...register('message')}
            rows={6}
            className="w-full rounded-[24px] border border-slate-200 bg-slate-50 px-4 py-4 text-base text-text outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20"
            placeholder="Tell us what you loved or what we can improve"
          />
          {errors.message && <p className="text-sm text-rose-600">{errors.message.message}</p>}
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 rounded-[20px] bg-secondary px-6 py-3 text-sm font-semibold text-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-secondary/90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          Submit Feedback
        </button>
      </form>

      {toast && (
        <div className="mt-6 rounded-[24px] border border-secondary/20 bg-secondary/10 p-4 text-sm text-secondary shadow-sm">
          {toast}
        </div>
      )}
    </div>
  );
}
