'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';
import { 
  FaEnvelope, 
  FaPhone, 
  FaCheckCircle, 
  FaBook, 
  FaGraduationCap, 
  FaFilePdf, 
  FaBrain, 
  FaCalendarAlt,
  FaWhatsapp,
  FaLinkedin,
  FaArrowDown,
  FaStar
} from 'react-icons/fa';

const SERVICE_ID = 'service_i4j5no4';
const TEMPLATE_ID = 'template_ho9v3kq';
const PUBLIC_KEY = 'ZeYBHO9t7_ddW-QJM';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'EST2',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          course: formData.course,
          message: formData.message,
        },
        PUBLIC_KEY
      );
  
      console.log('EmailJS response:', response.status, response.text);
      setSubmitStatus('success');
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: 'EST2',
        message: ''
      });
  
      setTimeout(() => setSubmitStatus(''), 3000);
    }
  };
  

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const courseFeatures = [
    { icon: <FaBook className="text-2xl" />, text: "Full syllabus coverage" },
    { icon: <FaCalendarAlt className="text-2xl" />, text: "16 teaching sessions" },
    { icon: <FaGraduationCap className="text-2xl" />, text: "6 full exams for practice" },
    { icon: <FaFilePdf className="text-2xl" />, text: "Organized PDFs" },
    { icon: <FaBrain className="text-2xl" />, text: "Focus on logic, not memorization" }
  ];

  const sessions = [
    "Cell Structure",
    "Cell Transport + Biochemistry (1)",
    "Biochemistry (2) + Enzymes",
    "Cellular Respiration",
    "Photosynthesis",
    "Cell Division",
    "Classical Genetics (1)",
    "Classical Genetics (2) + Genetic Engineering (1)",
    "Genetic Engineering (2)",
    "Evolution",
    "Taxonomy + Arthropods",
    "Plant Physiology",
    "Human System (1)",
    "Human System (2)",
    "Ecology + Chemical Cycles",
    "Human Effects + Biomes + Animal Behavior"
  ];

  type Testimonial = {
    name: string;
    score?: string;
    exam?: string;
    improvement?: string;
    duration?: string;
  };

  const testimonials: Testimonial[] = [
    { name: "Mathew David", score: "720", exam: "EST2 Biology" },
    { name: "Farah George", score: "760", exam: "EST2 Biology" },
    { name: "Youssef Ibrahim", score: "750", exam: "EST2 Biology" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="John Samy Biology Tutor"
                width={40}
                height={40}
                className="mr-3 rounded-lg"
              />
              <span className="font-poppins font-semibold text-xl text-[#1C355E]">
                John Samy
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('hero')} className="text-[#1C355E] hover:text-[#3AAFA9] transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about-course')} className="text-[#1C355E] hover:text-[#3AAFA9] transition-colors">
                About Course
              </button>
              <button onClick={() => scrollToSection('about-instructor')} className="text-[#1C355E] hover:text-[#3AAFA9] transition-colors">
                About Instructor
              </button>
              <button onClick={() => scrollToSection('course-structure')} className="text-[#1C355E] hover:text-[#3AAFA9] transition-colors">
                Course Structure
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-[#1C355E] hover:text-[#3AAFA9] transition-colors">
                Success Stories
              </button>
              <button onClick={() => scrollToSection('registration')} className="bg-[#3AAFA9] text-white px-4 py-2 rounded-lg hover:bg-[#1C355E] transition-colors">
                Join Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#1C355E] hover:text-[#3AAFA9] transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('hero')} className="block w-full text-left px-3 py-2 text-[#1C355E] hover:text-[#3AAFA9] transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about-course')} className="block w-full text-left px-3 py-2 text-[#1C355E] hover:text-[#3AAFA9] transition-colors">
                About Course
              </button>
              <button onClick={() => scrollToSection('about-instructor')} className="block w-full text-left px-3 py-2 text-[#1C355E] hover:text-[#3AAFA9] transition-colors">
                About Instructor
              </button>
              <button onClick={() => scrollToSection('course-structure')} className="block w-full text-left px-3 py-2 text-[#1C355E] hover:text-[#3AAFA9] transition-colors">
                Course Structure
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left px-3 py-2 text-[#1C355E] hover:text-[#3AAFA9] transition-colors">
                Success Stories
              </button>
              <button onClick={() => scrollToSection('registration')} className="block w-full text-left px-3 py-2 bg-[#3AAFA9] text-white rounded-lg hover:bg-[#1C355E] transition-colors">
                Join Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-white to-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center" data-aos="fade-up">
            <div className="flex justify-center mb-8">
              <Image
                src="/logo.png"
                alt="John Samy Biology Tutor Logo"
                width={120}
                height={120}
                className="drop-shadow-lg rounded-xl"
              />
            </div>
            <h1 className="font-poppins font-bold text-4xl md:text-6xl lg:text-7xl text-[#1C355E] mb-6">
              Master Biology the Smart Way
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6 max-w-3xl mx-auto">
              EST2 & ACT2 Biology Preparation Course by John Samy
            </p>
            <div className="bg-gradient-to-r from-[#3AAFA9] to-[#1C355E] text-white p-6 rounded-xl shadow-lg mb-8 max-w-2xl mx-auto">
              <h2 className="font-poppins font-bold text-2xl md:text-3xl mb-2">🎉 First 2 Sessions FREE!</h2>
              <p className="text-lg">Start your Biology journey with 2 complimentary sessions to experience our teaching method</p>
            </div>
            <motion.button
              onClick={() => scrollToSection('registration')}
              className="bg-[#3AAFA9] hover:bg-[#1C355E] text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join the Free Sessions Now!
            </motion.button>
            <div className="mt-8">
              <FaArrowDown className="mx-auto text-[#3AAFA9] animate-bounce text-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* About the Course */}
      <section id="about-course" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-[#1C355E] mb-6">
              About the Course
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              This is a fully online Biology course designed to help students prepare for EST2 & ACT2 exams efficiently and confidently. You&apos;ll build understanding from cell basics to advanced genetics and ecology — all through clear lessons, visuals, and guided practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {courseFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#f8fafc] to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ y: -5 }}
              >
                <div className="text-[#3AAFA9] mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <p className="text-center font-medium text-[#1C355E]">
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500 italic">
              Course duration varies depending on the upcoming trial exam date.
            </p>
          </div>
        </div>
      </section>

      {/* About the Instructor */}
      <section id="about-instructor" className="py-20 bg-gradient-to-br from-[#f8fafc] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-[#1C355E] mb-6">
              About John Samy
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left" data-aos="fade-right">
              <div className="flex justify-center lg:justify-start mb-8">
                <Image
                  src="/logo.png"
                  alt="John Samy"
                  width={200}
                  height={200}
                  className="rounded-full shadow-xl object-cover"
                />
              </div>
            </div>
            
            <div className="space-y-6" data-aos="fade-left">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-[#1C355E]">John Samy</strong> – Biology Instructor specialized in EST & ACT preparation.
                Undergraduate student at Faculty of Pharmacy, MIU, with a strong academic record and top EST Biology exam score. Focused on helping students truly understand Biology, not just memorize it.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-[#3AAFA9] text-xl" />
                  <a href="mailto:johnsamy987@gmail.com" className="text-[#1C355E] hover:text-[#3AAFA9] transition-colors">
                    johnsamy987@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-[#3AAFA9] text-xl" />
                  <a href="tel:01205292523" className="text-[#1C355E] hover:text-[#3AAFA9] transition-colors">
                    01205292523
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Structure */}
      <section id="course-structure" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-[#1C355E] mb-6">
              Course Structure (16 Sessions)
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive coverage of all Biology topics through structured, progressive learning sessions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sessions.map((session, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#3AAFA9] to-[#1C355E] text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 50}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-lg">
                    {session}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Testimonials */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-[#f8fafc] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-[#1C355E] mb-6">
              Student Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real results from students who mastered Biology with John Samy&apos;s guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ y: -5 }}
              >
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-xl" />
                    ))}
                  </div>
                  <h3 className="font-bold text-xl text-[#1C355E] mb-2">
                    {testimonial.name}
                  </h3>
                  {testimonial.score && (
                    <p className="text-2xl font-bold text-[#3AAFA9] mb-2">
                      {testimonial.score}
                    </p>
                  )}
                  {testimonial.improvement && (
                    <p className="text-2xl font-bold text-[#3AAFA9] mb-2">
                      {testimonial.improvement}
                    </p>
                  )}
                  <p className="text-gray-600">
                    {testimonial.exam || `Improved in ${testimonial.duration}!`}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="registration" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-[#1C355E] mb-6">
              Join the Free Sessions Now 🚀
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              Ready to master Biology? Fill out the form below and start your journey to exam success.
            </p>
            <div className="bg-gradient-to-r from-[#3AAFA9] to-[#1C355E] text-white p-4 rounded-lg shadow-lg max-w-xl mx-auto mb-8">
              <h3 className="font-poppins font-bold text-xl mb-2">🎁 Special Offer: First 2 Sessions FREE!</h3>
              <p className="text-sm">Experience our teaching method with 2 complimentary sessions before committing to the full course.</p>
            </div>
          </div>

          <motion.div
            className="bg-gradient-to-br from-[#f8fafc] to-white p-8 rounded-xl shadow-xl border border-gray-100"
            data-aos="fade-up"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#1C355E] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3AAFA9] focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#1C355E] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3AAFA9] focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#1C355E] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3AAFA9] focus:border-transparent transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-[#1C355E] mb-2">
                    Preferred Course *
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3AAFA9] focus:border-transparent transition-all duration-300"
                  >
                    <option value="EST2">EST2 Biology</option>
                    <option value="ACT2">ACT2 Biology</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#1C355E] mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3AAFA9] focus:border-transparent transition-all duration-300"
                  placeholder="Tell us about your goals or any questions you have..."
                />
              </div>

              <div className="text-center">
                  <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#3AAFA9] hover:bg-[#1C355E] disabled:bg-gray-400 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg disabled:transform-none"
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                >
                  {isSubmitting ? 'Submitting...' : 'Register for 2 FREE Sessions'}
                </motion.button>
                
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
                  >
                    <FaCheckCircle className="inline mr-2" />
                    Registration submitted successfully! We&apos;ll contact you soon.
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1C355E] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <Image
                  src="/logo.png"
                  alt="John Samy Biology Tutor"
                  width={40}
                  height={40}
                  className="mr-3 rounded-lg"
                />
                <span className="font-poppins font-semibold text-xl">
                  John Samy
                </span>
              </div>
              <p className="text-gray-300">
                Master Biology the smart way with expert guidance and proven results.
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-2">
                  <FaEnvelope className="text-[#3AAFA9]" />
                  <a href="mailto:johnsamy987@gmail.com" className="hover:text-[#3AAFA9] transition-colors">
                    johnsamy987@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <FaPhone className="text-[#3AAFA9]" />
                  <a href="tel:01205292523" className="hover:text-[#3AAFA9] transition-colors">
                    01205292523
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center md:text-right">
              <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
              <div className="flex justify-center md:justify-end space-x-4">
                <a href="mailto:johnsamy987@gmail.com" className="text-gray-300 hover:text-[#3AAFA9] transition-colors">
                  <FaEnvelope className="text-2xl" />
                </a>
                <a href="https://wa.me/201205292523" className="text-gray-300 hover:text-[#3AAFA9] transition-colors">
                  <FaWhatsapp className="text-2xl" />
                </a>
                <a href="#" className="text-gray-300 hover:text-[#3AAFA9] transition-colors">
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              ©️ 2025 John Samy – All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}