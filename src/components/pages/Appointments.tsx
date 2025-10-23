import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Calendar } from "../ui/calendar";
import { Badge } from "../ui/badge";
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  Stethoscope,
  MapPin,
  Phone,
  CheckCircle,
  AlertCircle,
  Star,
} from "lucide-react";

const doctors = [
  {
    id: 1,
    name: "Dr. Adaora Okafor",
    specialty: "Internal Medicine",
    location: "Lagos",
  },
  {
    id: 2,
    name: "Dr. Ibrahim Hassan",
    specialty: "General Surgery",
    location: "Abuja",
  },
  {
    id: 3,
    name: "Dr. Grace Adeolu",
    specialty: "Pediatrics",
    location: "Lagos",
  },
  {
    id: 4,
    name: "Dr. Mohammed Yusuf",
    specialty: "Emergency Medicine",
    location: "Port Harcourt",
  },
  {
    id: 5,
    name: "Dr. Fatima Aliyu",
    specialty: "Obstetrics & Gynecology",
    location: "Abuja",
  },
  {
    id: 6,
    name: "Dr. Chidi Okwu",
    specialty: "Orthopedic Surgery",
    location: "Lagos",
  },
];

const timeSlots = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
];

const appointmentTypes = [
  {
    value: "consultation",
    label: "General Consultation",
    duration: "30 min",
  },
  {
    value: "followup",
    label: "Follow-up Visit",
    duration: "20 min",
  },
  {
    value: "checkup",
    label: "Health Check-up",
    duration: "45 min",
  },
  {
    value: "emergency",
    label: "Urgent Care",
    duration: "30 min",
  },
  {
    value: "specialist",
    label: "Specialist Consultation",
    duration: "60 min",
  },
];

const locations = [
  "Lagos Medical Center",
  "Abuja Medical Center",
  "Port Harcourt Medical Center",
  "Kano Clinic",
  "Ibadan Clinic",
  "Kaduna Clinic",
  "Warri Clinic",
  "Maiduguri Clinic",
];

export function Appointments() {
  const location = useLocation();
  const preselectedDoctorId = location.state?.doctorId;

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(
    preselectedDoctorId ? preselectedDoctorId.toString() : "",
  );
  const [step, setStep] = useState(1);

  const selectedDoctorInfo = doctors.find(
    (doc) => doc.id.toString() === selectedDoctor,
  );

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl mb-4 text-gray-900">
            Book an Appointment
          </h1>
          <p className="text-xl text-gray-600">
            Schedule your visit with our medical experts at your
            convenience
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                step >= 1
                  ? "bg-primary border-primary text-white"
                  : "border-gray-300 text-gray-300"
              }`}
            >
              {step > 1 ? (
                <CheckCircle className="w-6 h-6" />
              ) : (
                "1"
              )}
            </div>
            <div
              className={`h-0.5 w-20 ${step >= 2 ? "bg-primary" : "bg-gray-300"}`}
            />
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                step >= 2
                  ? "bg-primary border-primary text-white"
                  : "border-gray-300 text-gray-300"
              }`}
            >
              {step > 2 ? (
                <CheckCircle className="w-6 h-6" />
              ) : (
                "2"
              )}
            </div>
            <div
              className={`h-0.5 w-20 ${step >= 3 ? "bg-primary" : "bg-gray-300"}`}
            />
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                step >= 3
                  ? "bg-primary border-primary text-white"
                  : "border-gray-300 text-gray-300"
              }`}
            >
              3
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>
                  {step === 1 && "Select Doctor & Service"}
                  {step === 2 && "Choose Date & Time"}
                  {step === 3 && "Confirm Details"}
                </CardTitle>
                <CardDescription>
                  {step === 1 &&
                    "Choose your preferred doctor and type of appointment"}
                  {step === 2 &&
                    "Pick a convenient date and time for your visit"}
                  {step === 3 &&
                    "Review and confirm your appointment details"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Step 1: Doctor and Service Selection */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div className="mt-[0px] mr-[0px] mb-[25px] ml-[0px] px-[-1px] py-[0px]">
                      <Label htmlFor="doctor">
                        Select Doctor
                      </Label>
                      <Select
                        value={selectedDoctor}
                        onValueChange={setSelectedDoctor}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Choose a doctor" />
                        </SelectTrigger>
                        <SelectContent>
                          {doctors.map((doctor) => (
                            <SelectItem
                              key={doctor.id}
                              value={doctor.id.toString()}
                            >
                              <div className="flex items-center space-x-3">
                                <div>
                                  <p className="font-medium">
                                    {doctor.name}
                                  </p>
                                  <p className="text-sm text-gray-500">
                                    {doctor.specialty} •{" "}
                                    {doctor.location}
                                  </p>
                                </div>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="appointmentType">
                        Appointment Type
                      </Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select appointment type" />
                        </SelectTrigger>
                        <SelectContent>
                          {appointmentTypes.map((type) => (
                            <SelectItem
                              key={type.value}
                              value={type.value}
                            >
                              <div className="flex items-center justify-between w-full">
                                <span>{type.label}</span>
                                <Badge
                                  variant="secondary"
                                  className="ml-2"
                                >
                                  {type.duration}
                                </Badge>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="location">
                        Preferred Location
                      </Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                        <SelectContent>
                          {locations.map((loc) => (
                            <SelectItem
                              key={loc}
                              value={loc
                                .toLowerCase()
                                .replace(/\s+/g, "-")}
                            >
                              {loc}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="reason">
                        Reason for Visit
                      </Label>
                      <Textarea
                        id="reason"
                        placeholder="Briefly describe the reason for your appointment"
                        rows={4}
                      />
                    </div>

                    <div>
                      <Label htmlFor="insurance">
                        Insurance Information (Optional)
                      </Label>
                      <Input
                        id="insurance"
                        placeholder="Insurance provider and policy number"
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Date and Time Selection */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <Label>Select Date</Label>
                      <div className="mt-2">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          disabled={(date) =>
                            date < new Date() ||
                            date.getDay() === 0
                          }
                          className="rounded-md border"
                        />
                      </div>
                    </div>

                    {selectedDate && (
                      <div>
                        <Label>Available Time Slots</Label>
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mt-2">
                          {timeSlots.map((time) => (
                            <Button
                              key={time}
                              variant={
                                selectedTime === time
                                  ? "default"
                                  : "outline"
                              }
                              size="sm"
                              onClick={() =>
                                setSelectedTime(time)
                              }
                              className="text-sm"
                            >
                              {time}
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedDoctorInfo && (
                      <Card className="bg-blue-50 border-blue-200">
                        <CardContent className="pt-6">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                              <User className="w-6 h-6 text-gray-600" />
                            </div>
                            <div>
                              <h4 className="font-medium">
                                {selectedDoctorInfo.name}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {selectedDoctorInfo.specialty}
                              </p>
                              <div className="flex items-center space-x-1 mt-1">
                                <MapPin className="w-3 h-3 text-gray-400" />
                                <span className="text-xs text-gray-500">
                                  {selectedDoctorInfo.location}
                                </span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                )}

                {/* Step 3: Confirmation */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="patientName">
                        Patient Name
                      </Label>
                      <Input
                        id="patientName"
                        placeholder="Full name of patient"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Your phone number"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email address"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="emergency-contact">
                        Emergency Contact
                      </Label>
                      <Input
                        id="emergency-contact"
                        placeholder="Emergency contact name and phone"
                      />
                    </div>

                    <div>
                      <Label htmlFor="special-needs">
                        Special Requirements (Optional)
                      </Label>
                      <Textarea
                        id="special-needs"
                        placeholder="Any special accommodations or requirements"
                        rows={3}
                      />
                    </div>

                    {/* Appointment Summary */}
                    <Card className="bg-green-50 border-green-200">
                      <CardHeader>
                        <CardTitle className="text-lg">
                          Appointment Summary
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {selectedDoctorInfo && (
                          <div className="flex items-center space-x-2">
                            <Stethoscope className="w-4 h-4 text-green-600" />
                            <span className="text-sm">
                              <strong>
                                {selectedDoctorInfo.name}
                              </strong>{" "}
                              - {selectedDoctorInfo.specialty}
                            </span>
                          </div>
                        )}
                        {selectedDate && (
                          <div className="flex items-center space-x-2">
                            <CalendarIcon className="w-4 h-4 text-green-600" />
                            <span className="text-sm">
                              {selectedDate.toDateString()}
                            </span>
                          </div>
                        )}
                        {selectedTime && (
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-green-600" />
                            <span className="text-sm">
                              {selectedTime}
                            </span>
                          </div>
                        )}
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-green-600" />
                          <span className="text-sm">
                            Lagos Medical Center
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6 border-t">
                  {step > 1 && (
                    <Button
                      variant="outline"
                      onClick={prevStep}
                    >
                      Previous
                    </Button>
                  )}
                  <div className="ml-auto">
                    {step < 3 ? (
                      <Button
                        onClick={nextStep}
                        disabled={step === 1 && !selectedDoctor}
                      >
                        Next Step
                      </Button>
                    ) : (
                      <Button className="bg-primary">
                        Confirm Appointment
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Help Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Need Assistance?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">
                      Call Us
                    </p>
                    <p className="text-sm text-gray-600">
                      +234 1 234 5678
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <AlertCircle className="w-5 h-5 text-orange-500" />
                  <div>
                    <p className="font-medium text-sm">
                      Emergency
                    </p>
                    <p className="text-sm text-gray-600">
                      +234 800 NMSL-911
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  Chat with Support
                </Button>
              </CardContent>
            </Card>

            {/* Important Notes */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Important Notes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>
                    Arrive 15 minutes before your appointment
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>Bring a valid ID and insurance card</p>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>List of current medications</p>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>
                    Cancel 24 hours in advance to avoid charges
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Patient Reviews */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  What Patients Say
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 italic">
                      "Exceptional care and professional
                      service. The online booking made it so
                      convenient."
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      - Mrs. Adebayo
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}