'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { 
  Rocket, Star, Activity, Search, Users, LineChart, Sparkles, Trophy,
  Mail, Phone, Facebook, Twitter, Instagram, Linkedin, Github, Rss,
  ChevronDown, Info, HelpCircle, ArrowRight, Globe, TrendingUp, Award,
  Wrench, Link as LucideLink, FileText, Shield, MessageCircle, Send, X
} from "lucide-react";

import React, { useEffect, useState } from "react";
import Script from 'next/script';
import NextLink from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Home() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [chatOpen, setChatOpen] = React.useState(false);
  const testimonials = [
    {
        quote: '"Our traffic grew 212% in 6 months thanks to SEOInForce."',
      name: 'Jane Smith',
      company: 'EcomBrand',
        face: '/client1-Photoroom.png',
        logo: '/client1-Photoroom.png',
    },
    {
        quote: '"The competitor insights gave us an instant edge."',
      name: 'David Jones',
      company: 'SaaS Startup',
        face: '/identi-logo.png',
        logo: '/identi-logo.png',
    },
    {
        quote: '"Best ROI we\'ve ever had in SEO — better than SEMrush or Ahrefs."',
      name: 'Lucy Patel',
      company: 'Agency Owner',
        face: '/myapproved-logo.png',
        logo: '/myapproved-logo.png',
    },
    {
        quote: '"SEOInForce helped us dominate rankings for our most competitive keywords."',
      name: 'Michael Lee',
      company: 'GrowthX',
        face: '/omni-logo.png',
        logo: '/omni-logo.png',
    },
    {
        quote: '"The white-label reports made us look like SEO heroes to our clients."',
      name: 'Sophie Turner',
      company: 'AgencyPro',
        face: '/6.svg',
        logo: '/6.svg',
    },
  ];
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [pricingTab, setPricingTab] = useState<'saas' | 'retainers'>('saas');
  useEffect(() => {
    const id = setInterval(() => {
      setTestimonialIndex((i) => (i + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(id);
  }, [testimonials.length]);
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-[#C0C0C0]/10">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gradient-to-b from-[#0b0b0b] via-[#181818] to-[#e5e5e5]/10 backdrop-blur border-b border-[#d9d9d9]/30 shadow-xl py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between" style={{ minHeight: '100px' }}>
            {/* Logo with gold ring */}
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              <span className="inline-flex items-center justify-center h-12 sm:h-16 md:h-20 w-12 sm:w-16 md:w-20 rounded-full ring-2 ring-yellow-400 bg-yellow-400 overflow-hidden">
                <img src="/logo.svg" alt="SEOInForce shield logo" className="h-10 sm:h-14 md:h-16 w-10 sm:w-14 md:w-16 rounded-full object-cover" />
              </span>
              <span className="hero-gradient-text font-extrabold text-lg sm:text-xl md:text-2xl tracking-tight drop-shadow">SEO in Force</span>
            </div>
            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-2 lg:gap-4 font-semibold text-base">
              <li><a href="/products" className="px-4 py-2 text-[#C0C0C0] hover:text-yellow-400 transition-colors duration-200 relative group focus:outline-none"><span className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-gradient-to-r from-yellow-400 via-[#ffd700] to-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />Products</a></li>
              <li><a href="/features" className="px-4 py-2 text-[#C0C0C0] hover:text-yellow-400 transition-colors duration-200 relative group focus:outline-none"><span className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-gradient-to-r from-yellow-400 via-[#ffd700] to-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />Features</a></li>
              <li><a href="/pricing" className="px-4 py-2 text-[#C0C0C0] hover:text-yellow-400 transition-colors duration-200 relative group focus:outline-none"><span className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-gradient-to-r from-yellow-400 via-[#ffd700] to-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />Pricing</a></li>
              <li><a href="/blog" className="px-4 py-2 text-[#C0C0C0] hover:text-yellow-400 transition-colors duration-200 relative group focus:outline-none"><span className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-gradient-to-r from-yellow-400 via-[#ffd700] to-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />Blog</a></li>
              <li><a href="/faq" className="px-4 py-2 text-[#C0C0C0] hover:text-yellow-400 transition-colors duration-200 relative group focus:outline-none"><span className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-gradient-to-r from-yellow-400 via-[#ffd700] to-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />FAQ</a></li>
              <li><a href="/support" className="px-4 py-2 text-[#C0C0C0] hover:text-yellow-400 transition-colors duration-200 relative group focus:outline-none"><span className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-gradient-to-r from-yellow-400 via-[#ffd700] to-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />Support</a></li>
              <li>
                <a href="/sign-in" className="ml-4 px-6 py-2 rounded-lg font-bold bg-gradient-to-r from-yellow-400 via-[#ffd700] to-yellow-400 text-slate-900 hover:bg-yellow-300 shadow transition focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-slate-900">
                  Sign In
                </a>
              </li>
            </ul>
            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center">
              <button
                aria-label="Open main menu"
                className="text-yellow-400 hover:text-yellow-300 focus:outline-none p-2 rounded-lg transition"
                onClick={() => setMobileOpen((open) => !open)}
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          {mobileOpen && (
            <div className="md:hidden flex flex-col gap-2 mt-2 bg-slate-900 border border-slate-800 rounded-xl shadow-xl p-4 z-50 animate-fade-in">
              <a href="#" className="block py-2 px-3 text-[#C0C0C0] hover:text-yellow-400 transition">Products</a>
              <a href="#" className="block py-2 px-3 text-[#C0C0C0] hover:text-yellow-400 transition">Features</a>
              <a href="#" className="block py-2 px-3 text-[#C0C0C0] hover:text-yellow-400 transition">Pricing</a>
              <a href="#" className="block py-2 px-3 text-[#C0C0C0] hover:text-yellow-400 transition">Blog</a>
              <a href="#" className="block py-2 px-3 text-[#C0C0C0] hover:text-yellow-400 transition">Support</a>
              <a href="#faq" className="block py-2 px-3 text-[#C0C0C0] hover:text-yellow-400 transition">FAQ</a>
              <a href="#" className="block py-2 px-3 text-yellow-400 font-bold bg-yellow-500/10 rounded transition">Sign In</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[700px] flex flex-col justify-center">
        {/* Animated decorative glows (chrome themed) */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full blur-3xl animate-pulse bg-gradient-to-br from-white/10 via-[#C0C0C0]/15 to-[#1a1a1a]/10" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl animate-pulse animation-delay-1000 bg-gradient-to-br from-white/8 via-[#C0C0C0]/12 to-[#0b0b0b]/10" />
        {/* Floating shapes (chrome themed) */}
        <div className="absolute left-1/3 top-10 w-32 h-32 rounded-full blur-2xl animate-float bg-gradient-to-br from-white/40 via-[#C0C0C0]/40 to-[#9ca3af]/30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative z-10">
          <div className="text-center mb-20">
            {/* Trust chip */}
            <div className="flex flex-col items-center gap-3 mb-6">
              <span className="inline-flex items-center px-4 py-1 rounded-full bg-yellow-400/20 text-yellow-400 font-semibold text-sm tracking-wide shadow-sm animate-fade-in">
                <Globe className="inline-block w-5 h-5 mr-2" aria-label="Globe icon - Trusted by 10,000+ websites" /> Trusted by 10,000+ websites
              </span>
            </div>
            {/* Hero headline (metallic gold gradient) */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-tight hero-gradient-text drop-shadow-lg text-center">
              Dominate Search. <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-[#ffd700] to-yellow-400">Command Authority.</span>
            </h1>
            {/* Subheadline with SEO keywords */}
            <p className="text-lg sm:text-xl md:text-2xl text-[#C0C0C0] mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in text-center">
              <span className="font-semibold">SEO Audit Tool UK</span> – AI-powered audits, <span className="font-semibold">Competitor Analysis Software</span>, <span className="font-semibold">White-Label SEO Reports for Agencies</span>, and <span className="font-semibold">Done-for-You SEO Services</span> trusted by 10,000+ businesses.
            </p>
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16 animate-fade-in">
              <Button className="hero-button bg-yellow-500 text-slate-900 px-6 sm:px-10 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-full shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900" asChild>
                <a href="https://calendly.com/khamareclarke/new-meeting" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full text-slate-900 hover:text-white transition-colors duration-200">
                  <span className="hidden lg:inline">Start Free Analysis Today – See results in 60 seconds</span>
                  <span className="lg:hidden">Start Free Analysis</span>
                  <ArrowRight className="ml-2 h-5 w-5 lg:h-6 lg:w-6" />
                </a>
              </Button>
              <Button variant="outline" className="text-[#C0C0C0] border-[#C0C0C0] hover:bg-gradient-to-b hover:from-[#ffffff] hover:via-[#bfbfbf] hover:to-[#1a1a1a] hover:border-[#C0C0C0] px-6 sm:px-10 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-full backdrop-blur-sm transition-all duration-200 motion-safe:hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900" asChild>
                <a href="https://calendly.com/khamareclarke/new-meeting" target="_blank" rel="noopener noreferrer">
                  <span className="hidden sm:inline">Book Consultation</span>
                  <span className="sm:hidden">Book Call</span>
                </a>
              </Button>
            </div>
            {/* Trust Carousel: 5-Star + Logos */}
            <div className="flex flex-col items-center mb-10">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} aria-label="star" className="h-5 w-5 text-yellow-400 drop-shadow" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15.27L16.18 18l-1.64-7.03L19 7.24l-7.19-.61L10 0 8.19 6.63 1 7.24l5.46 3.73L4.82 18z"/></svg>
                ))}
              </div>
              <span className="text-xs text-[#FFD700] font-medium tracking-wide mb-3">Rated 5/5 by 10,000+ businesses</span>
              <div className="w-full flex justify-center">
                <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-2 sm:px-4 md:px-6 py-4 sm:py-5 md:py-6 flex-wrap">
                  <img src="/client1-Photoroom.png" alt="Client Partner" className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto opacity-90 hover:opacity-100 transition-opacity" />
                  <img src="/identi-logo.png" alt="Identi - Trusted partner" className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto opacity-90 hover:opacity-100 transition-opacity" />
                  <img src="/myapproved-logo.png" alt="MyApproved - Trusted partner" className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto opacity-90 hover:opacity-100 transition-opacity" />
                  <img src="/omni-logo.png" alt="Omni - Trusted partner" className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto opacity-90 hover:opacity-100 transition-opacity" />
                  <img src="/6.svg" alt="Partner 6 - Trusted partner" className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto opacity-90 hover:opacity-100 transition-opacity" />
                  <img src="/9.svg" alt="Partner 9 - Trusted partner" className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto opacity-90 hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
            {/* Keep hero minimal: partner logos remain; detailed features moved below */}
          </div>
        </div>
      </section>

      {/* Proof Section (Trust Signals) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold hero-gradient-text text-center mb-12">Proof & Testimonials</h2>
        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-[#181818] via-[#232323] to-[#e5e5e5]/10 border-2 border-yellow-400/40 shadow-lg">
            <p className="text-3xl font-extrabold hero-gradient-text mb-1">+1M</p>
            <p className="text-[#C0C0C0] font-medium">Audits delivered</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-[#181818] via-[#232323] to-[#e5e5e5]/10 border-2 border-yellow-400/40 shadow-lg">
            <p className="text-3xl font-extrabold hero-gradient-text mb-1">87%</p>
            <p className="text-[#C0C0C0] font-medium">Faster ranking improvements</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-[#181818] via-[#232323] to-[#e5e5e5]/10 border-2 border-yellow-400/40 shadow-lg">
            <p className="text-3xl font-extrabold hero-gradient-text mb-1">20+ Countries</p>
            <p className="text-[#C0C0C0] font-medium">Agencies trust us</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-[#181818] via-[#232323] to-[#e5e5e5]/10 border-2 border-yellow-400/40 shadow-lg">
            <p className="text-3xl font-extrabold hero-gradient-text mb-1">£25M+</p>
            <p className="text-[#C0C0C0] font-medium">Client revenue influenced</p>
          </div>
        </div>
        {/* Rotating testimonials */}
        <div className="max-w-2xl mx-auto">
          <div className="p-7 rounded-2xl border-2 border-yellow-400/60 bg-gradient-to-b from-[#191919] via-[#232323] to-[#e5e5e5]/10 shadow-xl transition-all duration-500 flex flex-col items-center text-center" aria-label="testimonial-rotating">
            <div className="flex items-center justify-center mb-3">
              <div className="h-12 w-12 rounded-full bg-yellow-400 p-1.5 border-2 border-yellow-400 overflow-hidden">
                <img src={testimonials[testimonialIndex].face} alt={`${testimonials[testimonialIndex].name} profile`} className="h-full w-full rounded-full object-cover" />
              </div>
            </div>
            <p className="hero-gradient-text font-bold text-lg mb-2">{testimonials[testimonialIndex].quote}</p>
            <p className="text-[#C0C0C0] text-base font-medium">{testimonials[testimonialIndex].name}, {testimonials[testimonialIndex].company}</p>
          </div>
          <div className="flex items-center justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button key={i} aria-label={`Go to testimonial ${i + 1}`} onClick={() => setTestimonialIndex(i)} className={`h-2.5 w-2.5 rounded-full border border-yellow-400 ${i === testimonialIndex ? 'bg-yellow-400' : 'bg-white/10'}`} />
            ))}
          </div>
        </div>
        {/* Case studies: 3-box layout */}
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1,2,3].map((n) => (
              <div key={n} className="rounded-2xl p-6 bg-gradient-to-b from-[#181818] via-[#232323] to-[#e5e5e5]/10 border-2 border-yellow-400/40 shadow-lg flex flex-col items-center">
                <h3 className="text-lg font-bold hero-gradient-text mb-2">Case Study {n}: Before/After</h3>
                {n === 1 && (
  <div className="aspect-video rounded-xl bg-gradient-to-b from-[#0b0b0b] via-[#1a1a1a] to-[#e5e5e5]/10 border border-yellow-400/30 flex items-center justify-center text-[#C0C0C0] mb-3">
    <img src="/charts/chart1.svg" alt="SEO traffic before and after using SEOInForce – Case Study 1" className="h-full w-auto object-contain" />
  </div>
)}
{n === 2 && (
  <div className="aspect-video rounded-xl bg-gradient-to-b from-[#0b0b0b] via-[#1a1a1a] to-[#e5e5e5]/10 border border-yellow-400/30 flex items-center justify-center text-[#C0C0C0] mb-3">
    <img src="/charts/chart2.svg" alt="Conversion rate before and after using Competitor Analysis Software – Case Study 2" className="h-full w-auto object-contain" />
  </div>
)}
{n === 3 && (
  <div className="aspect-video rounded-xl bg-gradient-to-b from-[#0b0b0b] via-[#1a1a1a] to-[#e5e5e5]/10 border border-yellow-400/30 flex items-center justify-center text-[#C0C0C0] mb-3">
    <img src="/charts/chart3.svg" alt="Agency rollout results with White-Label SEO Reports for Agencies – Case Study 3" className="h-full w-auto object-contain" />
  </div>
)}
                <p className="text-[#C0C0C0] text-base text-center">
                  {n === 1 && '+120% non-brand traffic in 90 days via technical fixes and content velocity.'}
                  {n === 2 && '+68% conversion rate lift after addressing intent gaps with Competitor Analysis Software.'}
                  {n === 3 && 'Agency rollout with White-Label SEO Reports for Agencies across 27 clients in 30 days.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold hero-gradient-text text-center mb-10">Book a Consultation</h2>
        <Card className="p-8 bg-gradient-to-b from-[#181818] via-[#232323] to-[#e5e5e5]/10 border-2 border-yellow-400/40 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6 flex flex-col justify-center">
              <h3 className="text-2xl font-bold hero-gradient-text mb-2">Maximize Your SEO Performance</h3>
              <p className="text-[#C0C0C0] text-base font-medium mb-2">Book a consultation with our SEO experts and get personalized strategies for your website.</p>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Rocket className="h-6 w-6 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold hero-gradient-text">Expert Analysis</h4>
                    <p className="text-sm text-[#C0C0C0]">Get a detailed review of your website&apos;s SEO performance and opportunities.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="h-6 w-6 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold hero-gradient-text">Custom Strategy</h4>
                    <p className="text-sm text-[#C0C0C0]">Receive a tailored SEO strategy designed for your specific goals.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Activity className="h-6 w-6 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold hero-gradient-text">Performance Tracking</h4>
                    <p className="text-sm text-[#C0C0C0]">Learn how to monitor and improve your rankings over time.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center rounded-lg p-6 bg-gradient-to-b from-[#181818] via-[#232323] to-[#e5e5e5]/10 border border-yellow-400/30 shadow">
              <h4 className="text-xl font-bold hero-gradient-text mb-2">Book Your Consultation</h4>
              <p className="text-[#C0C0C0] text-base mb-6">Schedule a 30-minute consultation with our SEO experts.</p>
               <Button className="w-full bg-yellow-500 text-slate-900 hover:bg-gradient-to-b hover:from-[#ffffff] hover:via-[#bfbfbf] hover:to-[#1a1a1a] hover:text-white font-bold py-3 text-base sm:text-lg rounded-lg shadow-lg motion-safe:hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900" asChild>
                 <a href="https://calendly.com/khamareclarke/new-meeting" target="_blank" rel="noopener noreferrer">
                   <span className="hidden sm:inline">Schedule Now</span>
                   <span className="sm:hidden">Book Call</span>
                 </a>
              </Button>
            </div>
          </div>
        </Card>
      </section>

      {/* Pricing Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold hero-gradient-text text-center mb-12">Transparent Pricing</h2>
        {/* Pricing Toggle */}
        <div className="flex flex-col items-center gap-2 mb-8">
          <span className="inline-flex items-center px-5 py-2 rounded-full bg-yellow-400/20 text-yellow-400 font-bold text-sm tracking-wide shadow animate-fade-in">
            <Sparkles className="inline-block w-5 h-5 mr-2" aria-label="Trusted by 10,000+ businesses" /> Trusted by 10,000+ businesses &bull; See real results in 60 seconds
          </span>
        </div>
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-full bg-[#181818] border border-yellow-400/40 p-1">
            <button
              className={`px-6 py-2 rounded-full font-semibold transition text-sm ${pricingTab === 'saas' ? 'bg-gradient-to-r from-yellow-400 via-[#ffd700] to-yellow-400 text-black shadow' : 'text-[#C0C0C0] hover:text-yellow-400'}`}
              onClick={() => setPricingTab('saas')}
              aria-pressed={pricingTab === 'saas'}
            >
              SaaS Plans
            </button>
            <button
              className={`px-6 py-2 rounded-full font-semibold transition text-sm ${pricingTab === 'retainers' ? 'bg-gradient-to-r from-yellow-400 via-[#ffd700] to-yellow-400 text-black shadow' : 'text-[#C0C0C0] hover:text-yellow-400'}`}
              onClick={() => setPricingTab('retainers')}
              aria-pressed={pricingTab === 'retainers'}
            >
              Done-For-You SEO Retainers
            </button>
          </div>
        </div>
        {/* SaaS Pricing */}
        {pricingTab === 'saas' && (
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <Card className="relative p-8 bg-gradient-to-b from-[#181818] via-[#232323] to-[#e5e5e5]/10 border-2 border-yellow-400/30 shadow-lg flex flex-col items-center">
  <h3 className="text-2xl font-bold hero-gradient-text mb-2">Starter</h3>
  <p className="text-[#C0C0C0] mb-3 text-lg font-semibold">Perfect for Small Sites & Freelancers</p>
  <p className="text-[#FFD700] italic mb-4 text-base">“Run monthly audits, track 100 keywords, and fix hidden SEO issues before they cost you rankings.”</p>
  <p className="text-4xl font-extrabold hero-gradient-text mb-2">£49<span className="text-base text-[#C0C0C0]">/mo</span></p>
  <Button className="w-full bg-yellow-500 text-slate-900 font-bold text-lg py-3 rounded-lg shadow-lg hover:bg-gradient-to-b hover:from-[#fffbe6] hover:via-[#ffd700] hover:to-[#b7a977] hover:text-black motion-safe:hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 mt-4">Get Started Today &rarr;</Button>
  <div className="flex items-center gap-2 mt-4 text-xs text-[#FFD700] font-medium">
    <Shield className="h-4 w-4" aria-label="SSL Secure" /> SSL Secure
    <span className="mx-1">|</span>
    <Award className="h-4 w-4" aria-label="GDPR Compliant" /> GDPR Compliant
    <span className="mx-1">|</span>
    <span className="text-[#FFD700]">No credit card required</span>
  </div>
</Card>
            {/* Growth (Most Popular) */}
            <Card className="relative p-8 border-2 border-yellow-400 bg-gradient-to-b from-[#232323] via-[#1a1a1a] to-[#e5e5e5]/10 shadow-2xl flex flex-col items-center scale-105 z-10">
  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-yellow-400 via-[#ffd700] to-yellow-400 text-slate-900 shadow">Most Popular</div>
  <h3 className="text-2xl font-bold hero-gradient-text mb-2">Growth</h3>
  <p className="text-[#C0C0C0] mb-3 text-lg font-semibold">For Growing Teams & Agencies</p>
  <p className="text-[#FFD700] italic mb-4 text-base">“Weekly competitor battle reports, AI-driven keyword insights, and 1,000 keywords tracked — helping you outrank rivals and grow traffic 10x faster.”</p>
  <p className="text-4xl font-extrabold hero-gradient-text mb-2">£249<span className="text-base text-[#C0C0C0]">/mo</span></p>
  <Button className="w-full bg-yellow-500 text-slate-900 font-bold text-lg py-3 rounded-lg shadow-lg hover:bg-gradient-to-b hover:from-[#fffbe6] hover:via-[#ffd700] hover:to-[#b7a977] hover:text-black motion-safe:hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 mt-4">Get Started Today &rarr;</Button>
  <div className="flex items-center gap-2 mt-4 text-xs text-[#FFD700] font-medium">
    <Shield className="h-4 w-4" aria-label="SSL Secure" /> SSL Secure
    <span className="mx-1">|</span>
    <Award className="h-4 w-4" aria-label="GDPR Compliant" /> GDPR Compliant
    <span className="mx-1">|</span>
    <span className="text-[#FFD700]">No credit card required</span>
  </div>
</Card>
            {/* Empire */}
            <Card className="relative p-8 bg-gradient-to-b from-[#181818] via-[#232323] to-[#e5e5e5]/10 border-2 border-yellow-400/30 shadow-lg flex flex-col items-center">
  <h3 className="text-2xl font-bold hero-gradient-text mb-2">Empire</h3>
  <p className="text-[#C0C0C0] mb-3 text-lg font-semibold">For Agencies & Enterprises Ready to Dominate</p>
  <p className="text-[#FFD700] italic mb-4 text-base">“Unlimited keyword tracking, daily competitor monitoring, white-label reporting suite, and a dedicated manager so you can command entire markets with enterprise-grade SEO intelligence.”</p>
  <p className="text-4xl font-extrabold hero-gradient-text mb-2">£499<span className="text-base text-[#C0C0C0]">/mo</span></p>
  <Button className="w-full bg-yellow-500 text-slate-900 font-bold text-lg py-3 rounded-lg shadow-lg hover:bg-gradient-to-b hover:from-[#fffbe6] hover:via-[#ffd700] hover:to-[#b7a977] hover:text-black motion-safe:hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 mt-4">Get Started Today &rarr;</Button>
  <div className="flex items-center gap-2 mt-4 text-xs text-[#FFD700] font-medium">
    <Shield className="h-4 w-4" aria-label="SSL Secure" /> SSL Secure
    <span className="mx-1">|</span>
    <Award className="h-4 w-4" aria-label="GDPR Compliant" /> GDPR Compliant
    <span className="mx-1">|</span>
    <span className="text-[#FFD700]">No credit card required</span>
  </div>
</Card>
          </div>
        )}
        {/* Done-For-You SEO Retainers Pricing */}
        {pricingTab === 'retainers' && (
          <div className="grid md:grid-cols-2 gap-8">
            {/* On-Page SEO */}
            <Card className="relative p-8 bg-gradient-to-b from-[#181818] via-[#232323] to-[#e5e5e5]/10 border-2 border-yellow-400/30 shadow-lg flex flex-col items-center">
  <h3 className="text-2xl font-bold hero-gradient-text mb-2">On-Page SEO</h3>
  <p className="text-[#C0C0C0] mb-3 text-lg font-semibold">From <span className="hero-gradient-text font-bold">£497/mo</span></p>
  <p className="text-[#FFD700] italic mb-4 text-base">For sites needing technical clean-up & optimization. Technical fixes (schema, meta tags, site speed), content optimization (H1s, keyword density, internal linking), up to 5 pages/month fully optimized. Quick wins SEO package.</p>
  <Button className="w-full bg-yellow-500 text-slate-900 font-bold text-lg py-3 rounded-lg shadow-lg hover:bg-gradient-to-b hover:from-[#fffbe6] hover:via-[#ffd700] hover:to-[#b7a977] hover:text-black motion-safe:hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 mt-4">Get Started Today &rarr;</Button>
  <div className="flex items-center gap-2 mt-4 text-xs text-[#FFD700] font-medium">
    <Shield className="h-4 w-4" aria-label="SSL Secure" /> SSL Secure
    <span className="mx-1">|</span>
    <Award className="h-4 w-4" aria-label="GDPR Compliant" /> GDPR Compliant
    <span className="mx-1">|</span>
    <span className="text-[#FFD700]">No credit card required</span>
  </div>
</Card>
            {/* Link Building */}
            <Card className="relative p-8 bg-gradient-to-b from-[#181818] via-[#232323] to-[#e5e5e5]/10 border-2 border-yellow-400/30 shadow-lg flex flex-col items-center">
  <h3 className="text-2xl font-bold hero-gradient-text mb-2">Link Building</h3>
  <p className="text-[#C0C0C0] mb-3 text-lg font-semibold">From <span className="hero-gradient-text font-bold">£997–£1,497/mo</span></p>
  <p className="text-[#FFD700] italic mb-4 text-base">For businesses needing authority growth. 5–10 high-authority backlinks/month (DA 40–70), guest posts + digital PR, white-hat outreach campaigns. Where SMEs/agencies win big—backlinks = rankings.</p>
  <Button className="w-full bg-yellow-500 text-slate-900 font-bold text-lg py-3 rounded-lg shadow-lg hover:bg-gradient-to-b hover:from-[#fffbe6] hover:via-[#ffd700] hover:to-[#b7a977] hover:text-black motion-safe:hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 mt-4">Get Started Today &rarr;</Button>
  <div className="flex items-center gap-2 mt-4 text-xs text-[#FFD700] font-medium">
    <Shield className="h-4 w-4" aria-label="SSL Secure" /> SSL Secure
    <span className="mx-1">|</span>
    <Award className="h-4 w-4" aria-label="GDPR Compliant" /> GDPR Compliant
    <span className="mx-1">|</span>
    <span className="text-[#FFD700]">No credit card required</span>
  </div>
</Card>
            {/* Content Creation & Strategy */}
            <Card className="relative p-8 bg-gradient-to-b from-[#181818] via-[#232323] to-[#e5e5e5]/10 border-2 border-yellow-400/30 shadow-lg flex flex-col items-center">
  <h3 className="text-2xl font-bold hero-gradient-text mb-2">Content Creation & Strategy</h3>
  <p className="text-[#C0C0C0] mb-3 text-lg font-semibold">From <span className="hero-gradient-text font-bold">£1,497–£2,497/mo</span></p>
  <p className="text-[#FFD700] italic mb-4 text-base">For scaling traffic long-term. 4–8 SEO blog posts/month (1,000–2,000 words each), editorial calendar + keyword strategy, optimized for conversions (not just traffic). SEO content engine for growth.</p>
  <Button className="w-full bg-yellow-500 text-slate-900 font-bold text-lg py-3 rounded-lg shadow-lg hover:bg-gradient-to-b hover:from-[#fffbe6] hover:via-[#ffd700] hover:to-[#b7a977] hover:text-black motion-safe:hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 mt-4">Get Started Today &rarr;</Button>
  <div className="flex items-center gap-2 mt-4 text-xs text-[#FFD700] font-medium">
    <Shield className="h-4 w-4" aria-label="SSL Secure" /> SSL Secure
    <span className="mx-1">|</span>
    <Award className="h-4 w-4" aria-label="GDPR Compliant" /> GDPR Compliant
    <span className="mx-1">|</span>
    <span className="text-[#FFD700]">No credit card required</span>
  </div>
</Card>
            {/* Full-Service SEO Retainer (Empire+) */}
            <Card className="relative p-8 bg-gradient-to-b from-[#232323] via-[#181818] to-[#e5e5e5]/10 border-2 border-yellow-400/40 shadow-2xl flex flex-col items-center scale-105 z-10">
  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-yellow-400 via-[#ffd700] to-yellow-400 text-slate-900 shadow">Empire+</div>
  <h3 className="text-2xl font-bold hero-gradient-text mb-2">Full-Service SEO Retainer</h3>
  <p className="text-[#C0C0C0] mb-3 text-lg font-semibold">£2,997–£4,997/mo</p>
  <p className="text-[#FFD700] italic mb-4 text-base">For enterprises & brands who want it all. On-page + off-page + content combined, competitor tracking + quarterly strategy calls, monthly reporting dashboard + white-label reports, dedicated SEO strategist. Look like an agency powerhouse.</p>
  <Button className="w-full bg-yellow-500 text-slate-900 font-bold text-lg py-3 rounded-lg shadow-lg hover:bg-gradient-to-b hover:from-[#fffbe6] hover:via-[#ffd700] hover:to-[#b7a977] hover:text-black motion-safe:hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 mt-4">Get Started Today &rarr;</Button>
  <div className="flex items-center gap-2 mt-4 text-xs text-[#FFD700] font-medium">
    <Shield className="h-4 w-4" aria-label="SSL Secure" /> SSL Secure
    <span className="mx-1">|</span>
    <Award className="h-4 w-4" aria-label="GDPR Compliant" /> GDPR Compliant
    <span className="mx-1">|</span>
    <span className="text-[#FFD700]">No credit card required</span>
  </div>
</Card>
          </div>
        )}
      
        {/* Pricing Comparison Table */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-x-auto bg-gradient-to-b from-[#181818] via-[#232323] to-[#e5e5e5]/10 border-2 border-yellow-400/30 shadow-lg">
            <table className="min-w-full text-sm text-left text-[#C0C0C0]">
              <thead className="bg-[#232323]">
                <tr>
                  <th className="py-4 px-6 font-bold text-lg hero-gradient-text">Features</th>
                  <th className="py-4 px-6 font-bold text-lg hero-gradient-text">Starter</th>
                  <th className="py-4 px-6 font-bold text-lg hero-gradient-text">Growth</th>
                  <th className="py-4 px-6 font-bold text-lg hero-gradient-text">Empire</th>
                  <th className="py-4 px-6 font-bold text-lg hero-gradient-text">Retainers</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-yellow-400/20">
                  <td className="py-3 px-6">Keyword Tracking</td>
                  <td className="py-3 px-6">100</td>
                  <td className="py-3 px-6">1,000</td>
                  <td className="py-3 px-6">Unlimited</td>
                  <td className="py-3 px-6">Custom</td>
                </tr>
                <tr className="border-t border-yellow-400/20">
                  <td className="py-3 px-6">Competitor Analysis</td>
                  <td className="py-3 px-6">Basic</td>
                  <td className="py-3 px-6">Weekly Battle Reports</td>
                  <td className="py-3 px-6">Daily Monitoring</td>
                  <td className="py-3 px-6">Quarterly Strategy Calls</td>
                </tr>
                <tr className="border-t border-yellow-400/20">
                  <td className="py-3 px-6">Content/SEO Execution</td>
                  <td className="py-3 px-6">Audit Only</td>
                  <td className="py-3 px-6">AI Insights</td>
                  <td className="py-3 px-6">White-label Reports</td>
                  <td className="py-3 px-6">Done-For-You (On-Page, Links, Content)</td>
                </tr>
                <tr className="border-t border-yellow-400/20">
                  <td className="py-3 px-6">Support</td>
                  <td className="py-3 px-6">Email</td>
                  <td className="py-3 px-6">Priority Onboarding</td>
                  <td className="py-3 px-6">VIP Support</td>
                  <td className="py-3 px-6">Dedicated Strategist</td>
                </tr>
                <tr className="border-t border-yellow-400/20">
                  <td className="py-3 px-6">Guarantee</td>
                  <td className="py-3 px-6" colSpan={4}><span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-400 font-bold text-xs"><Award className="h-4 w-4 mr-1" aria-label="Money-back guarantee" /> 30-day money-back guarantee</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Done-for-You Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold hero-gradient-text text-center mb-6">Done-For-You SEO Services</h2>
        <p className="text-[#C0C0C0] text-center mb-10 text-base font-medium">Hire the same Task Force behind the tools to execute your <em>done-for-you SEO services</em> strategy.</p>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 bg-gradient-to-b from-[#181818] via-[#232323] to-[#e5e5e5]/10 border-2 border-yellow-400/30 shadow-lg flex flex-col items-center text-center">
            <Wrench className="h-9 w-9 text-yellow-500 mb-4" />
            <h3 className="text-xl font-bold hero-gradient-text mb-2">On-Page SEO – SEO Audit Tool UK</h3>
            <p className="text-[#C0C0C0] text-base mb-4">Technical fixes, structure, and metadata that move the needle.</p>
             <Button className="w-full bg-yellow-500 text-slate-900 font-bold text-base sm:text-lg py-3 rounded-lg shadow-lg hover:bg-gradient-to-b hover:from-[#fffbe6] hover:via-[#ffd700] hover:to-[#b7a977] hover:text-black motion-safe:hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900" asChild>
               <a href="https://calendly.com/khamareclarke/new-meeting" target="_blank" rel="noopener noreferrer">
                 <span className="hidden sm:inline">Book Consultation</span>
                 <span className="sm:hidden">Book Call</span>
               </a>
             </Button>
          </Card>
          <Card className="p-8 bg-gradient-to-b from-[#181818] via-[#232323] to-[#e5e5e5]/10 border-2 border-yellow-400/30 shadow-lg flex flex-col items-center text-center">
            <LucideLink className="h-9 w-9 text-yellow-500 mb-4" />
            <h3 className="text-xl font-bold hero-gradient-text mb-2">Link Building – Competitor Analysis Software</h3>
            <p className="text-[#C0C0C0] text-base mb-4">Authority-driven outreach and white-hat link acquisition.</p>
             <Button className="w-full bg-yellow-500 text-slate-900 font-bold text-base sm:text-lg py-3 rounded-lg shadow-lg hover:bg-gradient-to-b hover:from-[#fffbe6] hover:via-[#ffd700] hover:to-[#b7a977] hover:text-black motion-safe:hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900" asChild>
               <a href="https://calendly.com/khamareclarke/new-meeting" target="_blank" rel="noopener noreferrer">
                 <span className="hidden sm:inline">Book Consultation</span>
                 <span className="sm:hidden">Book Call</span>
               </a>
             </Button>
          </Card>
          <Card className="p-8 bg-gradient-to-b from-[#181818] via-[#232323] to-[#e5e5e5]/10 border-2 border-yellow-400/30 shadow-lg flex flex-col items-center text-center">
            <FileText className="h-9 w-9 text-yellow-500 mb-4" />
            <h3 className="text-xl font-bold hero-gradient-text mb-2">Content Creation – White-Label SEO Reports for Agencies</h3>
            <p className="text-[#C0C0C0] text-base mb-4">Conversion-focused content aligned to search intent.</p>
             <Button className="w-full bg-yellow-500 text-slate-900 font-bold text-base sm:text-lg py-3 rounded-lg shadow-lg hover:bg-gradient-to-b hover:from-[#fffbe6] hover:via-[#ffd700] hover:to-[#b7a977] hover:text-black motion-safe:hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900" asChild>
               <a href="https://calendly.com/khamareclarke/new-meeting" target="_blank" rel="noopener noreferrer">
                 <span className="hidden sm:inline">Book Consultation</span>
                 <span className="sm:hidden">Book Call</span>
               </a>
             </Button>
          </Card>
        </div>
      </section>

      {/* Demo + Lead Capture Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-b from-[#181818] via-[#232323] to-[#e5e5e5]/10 border-2 border-yellow-400/40 shadow-lg">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/VIDEO_ID" title="SEOInForce Demo – Instant Audits, Real Results" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="p-8 bg-gradient-to-b from-[#181818] via-[#232323] to-[#e5e5e5]/10 border-2 border-yellow-400/40 shadow-lg rounded-2xl flex flex-col items-center">
            <h3 className="text-2xl font-bold hero-gradient-text mb-3 text-center">See SEOInForce in action – instant audits, real results.</h3>
            <p className="text-[#C0C0C0] mb-5 text-center text-base font-medium">Enter your domain and get a free instant SEO audit report in under 60 seconds.</p>
            <div className="flex gap-2 w-full max-w-md mx-auto mb-3">
              <Input 
                placeholder="Enter your domain (e.g., example.com)" 
                className="flex-1 text-white border-[#d9d9d9]/30 bg-gradient-to-b from-[#0b0b0b] via-[#1a1a1a] to-[#e5e5e5]/10 placeholder:text-[#C0C0C0] px-4 py-3 rounded-lg"
              />
              <Button className="bg-gradient-to-r from-yellow-400 via-[#ffd700] to-yellow-400 text-black font-bold text-lg px-8 py-3 rounded-lg shadow-lg hover:bg-gradient-to-b hover:from-[#fffbe6] hover:via-[#ffd700] hover:to-[#b7a977] hover:text-black motion-safe:hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900">
                Analyze My Site
              </Button>
            </div>
            <div className="text-xs text-[#FFD700] font-medium text-center">No credit card required.</div>
          </div>
        </div>
      </section>

      {/* Why Choose SEOInForce */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold hero-gradient-text text-center mb-12">Why Choose SEOInForce – SEO Audit Tool UK</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <Card className="p-8 bg-gradient-to-b from-[#181818] via-[#232323] to-[#e5e5e5]/10 border-2 border-yellow-400/30 shadow-lg flex flex-col items-center text-center">
            <Sparkles className="h-12 w-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-bold hero-gradient-text mb-2">AI-Powered Insights</h3>
            <p className="text-[#C0C0C0] font-medium">Recommendations tailored to your site with our <span className='font-semibold'>SEO Audit Tool UK</span>.</p>
          </Card>
          <Card className="p-8 bg-gradient-to-b from-[#181818] via-[#232323] to-[#e5e5e5]/10 border-2 border-yellow-400/30 shadow-lg flex flex-col items-center text-center">
            <Trophy className="h-12 w-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-bold hero-gradient-text mb-2">Proven Performance</h3>
            <p className="text-[#C0C0C0] font-medium">Trusted by <span className='font-semibold'>10,000+ websites globally</span>.</p>
          </Card>
          <Card className="p-8 bg-gradient-to-b from-[#181818] via-[#232323] to-[#e5e5e5]/10 border-2 border-yellow-400/30 shadow-lg flex flex-col items-center text-center">
            <Shield className="h-12 w-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-bold hero-gradient-text mb-2">Agency-Ready</h3>
            <p className="text-[#C0C0C0] font-medium">White-label SEO reports and <span className='font-semibold'>API access</span>.</p>
          </Card>
          <Card className="p-8 bg-gradient-to-b from-[#181818] via-[#232323] to-[#e5e5e5]/10 border-2 border-yellow-400/30 shadow-lg flex flex-col items-center text-center">
            <Star className="h-12 w-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-bold hero-gradient-text mb-2">Elite Support</h3>
            <p className="text-[#C0C0C0] font-medium">Priority access to <span className='font-semibold'>SEO strategists</span>.</p>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold hero-gradient-text text-center mb-6">Frequently Asked Questions</h2>
        <p className="text-center text-[#C0C0C0] mb-8 text-base font-medium">Everything you need to know about our SEO Audit Tool UK, White-Label SEO Reports for Agencies, and Competitor Analysis Software.</p>
        <div className="bg-gradient-to-b from-[#181818] via-[#232323] to-[#e5e5e5]/10 border-2 border-yellow-400/30 shadow-lg rounded-2xl p-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-semibold hero-gradient-text text-lg">What is included in the free SEO analysis?</AccordionTrigger>
              <AccordionContent className="text-[#C0C0C0] text-base">A lightweight technical audit, top issues, and quick wins to improve rankings. You’ll also see opportunities surfaced by our Competitor Analysis Software.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-semibold hero-gradient-text text-lg">Do you support white-label SEO reports for agencies?</AccordionTrigger>
              <AccordionContent className="text-[#C0C0C0] text-base">Yes. Our White-Label SEO Reports for Agencies include your branding, scheduled delivery, and export to PDF/CSV.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-semibold hero-gradient-text text-lg">How accurate is the rank tracking?</AccordionTrigger>
              <AccordionContent className="text-[#C0C0C0] text-base">We track daily with location targeting options. The Growth and Empire plans expand keyword and location coverage.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="font-semibold hero-gradient-text text-lg">Can I switch plans or cancel anytime?</AccordionTrigger>
              <AccordionContent className="text-[#C0C0C0] text-base">Absolutely. You can upgrade, downgrade, or cancel at any time from your dashboard.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="font-semibold hero-gradient-text text-lg">Do you offer done-for-you SEO services?</AccordionTrigger>
              <AccordionContent className="text-[#C0C0C0] text-base">Yes. Our Task Force can execute technical fixes, content, and outreach — backed by our platform for measurable results.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="font-semibold hero-gradient-text text-lg">Do you provide white-label access and API?</AccordionTrigger>
              <AccordionContent className="text-[#C0C0C0] text-base">Empire includes white-label SEO reports and API access so agencies can integrate SEOInForce into their client workflows.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="font-semibold hero-gradient-text text-lg">Is onboarding or migration support available?</AccordionTrigger>
              <AccordionContent className="text-[#C0C0C0] text-base">Yes. Our team will help migrate keywords, sites, and reports from tools like Ahrefs or SEMrush with minimal downtime.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        {/* FAQPage Schema */}
        <Script id="ld-faq" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is included in the free SEO analysis?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A lightweight technical audit, top issues, and quick wins to improve rankings, plus competitor insights.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you support white-label SEO reports for agencies?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Our white-label SEO reports include your branding, scheduling, and export options (PDF/CSV).',
                },
              },
              {
                '@type': 'Question',
                name: 'How accurate is the rank tracking?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Daily tracking with location targeting. Higher plans offer expanded keyword and location coverage.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I switch plans or cancel anytime?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, upgrade, downgrade, or cancel anytime from your dashboard.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you offer done-for-you SEO services?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Our in-house Task Force executes technical fixes, content, and outreach using our platform.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you provide white-label access and API?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Empire includes white-label SEO reports and API access for agency workflows.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is onboarding or migration support available?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. We help migrate from tools like Ahrefs or SEMrush with minimal downtime.',
                },
              },
            ],
          })}
        </Script>
      </section>

      {/* Final CTA Sticky Footer Banner */}
      <div className="fixed bottom-0 inset-x-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 border-t border-yellow-400/20 bg-gradient-to-b from-[#0b0b0b] via-[#181818] to-[#e5e5e5]/12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-5 gap-10">
            {/* Brand/Contact */}
            <div className="md:col-span-2 flex flex-col gap-4">
              <div className="flex items-center gap-2 sm:gap-3 mb-2">
                <span className="inline-flex items-center justify-center h-20 sm:h-28 md:h-36 w-20 sm:w-28 md:w-36 rounded-full ring-2 ring-yellow-400 bg-yellow-400 overflow-hidden">
                  <img src="/logo.svg" alt="SEOInForce shield logo" className="h-16 sm:h-24 md:h-32 w-16 sm:w-24 md:w-32 rounded-full object-cover" />
                </span>
                <span className="hero-gradient-text font-extrabold text-lg sm:text-xl tracking-tight drop-shadow">SEO in Force</span>
              </div>
              <p className="text-[#C0C0C0] text-base mb-1">Professional SEO tools and analytics to boost your website&apos;s visibility and performance.</p>
              <div className="flex flex-col gap-1 mt-2">
                <div className="flex items-center gap-2 text-[#FFD700] font-medium">
                  <Mail className="h-4 w-4" />
                  <span>contact@seoforce.com</span>
                </div>
                <div className="flex items-center gap-2 text-[#FFD700] font-medium">
                  <Phone className="h-4 w-4" />
                  <span>+1 (234) 567-890</span>
                </div>
              </div>
            </div>
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold hero-gradient-text mb-4">Quick Links</h4>
              <ul className="space-y-2 text-[#C0C0C0]">
                <li><a href="#" className="hover:text-[#FFD700] font-medium">Features</a></li>
                <li><a href="#" className="hover:text-[#FFD700] font-medium">Pricing</a></li>
                <li><a href="#" className="hover:text-[#FFD700] font-medium">Blog</a></li>
                <li><a href="#" className="hover:text-[#FFD700] font-medium">About</a></li>
                <li><a href="#" className="hover:text-[#FFD700] font-medium">Contact</a></li>
                <li><a href="#faq" className="hover:text-[#FFD700] font-medium">FAQ</a></li>
              </ul>
            </div>
            {/* Resources */}
            <div>
              <h4 className="text-lg font-bold hero-gradient-text mb-4">Resources</h4>
              <ul className="space-y-2 text-[#C0C0C0]">
                <li><a href="#" className="hover:text-[#FFD700] font-medium">Documentation</a></li>
                <li><a href="#" className="hover:text-[#FFD700] font-medium">API Reference</a></li>
                <li><a href="#" className="hover:text-[#FFD700] font-medium">Status Page</a></li>
                <li><a href="#" className="hover:text-[#FFD700] font-medium">Support Center</a></li>
                <li><a href="#" className="hover:text-[#FFD700] font-medium">Release Notes</a></li>
              </ul>
            </div>
            {/* Legal */}
            <div>
              <h4 className="text-lg font-bold hero-gradient-text mb-4">Legal</h4>
              <ul className="space-y-2 text-[#C0C0C0]">
                <li><a href="#" className="hover:text-[#FFD700] font-medium">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#FFD700] font-medium">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[#FFD700] font-medium">GDPR</a></li>
              </ul>
            </div>
            {/* Stay Updated */}
            <div>
              <h4 className="text-lg font-bold hero-gradient-text mb-4">Stay Updated</h4>
              <form className="space-y-4">
                <Input 
                  placeholder="Enter your email" 
                  className="text-white border-[#FFD700]/40 bg-gradient-to-b from-[#181818] via-[#232323] to-[#e5e5e5]/10 placeholder:text-[#FFD700] rounded-lg px-4 py-3"
                />
                <NextLink href="/audit/dashboard">
                  <Button className="w-full bg-gradient-to-r from-yellow-400 via-[#ffd700] to-yellow-400 text-black font-bold py-4 rounded-xl shadow-lg text-lg hover:bg-yellow-500 transition">Analyze My Site</Button>
                </NextLink>
              </form>
              <div className="flex space-x-4 mt-6 justify-center">
                <Facebook className="h-5 w-5 text-[#FFD700] hover:text-white cursor-pointer" />
                <Twitter className="h-5 w-5 text-[#FFD700] hover:text-white cursor-pointer" />
                <Instagram className="h-5 w-5 text-[#FFD700] hover:text-white cursor-pointer" />
                <Linkedin className="h-5 w-5 text-[#FFD700] hover:text-white cursor-pointer" />
                <Github className="h-5 w-5 text-[#FFD700] hover:text-white cursor-pointer" />
                <Rss className="h-5 w-5 text-[#FFD700] hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="mt-10 pt-8 border-t border-yellow-400/20 text-center text-[#C0C0C0]">
            <p className="text-sm">© 2025 <span className="hero-gradient-text font-bold">SEO in Force</span>. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Chatbot Launcher */}
      <button
        aria-label="Open chat assistant"
        onClick={() => setChatOpen((o) => !o)}
          className="fixed z-[80] bottom-4 sm:bottom-6 right-4 sm:right-6 h-12 sm:h-14 md:h-16 w-12 sm:w-14 md:w-16 rounded-full ring-2 ring-yellow-400 bg-yellow-400 shadow-xl flex items-center justify-center hover:shadow-2xl transition group overflow-hidden"
      >
          <img src="/logo.svg" alt="SEOInForce chat" className="h-10 sm:h-12 md:h-14 w-10 sm:w-12 md:w-14 rounded-full object-cover" />
      </button>

      {/* Chat Panel */}
      {chatOpen && (
        <div className="fixed z-[90] bottom-6 right-6 w-[340px] sm:w-[380px] rounded-2xl border-2 border-yellow-400/40 bg-[#181818] shadow-2xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b-2 border-yellow-400 bg-[#181818]">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center h-10 sm:h-12 md:h-14 w-10 sm:w-12 md:w-14 rounded-full ring-2 ring-yellow-400 bg-yellow-400 overflow-hidden">
                <img src="/logo.svg" alt="SEOInForce shield" className="h-8 sm:h-10 md:h-12 w-8 sm:w-10 md:w-12 rounded-full object-cover" />
              </span>
              <span className="font-extrabold text-sm sm:text-base md:text-lg tracking-tight text-white">SEOInForce Assistant</span>
            </div>
            <button aria-label="Close chat" onClick={() => setChatOpen(false)} className="text-[#FFD700] hover:text-white">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="max-h-72 overflow-auto p-4 space-y-3">
            <div className="text-base font-medium hero-gradient-text bg-black/90 border-2 border-yellow-400/20 rounded-xl p-4 w-fit max-w-[85%] shadow">Hi! Need a free SEO audit or help planning your rankings?</div>
            <div className="text-base text-[#FFD700] bg-[#232323] border border-yellow-400/20 rounded-xl p-4 w-fit max-w-[85%] ml-auto font-semibold">I want to analyze my domain.</div>
            <div className="text-xs text-[#FFD700] font-bold italic mt-2">Tip: Try "Run a free SEO audit"</div>
          </div>
          <div className="p-3 border-t border-[#d9d9d9]/30 bg-black/20">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 bg-gradient-to-b from-[#0b0b0b] via-[#1a1a1a] to-[#e5e5e5]/10 border border-[#d9d9d9]/30 text-white placeholder:text-[#C0C0C0] rounded-lg px-3 py-2 text-sm focus:outline-none"
              />
              <button className="px-3 py-2 rounded-lg bg-yellow-500 text-slate-900 hover:bg-yellow-400">
                <Send className="h-4 w-4" />
              </button>
            </div>
            <p className="text-[11px] text-[#C0C0C0] mt-2">Tip: Try "Run a free SEO audit"</p>
          </div>
        </div>
      )}
    </div>
  );
}