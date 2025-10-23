import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
  Phone,
  Calendar,
  MapPin,
  MessageCircle,
  Ambulance,
  Clock,
} from "lucide-react";

export function QuickAccessToolbar() {
  const quickActions = [
    {
      icon: Ambulance,
      label: "Emergency",
      href: "tel:+2341234567",
      className: "bg-red-600 hover:bg-red-700 text-white",
    },
    {
      icon: Calendar,
      label: "Book Appointment",
      href: "/appointments",
      className: "bg-primary hover:bg-primary/90 text-white",
    },
    {
      icon: MapPin,
      label: "Find Location",
      href: "/contact",
      className: "bg-blue-600 hover:bg-blue-700 text-white",
    },
    {
      icon: MessageCircle,
      label: "Live Chat",
      href: "#chat",
      className: "bg-green-600 hover:bg-green-700 text-white",
    },
  ];

  return (
    <div className="hidden lg:flex fixed left-1/2 transform -translate-x-1/2 bottom-4 z-40 bg-white rounded-full shadow-lg border p-2">
      <div className="flex space-x-2">
        {quickActions.map((action, index) => {
          const Icon = action.icon;
          return (
            <Link key={index} to={action.href}>
              <Button
                size="sm"
                className={`rounded-full px-3 py-2 ${action.className}`}
                title={action.label}
              >
                <Icon className="w-4 h-4 mr-1" />
                <span className="text-xs">{action.label}</span>
              </Button>
            </Link>
          );
        })}
      </div>
    </div>
  );
}