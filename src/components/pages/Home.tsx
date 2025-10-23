import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import {
  Heart,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Stethoscope,
  Building,
  Clock,
  Star,
  Shield,
  Ambulance,
  Activity,
  UserCheck,
  Calendar,
  CheckCircle,
  AlertCircle,
  ArrowUp,
  MessageCircle,
  BookOpen,
  TrendingUp,
  Globe,
  X,
} from "lucide-react";

const slideImages = [
  {
    url: "https://images.unsplash.com/photo-1666887360742-974c8fce8e6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGFmcmljYW4lMjBkb2N0b3IlMjBob3NwaXRhbCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTgxODY2ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Expert Medical Care by African Professionals",
    description:
      "Leading healthcare excellence with our skilled and compassionate medical team",
  },
  {
    url: "https://images.unsplash.com/photo-1592392821486-71f028a00581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbWVkaWNhbCUyMHRlYW0lMjBob3NwaXRhbCUyMHN0YWZmfGVufDF8fHx8MTc1ODE4NjY4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "United in Healing and Hope",
    description:
      "Our diverse medical team working together for your health and wellness",
  },
  {
    url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMG51cnNlJTIwaGVhbHRoY2FyZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTgxODY2ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Compassionate Nursing Care",
    description:
      "Dedicated nursing professionals providing round-the-clock patient care",
  },
  {
    url: "https://images.unsplash.com/photo-1536064479547-7ee40b74b807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcGF0aWVudCUyMGRvY3RvciUyMGNvbnN1bHRhdGlvbnxlbnwxfHx8fDE3NTgxODY2ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Personalized Patient Care",
    description:
      "One-on-one consultations tailored to your individual health needs",
  },
];

const services = [
  {
    icon: Heart,
    name: "Cardiology",
    description: "Comprehensive heart care services",
  },
  {
    icon: Stethoscope,
    name: "Internal Medicine",
    description: "General medical care for adults",
  },
  {
    icon: Building,
    name: "Surgery",
    description: "Advanced surgical procedures",
  },
  {
    icon: Users,
    name: "Pediatrics",
    description: "Specialized care for children",
  },
];

const leadership = [
  {
    name: "Dr. Adaora Okafor",
    position: "Chief Medical Officer",
    experience: "20+ years",
    image:
      "https://images.unsplash.com/photo-1643297653753-2d3f459edc6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHdvbWFuJTIwZG9jdG9yJTIwbWVkaWNhbCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTgxODY2ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Dr. Ibrahim Hassan",
    position: "Head of Surgery",
    experience: "18+ years",
    image:
      "https://images.unsplash.com/photo-1666887360742-974c8fce8e6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZG9jdG9yJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU4MTg2Njg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Dr. Grace Adeolu",
    position: "Director of Pediatrics",
    experience: "15+ years",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMG51cnNlJTIwaGVhbHRoY2FyZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTgxODY2ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Dr. Mohammed Yusuf",
    position: "Emergency Medicine Director",
    experience: "12+ years",
    image:
      "https://images.unsplash.com/photo-1666887360742-974c8fce8e6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGFmcmljYW4lMjBkb2N0b3IlMjBob3NwaXRhbCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTgxODY2ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

const news = [
  {
    title: "New Cardiac Center Opens",
    date: "March 15, 2024",
    summary:
      "NMSL inaugurates state-of-the-art cardiac care facility with advanced interventional capabilities.",
  },
  {
    title: "Medical Camp in Rural Communities",
    date: "March 10, 2024",
    summary:
      "Free medical screening and treatment provided to over 1,000 residents in surrounding communities.",
  },
  {
    title: "Digital Health Initiative Launch",
    date: "March 5, 2024",
    summary:
      "Telemedicine platform now available for remote consultations and follow-up care.",
  },
];

const testimonials = [
  {
    name: "Mrs. Fatima Abdullahi",
    location: "Lagos",
    rating: 5,
    comment:
      "Exceptional care during my surgery. The medical team was professional and compassionate throughout my stay.",
  },
  {
    name: "Mr. Chidi Okwu",
    location: "Abuja",
    rating: 5,
    comment:
      "Quick emergency response saved my life. Forever grateful to the NMSL emergency team.",
  },
  {
    name: "Dr. Amina Bello",
    location: "Port Harcourt",
    rating: 5,
    comment:
      "Outstanding pediatric care for my daughter. The staff made her feel comfortable and safe.",
  },
];

const statistics = [
  {
    number: "50,000+",
    label: "Patients Served Annually",
    icon: Users,
  },
  {
    number: "200+",
    label: "Medical Professionals",
    icon: UserCheck,
  },
  {
    number: "15+",
    label: "Specialist Departments",
    icon: Building,
  },
  {
    number: "24/7",
    label: "Emergency Services",
    icon: Ambulance,
  },
];

const healthTips = [
  {
    title: "Heart Health",
    tip: "Exercise for 30 minutes daily to maintain cardiovascular health",
    icon: Heart,
  },
  {
    title: "Preventive Care",
    tip: "Schedule regular health screenings to catch issues early",
    icon: Shield,
  },
  {
    title: "Mental Wellness",
    tip: "Practice mindfulness and stress management techniques",
    icon: Activity,
  },
];

const certifications = [
  {
    name: "JCI Accredited",
    description:
      "Joint Commission International certification for quality",
  },
  {
    name: "ISO 9001:2015",
    description: "Quality Management System certification",
  },
  {
    name: "COHSASA",
    description:
      "Council for Health Service Accreditation of Southern Africa",
  },
];

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showEmergencyBanner, setShowEmergencyBanner] =
    useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(
        (prev) => (prev + 1) % slideImages.length,
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + slideImages.length) % slideImages.length,
    );
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Slideshow */}
      <section className="relative h-[700px] overflow-hidden">
        {slideImages.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide
                ? "opacity-100"
                : "opacity-0"
            }`}
          >
            <ImageWithFallback
              src={slide.url}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-6 max-w-5xl">
                <h1 className="text-4xl md:text-6xl mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl mb-10 opacity-95 leading-relaxed max-w-4xl mx-auto">
                  {slide.description}
                </p>
                <div className="flex justify-center">
                  {/* Carousel buttons removed as requested */}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slideImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white scale-125"
                  : "bg-white/60 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Emergency Banner */}
      {showEmergencyBanner && (
        <div className="bg-red-600 text-white py-3 px-4 relative">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <p className="text-sm md:text-base">
                <strong>24/7 Emergency Services:</strong> Call
                +234 1 234 5678 for immediate medical assistance
              </p>
            </div>
            <button
              onClick={() => setShowEmergencyBanner(false)}
              className="text-white hover:text-gray-200 transition-colors"
              aria-label="Close emergency banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Statistics Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all duration-300">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl md:text-4xl mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-gradient-to-b from-white to-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl mb-8 text-gray-900">
            Welcome to NNPC Medical Services Limited (NMSL)
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            As a leading healthcare provider in Nigeria, NMSL
            combines medical excellence with compassionate care.
            Our state-of-the-art facilities and expert medical
            team are dedicated to providing world-class
            healthcare services to our community and beyond.
            From emergency care to specialized treatments, we
            are committed to your health and well-being.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl mb-3 text-gray-900">
                Excellence
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Committed to the highest standards of medical
                care with cutting-edge technology and best
                practices
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl mb-3 text-gray-900">
                Compassion
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Caring for our patients with empathy,
                understanding, and cultural sensitivity
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl mb-3 text-gray-900">
                24/7 Care
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Round-the-clock medical services and emergency
                care available whenever you need us
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-6 text-gray-900">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare services tailored to your
              needs with specialized care across all medical
              disciplines
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-gradient-to-b from-white to-secondary/20 group"
              >
                <CardHeader className="pb-4">
                  <div className="w-18 h-18 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <service.icon className="w-9 h-9 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link to="/services">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Leadership */}
      <section className="py-20 bg-gradient-to-b from-white to-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-6 text-gray-900">
              Our Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert medical professionals leading our
              commitment to excellence with decades of combined
              experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white group"
              >
                <CardHeader className="pb-4">
                  <div className="w-28 h-28 mx-auto mb-6 overflow-hidden rounded-full ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                    <ImageWithFallback
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {leader.name}
                  </CardTitle>
                  <CardDescription className="text-primary text-lg">
                    {leader.position}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge
                    variant="secondary"
                    className="bg-accent text-accent-foreground px-4 py-2"
                  >
                    {leader.experience}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link to="/about">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg"
              >
                Meet Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-6 text-gray-900">
              Latest News
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with our latest developments and
              healthcare initiatives making a difference in our
              community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white group"
              >
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-primary">
                    {item.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {item.summary}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-6 text-gray-900">
              Patient Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our satisfied patients about their
              exceptional healthcare experience with our
              dedicated team
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-gradient-to-b from-white to-accent/20 group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ),
                    )}
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {testimonial.name}
                  </CardTitle>
                  <CardDescription className="text-primary">
                    {testimonial.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic leading-relaxed">
                    "{testimonial.comment}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Health Tips */}
      <section className="py-16 bg-gradient-to-b from-white to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-900">
              Daily Health Tips
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps you can take today for a healthier
              tomorrow
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {healthTips.map((tip, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-white group"
              >
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <tip.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {tip.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {tip.tip}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals & Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-900">
              Accreditations & Trust
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognized for excellence in healthcare quality
              and patient safety
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl mb-2 text-gray-900">
                  {cert.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>

          {/* Partnership Logos */}
          <div className="border-t pt-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl text-gray-900 mb-2">
                Trusted Healthcare Partners
              </h3>
              <p className="text-gray-600">
                Working together to provide comprehensive
                medical care
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 hover:opacity-80 transition-opacity">
              <div className="bg-gray-100 h-16 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-sm">
                  NNPC Health
                </span>
              </div>
              <div className="bg-gray-100 h-16 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-sm">
                  WHO Partnership
                </span>
              </div>
              <div className="bg-gray-100 h-16 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-sm">
                  Lagos State Health
                </span>
              </div>
              <div className="bg-gray-100 h-16 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-sm">
                  UNICEF Nigeria
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-6">Get in Touch</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              We're here to provide you with exceptional
              healthcare services. Contact us anytime for
              medical assistance or inquiries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-all duration-300 backdrop-blur-sm">
                <Phone className="w-10 h-10" />
              </div>
              <h3 className="text-2xl mb-3">
                Emergency Hotline
              </h3>
              <p className="opacity-90 text-lg">
                +234 1 234 5678
              </p>
              <p className="opacity-75 mt-2">Available 24/7</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-all duration-300 backdrop-blur-sm">
                <Mail className="w-10 h-10" />
              </div>
              <h3 className="text-2xl mb-3">Email Us</h3>
              <p className="opacity-90 text-lg">info@nmsl.ng</p>
              <p className="opacity-75 mt-2">
                We respond within 24 hours
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-all duration-300 backdrop-blur-sm">
                <MapPin className="w-10 h-10" />
              </div>
              <h3 className="text-2xl mb-3">Visit Us</h3>
              <p className="opacity-90 text-lg">
                Multiple locations across Nigeria
              </p>
              <p className="opacity-75 mt-2">
                Lagos • Abuja • Port Harcourt
              </p>
            </div>
          </div>
          <div className="text-center mt-16">
            <Link to="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg shadow-lg"
              >
                View All Locations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-primary hover:bg-primary/90 text-white px-4 py-4 rounded-full shadow-lg"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Sticky Emergency Contact Button */}
      <div className="fixed bottom-4 left-4 z-50">
        <Link to="tel:+2341234567">
          <Button className="bg-red-600 hover:bg-red-700 text-white px-4 py-4 rounded-full shadow-lg animate-pulse">
            <Ambulance className="w-5 h-5" />
            <span className="sr-only">Emergency Call</span>
          </Button>
        </Link>
      </div>

      {/* Live Chat Widget Placeholder */}
      <div className="fixed bottom-20 right-4 z-50">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-4 rounded-full shadow-lg">
          <MessageCircle className="w-5 h-5" />
          <span className="sr-only">Live Chat</span>
        </Button>
      </div>
    </div>
  );
}