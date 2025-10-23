import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import {
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Users,
  Headphones,
  Send,
  CheckCircle,
  HelpCircle,
} from "lucide-react";

export function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const departments = [
    { value: "general", label: "General Inquiry" },
    { value: "appointments", label: "Appointments" },
    { value: "patient-care", label: "Patient Care" },
    { value: "billing", label: "Billing & Insurance" },
    { value: "feedback", label: "Feedback & Complaints" },
    { value: "careers", label: "Careers" },
    { value: "media", label: "Media & Press" },
  ];

  const faqs = [
    {
      question: "How can I schedule an appointment?",
      answer:
        "You can schedule an appointment online through our website, call our appointment hotline at +234 1 234 5679, or visit any of our facilities in person.",
    },
    {
      question: "What are your emergency contact numbers?",
      answer:
        "Our main emergency hotline is +234 800 NMSL-911, available 24/7. Each facility also has its own emergency number listed on our Locations page.",
    },
    {
      question: "Do you accept insurance?",
      answer:
        "Yes, we accept major health insurance providers in Nigeria. Please contact our billing department for specific insurance questions.",
    },
    {
      question: "How can I get my medical records?",
      answer:
        "You can request your medical records by contacting our patient care team or submitting a request through your patient portal. You'll need to provide valid identification.",
    },
    {
      question: "What languages do you support?",
      answer:
        "We provide services in English, Yoruba, Hausa, and Igbo. Translation services for other languages can be arranged upon request.",
    },
    {
      question: "How do I provide feedback or file a complaint?",
      answer:
        "You can submit feedback through our contact form, email patientcare@nmsl.ng, or speak to our patient relations team at any facility.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl mb-6">Get in Touch</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              We're here to answer your questions and provide the
              support you need. Reach out to us through any of our
              communication channels.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Phone className="w-12 h-12 text-primary mx-auto mb-2" />
                <CardTitle>Call Us</CardTitle>
                <CardDescription>
                  Speak directly with our team
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">
                    General Inquiries
                  </p>
                  <p className="font-semibold">+234 1 234 5678</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Appointments</p>
                  <p className="font-semibold">+234 1 234 5679</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Emergency</p>
                  <p className="font-semibold text-red-600">
                    +234 800 NMSL-911
                  </p>
                </div>
                <Button className="w-full mt-4">Call Now</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Mail className="w-12 h-12 text-primary mx-auto mb-2" />
                <CardTitle>Email Us</CardTitle>
                <CardDescription>
                  Send us a detailed message
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">
                    General Information
                  </p>
                  <p className="font-semibold text-sm">info@nmsl.ng</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    Patient Care
                  </p>
                  <p className="font-semibold text-sm">
                    patientcare@nmsl.ng
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    Appointments
                  </p>
                  <p className="font-semibold text-sm">
                    appointments@nmsl.ng
                  </p>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <MessageSquare className="w-12 h-12 text-primary mx-auto mb-2" />
                <CardTitle>Live Chat</CardTitle>
                <CardDescription>
                  Chat with our support team
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">
                    Available Hours
                  </p>
                  <p className="font-semibold">
                    Monday - Friday
                    <br />
                    8:00 AM - 6:00 PM
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    Average Response Time
                  </p>
                  <p className="font-semibold">Under 2 minutes</p>
                </div>
                <Button className="w-full mt-4">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Start Chat
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form and Additional Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl mb-2 text-gray-900">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and we'll get back to you
                within 24 hours
              </p>

              {formSubmitted ? (
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="py-8">
                    <div className="text-center">
                      <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                      <h3 className="text-2xl text-green-800 mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-green-700">
                        Thank you for contacting us. We'll respond
                        to your inquiry within 24 hours.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+234 XXX XXX XXXX"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="department">
                      Department *
                    </Label>
                    <Select>
                      <SelectTrigger id="department">
                        <SelectValue placeholder="Select a department" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((dept) => (
                          <SelectItem
                            key={dept.value}
                            value={dept.value}
                          >
                            {dept.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      placeholder="Brief subject of your message"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Please provide details about your inquiry..."
                      rows={6}
                      required
                    />
                  </div>

                  <div className="text-sm text-gray-600">
                    * Required fields
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Sidebar Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl mb-6 text-gray-900">
                  Contact Information
                </h2>

                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-6 h-6 text-primary" />
                      <CardTitle>Operating Hours</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="font-medium">
                        General Services
                      </p>
                      <div className="text-sm text-gray-600 space-y-1 mt-1">
                        <div className="flex justify-between">
                          <span>Monday - Friday:</span>
                          <span>6:00 AM - 10:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Saturday:</span>
                          <span>7:00 AM - 9:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday:</span>
                          <span>8:00 AM - 8:00 PM</span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-3 border-t">
                      <p className="font-medium text-primary">
                        Emergency Services
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        Available 24/7, 365 days a year
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Users className="w-6 h-6 text-primary" />
                      <CardTitle>Department Contacts</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-medium">Patient Services</p>
                        <p className="text-gray-600">
                          patientcare@nmsl.ng
                        </p>
                      </div>
                      <div>
                        <p className="font-medium">
                          Billing & Insurance
                        </p>
                        <p className="text-gray-600">
                          billing@nmsl.ng
                        </p>
                      </div>
                      <div>
                        <p className="font-medium">
                          Medical Records
                        </p>
                        <p className="text-gray-600">
                          records@nmsl.ng
                        </p>
                      </div>
                      <div>
                        <p className="font-medium">Careers</p>
                        <p className="text-gray-600">
                          careers@nmsl.ng
                        </p>
                      </div>
                      <div>
                        <p className="font-medium">Media & Press</p>
                        <p className="text-gray-600">
                          media@nmsl.ng
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Headphones className="w-6 h-6 text-primary" />
                      <CardTitle>Need Immediate Help?</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Our patient support team is available to
                      assist you with urgent inquiries
                    </p>
                    <div className="space-y-2">
                      <Button className="w-full">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Support
                      </Button>
                      <Button variant="outline" className="w-full">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Live Chat
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-4xl mb-4 text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find quick answers to common questions
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-6"
              >
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-left font-medium">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Can't find what you're looking for?
            </p>
            <Button variant="outline">
              <Mail className="w-4 h-4 mr-2" />
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">We're Here for You</h2>
            <p className="text-xl opacity-90">
              Multiple ways to reach us, one commitment to your care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl mb-2">24/7 Helpline</h3>
              <p className="opacity-90 mb-4">
                Get immediate assistance for any medical inquiry or
                emergency
              </p>
              <Button variant="secondary" size="lg">
                +234 800 NMSL-911
              </Button>
            </div>

            <div className="text-center">
              <MessageSquare className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl mb-2">Live Chat Support</h3>
              <p className="opacity-90 mb-4">
                Connect with our support team instantly during
                business hours
              </p>
              <Button variant="secondary" size="lg">
                Start Chat
              </Button>
            </div>

            <div className="text-center">
              <Mail className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl mb-2">Email Support</h3>
              <p className="opacity-90 mb-4">
                Send detailed inquiries and receive responses within
                24 hours
              </p>
              <Button variant="secondary" size="lg">
                info@nmsl.ng
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
