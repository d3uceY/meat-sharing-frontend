import React, { useState } from "react";
import "./login.css";
import api from "../services/api";
import { Link, useNavigate } from "react-router-dom";
import logo from "/assets/Group\ 4.png"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await api.post("/auth/login", formData); // Correct API call
      const access_token = response.data.access_token;
      localStorage.setItem("token", access_token);
      //alert("Login successful!");
      navigate("/");
    } catch (err) {
      setError("Error logging in. Please check your credentials.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-(--brand-yellow) py-12 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 bg-opacity-50"
        style={{
          backgroundImage: `radial-gradient(#FF9C73 0.5px, transparent 0.5px)`,
          backgroundSize: "20px 20px",
        }}
      ></div>

      <Card className="w-full max-w-md shadow-xl border-none bg-white relative z-10">
        {/* Decorative top border */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-(--brand-red) to-(--brand-light-red)"></div>

        <CardHeader className="space-y-1 flex flex-col items-center">
          <div className="w-full flex justify-center mb-4">
            <img src={logo || "/placeholder.svg"} alt="Company logo" className="h-12 w-auto" />
          </div>
          <CardTitle className="text-2xl font-bold text-center text-gray-800">Login</CardTitle>
          <CardDescription className="text-center text-gray-600">
            Welcome back to our meat sharing community
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                onChange={handleChange}
                required
                className="border-gray-300 focus:border-(--brand-red) focus:ring-(--brand-red)/20"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password" className="text-gray-700">
                  Password
                </Label>
                <a href="#" className="text-xs text-(--brand-red) hover:text-(--brand-light-red) transition-colors">
                  Forgot password?
                </a>
              </div>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                onChange={handleChange}
                required
                className="border-gray-300 focus:border-(--brand-red) focus:ring-(--brand-red)/20"
              />
            </div>

            {error && (
              <Alert variant="destructive" className="mt-4 bg-(--brand-red)/10 border-(--brand-red) text-(--brand-red)">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button
              type="submit"
              className="w-full mt-6 bg-gradient-to-r from-(--brand-red) to-(--brand-light-red) hover:from-(--brand-red)/90 hover:to-(--brand-light-red)/90 text-white transition-colors"
            >
              Sign In
            </Button>
          </form>
        </CardContent>


        <CardFooter className="flex justify-center border-t border-gray-100 pt-6">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/Signup" className="font-medium text-(--brand-red) hover:text-(--brand-light-red) transition-colors">
              Sign Up here
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
