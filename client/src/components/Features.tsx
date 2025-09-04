import { Shield, Star, Clock, MapPin } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: "Safe & Verified",
      description: "All drivers and passengers are verified with government IDs for your safety"
    },
    {
      icon: Star,
      title: "Rated Community", 
      description: "Rate and review fellow travelers to build a trusted carpooling community"
    },
    {
      icon: Clock,
      title: "Real-time Updates",
      description: "Get instant notifications about ride confirmations and live trip updates"
    },
    {
      icon: MapPin,
      title: "Easy Booking",
      description: "Simple interface to find rides or offer your car to fellow travelers"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose HelPool?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the future of intercity travel with our trusted carpooling platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}