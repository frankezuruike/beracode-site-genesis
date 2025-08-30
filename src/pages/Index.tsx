import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Bot, Code, Zap, Users, CheckCircle, Star } from "lucide-react";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>AI-Powered Solutions | BeracodeAI - Custom Software Development</title>
        <meta name="description" content="Transform your business with BeracodeAI's cutting-edge AI solutions. Custom software development, intelligent automation, and AI-powered applications that drive results." />
        <meta name="keywords" content="AI development, custom software, artificial intelligence, machine learning, automation, BeracodeAI, software solutions" />
        <meta name="author" content="BeracodeAI" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://beracodeai.com" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://beracodeai.com" />
        <meta property="og:title" content="AI-Powered Solutions | BeracodeAI - Custom Software Development" />
        <meta property="og:description" content="Transform your business with BeracodeAI's cutting-edge AI solutions. Custom software development, intelligent automation, and AI-powered applications that drive results." />
        <meta property="og:image" content="https://beracodeai.com/og-image.jpg" />
        <meta property="og:site_name" content="BeracodeAI" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://beracodeai.com" />
        <meta property="twitter:title" content="AI-Powered Solutions | BeracodeAI - Custom Software Development" />
        <meta property="twitter:description" content="Transform your business with BeracodeAI's cutting-edge AI solutions. Custom software development, intelligent automation, and AI-powered applications that drive results." />
        <meta property="twitter:image" content="https://beracodeai.com/og-image.jpg" />
        
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "BeracodeAI",
            "url": "https://beracodeai.com",
            "logo": "https://beracodeai.com/logo.png",
            "description": "AI-powered custom software development solutions",
            "sameAs": [
              "https://twitter.com/beracodeai",
              "https://linkedin.com/company/beracodeai"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "hello@beracodeai.com"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Navigation */}
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">BeracodeAI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                Get Started
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-400">
              🚀 AI-Powered Development
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your Business with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                {" "}AI Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We build cutting-edge AI applications, intelligent automation systems, and custom software solutions that drive real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                View Our Work
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our AI Services</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              From concept to deployment, we deliver AI solutions that transform how you do business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500 transition-colors">
              <CardHeader>
                <Code className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Custom AI Development</CardTitle>
                <CardDescription className="text-gray-300">
                  Tailored AI solutions built specifically for your business needs and challenges.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Machine Learning Models</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Natural Language Processing</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Computer Vision</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500 transition-colors">
              <CardHeader>
                <Zap className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Intelligent Automation</CardTitle>
                <CardDescription className="text-gray-300">
                  Streamline operations with AI-powered automation that learns and adapts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Process Automation</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Predictive Analytics</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Smart Workflows</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500 transition-colors">
              <CardHeader>
                <Users className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">AI Consulting</CardTitle>
                <CardDescription className="text-gray-300">
                  Strategic guidance to help you identify and implement the right AI solutions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />AI Strategy Development</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Technology Assessment</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Implementation Planning</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300">AI Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">98%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">5+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="container mx-auto px-6 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how AI can solve your challenges and unlock new opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
                Schedule a Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                hello@beracodeai.com
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-6 py-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Bot className="h-6 w-6 text-purple-400" />
              <span className="text-white font-semibold">BeracodeAI</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 BeracodeAI. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
