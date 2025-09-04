import { useState } from 'react';
import { Search, MapPin, Calendar, Users, Star, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Header from '@/components/Header';

export default function FindRide() {
  const [searchResults] = useState([
    {
      id: 1,
      driver: 'Rahul Sharma',
      rating: 4.8,
      from: 'Mumbai',
      to: 'Pune',
      date: '2024-01-15',
      time: '09:00 AM',
      price: 300,
      seatsAvailable: 3,
      car: 'Honda City',
      verified: true
    },
    {
      id: 2,
      driver: 'Priya Patel',
      rating: 4.9,
      from: 'Mumbai',
      to: 'Pune',
      date: '2024-01-15',
      time: '02:00 PM',
      price: 350,
      seatsAvailable: 2,
      car: 'Toyota Innova',
      verified: true
    },
    {
      id: 3,
      driver: 'Amit Kumar',
      rating: 4.6,
      from: 'Mumbai',
      to: 'Pune',
      date: '2024-01-15',
      time: '06:00 PM',
      price: 280,
      seatsAvailable: 4,
      car: 'Maruti Swift',
      verified: false
    }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Find a Ride</h1>
          <p className="text-muted-foreground">Search for available rides to your destination</p>
        </div>

        {/* Search Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Search Rides
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="from">From</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="from" placeholder="Departure city" className="pl-10" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="to">To</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="to" placeholder="Destination city" className="pl-10" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="date" type="date" className="pl-10" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="passengers">Passengers</Label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="passengers" type="number" min="1" max="4" defaultValue="1" className="pl-10" />
                </div>
              </div>
            </div>
            
            <Button className="w-full mt-4">
              <Search className="h-4 w-4 mr-2" />
              Search Rides
            </Button>
          </CardContent>
        </Card>

        {/* Search Results */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Available Rides</h2>
          
          {searchResults.map((ride) => (
            <Card key={ride.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-4 gap-4 items-center">
                  {/* Driver Info */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="font-semibold text-primary">
                          {ride.driver.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium">{ride.driver}</p>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-500 fill-current" />
                          <span className="text-sm text-muted-foreground">{ride.rating}</span>
                          {ride.verified && (
                            <span className="text-xs bg-green-100 text-green-800 px-1 rounded dark:bg-green-900 dark:text-green-200">
                              Verified
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Car className="h-3 w-3" />
                      {ride.car}
                    </div>
                  </div>

                  {/* Route Info */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{ride.from}</span>
                      <span className="text-muted-foreground">→</span>
                      <span className="font-medium">{ride.to}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{ride.date} • {ride.time}</p>
                  </div>

                  {/* Availability */}
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">Available Seats</p>
                    <div className="flex items-center justify-center gap-1">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="font-semibold">{ride.seatsAvailable}</span>
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="text-center space-y-2">
                    <div>
                      <p className="text-2xl font-bold text-primary">₹{ride.price}</p>
                      <p className="text-xs text-muted-foreground">per person</p>
                    </div>
                    <Button className="w-full">Book Now</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}