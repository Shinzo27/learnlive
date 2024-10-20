"use client"
import Loader from '@/components/Loader';
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";

const UserDetails = ({course}: any) => {
    const [formData, setFormData] = useState({
        email: "",
        phone: "",
        state: "",
        agreeTerms: false,
      });
      const amount = course.price;
      const [loading, setIsLoading] = useState(false)
      const router = useRouter()
      const courseId = course.id
    
      const handleInputChange = (e: ChangeEvent) => {
        const { name, value } = e.target as HTMLInputElement;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };
    
      const handleSelectChange = (name: string, value: string) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
      };
    
      const handleCheckboxChange = (checked: boolean) => {
        setFormData((prev) => ({ ...prev, agreeTerms: checked }));
      };
    
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true)
        try {
          const orderResponse = await fetch('/api/order', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ number: formData.phone, amount: amount, email: formData.email, courseId: courseId })
          });
    
          const orderData = await orderResponse.json();
          if (orderData.status !== 200) {
            toast.error(orderData.error)
            setIsLoading(false)
            router.push('/signin')
            return
          }
          const { order } = orderData
    
          const option = {
            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Public Razorpay key
            amount: order.amount,
            currency: order.currency,
            name: "Course Name",
            description: "Purchase course access",
            order_id: order.id,
            handler: async (response: any) => {
              // Handle success response
              // await fetch('/api/payment', {
              //   razorpay_order_id: response.razorpay_order_id,
              //   razorpay_payment_id: response.razorpay_payment_id,
              //   razorpay_signature: response.razorpay_signature,
              // });
              // Handle successful payment UI/flow
              console.log("Successful payment");
            },
            prefill: {
              name: formData.email,
              email: formData.email,
            },
            theme: {
              color: "#0a0a0a",
            },
          };
    
          // const paymentObject = new (window as any).Razorpay(option);
          const paymentObject = new (window as any).Razorpay(option);
          paymentObject.open();
        } catch (error) {
          toast.error("Something went wrong! Please try again later.")
          console.log(error); // Handle error
          setIsLoading(false)
          return
        }
      };
      
      return loading ? <Loader /> : (
        <main className="flex-grow container mx-auto px-4 py-8 min-h-screen">
          <div className="max-w-2xl mx-auto">
            <Link
              href={`/courseDetail/${courseId}`}
              className="inline-flex items-center text-blue-500 hover:text-blue-400 mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Course
            </Link>
            <h1 className="text-3xl font-bold mb-6">Enroll in Course</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-neutral-800 border-neutral-700 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-neutral-800 border-neutral-700 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State</Label>
                <Select
                  name="state"
                  onValueChange={(value) => handleSelectChange("state", value)}
                >
                  <SelectTrigger className="bg-neutral-800 border-neutral-700 text-white">
                    <SelectValue placeholder="Select your state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                    {/* Add more countries as needed */}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="agreeTerms"
                  checked={formData.agreeTerms}
                  onCheckedChange={handleCheckboxChange}
                  required
                />
                <Label htmlFor="agreeTerms" className="text-sm text-gray-300">
                  I agree to the terms and conditions
                </Label>
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Complete Enrollment
              </Button>
            </form>
          </div>
        </main>
      );
}

export default UserDetails;