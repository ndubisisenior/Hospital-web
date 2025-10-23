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
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Ambulance,
  Car,
  Building,
  Navigation,
  Search,
  Filter,
} from "lucide-react";

const locations = [
  {
    name: "NMSL Lagos Medical Center",
    address: "1 Medical Drive, Victoria Island, Lagos",
    phone: "+234 1 234 5678",
    emergency: "+234 1 234 9999",
    email: "lagos@nmsl.ng",
    type: "hospital",
    services: [
      "Full Service Hospital",
      "Emergency Care",
      "Surgery",
      "Outpatient Clinics",
    ],
    hours: {
      weekdays: "6:00 AM - 10:00 PM",
      saturday: "7:00 AM - 9:00 PM",
      sunday: "8:00 AM - 8:00 PM",
      emergency: "24/7",
    },
    coordinates: { lat: 6.4281, lng: 3.4219 },
  },
  {
    name: "NMSL Abuja Medical Center",
    address: "5 Constitution Avenue, Central Business District, Abuja",
    phone: "+234 9 876 5432",
    emergency: "+234 9 876 9999",
    email: "abuja@nmsl.ng",
    type: "hospital",
    services: [
      "Full Service Hospital",
      "Emergency Care",
      "Specialized Surgery",
      "Diagnostics",
    ],
    hours: {
      weekdays: "6:00 AM - 10:00 PM",
      saturday: "7:00 AM - 9:00 PM",
      sunday: "8:00 AM - 8:00 PM",
      emergency: "24/7",
    },
    coordinates: { lat: 9.0579, lng: 7.4951 },
  },
  {
    name: "NMSL Port Harcourt Medical Center",
    address: "15 Aba Road, Port Harcourt, Rivers State",
    phone: "+234 84 123 456",
    emergency: "+234 84 123 999",
    email: "portharcourt@nmsl.ng",
    type: "hospital",
    services: [
      "Full Service Hospital",
      "Emergency Care",
      "Maternity Ward",
      "Pediatrics",
    ],
    hours: {
      weekdays: "6:00 AM - 10:00 PM",
      saturday: "7:00 AM - 9:00 PM",
      sunday: "8:00 AM - 8:00 PM",
      emergency: "24/7",
    },
    coordinates: { lat: 4.8156, lng: 7.0498 },
  },
  {
    name: "NMSL Kano Clinic",
    address: "8 Ahmadu Bello Way, Kano",
    phone: "+234 64 987 654",
    emergency: "+234 64 987 999",
    email: "kano@nmsl.ng",
    type: "clinic",
    services: [
      "Outpatient Clinic",
      "Basic Emergency",
      "General Medicine",
      "Pharmacy",
    ],
    hours: {
      weekdays: "7:00 AM - 7:00 PM",
      saturday: "8:00 AM - 6:00 PM",
      sunday: "Closed (Emergency only)",
      emergency: "24/7",
    },
    coordinates: { lat: 12.0022, lng: 8.592 },
  },
  {
    name: "NMSL Ibadan Clinic",
    address: "12 Ring Road, Ibadan, Oyo State",
    phone: "+234 2 345 678",
    emergency: "+234 2 345 999",
    email: "ibadan@nmsl.ng",
    type: "clinic",
    services: [
      "Outpatient Clinic",
      "Basic Emergency",
      "Women's Health",
      "Child Care",
    ],
    hours: {
      weekdays: "7:00 AM - 7:00 PM",
      saturday: "8:00 AM - 6:00 PM",
      sunday: "Closed (Emergency only)",
      emergency: "24/7",
    },
    coordinates: { lat: 7.3775, lng: 3.947 },
  },
  {
    name: "NMSL Kaduna Clinic",
    address: "4 Independence Way, Kaduna",
    phone: "+234 62 123 789",
    emergency: "+234 62 123 999",
    email: "kaduna@nmsl.ng",
    type: "clinic",
    services: [
      "Outpatient Clinic",
      "Basic Emergency",
      "General Medicine",
      "Laboratory",
    ],
    hours: {
      weekdays: "7:00 AM - 7:00 PM",
      saturday: "8:00 AM - 6:00 PM",
      sunday: "Closed (Emergency only)",
      emergency: "24/7",
    },
    coordinates: { lat: 10.5222, lng: 7.4383 },
  },
  {
    name: "NMSL Warri Clinic",
    address: "22 Effurun-Sapele Road, Warri, Delta State",
    phone: "+234 53 456 789",
    emergency: "+234 53 456 999",
    email: "warri@nmsl.ng",
    type: "clinic",
    services: [
      "Outpatient Clinic",
      "Basic Emergency",
      "Occupational Health",
      "Wellness",
    ],
    hours: {
      weekdays: "7:00 AM - 7:00 PM",
      saturday: "8:00 AM - 6:00 PM",
      sunday: "Closed (Emergency only)",
      emergency: "24/7",
    },
    coordinates: { lat: 5.516, lng: 5.75 },
  },
  {
    name: "NMSL Maiduguri Clinic",
    address: "6 Baga Road, Maiduguri, Borno State",
    phone: "+234 76 234 567",
    emergency: "+234 76 234 999",
    email: "maiduguri@nmsl.ng",
    type: "clinic",
    services: [
      "Outpatient Clinic",
      "Basic Emergency",
      "General Medicine",
      "Community Health",
    ],
    hours: {
      weekdays: "7:00 AM - 7:00 PM",
      saturday: "8:00 AM - 6:00 PM",
      sunday: "Closed (Emergency only)",
      emergency: "24/7",
    },
    coordinates: { lat: 11.8311, lng: 13.1505 },
  },
];

export function Location() {
  const [filterType, setFilterType] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLocations = locations.filter((location) => {
    const matchesType =
      filterType === "all" || location.type === filterType;
    const matchesSearch =
      searchQuery === "" ||
      location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      location.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl mb-6">Our Locations</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Find NMSL medical facilities across Nigeria. We have
              full-service hospitals and clinics strategically located
              to serve you better.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Contact Banner */}
      <section className="py-6 bg-red-50 border-b border-red-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-3">
              <Ambulance className="w-8 h-8 text-red-600" />
              <div>
                <p className="font-semibold text-red-800">
                  Emergency Hotline
                </p>
                <p className="text-2xl font-bold text-red-600">
                  +234 800 NMSL-911
                </p>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-red-200"></div>
            <div className="text-center md:text-left">
              <p className="text-red-700 font-medium">
                Available 24/7 for medical emergencies
              </p>
              <p className="text-sm text-red-600">
                All ambulance services equipped with advanced life
                support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="search" className="mb-2 block">
                Search Location
              </Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="search"
                  placeholder="Search by city or facility name..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="filter" className="mb-2 block">
                Filter by Type
              </Label>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger id="filter">
                  <SelectValue placeholder="All Facilities" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Facilities</SelectItem>
                  <SelectItem value="hospital">
                    Full Service Hospitals
                  </SelectItem>
                  <SelectItem value="clinic">Clinics</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-4 text-center text-sm text-gray-600">
            Showing {filteredLocations.length} of {locations.length}{" "}
            facilities
          </div>
        </div>
      </section>

      {/* Location Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-900">
              All NMSL Facilities
            </h2>
            <p className="text-xl text-gray-600">
              Choose the location nearest to you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLocations.map((location, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg flex items-start space-x-2 flex-1">
                      <Building className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>{location.name}</span>
                    </CardTitle>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        location.type === "hospital"
                          ? "bg-primary text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {location.type === "hospital"
                        ? "Hospital"
                        : "Clinic"}
                    </span>
                  </div>
                  <CardDescription className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                    <span>{location.address}</span>
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Contact Information */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <Phone className="w-4 h-4 text-primary" />
                      <span>{location.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Ambulance className="w-4 h-4 text-red-500" />
                      <span className="text-red-600 font-medium">
                        {location.emergency}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Mail className="w-4 h-4 text-primary" />
                      <span className="text-gray-600">
                        {location.email}
                      </span>
                    </div>
                  </div>

                  {/* Services */}
                  <div>
                    <h4 className="font-medium text-sm mb-2 flex items-center">
                      <Building className="w-4 h-4 mr-1" />
                      Services:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {location.services.map(
                        (service, serviceIndex) => (
                          <span
                            key={serviceIndex}
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                          >
                            {service}
                          </span>
                        ),
                      )}
                    </div>
                  </div>

                  {/* Operating Hours */}
                  <div>
                    <h4 className="font-medium text-sm mb-2 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      Hours:
                    </h4>
                    <div className="text-xs space-y-1 bg-gray-50 p-3 rounded">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Mon-Fri:</span>
                        <span className="font-medium">
                          {location.hours.weekdays}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Saturday:</span>
                        <span className="font-medium">
                          {location.hours.saturday}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sunday:</span>
                        <span className="font-medium">
                          {location.hours.sunday}
                        </span>
                      </div>
                      <div className="flex justify-between text-primary font-semibold pt-1 border-t border-gray-200">
                        <span>Emergency:</span>
                        <span>{location.hours.emergency}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2 pt-2">
                    <Button className="w-full" size="sm">
                      <Car className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm">
                        <Phone className="w-4 h-4 mr-1" />
                        Call
                      </Button>
                      <Button variant="outline" size="sm">
                        <Building className="w-4 h-4 mr-1" />
                        Book
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredLocations.length === 0 && (
            <div className="text-center py-12">
              <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-xl text-gray-500">
                No locations found matching your search
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery("");
                  setFilterType("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Transportation & Access Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-900">
              Getting to NMSL
            </h2>
            <p className="text-xl text-gray-600">
              We're easily accessible by various means of
              transportation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Car className="w-12 h-12 text-primary mx-auto mb-2" />
                <CardTitle>By Car</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ample parking available at all locations. Free
                  parking for patients and visitors.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Ambulance className="w-12 h-12 text-red-600 mx-auto mb-2" />
                <CardTitle>Ambulance Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  24/7 emergency ambulance services available. Call
                  +234 800 NMSL-911 for pickup.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Navigation className="w-12 h-12 text-primary mx-auto mb-2" />
                <CardTitle>Public Transport</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  All major facilities are accessible via public
                  transportation and ride-sharing services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-4">Need Help Finding Us?</h2>
          <p className="text-xl opacity-90 mb-8">
            Our patient services team is ready to assist you with
            directions and location information
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <Phone className="w-5 h-5 mr-2" />
              Call Us Now
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
              <Mail className="w-5 h-5 mr-2" />
              Send Inquiry
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
