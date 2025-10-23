import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { 
  Heart, 
  Stethoscope, 
  Scissors, 
  Baby, 
  AlertCircle, 
  Activity,
  Eye,
  Bone,
  Brain,
  Zap,
  Users,
  Shield,
  Clock,
  Star
} from 'lucide-react';

const serviceCategories = [
  {
    title: 'Medicine & Allied',
    slug: 'medicine-allied',
    icon: Stethoscope,
    description: 'Comprehensive internal medicine and allied healthcare services',
    color: 'bg-blue-500',
    services: [
      'Internal Medicine',
      'Cardiology',
      'Endocrinology',
      'Gastroenterology',
      'Nephrology',
      'Pulmonology',
      'Rheumatology',
      'Infectious Diseases',
      'Geriatrics',
      'Physical Therapy',
      'Occupational Therapy',
      'Nutrition & Dietetics'
    ]
  },
  {
    title: 'Surgery & Allied',
    slug: 'surgery-allied',
    icon: Scissors,
    description: 'Advanced surgical procedures and perioperative care',
    color: 'bg-red-500',
    services: [
      'General Surgery',
      'Orthopedic Surgery',
      'Neurosurgery',
      'Cardiac Surgery',
      'Plastic Surgery',
      'Urology',
      'ENT Surgery',
      'Ophthalmology',
      'Anesthesiology',
      'Pre-operative Assessment',
      'Post-operative Care',
      'Surgical Rehabilitation'
    ]
  },
  {
    title: 'Pediatrics',
    slug: 'pediatrics',
    icon: Baby,
    description: 'Specialized healthcare services for children and adolescents',
    color: 'bg-green-500',
    services: [
      'General Pediatrics',
      'Neonatal Care',
      'Pediatric Cardiology',
      'Pediatric Surgery',
      'Child Psychology',
      'Pediatric Emergency',
      'Vaccination Services',
      'Growth & Development',
      'Pediatric Nutrition',
      'Child Health Screening',
      'Adolescent Medicine',
      'Special Needs Care'
    ]
  },
  {
    title: 'Emergency & Diagnostics',
    slug: 'emergency-diagnostics',
    icon: AlertCircle,
    description: '24/7 emergency care and comprehensive diagnostic services',
    color: 'bg-orange-500',
    services: [
      '24/7 Emergency Care',
      'Trauma Center',
      'Critical Care',
      'Laboratory Services',
      'Radiology & Imaging',
      'CT & MRI Scans',
      'Ultrasound',
      'X-ray Services',
      'ECG & Echo',
      'Pathology',
      'Blood Bank',
      'Ambulance Services'
    ]
  }
];

const specializedServices = [
  {
    icon: Heart,
    title: 'Cardiac Center',
    description: 'State-of-the-art cardiovascular care with interventional procedures',
    features: ['Cardiac Catheterization', 'Heart Surgery', 'Pacemaker Implantation']
  },
  {
    icon: Brain,
    title: 'Neuroscience Center',
    description: 'Comprehensive neurological care and neurosurgical procedures',
    features: ['Brain Surgery', 'Stroke Care', 'Epilepsy Treatment']
  },
  {
    icon: Eye,
    title: 'Vision Center',
    description: 'Complete eye care services from routine exams to complex surgery',
    features: ['Cataract Surgery', 'Retinal Care', 'LASIK Procedures']
  },
  {
    icon: Bone,
    title: 'Orthopedic Center',
    description: 'Advanced bone and joint care with sports medicine',
    features: ['Joint Replacement', 'Sports Medicine', 'Spine Surgery']
  }
];

const features = [
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Round-the-clock emergency and critical care services'
  },
  {
    icon: Star,
    title: 'Expert Medical Team',
    description: 'Board-certified physicians and specialists'
  },
  {
    icon: Shield,
    title: 'Advanced Technology',
    description: 'State-of-the-art medical equipment and facilities'
  },
  {
    icon: Users,
    title: 'Patient-Centered Care',
    description: 'Personalized treatment plans and compassionate care'
  }
];

export function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl mb-6">Our Medical Services</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Comprehensive healthcare services delivered by expert medical professionals 
              using advanced technology and evidence-based practices.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-900">Service Categories</h2>
            <p className="text-xl text-gray-600">Organized healthcare services across major medical specialties</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{category.title}</CardTitle>
                      <CardDescription className="text-base">{category.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {category.services.slice(0, 8).map((service, serviceIndex) => (
                      <Badge key={serviceIndex} variant="secondary" className="justify-start">
                        {service}
                      </Badge>
                    ))}
                    {category.services.length > 8 && (
                      <Badge variant="outline" className="justify-start">
                        +{category.services.length - 8} more
                      </Badge>
                    )}
                  </div>
                  <Link to={`/services/${category.slug}`}>
                    <Button className="w-full">
                      Explore {category.title}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Centers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-900">Specialized Centers of Excellence</h2>
            <p className="text-xl text-gray-600">Advanced medical centers providing specialized care</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specializedServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <Activity className="w-4 h-4 text-primary" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-900">Why Choose NMSL</h2>
            <p className="text-xl text-gray-600">Excellence in healthcare delivery</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-4">Ready to Experience Quality Healthcare?</h2>
          <p className="text-xl mb-8 opacity-90">
            Book an appointment with our medical experts today
          </p>
          <div className="space-x-4">
            <Link to="/appointments">
              <Button size="lg" variant="secondary">
                Book Appointment
              </Button>
            </Link>
            <Link to="/doctors">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                Meet Our Doctors
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}