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
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Separator } from "../ui/separator";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Phone,
  Calendar,
  MapPin,
  Shield,
  CheckCircle,
} from "lucide-react";
import nnpcLogo from "figma:asset/99299d21980adce7998a46882df0ebd903d4323a.png";

export function CreateAccount() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                NNPC
              </span>
            </div>
            <span className="text-2xl font-semibold text-gray-900">
              NMSL
            </span>
          </div>
          <h2 className="text-3xl text-gray-900">
            Create Your Patient Account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Join NMSL to access our comprehensive healthcare
            services
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                step >= 1
                  ? "bg-primary border-primary text-white"
                  : "border-gray-300 text-gray-300"
              }`}
            >
              {step > 1 ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                "1"
              )}
            </div>
            <div
              className={`h-0.5 w-16 ${step >= 2 ? "bg-primary" : "bg-gray-300"}`}
            />
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                step >= 2
                  ? "bg-primary border-primary text-white"
                  : "border-gray-300 text-gray-300"
              }`}
            >
              {step > 2 ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                "2"
              )}
            </div>
            <div
              className={`h-0.5 w-16 ${step >= 3 ? "bg-primary" : "bg-gray-300"}`}
            />
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                step >= 3
                  ? "bg-primary border-primary text-white"
                  : "border-gray-300 text-gray-300"
              }`}
            >
              3
            </div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              {step === 1 && "Personal Information"}
              {step === 2 && "Account Details"}
              {step === 3 && "Verification & Preferences"}
            </CardTitle>
            <CardDescription>
              {step === 1 && "Tell us about yourself"}
              {step === 2 && "Set up your login credentials"}
              {step === 3 && "Complete your account setup"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              {/* Step 1: Personal Information */}
              {step === 1 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">
                        First Name
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          id="firstName"
                          placeholder="Enter first name"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="lastName">
                        Last Name
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          id="lastName"
                          placeholder="Enter last name"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="dateOfBirth">
                      Date of Birth
                    </Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="dateOfBirth"
                        type="date"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="gender">Gender</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">
                          Male
                        </SelectItem>
                        <SelectItem value="female">
                          Female
                        </SelectItem>
                        <SelectItem value="other">
                          Other
                        </SelectItem>
                        <SelectItem value="prefer-not-to-say">
                          Prefer not to say
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="address">Address</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Textarea
                        id="address"
                        placeholder="Enter your full address"
                        className="pl-10"
                        rows={3}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        placeholder="Enter city"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="lagos">
                            Lagos
                          </SelectItem>
                          <SelectItem value="abuja">
                            Abuja (FCT)
                          </SelectItem>
                          <SelectItem value="rivers">
                            Rivers
                          </SelectItem>
                          <SelectItem value="kano">
                            Kano
                          </SelectItem>
                          <SelectItem value="oyo">
                            Oyo
                          </SelectItem>
                          <SelectItem value="kaduna">
                            Kaduna
                          </SelectItem>
                          <SelectItem value="delta">
                            Delta
                          </SelectItem>
                          <SelectItem value="borno">
                            Borno
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Account Details */}
              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter email address"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter phone number"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="password"
                        type={
                          showPassword ? "text" : "password"
                        }
                        placeholder="Create a strong password"
                        className="pl-10 pr-10"
                        required
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                        onClick={() =>
                          setShowPassword(!showPassword)
                        }
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Password must be at least 8 characters
                      with letters, numbers, and symbols
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="confirmPassword">
                      Confirm Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="confirmPassword"
                        type={
                          showConfirmPassword
                            ? "text"
                            : "password"
                        }
                        placeholder="Confirm your password"
                        className="pl-10 pr-10"
                        required
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                        onClick={() =>
                          setShowConfirmPassword(
                            !showConfirmPassword,
                          )
                        }
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="emergencyContact">
                      Emergency Contact Name
                    </Label>
                    <Input
                      id="emergencyContact"
                      placeholder="Full name of emergency contact"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="emergencyPhone">
                      Emergency Contact Phone
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="emergencyPhone"
                        type="tel"
                        placeholder="Emergency contact phone"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Verification & Preferences */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="insurance">
                      Insurance Provider (Optional)
                    </Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select insurance provider" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nhis">
                          NHIS
                        </SelectItem>
                        <SelectItem value="axa-mansard">
                          AXA Mansard
                        </SelectItem>
                        <SelectItem value="aiico">
                          AIICO Insurance
                        </SelectItem>
                        <SelectItem value="leadway">
                          Leadway Assurance
                        </SelectItem>
                        <SelectItem value="other">
                          Other
                        </SelectItem>
                        <SelectItem value="none">
                          No Insurance
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="preferredLocation">
                      Preferred Hospital Location
                    </Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select preferred location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lagos">
                          Lagos Medical Center
                        </SelectItem>
                        <SelectItem value="abuja">
                          Abuja Medical Center
                        </SelectItem>
                        <SelectItem value="portharcourt">
                          Port Harcourt Medical Center
                        </SelectItem>
                        <SelectItem value="kano">
                          Kano Clinic
                        </SelectItem>
                        <SelectItem value="ibadan">
                          Ibadan Clinic
                        </SelectItem>
                        <SelectItem value="kaduna">
                          Kaduna Clinic
                        </SelectItem>
                        <SelectItem value="warri">
                          Warri Clinic
                        </SelectItem>
                        <SelectItem value="maiduguri">
                          Maiduguri Clinic
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Communication Preferences */}
                  <div>
                    <Label className="text-base font-medium">
                      Communication Preferences
                    </Label>
                    <div className="space-y-3 mt-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="emailNotifications"
                          defaultChecked
                        />
                        <Label
                          htmlFor="emailNotifications"
                          className="text-sm"
                        >
                          Email notifications for appointments
                          and health reminders
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="smsNotifications"
                          defaultChecked
                        />
                        <Label
                          htmlFor="smsNotifications"
                          className="text-sm"
                        >
                          SMS notifications for urgent updates
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="healthTips" />
                        <Label
                          htmlFor="healthTips"
                          className="text-sm"
                        >
                          Health tips and wellness newsletters
                        </Label>
                      </div>
                    </div>
                  </div>

                  {/* Terms and Privacy */}
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="terms"
                        required
                        className="mt-1"
                      />
                      <Label
                        htmlFor="terms"
                        className="text-sm"
                      >
                        I agree to the{" "}
                        <Link
                          to="/terms"
                          className="text-primary hover:underline"
                        >
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link
                          to="/privacy"
                          className="text-primary hover:underline"
                        >
                          Privacy Policy
                        </Link>
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="hipaa"
                        required
                        className="mt-1"
                      />
                      <Label
                        htmlFor="hipaa"
                        className="text-sm"
                      >
                        I acknowledge that I have read and
                        understand the HIPAA Privacy Notice
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="medical-consent"
                        required
                        className="mt-1"
                      />
                      <Label
                        htmlFor="medical-consent"
                        className="text-sm"
                      >
                        I consent to the use of my medical
                        information for treatment, payment, and
                        healthcare operations
                      </Label>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                {step > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                  >
                    Previous
                  </Button>
                )}
                <div className="ml-auto">
                  {step < 3 ? (
                    <Button type="button" onClick={nextStep}>
                      Next
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="bg-primary"
                    >
                      Create Account
                    </Button>
                  )}
                </div>
              </div>
            </form>

            {step === 3 && (
              <>
                <Separator className="my-6" />
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-medium text-blue-900">
                        Your Privacy & Security
                      </h4>
                      <p className="text-xs text-blue-700 mt-1">
                        We use advanced encryption to protect
                        your medical information. Your data will
                        only be accessible to authorized
                        healthcare providers involved in your
                        care.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        {/* Sign In Link */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-primary hover:text-primary/80 font-medium"
            >
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}