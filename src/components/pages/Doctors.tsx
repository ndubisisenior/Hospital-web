import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Search,
  Star,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Award,
  GraduationCap,
} from "lucide-react";

const doctors = [
  {
    id: 1,
    name: "Dr. Adaora Okafor",
    specialty: "Internal Medicine",
    department: "Medicine & Allied",
    qualifications: "MBBS, FMCP, PhD",
    experience: "20+ years",
    rating: 4.9,
    reviews: 127,
    location: "Lagos",
    languages: ["English", "Igbo", "Yoruba"],
    bio: "Dr. Okafor is a highly experienced internal medicine physician specializing in chronic disease management and preventive care.",
    availability: ["Monday", "Tuesday", "Wednesday", "Friday"],
    nextAvailable: "2024-03-20",
  },
  {
    id: 2,
    name: "Dr. Ibrahim Hassan",
    specialty: "General Surgery",
    department: "Surgery & Allied",
    qualifications: "MBBS, FWACS, FRCS",
    experience: "18+ years",
    rating: 4.8,
    reviews: 98,
    location: "Abuja",
    languages: ["English", "Hausa", "Arabic"],
    bio: "Renowned surgeon with expertise in laparoscopic procedures and emergency surgery.",
    availability: ["Monday", "Wednesday", "Thursday", "Friday"],
    nextAvailable: "2024-03-22",
  },
  {
    id: 3,
    name: "Dr. Grace Adeolu",
    specialty: "Pediatrics",
    department: "Pediatrics",
    qualifications: "MBBS, FWACP, MSc",
    experience: "15+ years",
    rating: 4.9,
    reviews: 156,
    location: "Lagos",
    languages: ["English", "Yoruba"],
    bio: "Dedicated pediatrician with special interest in child development and adolescent medicine.",
    availability: [
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Saturday",
    ],
    nextAvailable: "2024-03-21",
  },
  {
    id: 4,
    name: "Dr. Mohammed Yusuf",
    specialty: "Emergency Medicine",
    department: "Emergency & Diagnostics",
    qualifications: "MBBS, FMCEM, ATLS",
    experience: "12+ years",
    rating: 4.7,
    reviews: 89,
    location: "Port Harcourt",
    languages: ["English", "Hausa"],
    bio: "Emergency medicine specialist with extensive experience in trauma care and critical care management.",
    availability: ["Monday", "Tuesday", "Friday", "Saturday"],
    nextAvailable: "2024-03-19",
  },
  {
    id: 5,
    name: "Dr. Fatima Aliyu",
    specialty: "Obstetrics & Gynecology",
    department: "Surgery & Allied",
    qualifications: "MBBS, FWACS, MRCOG",
    experience: "16+ years",
    rating: 4.8,
    reviews: 142,
    location: "Abuja",
    languages: ["English", "Hausa", "Fulfude"],
    bio: "Leading specialist in women's health with expertise in high-risk pregnancies and minimally invasive gynecological surgery.",
    availability: ["Monday", "Wednesday", "Thursday", "Friday"],
    nextAvailable: "2024-03-23",
  },
  {
    id: 6,
    name: "Dr. Chidi Okwu",
    specialty: "Orthopedic Surgery",
    department: "Surgery & Allied",
    qualifications: "MBBS, FWACS, FRCS",
    experience: "14+ years",
    rating: 4.6,
    reviews: 76,
    location: "Lagos",
    languages: ["English", "Igbo"],
    bio: "Orthopedic surgeon specializing in joint replacement, sports medicine, and trauma surgery.",
    availability: ["Tuesday", "Thursday", "Friday", "Saturday"],
    nextAvailable: "2024-03-25",
  },
  {
    id: 7,
    name: "Dr. Kemi Ogundipe",
    specialty: "Endocrinology",
    department: "Medicine & Allied",
    qualifications: "MBBS, FMCP, PhD",
    experience: "13+ years",
    rating: 4.7,
    reviews: 64,
    location: "Lagos",
    languages: ["English", "Yoruba"],
    bio: "Endocrinologist with expertise in diabetes management, thyroid disorders, and hormone replacement therapy.",
    availability: ["Monday", "Tuesday", "Wednesday", "Friday"],
    nextAvailable: "2024-03-24",
  },
  {
    id: 8,
    name: "Dr. Uche Nwosu",
    specialty: "Neurosurgery",
    department: "Surgery & Allied",
    qualifications: "MBBS, FWACS, FRCS",
    experience: "17+ years",
    rating: 4.9,
    reviews: 52,
    location: "Abuja",
    languages: ["English", "Igbo"],
    bio: "Neurosurgeon with specialization in brain tumor surgery, spine surgery, and minimally invasive procedures.",
    availability: ["Monday", "Wednesday", "Thursday"],
    nextAvailable: "2024-03-26",
  },
];

const specialties = [
  ...new Set(doctors.map((doctor) => doctor.specialty)),
];
const departments = [
  ...new Set(doctors.map((doctor) => doctor.department)),
];
const locations = [
  ...new Set(doctors.map((doctor) => doctor.location)),
];

export function Doctors() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] =
    useState("all");
  const [selectedDepartment, setSelectedDepartment] =
    useState("all");
  const [selectedLocation, setSelectedLocation] =
    useState("all");

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      doctor.specialty
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    const matchesSpecialty =
      selectedSpecialty === "all" ||
      doctor.specialty === selectedSpecialty;
    const matchesDepartment =
      selectedDepartment === "all" ||
      doctor.department === selectedDepartment;
    const matchesLocation =
      selectedLocation === "all" ||
      doctor.location === selectedLocation;

    return (
      matchesSearch &&
      matchesSpecialty &&
      matchesDepartment &&
      matchesLocation
    );
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl mb-6">
              Our Medical Experts
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Meet our team of highly qualified medical
              professionals dedicated to providing exceptional
              healthcare services with compassion and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search doctors or specialties"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select
              value={selectedSpecialty}
              onValueChange={setSelectedSpecialty}
            >
              <SelectTrigger>
                <SelectValue placeholder="Specialty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">
                  All Specialties
                </SelectItem>
                {specialties.map((specialty) => (
                  <SelectItem key={specialty} value={specialty}>
                    {specialty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={selectedDepartment}
              onValueChange={setSelectedDepartment}
            >
              <SelectTrigger>
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">
                  All Departments
                </SelectItem>
                {departments.map((department) => (
                  <SelectItem
                    key={department}
                    value={department}
                  >
                    {department}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={selectedLocation}
              onValueChange={setSelectedLocation}
            >
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">
                  All Locations
                </SelectItem>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedSpecialty("all");
                setSelectedDepartment("all");
                setSelectedLocation("all");
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {filteredDoctors.length} of{" "}
              {doctors.length} doctors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDoctors.map((doctor) => (
              <Card
                key={doctor.id}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <CardTitle className="text-xl">
                    {doctor.name}
                  </CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {doctor.specialty}
                  </CardDescription>
                  <div className="flex items-center justify-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">
                      {doctor.rating}
                    </span>
                    <span className="text-sm text-gray-500">
                      ({doctor.reviews} reviews)
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <GraduationCap className="w-4 h-4" />
                    <span>{doctor.qualifications}</span>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Award className="w-4 h-4" />
                    <span>{doctor.experience} experience</span>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{doctor.location}</span>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>
                      Next available: {doctor.nextAvailable}
                    </span>
                  </div>

                  <Badge variant="secondary">
                    {doctor.department}
                  </Badge>

                  <div className="flex flex-wrap gap-1">
                    {doctor.languages.map((language, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-xs"
                      >
                        {language}
                      </Badge>
                    ))}
                  </div>

                  <p className="text-sm text-gray-600 line-clamp-3">
                    {doctor.bio}
                  </p>

                  <div className="space-y-2">
                    <Link
                      to="/appointments"
                      state={{ doctorId: doctor.id }}
                    >
                      <Button className="w-full">
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Appointment
                      </Button>
                    </Link>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm">
                        <Phone className="w-4 h-4 mr-1" />
                        Call
                      </Button>
                      <Button variant="outline" size="sm">
                        <Mail className="w-4 h-4 mr-1" />
                        Message
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredDoctors.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl mb-4 text-gray-600">
                No doctors found
              </h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your search criteria
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedSpecialty("all");
                  setSelectedDepartment("all");
                  setSelectedLocation("all");
                }}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-900">
              Our Medical Team
            </h2>
            <p className="text-xl text-gray-600">
              Exceptional healthcare professionals at your
              service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">
                120+
              </div>
              <p className="text-gray-600">
                Medical Professionals
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">
                25+
              </div>
              <p className="text-gray-600">
                Medical Specialties
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">
                4.8
              </div>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">
                8
              </div>
              <p className="text-gray-600">
                Hospital Locations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-4">
            Need Help Choosing a Doctor?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Our patient coordinators are here to help you find
            the right specialist
          </p>
          <div className="space-x-4">
            <Button size="lg" variant="secondary">
              <Phone className="w-4 h-4 mr-2" />
              Call +234 1 234 5678
            </Button>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-primary bg-[rgb(26,47,62)]"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}