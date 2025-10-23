import React from "react";
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
  Users,
  Building,
  Award,
  Calendar,
  Stethoscope,
  Heart,
  Target,
  Eye,
} from "lucide-react";

const stats = [
  {
    icon: Calendar,
    label: "Founded",
    value: "1998",
    description: "26 years of excellence",
  },
  {
    icon: Users,
    label: "Annual Admissions",
    value: "15,000+",
    description: "Patients served yearly",
  },
  {
    icon: Stethoscope,
    label: "Emergency Visits",
    value: "25,000+",
    description: "Emergency cases handled",
  },
  {
    icon: Award,
    label: "Full-time Physicians",
    value: "120+",
    description: "Expert medical professionals",
  },
  {
    icon: Building,
    label: "Locations",
    value: "8",
    description: "Across Nigeria",
  },
  {
    icon: Heart,
    label: "Specialties",
    value: "25+",
    description: "Medical departments",
  },
];

const leadership = [
  {
    name: "Dr. Adaora Okafor",
    position: "Chief Medical Officer",
    qualifications: "MBBS, FMCP, PhD",
    experience: "20+ years",
    specialization:
      "Internal Medicine & Healthcare Administration",
    bio: "Dr. Okafor leads our medical operations with extensive experience in clinical practice and healthcare management.",
  },
  {
    name: "Dr. Ibrahim Hassan",
    position: "Head of Surgery",
    qualifications: "MBBS, FWACS, FRCS",
    experience: "18+ years",
    specialization: "General & Laparoscopic Surgery",
    bio: "Renowned surgeon with expertise in minimally invasive surgical techniques and medical education.",
  },
  {
    name: "Dr. Grace Adeolu",
    position: "Director of Pediatrics",
    qualifications: "MBBS, FWACP, MSc",
    experience: "15+ years",
    specialization: "Pediatric Medicine & Child Health",
    bio: "Dedicated pediatrician committed to providing comprehensive healthcare for children and adolescents.",
  },
  {
    name: "Dr. Mohammed Yusuf",
    position: "Emergency Medicine Director",
    qualifications: "MBBS, FMCEM, ATLS",
    experience: "12+ years",
    specialization: "Emergency Medicine & Critical Care",
    bio: "Expert in emergency medicine with extensive training in trauma care and critical care management.",
  },
  {
    name: "Dr. Olumide Adebayo",
    position: "Chief of Staff",
    qualifications: "MBBS, MBA, FMCP",
    experience: "22+ years",
    specialization:
      "Hospital Administration & Quality Management",
    bio: "Healthcare leader focused on operational excellence and quality improvement initiatives.",
  },
  {
    name: "Dr. Fatima Aliyu",
    position: "Head of Obstetrics & Gynecology",
    qualifications: "MBBS, FWACS, MRCOG",
    experience: "16+ years",
    specialization: "Women's Health & Reproductive Medicine",
    bio: "Leading specialist in women's healthcare with expertise in high-risk pregnancies and gynecological surgery.",
  },
];

const partners = [
  { name: "Nigerian Medical Association", logo: "NMA" },
  { name: "West African College of Surgeons", logo: "WACS" },
  { name: "International Red Cross", logo: "IRC" },
  { name: "WHO Nigeria", logo: "WHO" },
  { name: "UNICEF Nigeria", logo: "UNICEF" },
  { name: "Nigerian Heart Foundation", logo: "NHF" },
];

export function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl mb-6">About NMSL</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Excellence in healthcare since 1998. Committed to
              providing world-class medical services with
              compassion, innovation, and unwavering dedication
              to patient care.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Target className="w-8 h-8 text-primary" />
                  <CardTitle className="text-2xl">
                    Our Mission
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To provide exceptional healthcare services
                  that exceed patient expectations through
                  innovative medical practices, compassionate
                  care, and a commitment to continuous
                  improvement. We strive to be the healthcare
                  provider of choice by maintaining the highest
                  standards of medical excellence and patient
                  safety.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Eye className="w-8 h-8 text-primary" />
                  <CardTitle className="text-2xl">
                    Our Vision
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be the leading healthcare institution in
                  West Africa, recognized for medical
                  excellence, innovation, and compassionate
                  patient care. We envision a future where
                  quality healthcare is accessible to all,
                  powered by cutting-edge technology and
                  delivered by the most skilled medical
                  professionals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-900">
              Our History
            </h2>
            <p className="text-xl text-gray-600">
              A legacy of healthcare excellence spanning over
              two decades
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1719934398679-d764c1410770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc1ODE3ODEyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="NMSL Hospital Building"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl mb-3 text-primary">
                    1998 - Foundation
                  </h3>
                  <p className="text-gray-600">
                    NNPC Medical Services Limited was
                    established as a specialized healthcare
                    facility to serve NNPC employees and their
                    families, with a 50-bed hospital in Lagos.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl mb-3 text-primary">
                    2005 - Expansion
                  </h3>
                  <p className="text-gray-600">
                    Opened our second facility in Abuja and
                    expanded services to include specialized
                    surgical procedures and advanced diagnostic
                    capabilities.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl mb-3 text-primary">
                    2015 - Modernization
                  </h3>
                  <p className="text-gray-600">
                    Major infrastructure upgrade introducing
                    state-of-the-art medical equipment, digital
                    health records, and expanded emergency
                    services.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl mb-3 text-primary">
                    2024 - Innovation
                  </h3>
                  <p className="text-gray-600">
                    Launch of telemedicine services, AI-assisted
                    diagnostics, and partnerships with
                    international medical institutions for
                    knowledge exchange.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-900">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600">
              Measurable outcomes that demonstrate our
              commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-3xl text-primary">
                    {stat.value}
                  </CardTitle>
                  <CardDescription className="text-lg">
                    {stat.label}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-900">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              Meet the medical professionals leading our
              organization
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <CardTitle className="text-xl">
                    {leader.name}
                  </CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {leader.position}
                  </CardDescription>
                  <Badge
                    variant="secondary"
                    className="mx-auto"
                  >
                    {leader.experience}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-medium text-sm text-gray-700">
                      Qualifications:
                    </h4>
                    <p className="text-sm text-gray-600">
                      {leader.qualifications}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-gray-700">
                      Specialization:
                    </h4>
                    <p className="text-sm text-gray-600">
                      {leader.specialization}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 italic">
                      {leader.bio}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-900">
              Our Partners
            </h2>
            <p className="text-xl text-gray-600">
              Collaborating with leading healthcare
              organizations
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-3">
                  <span className="text-white font-bold text-xs text-center">
                    {partner.logo}
                  </span>
                </div>
                <p className="text-sm text-center text-gray-600 font-medium">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Our Core Values</h2>
            <p className="text-xl opacity-90">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Heart className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl mb-2">Compassion</h3>
              <p className="opacity-90">
                Treating every patient with empathy, dignity,
                and respect
              </p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl mb-2">Excellence</h3>
              <p className="opacity-90">
                Striving for the highest standards in all
                aspects of care
              </p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl mb-2">Integrity</h3>
              <p className="opacity-90">
                Maintaining honesty and transparency in all our
                interactions
              </p>
            </div>
            <div className="text-center">
              <Stethoscope className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl mb-2">Innovation</h3>
              <p className="opacity-90">
                Embracing new technologies and methods to
                improve patient outcomes
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}