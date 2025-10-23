import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ArrowLeft, Clock, Star, Phone } from 'lucide-react';

const categoryData = {
  'medicine-allied': {
    title: 'Medicine & Allied Services',
    description: 'Comprehensive internal medicine and allied healthcare services for diagnosis, treatment, and ongoing management of medical conditions.',
    services: [
      {
        name: 'Internal Medicine',
        description: 'General medical care for adults with chronic and acute conditions',
        specialists: ['Dr. Adaora Okafor', 'Dr. Ibrahim Musa', 'Dr. Grace Adeolu'],
        features: ['Comprehensive Health Assessments', 'Chronic Disease Management', 'Preventive Care']
      },
      {
        name: 'Cardiology',
        description: 'Heart and cardiovascular system diagnosis and treatment',
        specialists: ['Dr. Mohammed Yusuf', 'Dr. Fatima Aliyu'],
        features: ['ECG & Echocardiography', 'Cardiac Catheterization', 'Heart Disease Prevention']
      },
      {
        name: 'Endocrinology',
        description: 'Hormone and metabolic disorder management',
        specialists: ['Dr. Olumide Adebayo', 'Dr. Kemi Ogundipe'],
        features: ['Diabetes Management', 'Thyroid Disorders', 'Hormone Replacement Therapy']
      },
      {
        name: 'Physical Therapy',
        description: 'Rehabilitation and movement therapy services',
        specialists: ['PT Sarah Johnson', 'PT David Okonkwo'],
        features: ['Post-Surgery Rehabilitation', 'Sports Injury Recovery', 'Pain Management']
      }
    ]
  },
  'surgery-allied': {
    title: 'Surgery & Allied Services',
    description: 'Advanced surgical procedures performed by expert surgeons using state-of-the-art technology and minimally invasive techniques.',
    services: [
      {
        name: 'General Surgery',
        description: 'Comprehensive surgical procedures for various medical conditions',
        specialists: ['Dr. Ibrahim Hassan', 'Dr. Taiwo Adebayo', 'Dr. Amina Bello'],
        features: ['Laparoscopic Surgery', 'Emergency Surgery', 'Outpatient Procedures']
      },
      {
        name: 'Orthopedic Surgery',
        description: 'Bone, joint, and musculoskeletal system surgical care',
        specialists: ['Dr. Chidi Okwu', 'Dr. Funmi Olatunji'],
        features: ['Joint Replacement', 'Sports Medicine', 'Trauma Surgery']
      },
      {
        name: 'Neurosurgery',
        description: 'Brain and nervous system surgical procedures',
        specialists: ['Dr. Uche Nwosu', 'Dr. Aisha Garba'],
        features: ['Brain Tumor Surgery', 'Spine Surgery', 'Stroke Treatment']
      },
      {
        name: 'Anesthesiology',
        description: 'Perioperative care and pain management',
        specialists: ['Dr. Rotimi Adeleke', 'Dr. Hadiza Yakubu'],
        features: ['General Anesthesia', 'Regional Blocks', 'Pain Management']
      }
    ]
  },
  'pediatrics': {
    title: 'Pediatrics',
    description: 'Specialized healthcare services for infants, children, and adolescents from birth to 18 years, ensuring healthy growth and development.',
    services: [
      {
        name: 'General Pediatrics',
        description: 'Comprehensive healthcare for children of all ages',
        specialists: ['Dr. Grace Adeolu', 'Dr. Folake Adeyemi', 'Dr. Kabir Suleiman'],
        features: ['Well-Child Visits', 'Immunizations', 'Growth Monitoring']
      },
      {
        name: 'Neonatal Care',
        description: 'Specialized care for newborns and premature infants',
        specialists: ['Dr. Blessing Okoro', 'Dr. Yusuf Garba'],
        features: ['NICU Services', 'Premature Infant Care', 'Birth Defect Management']
      },
      {
        name: 'Pediatric Surgery',
        description: 'Surgical procedures specifically designed for children',
        specialists: ['Dr. Ahmed Bello', 'Dr. Chioma Nwankwo'],
        features: ['Minimally Invasive Surgery', 'Congenital Defect Repair', 'Emergency Surgery']
      },
      {
        name: 'Child Psychology',
        description: 'Mental health and behavioral services for children',
        specialists: ['Dr. Tolu Ogundimu', 'Dr. Maryam Abdullahi'],
        features: ['Behavioral Assessment', 'Developmental Disorders', 'Family Counseling']
      }
    ]
  },
  'emergency-diagnostics': {
    title: 'Emergency & Diagnostics',
    description: '24/7 emergency medical services and comprehensive diagnostic capabilities for rapid diagnosis and treatment of urgent medical conditions.',
    services: [
      {
        name: '24/7 Emergency Care',
        description: 'Round-the-clock emergency medical services',
        specialists: ['Dr. Mohammed Yusuf', 'Dr. Funmi Adebayo', 'Dr. Bashir Adamu'],
        features: ['Trauma Care', 'Critical Care', 'Emergency Surgery']
      },
      {
        name: 'Laboratory Services',
        description: 'Comprehensive diagnostic testing and analysis',
        specialists: ['Dr. Kemi Ogundipe', 'Dr. Sani Ibrahim'],
        features: ['Blood Tests', 'Microbiology', 'Molecular Diagnostics']
      },
      {
        name: 'Radiology & Imaging',
        description: 'Advanced medical imaging and diagnostic services',
        specialists: ['Dr. Tunde Olapade', 'Dr. Aisha Garba'],
        features: ['CT & MRI Scans', 'Ultrasound', 'Interventional Radiology']
      },
      {
        name: 'Ambulance Services',
        description: 'Emergency medical transportation and pre-hospital care',
        specialists: ['Paramedic Team', 'Emergency Medical Technicians'],
        features: ['Advanced Life Support', 'Medical Transportation', 'Inter-facility Transfer']
      }
    ]
  }
};

export function ServiceCategory() {
  const { category } = useParams();
  const categoryInfo = categoryData[category];

  if (!categoryInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Service Category Not Found</h1>
          <Link to="/services">
            <Button>Back to Services</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/services" className="inline-flex items-center space-x-2 mb-6 text-white/80 hover:text-white">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </Link>
          <div className="text-center">
            <h1 className="text-5xl mb-6">{categoryInfo.title}</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              {categoryInfo.description}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {categoryInfo.services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{service.name}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-700">Key Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Specialists */}
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-700">Our Specialists:</h4>
                    <div className="space-y-2">
                      {service.specialists.map((specialist, specialistIndex) => (
                        <div key={specialistIndex} className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-primary" />
                          <span className="text-sm text-gray-600">{specialist}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link to="/appointments" className="flex-1">
                      <Button className="w-full">
                        Book Appointment
                      </Button>
                    </Link>
                    <Button variant="outline" className="flex-1">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Operating Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>7:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Emergency Only</span>
                  </div>
                  <div className="text-primary font-semibold mt-3">
                    Emergency: 24/7
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold">General Inquiries:</p>
                    <p>+234 1 234 5678</p>
                  </div>
                  <div>
                    <p className="font-semibold">Emergency Hotline:</p>
                    <p className="text-red-600">+234 800 NMSL-911</p>
                  </div>
                  <div>
                    <p className="font-semibold">Email:</p>
                    <p>info@nmsl.ng</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Insurance & Payment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p>We accept most major insurance plans</p>
                  <div className="space-y-1">
                    <Badge variant="outline">NHIS</Badge>
                    <Badge variant="outline">Private Insurance</Badge>
                    <Badge variant="outline">Corporate Plans</Badge>
                    <Badge variant="outline">Cash Payment</Badge>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">
                    Contact us to verify your insurance coverage
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-4">Need Immediate Medical Attention?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our emergency department is open 24/7 for urgent medical care
          </p>
          <div className="space-x-4">
            <Button size="lg" variant="secondary">
              Call Emergency: +234 800 NMSL-911
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                Find Our Locations
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}