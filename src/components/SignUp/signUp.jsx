import React, { useState } from "react";
import './signUp.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import api from "../services/api";
import logo from "/assets/Group\ 4.png"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export default function SignUp() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
        phoneNumber: "",
        address: ""
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        console.log("Form Data Sent:", formData);

        try {
            const response = await api.post("/users", {
                email: formData.email,
                password: formData.password,
                name: formData.name,
                phoneNumber: formData.phoneNumber,
                address: formData.address

            });
            // alert("sign up succesful ! you can now login.");
            navigate("/login");
        }
        catch (err) {
            console.error("Signup Error:", err.response?.data);
            setError("error signing up please check your credentials");
        }
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-(--brand-yellow) py-12 px-4 sm:px-6 lg:px-8 relative">
            <div
                className="absolute inset-0 bg-opacity-50"
                style={{
                    backgroundImage: `radial-gradient(#FF9C73 0.5px, transparent 0.5px)`,
                    backgroundSize: "20px 20px",
                }}
            ></div>
            <Card className="w-full max-w-md shadow-xl border-none bg-white relative z-10">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-(--brand-red) to-(--brand-light-red)"></div>
                <CardHeader className="space-y-1 flex flex-col items-center">
                    <div className="w-full flex justify-center mb-4">
                        <img src={logo || "/placeholder.svg"} alt="Company logo" className="h-12 w-auto" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-center text-gray-800">Sign Up</CardTitle>
                    <CardDescription className="text-center text-gray-600">
                        Create an account to join our meat sharing community
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-gray-700">
                                Full Name
                            </Label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Enter your name"
                                onChange={handleChange}
                                required
                                className="border-gray-300 focus:border-(--brand-red) focus:ring-brand-red/20"
                            />
                        </div>

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
                                className="border-gray-300 focus:border-(--brand-red) focus:ring-brand-red/20"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-gray-700">
                                Password
                            </Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Create a password"
                                onChange={handleChange}
                                required
                                className="border-gray-300 focus:border-(--brand-red) focus:ring-brand-red/20"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phoneNumber" className="text-gray-700">
                                Phone Number
                            </Label>
                            <Input
                                id="phoneNumber"
                                name="phoneNumber"
                                type="tel"
                                placeholder="Enter your phone number"
                                onChange={handleChange}
                                required
                                className="border-gray-300 focus:border-(--brand-red) focus:ring-brand-red/20"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="address" className="text-gray-700">
                                Address
                            </Label>
                            <Input
                                id="address"
                                name="address"
                                type="text"
                                placeholder="Enter your address"
                                onChange={handleChange}
                                required
                                className="border-gray-300 focus:border-(--brand-red) focus:ring-brand-red/20"
                            />
                        </div>

                        {error && (
                            <Alert variant="destructive" className="mt-4 bg-brand-red/10 border-(--brand-red) text-brand-red">
                                <AlertCircle className="h-4 w-4" />
                                <AlertDescription>{error}</AlertDescription>
                            </Alert>
                        )}

                        <Button
                            type="submit"
                            className="w-full mt-6 bg-gradient-to-r from-(--brand-red) to-(--brand-light-red) hover:from-brand-red/90 hover:to-(--brand-light-red)/90 text-white transition-colors"
                        >
                            Create Account
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-center border-t border-gray-100 pt-6">
                    <p className="text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link to="./Login" className="font-medium text-(--brand-red) hover:text-(--brand-light-red) transition-colors">
                            Sign In
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
};