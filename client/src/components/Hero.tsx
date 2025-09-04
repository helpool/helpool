import { Search, Users, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Share Your Journey,
            <span className="text-primary block">Save Together</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 animate-slide-up">
            Connect with fellow travelers for safe, affordable intercity rides across India
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-bounce-in">
            <Button size="lg" className="btn-glow">
              <Search className="h-5 w-5 mr-2" />
              Find a Ride
            </Button>
            <Button size="lg" variant="outline">
              <Users className="h-5 w-5 mr-2" />
              Offer a Ride
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center p-6 rounded-lg bg-card card-hover">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">500+ Cities</h3>
              <p className="text-sm text-muted-foreground">Connected across India</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-card card-hover">
              <Users className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">50K+ Users</h3>
              <p className="text-sm text-muted-foreground">Trusted community</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-card card-hover">
              <span className="text-2xl font-bold text-primary block mb-1">₹</span>
              <h3 className="font-semibold mb-2">Save 60%</h3>
              <p className="text-sm text-muted-foreground">On travel costs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}