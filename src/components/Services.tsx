
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code2, Database, Zap, Smartphone, Globe, Bot, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Custom AI solutions, ML model development, and intelligent automation systems tailored to your business needs.",
      features: ["Custom ML Models", "Predictive Analytics", "Natural Language Processing", "Computer Vision"]
    },
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "End-to-end web and software development using modern technologies and best practices.",
      features: ["React & Next.js", "Node.js & Python", "Cloud Integration", "API Development"]
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Build robust data pipelines, analytics platforms, and business intelligence solutions.",
      features: ["Data Pipelines", "ETL Processes", "Real-time Analytics", "Data Visualization"]
    },
    {
      icon: Bot,
      title: "AI Chatbots & Automation",
      description: "Intelligent chatbots and automation solutions to streamline your business processes.",
      features: ["Custom Chatbots", "Process Automation", "24/7 AI Support", "Integration APIs"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications with AI-powered features.",
      features: ["iOS & Android", "React Native", "AI Integration", "Cloud Sync"]
    },
    {
      icon: Globe,
      title: "Web Applications",
      description: "Modern, responsive web applications with integrated AI capabilities.",
      features: ["PWA Development", "Real-time Features", "AI-Powered UX", "Performance Optimization"]
    },
    {
      icon: Shield,
      title: "AI Security Solutions",
      description: "Implement AI-driven security measures to protect your digital assets.",
      features: ["Threat Detection", "Anomaly Monitoring", "Secure AI Models", "Compliance Solutions"]
    },
    {
      icon: Zap,
      title: "AI Consulting",
      description: "Strategic AI consulting to help you identify opportunities and implement AI solutions.",
      features: ["AI Strategy", "Technology Assessment", "ROI Analysis", "Implementation Planning"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="gradient-text">AI-Powered</span> Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to deployment, we deliver comprehensive AI solutions that transform 
            your business operations and drive measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-hover border-0 shadow-lg bg-white">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 hero-gradient rounded-2xl flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-500 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Let's discuss how our AI solutions can drive innovation and growth for your organization.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
