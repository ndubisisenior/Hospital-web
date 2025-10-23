import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AnnouncementBanner } from "./components/AnnouncementBanner";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Services } from "./components/pages/Services";
import { Doctors } from "./components/pages/Doctors";
import { Contact } from "./components/pages/Contact";
import { Location } from "./components/pages/Location";
import { SignIn } from "./components/pages/SignIn";
import { CreateAccount } from "./components/pages/CreateAccount";
import { Appointments } from "./components/pages/Appointments";
import { Footer } from "./components/Footer";
import { ServiceCategory } from "./components/pages/ServiceCategory";
import { QuickAccessToolbar } from "./components/QuickAccessToolbar";
import { CookieConsent } from "./components/CookieConsent";
import { AccessibilityHelper } from "./components/AccessibilityHelper";
import { PerformanceMonitor } from "./components/PerformanceMonitor";
import { ErrorBoundary } from "./components/ErrorBoundary";

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen flex flex-col">
          <PerformanceMonitor />
          <AnnouncementBanner
            message="🎉 New Telemedicine Services Now Available - Book Your Online Consultation Today!"
            type="info"
          />
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route
                path="/services/:category"
                element={<ServiceCategory />}
              />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/location" element={<Location />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signin" element={<SignIn />} />
              <Route
                path="/create-account"
                element={<CreateAccount />}
              />
              <Route
                path="/appointments"
                element={<Appointments />}
              />
              {/* Additional routes referenced in footer/components */}
              <Route
                path="/privacy"
                element={<Navigate to="/about" replace />}
              />
              <Route
                path="/terms"
                element={<Navigate to="/about" replace />}
              />
              <Route
                path="/careers"
                element={<Navigate to="/contact" replace />}
              />
              <Route
                path="/forgot-password"
                element={<Navigate to="/signin" replace />}
              />
              {/* Redirect preview_page.html to home */}
              <Route
                path="/preview_page.html"
                element={<Navigate to="/" replace />}
              />
              {/* Catch-all route for unmatched paths */}
              <Route
                path="*"
                element={<Navigate to="/" replace />}
              />
            </Routes>
          </main>
          <AccessibilityHelper />
          <QuickAccessToolbar />
          <CookieConsent />
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}