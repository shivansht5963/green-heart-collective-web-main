import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "@/components/layout/Sidebar";
import Hero from "@/components/layout/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  GraduationCap, 
  Trees, 
  Home, 
  Users, 
  Award, 
  Target,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroMain from "@/assets/hero-main.jpg";
import educationHero from "@/assets/education-hero.jpg";
import plantationHero from "@/assets/plantation-hero.jpg";
import slumDevelopmentHero from "@/assets/slum-development-hero.jpg";

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [newsletterData, setNewsletterData] = useState({ name: "", email: "" });
  const { toast } = useToast();

  const causes = [
    {
      id: "education",
      title: "Education for All",
      description: "Providing quality education and learning resources to underprivileged children in communities that need it most.",
      image: educationHero,
      icon: GraduationCap,
      link: "/causes/education",
      stats: "500+ Children Educated"
    },
    {
      id: "plantation",
      title: "Green Plantation",
      description: "Restoring our environment through community tree planting initiatives and sustainable green spaces.",
      image: plantationHero,
      icon: Trees,
      link: "/causes/plantation",
      stats: "10,000+ Trees Planted"
    },
    {
      id: "slum-development",
      title: "Slum Development",
      description: "Improving living conditions in underserved communities through infrastructure and empowerment programs.",
      image: slumDevelopmentHero,
      icon: Home,
      link: "/causes/slum-development",
      stats: "50+ Families Helped"
    }
  ];

  const impactStats = [
    { icon: Trees, number: "10,000+", label: "Trees Planted" },
    { icon: GraduationCap, number: "500+", label: "Kids Educated" },
    { icon: Home, number: "50+", label: "Families Helped" },
    { icon: Users, number: "200+", label: "Volunteers" }
  ];

  const testimonials = [
    {
      name: "Maria Santos",
      role: "Community Member",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face",
      quote: "Green Heart Collective transformed our neighborhood. My children now have access to quality education and our community has beautiful green spaces."
    },
    {
      name: "David Kim",
      role: "Parent",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      quote: "The education program gave my daughter the foundation she needed to pursue her dreams. She's now in high school and excelling in her studies."
    },
    {
      name: "Priya Patel",
      role: "Local Teacher",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      quote: "Working with Green Heart Collective has been incredibly rewarding. Together, we're making real change in our community, one child at a time."
    }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterData.name || !newsletterData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in both name and email fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Welcome to our community!",
      description: "Thank you for subscribing to our newsletter. You'll receive updates about our impact and upcoming events.",
    });

    setNewsletterData({ name: "", email: "" });
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-brand-dark font-manrope">
      <Sidebar />
      <main className="flex-1">
        <Hero />

        <div className="p-8">
          {/* Impact Stats */}
          <section className="py-20 bg-brand-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="font-manrope font-bold text-3xl md:text-5xl text-white mb-4">
                  Our Impact So Far
                </h2>
                <p className="font-manrope text-xl text-muted-foreground">
                  Real numbers showing the difference we're making together
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {impactStats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-20 h-20 bg-gradient-to-r from-brand-pink to-brand-purple rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-card">
                      <stat.icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="font-manrope font-bold text-4xl text-white mb-2">
                      {stat.number}
                    </h3>
                    <p className="font-manrope text-muted-foreground text-lg">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Our Causes Section */}
          <section className="py-20 bg-brand-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="font-manrope font-bold text-3xl md:text-5xl text-white mb-4">
                  Our Causes
                </h2>
                <p className="font-manrope text-xl text-muted-foreground max-w-3xl mx-auto">
                  We focus on three key areas where we can create the most meaningful
                  and lasting impact for communities in need.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {causes.map((cause) => (
                  <Card key={cause.id} className="bg-muted hover:border-brand-pink transition-all duration-300 group overflow-hidden border-2 border-transparent">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={cause.image}
                        alt={cause.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-manrope font-semibold text-xl text-white mb-3">
                        {cause.title}
                      </h3>
                      <p className="font-manrope text-muted-foreground leading-relaxed mb-4">
                        {cause.description}
                      </p>
                      <Button asChild className="w-full bg-brand-yellow text-brand-dark font-bold hover:bg-yellow-400">
                        <Link to={cause.link}>Learn More</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 bg-brand-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="font-manrope font-bold text-3xl md:text-5xl text-white mb-4">
                  Stories of Impact
                </h2>
                <p className="font-manrope text-xl text-muted-foreground">
                  Hear from the communities and families whose lives have been transformed
                </p>
              </div>
              <div className="relative max-w-4xl mx-auto">
                <Card className="shadow-card bg-muted border-2 border-transparent">
                  <CardContent className="p-8 md:p-12">
                    <div className="flex flex-col md:flex-row items-center text-center md:text-left">
                      <img
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        className="w-20 h-20 rounded-full object-cover mb-6 md:mb-0 md:mr-8"
                      />
                      <div className="flex-1">
                        <blockquote className="font-manrope text-lg text-muted-foreground italic mb-4 leading-relaxed">
                          "{testimonials[currentTestimonial].quote}"
                        </blockquote>
                        <div>
                          <h4 className="font-manrope font-semibold text-lg text-white">
                            {testimonials[currentTestimonial].name}
                          </h4>
                          <p className="font-manrope text-muted-foreground">
                            {testimonials[currentTestimonial].role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Navigation Buttons */}
                <div className="flex justify-center mt-8 space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevTestimonial}
                    className="rounded-full hover:bg-brand-pink hover:text-white"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextTestimonial}
                    className="rounded-full hover:bg-brand-pink hover:text-white"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="py-20 bg-gradient-brand text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-manrope font-bold text-3xl md:text-4xl mb-6">
                  Stay Connected with Our Mission
                </h2>
                <p className="font-manrope text-xl mb-8">
                  Get updates on our latest projects, success stories, and ways you can make a difference in your community.
                </p>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6">
                    <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="newsletter-name" className="text-white">Name</Label>
                          <Input
                            id="newsletter-name"
                            value={newsletterData.name}
                            onChange={(e) => setNewsletterData({ ...newsletterData, name: e.target.value })}
                            placeholder="Your full name"
                            className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                          />
                        </div>
                        <div>
                          <Label htmlFor="newsletter-email" className="text-white">Email</Label>
                          <Input
                            id="newsletter-email"
                            type="email"
                            value={newsletterData.email}
                            onChange={(e) => setNewsletterData({ ...newsletterData, email: e.target.value })}
                            placeholder="Your email address"
                            className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                          />
                        </div>
                      </div>
                      <Button type="submit" size="lg" className="w-full bg-brand-yellow text-brand-dark font-bold hover:bg-yellow-400">
                        Subscribe to Newsletter
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-20 bg-brand-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="font-manrope font-bold text-3xl md:text-5xl text-white mb-6">
                Ready to Make a Difference?
              </h2>
              <p className="font-manrope text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Whether through volunteering, donating, or simply spreading awareness,
                every action contributes to creating a more sustainable and equitable world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="bg-brand-yellow text-brand-dark font-bold hover:bg-yellow-400">
                  <Link to="/volunteer">Start Volunteering</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="hover:bg-brand-pink hover:text-white">
                  <Link to="/donate">Make a Donation</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="hover:bg-brand-pink hover:text-white">
                  <Link to="/causes">Explore Our Causes</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
