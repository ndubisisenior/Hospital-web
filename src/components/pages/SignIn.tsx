import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Checkbox } from '../ui/checkbox';
import { Separator } from '../ui/separator';
import { Mail, Lock, Eye, EyeOff, Phone } from 'lucide-react';
import nnpcLogo from 'figma:asset/99299d21980adce7998a46882df0ebd903d4323a.png';

export function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState('email'); // 'email' or 'phone'

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <img 
              src={nnpcLogo} 
              alt="NNPC Logo" 
              className="h-12 w-auto"
            />
            <div>
              <span className="text-2xl font-semibold text-foreground">NMSL</span>
              <p className="text-sm text-muted-foreground">Medical Services Limited</p>
            </div>
          </div>
          <h2 className="text-3xl text-gray-900">Sign in to your account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Access your medical records, appointments, and more
          </p>
        </div>

        {/* Sign In Form */}
        <Card>
          <CardHeader>
            <CardTitle>Welcome Back</CardTitle>
            <CardDescription>
              Enter your credentials to access your patient portal
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Login Method Toggle */}
            <div className="flex space-x-2">
              <Button
                variant={loginMethod === 'email' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLoginMethod('email')}
                className="flex-1"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email
              </Button>
              <Button
                variant={loginMethod === 'phone' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLoginMethod('phone')}
                className="flex-1"
              >
                <Phone className="w-4 h-4 mr-2" />
                Phone
              </Button>
            </div>

            <form className="space-y-4">
              {/* Email/Phone Input */}
              <div>
                <Label htmlFor="identifier">
                  {loginMethod === 'email' ? 'Email Address' : 'Phone Number'}
                </Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    {loginMethod === 'email' ? (
                      <Mail className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Phone className="h-4 w-4 text-gray-400" />
                    )}
                  </div>
                  <Input
                    id="identifier"
                    type={loginMethod === 'email' ? 'email' : 'tel'}
                    placeholder={
                      loginMethod === 'email' 
                        ? 'Enter your email address' 
                        : 'Enter your phone number'
                    }
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-4 w-4 text-gray-400" />
                  </div>
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="text-sm">
                    Remember me
                  </Label>
                </div>
                <Link 
                  to="/forgot-password" 
                  className="text-sm text-primary hover:text-primary/80"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Sign In Button */}
              <Button type="submit" className="w-full" size="lg">
                Sign In
              </Button>
            </form>

            <Separator />

            {/* Emergency Access */}
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-3">
                Need emergency access to your medical records?
              </p>
              <Button variant="outline" size="sm">
                Emergency Access
              </Button>
            </div>

            {/* Sign Up Link */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <Link 
                  to="/create-account" 
                  className="text-primary hover:text-primary/80 font-medium"
                >
                  Create one here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Help Section */}
        <Card>
          <CardContent className="pt-6">
            <div className="text-center space-y-3">
              <h3 className="font-medium text-gray-900">Need Help?</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="text-gray-600">Patient Support:</p>
                  <p className="text-primary font-medium">+234 1 234 5678</p>
                </div>
                <div>
                  <p className="text-gray-600">Technical Support:</p>
                  <p className="text-primary font-medium">support@nmsl.ng</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Notice */}
        <div className="text-center">
          <p className="text-xs text-gray-500 max-w-md mx-auto">
            Your privacy and security are important to us. This portal uses advanced 
            encryption to protect your medical information in compliance with healthcare 
            data protection regulations.
          </p>
        </div>
      </div>
    </div>
  );
}