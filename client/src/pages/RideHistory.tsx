import { useState } from 'react';
import { Calendar, MapPin, Star, User, Car, Clock, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';

export default function RideHistory() {
  const [selectedTab, setSelectedTab] = useState('all');

  const rides = [
    {
      id: 1,
      type: 'passenger',
      from: 'Mumbai',
      to: 'Pune',
      date: '2024-01-10',
      time: '09:00 AM',
      driver: 'Rahul Sharma',
      price: 300,
      status: 'completed',
      rating: 5,
      car: 'Honda City'
    },
    {
      id: 2,
      type: 'driver',
      from: 'Mumbai',
      to: 'Nashik',
      date: '2024-01-08',
      time: '02:00 PM',
      passengers: ['Amit Kumar', 'Priya Patel'],
      price: 250,
      status: 'completed',
      rating: 4.8,
      car: 'Toyota Innova'
    },
    {
      id: 3,
      type: 'passenger',
      from: 'Delhi',
      to: 'Gurgaon',
      date: '2024-01-05',
      time: '06:30 PM',
      driver: 'Anjali Singh',
      price: 150,
      status: 'cancelled',
      car: 'Maruti Swift'
    },
    {
      id: 4,
      type: 'driver',
      from: 'Bangalore',
      to: 'Chennai',
      date: '2024-01-02',
      time: '11:00 AM',
      passengers: ['Ravi Kumar'],
      price: 400,
      status: 'completed',
      rating: 4.9,
      car: 'Honda City'
    }
  ];

  const filteredRides = rides.filter(ride => {
    if (selectedTab === 'all') return true;
    if (selectedTab === 'passenger') return ride.type === 'passenger';
    if (selectedTab === 'driver') return ride.type === 'driver';
    return true;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'cancelled':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'ongoing':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Ride History</h1>
          <p className="text-muted-foreground">View all your past and upcoming rides</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">24</div>
              <div className="text-sm text-muted-foreground">Total Rides</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">18</div>
              <div className="text-sm text-muted-foreground">As Passenger</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">6</div>
              <div className="text-sm text-muted-foreground">As Driver</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">₹4,200</div>
              <div className="text-sm text-muted-foreground">Total Spent</div>
            </CardContent>
          </Card>
        </div>

        {/* Filter Tabs */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Your Rides</CardTitle>
              <CardDescription>All your ride history in one place</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </CardHeader>
          <CardContent>
            <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="all">All Rides</TabsTrigger>
                <TabsTrigger value="passenger">As Passenger</TabsTrigger>
                <TabsTrigger value="driver">As Driver</TabsTrigger>
              </TabsList>
              
              <TabsContent value={selectedTab} className="mt-6">
                <div className="space-y-4">
                  {filteredRides.map((ride) => (
                    <Card key={ride.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="grid md:grid-cols-4 gap-4 items-center">
                          {/* Route & Date */}
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-muted-foreground" />
                              <span className="font-medium">{ride.from}</span>
                              <span className="text-muted-foreground">→</span>
                              <span className="font-medium">{ride.to}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="h-3 w-3" />
                              {ride.date}
                              <Clock className="h-3 w-3 ml-2" />
                              {ride.time}
                            </div>
                          </div>

                          {/* People & Vehicle */}
                          <div className="space-y-2">
                            {ride.type === 'passenger' ? (
                              <div className="flex items-center gap-2">
                                <User className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">Driver: {ride.driver}</span>
                              </div>
                            ) : (
                              <div className="flex items-center gap-2">
                                <User className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">
                                  Passengers: {ride.passengers?.join(', ') || 'None'}
                                </span>
                              </div>
                            )}
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Car className="h-3 w-3" />
                              {ride.car}
                            </div>
                          </div>

                          {/* Status & Rating */}
                          <div className="space-y-2">
                            <Badge className={getStatusColor(ride.status)}>
                              {ride.status.charAt(0).toUpperCase() + ride.status.slice(1)}
                            </Badge>
                            {ride.rating && (
                              <div className="flex items-center gap-1">
                                <Star className="h-3 w-3 text-yellow-500 fill-current" />
                                <span className="text-sm font-medium">{ride.rating}</span>
                              </div>
                            )}
                          </div>

                          {/* Price & Actions */}
                          <div className="text-right space-y-2">
                            <div className="text-lg font-bold text-primary">₹{ride.price}</div>
                            <div className="space-x-2">
                              {ride.status === 'completed' && !ride.rating && (
                                <Button size="sm" variant="outline">Rate</Button>
                              )}
                              <Button size="sm" variant="ghost">Details</Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}