import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Clock, DollarSign, HeartHandshake, Leaf, Mail, MapPin, MessageSquare, Phone, ShieldCheck, ShoppingCart, Sprout, Truck } from 'lucide-react';
import { heroContent } from '@/data/hero';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Loading } from '@/components/common/Loading';
import { OptimizedImage } from '@/components/ui/OptimizedImage';
import { galleryImages } from '@/data/gallery';
import { testimonials } from '@/data/testimonials';
import { cardLift, fadeLeft, fadeUp, staggerContainer } from '@/lib/motion';

const GalleryMasonry = lazy(() => import('@/components/common/GalleryMasonry').then((module) => ({ default: module.GalleryMasonry })));
const TestimonialCarousel = lazy(() => import('@/components/common/TestimonialCarousel').then((module) => ({ default: module.TestimonialCarousel })));
const FeedbackForm = lazy(() => import('@/components/common/FeedbackForm').then((module) => ({ default: module.FeedbackForm })));

const features = [
  {
    title: 'Fresh Ingredients',
    description: 'Seasonal produce sourced daily from local farms and prepared with care.',
    icon: Leaf,
  },
  {
    title: '100% Vegetarian',
    description: 'A fully plant-based menu designed for flavor, balance, and wellness.',
    icon: Sprout,
  },
  {
    title: 'Fast Delivery',
    description: 'Hot, fresh meals delivered quickly so you can enjoy every bite.',
    icon: Truck,
  },
  {
    title: 'Affordable Prices',
    description: 'Premium dining without premium costs—value that feels indulgent.',
    icon: DollarSign,
  },
  {
    title: 'Homemade Taste',
    description: 'Comforting recipes crafted from scratch with family-style authenticity.',
    icon: HeartHandshake,
  },
  {
    title: 'Hygienic Kitchen',
    description: 'Spotless preparation areas and safe practices are our top priority.',
    icon: ShieldCheck,
  },
];

export default function Home() {
  return (
    <main className="space-y-16" id="home">
      <section className="relative overflow-hidden rounded-[32px] border border-white/80 bg-white/80 p-6 shadow-soft backdrop-blur-xl sm:p-10">
        <div className="absolute left-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 top-16 h-60 w-60 rounded-full bg-secondary/15 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#FFF4E0] to-transparent" />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            className="relative z-10 flex flex-col justify-center gap-8"
          >
            <div className="space-y-4">
              <span className="inline-flex items-center rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-secondary shadow-sm">
                Fresh Vegetarian Meals
              </span>
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-text sm:text-6xl">
                Experience the rich taste of authentic vegetarian cuisine
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-text/75">
                Thoughtfully prepared using the freshest ingredients and time-honored recipes, we serve healthy, flavorful, and 100% pure vegetarian food that brings people together for every occasion.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://tukkuskitchen.petpooja.site/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-[16px] bg-secondary px-6 py-3 text-sm font-semibold text-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-secondary/90"
              >
                Order Now
              </a>
              <Button href="#menu">View Menu</Button>
            </div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.75, delay: 0.15 }}
              className="grid gap-4 rounded-[24px] border border-white/70 bg-white/80 p-6 text-text shadow-glass backdrop-blur-xl sm:grid-cols-2"
            >
              <div className="space-y-2">
                <p className="text-2xl font-semibold text-text">★★★★★</p>
                <p className="text-sm uppercase tracking-[0.35em] text-secondary">Award Winning</p>
              </div>
              <div className="space-y-2">
                <p className="text-xl font-semibold text-text">Trusted by 5000+ Happy Customers</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.65, delay: 0.1 }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute -left-10 top-6 h-28 w-28 rounded-full bg-secondary/20 blur-3xl" />
            <div className="absolute -right-10 bottom-10 h-28 w-28 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute left-1/2 top-12 h-24 w-24 -translate-x-1/2 rounded-full bg-[#F4B400]/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-white/80 bg-[#fffdf8] p-6 shadow-soft">
              <OptimizedImage
                src="/pic1.jpeg"
                alt="Fresh vegetarian meal"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-full min-h-[420px] w-full rounded-[32px] shadow-2xl shadow-slate-900/10"
              />
              <div className="absolute left-6 top-6 rounded-[24px] border border-white/70 bg-white/90 p-4 shadow-sm backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-secondary">Fresh Pick</p>
                <p className="mt-2 text-sm font-semibold text-text">Garden Herb Salad</p>
              </div>
              <div className="absolute right-6 bottom-10 rounded-[24px] border border-white/70 bg-white/90 p-4 shadow-sm backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-secondary">Chef's Choice</p>
                <p className="mt-2 text-sm font-semibold text-text">Spring Vegetable Bowl</p>
              </div>
              <div className="absolute -left-8 top-1/4 flex h-24 w-24 items-center justify-center rounded-full bg-secondary/20 shadow-soft">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary" />
              </div>
              <div className="absolute right-4 top-20 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 shadow-soft">
                <span className="block h-8 w-8 rounded-full bg-secondary" />
              </div>
              <div className="absolute left-12 bottom-8 h-14 w-14 rounded-full bg-primary/20 shadow-soft" />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="why" className="space-y-8">
        <SectionHeading eyebrow="Why Choose" title="Tukku’s Kitchen Advantage" />
        <p className="max-w-2xl text-base leading-8 text-text/70">
          Six premium reasons why Tukku’s Kitchen is the destination for fresh, vegetarian dining with modern comfort and impeccable service.
        </p>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {features.map(({ title, description, icon: Icon }) => (
            <motion.article
              key={title}
              variants={cardLift}
              whileHover="whileHover"
              className="group overflow-hidden rounded-[32px] border border-white/80 bg-white p-8 shadow-soft transition duration-300"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-[24px] bg-gradient-to-br from-primary/10 to-secondary/10 text-secondary shadow-soft transition duration-300 group-hover:from-primary/20 group-hover:to-secondary/20">
                <Icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-text">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-text/70">{description}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section id="menu" className="space-y-8">
        <SectionHeading eyebrow="Menu" title="Seasonal culinary delights" />
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid gap-6 lg:grid-cols-3">
          {heroContent.map((item) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              className="rounded-[32px] border border-white/80 bg-card p-8 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm uppercase tracking-[0.30em] text-secondary">{item.title}</p>
              <p className="mt-4 text-xl font-semibold text-text">{item.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section id="gallery" className="space-y-8">
        <SectionHeading eyebrow="Gallery" title="A taste of the atmosphere" />
        <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="max-w-2xl leading-8 text-text/70">
          Discover the restaurant’s dining moments through an elegant, responsive gallery with subtle motion and immersive lightbox viewing.
        </motion.p>
        <Suspense fallback={<Loading />}>
          <GalleryMasonry images={galleryImages} />
        </Suspense>
      </section>

      <section id="testimonials" className="space-y-8">
        <SectionHeading eyebrow="Testimonials" title="What diners are saying" />
        <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="max-w-2xl leading-8 text-text/70">
          Hear from our guests who love Tukku’s Kitchen for its premium vegetarian menu, attentive hospitality, and elegant ambience.
        </motion.p>
        <Suspense fallback={<Loading />}>
          <TestimonialCarousel testimonials={testimonials} />
        </Suspense>
      </section>

      <section id="order" className="space-y-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
          <SectionHeading eyebrow="Order" title="Ready to place your order?" />
        </motion.div>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="grid gap-6 lg:grid-cols-3">
          <a
            href="https://tukkuskitchen.petpooja.site/"
            target="_blank"
            rel="noreferrer"
            className="group block overflow-hidden rounded-[32px] border border-white/80 bg-white/90 p-8 text-center shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-secondary/10 text-secondary shadow-soft transition duration-300 group-hover:bg-secondary/20">
              <ShoppingCart className="h-10 w-10" />
            </div>
            <p className="text-3xl font-semibold text-text">Order Online</p>
            <p className="mt-3 text-sm leading-6 text-text/70">Browse the menu and place your order quickly through our online store.</p>
          </a>

          <a
            href="https://wa.me/918962249989?text=Hi%20I%20want%20to%20order"
            target="_blank"
            rel="noreferrer"
            className="group block overflow-hidden rounded-[32px] border border-white/80 bg-white/90 p-8 text-center shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary shadow-soft transition duration-300 group-hover:bg-primary/20">
              <MessageSquare className="h-10 w-10" />
            </div>
            <p className="text-3xl font-semibold text-text">WhatsApp Order</p>
            <p className="mt-3 text-sm leading-6 text-text/70">Send us a WhatsApp message and we’ll help you place your order instantly.</p>
          </a>

          <a
            href="tel:+918962249989"
            className="group block overflow-hidden rounded-[32px] border border-white/80 bg-white/90 p-8 text-center shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-secondary/10 text-secondary shadow-soft transition duration-300 group-hover:bg-secondary/20">
              <Phone className="h-10 w-10" />
            </div>
            <p className="text-3xl font-semibold text-text">Call Now</p>
            <p className="mt-3 text-sm leading-6 text-text/70">Speak directly to our team and confirm your order in just one call.</p>
          </a>
        </motion.div>
      </section>

      <section id="feedback" className="space-y-8">
        <SectionHeading eyebrow="Feedback" title="Send us your feedback" />
        <Suspense fallback={<Loading />}>
          <FeedbackForm />
        </Suspense>
      </section>

      <section id="contact" className="space-y-8">
        <SectionHeading eyebrow="Contact" title="Visit Tukku’s Kitchen" />
        <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-6 rounded-[32px] border border-white/80 bg-white p-8 shadow-soft">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] bg-slate-50 p-6 shadow-glass">
                <div className="flex items-center gap-3 text-secondary">
                  <MapPin className="h-6 w-6" />
                  <p className="text-sm uppercase tracking-[0.35em]">Address</p>
                </div>
                <p className="mt-4 text-base leading-7 text-text/75">
                  12 Tukku Street, Greenway District, Bangalore, Karnataka 560001
                </p>
              </div>

              <div className="rounded-[28px] bg-slate-50 p-6 shadow-glass">
                <div className="flex items-center gap-3 text-secondary">
                  <Phone className="h-6 w-6" />
                  <p className="text-sm uppercase tracking-[0.35em]">Phone</p>
                </div>
                <p className="mt-4 text-base leading-7 text-text/75">+91 98765 43210</p>
              </div>

              <div className="rounded-[28px] bg-slate-50 p-6 shadow-glass">
                <div className="flex items-center gap-3 text-secondary">
                  <Mail className="h-6 w-6" />
                  <p className="text-sm uppercase tracking-[0.35em]">Email</p>
                </div>
                <p className="mt-4 text-base leading-7 text-text/75">tukkuskitchen@gmail.com</p>
              </div>

              <div className="rounded-[28px] bg-slate-50 p-6 shadow-glass">
                <div className="flex items-center gap-3 text-secondary">
                  <Clock className="h-6 w-6" />
                  <p className="text-sm uppercase tracking-[0.35em]">Opening Hours</p>
                </div>
                <p className="mt-4 text-base leading-7 text-text/75">
                  Mon - Sun: 11:00 AM to 11:00 PM
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=12+Tukku+Street+Bangalore"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-semibold text-text transition duration-300 hover:border-secondary hover:bg-secondary/10 hover:text-secondary"
              >
                Get Directions
              </a>
              <a
                href="tel:+918962249989"
                className="inline-flex items-center justify-center rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-semibold text-text transition duration-300 hover:border-secondary hover:bg-secondary/10 hover:text-secondary"
              >
                Call
              </a>
              <a
                href="https://wa.me/918962249989"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-[20px] border border-slate-200 bg-secondary px-4 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-secondary/90"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/80 bg-[#F7F6FF] p-6 shadow-soft">
            <div className="aspect-[16/11] overflow-hidden rounded-[28px] bg-slate-200">
              <iframe
                title="Tukku's Kitchen location"
                src="https://maps.google.com/maps?q=12%20Tukku%20Street%20Bangalore&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
            <div className="mt-5 rounded-[28px] bg-white p-5 shadow-glass">
              <p className="text-sm uppercase tracking-[0.35em] text-secondary">Google Map</p>
              <p className="mt-3 text-base leading-7 text-text/75">
                Embedded map placeholder showing the restaurant location and nearby landmarks for easy directions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
