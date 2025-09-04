import { useState } from 'react';
import { Car, MapPin, Calendar, Clock, Users, IndianRupee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';

export default function OfferRide() {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Ride Created Successfully!",
      description: "Your ride has been published and is now available for booking.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Offer a Ride</h1>
          <p className="text-muted-foreground">Share your journey and help fellow travelers while earning money</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="h-5 w-5" />
                  Ride Details
                </CardTitle>
                <CardDescription>
                  Fill in the details of your upcoming journey
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Route Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="from">From</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input id="from" placeholder="Departure city" className="pl-10" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="to">To</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input id="to" placeholder="Destination city" className="pl-10" required />
                      </div>
                    </div>
                  </div>

                  {/* Date and Time */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Date</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input id="date" type="date" className="pl-10" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="time">Departure Time</Label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input id="time" type="time" className="pl-10" required />
                      </div>
                    </div>
                  </div>

                  {/* Passengers and Price */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="seats">Available Seats</Label>
                      <div className="relative">
                        <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input id="seats" type="number" min="1" max="4" defaultValue="3" className="pl-10" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="price">Price per Seat</Label>
                      <div className="relative">
                        <IndianRupee className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input id="price" type="number" min="50" placeholder="300" className="pl-10" required />
                      </div>
                    </div>
                  </div>

                  {/* Vehicle Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="vehicle">Vehicle Model</Label>
                      <Input id="vehicle" placeholder="e.g., Honda City, Toyota Innova" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="number">Vehicle Number</Label>
                      <Input id="number" placeholder="e.g., MH 01 AB 1234" required />
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes (Optional)</Label>
                    <Textarea 
                      id="notes" 
                      placeholder="Any specific pickup points, stops, or other details..."
                      className="min-h-[100px]"
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Publish Ride
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Side Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Tips for a Great Ride</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <p className="text-sm">Set a fair price based on fuel costs and distance</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <p className="text-sm">Be punctual and communicate any delays</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <p className="text-sm">Keep your vehicle clean and comfortable</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <p className="text-sm">Maintain a good rating by being friendly</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Earnings Calculator</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Price per seat:</span>
                    <span className="font-semibold">₹300</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Available seats:</span>
                    <span className="font-semibold">3</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Total earnings:</span>
                      <span className="font-bold text-primary">₹900</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-muted-foreground">Platform fee (5%):</span>
                      <span className="text-xs text-muted-foreground">-₹45</span>
                    </div>
                    <div className="flex justify-between font-bold">
                      <span>You earn:</span>
                      <span className="text-primary">₹855</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}