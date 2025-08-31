import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, CheckCircle, Sparkles } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      value: "info@beracodeai.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our team",
      value: "+2347062029109",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Our office location",
      value: "Brains and Hammers City, Life Camp, Abuja, Nigeria",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4 transition-all duration-1000 ${isVisible ? 'scale-in' : 'opacity-0'}`}>
            <Sparkles className="h-4 w-4 mr-2" />
            Get In Touch
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 transition-all duration-1000 delay-200 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
            Let's Build Something Amazing Together
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
            Ready to transform your business with AI? Contact us today to discuss your project and discover how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card 
                key={index} 
                className={`text-center border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group cursor-pointer ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
                style={{ transitionDelay: `${600 + index * 200}ms` }}
              >
                <CardHeader>
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${info.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {info.title}
                  </CardTitle>
                  <CardDescription>{info.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-gray-700">{info.value}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className={`border-0 shadow-xl transition-all duration-1000 delay-1000 ${isVisible ? 'scale-in' : 'opacity-0'}`}>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-900">Send Us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8 animate-pulse">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600">Thank you for reaching out. We'll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                      placeholder="Tell us about your project, goals, and how we can help you..."
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 h-auto button-glow transform transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
