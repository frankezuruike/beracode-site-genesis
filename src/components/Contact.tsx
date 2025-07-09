import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Clock, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting BeraCode AI. We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@beracodeai.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+2347062029109",
      description: "Mon-Fri from 8am to 5pm"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Brains and Hammers City, Life Camp, Abuja, Nigeria",
      description: "Our headquarters location"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with AI? Let's discuss your project and 
            explore how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center p-6 card-hover border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-16 h-16 hero-gradient rounded-2xl flex items-center justify-center mb-4">
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-primary mb-2">{info.details}</p>
                <p className="text-gray-600">{info.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 shadow-xl border-0">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                Send Us a Message
              </CardTitle>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@company.com"
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company name"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+2347062029109"
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project, goals, and how we can help..."
                    required
                    rows={6}
                    className="resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-lg font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="space-y-8">
            <Card className="p-8 shadow-lg border-0">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 hero-gradient rounded-xl flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Response</h3>
                  <p className="text-gray-600">
                    We typically respond to all inquiries within 24 hours. For urgent matters, 
                    please call us directly.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-lg border-0">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 hero-gradient rounded-xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Free Consultation</h3>
                  <p className="text-gray-600">
                    Schedule a free 30-minute consultation to discuss your AI project requirements 
                    and explore potential solutions.
                  </p>
                </div>
              </div>
            </Card>

            <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-white/90 mb-6">
                Join the growing number of businesses leveraging AI to drive innovation and growth. 
                Let's build something amazing together.
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full mr-2"></div>
                  <span>Expert Team</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full mr-2"></div>
                  <span>Proven Results</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full mr-2"></div>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
