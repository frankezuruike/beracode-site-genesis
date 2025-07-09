
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Users, Award, Target, Lightbulb, Heart, Rocket } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay at the forefront of AI technology, constantly exploring new possibilities."
    },
    {
      icon: Heart,
      title: "Reliability",
      description: "Our solutions are built to last, with robust architecture and ongoing support."
    },
    {
      icon: Users,
      title: "Customer-Centricity",
      description: "Your success is our priority. We tailor solutions to your unique needs."
    },
    {
      icon: Target,
      title: "Transparency",
      description: "Clear communication and honest partnerships in every project we undertake."
    }
  ];

  const stats = [
    { number: "5+", label: "Years of Experience" },
    { number: "50+", label: "Successful Projects" },
    { number: "30+", label: "Happy Clients" },
    { number: "24/7", label: "Support Available" }
  ];

  const team = [
    {
      name: "Mr. Frank Ezuruike",
      role: "Chief Executive Officer",
      description: "Visionary leader with extensive experience in AI technology and business development. Frank drives the strategic direction of BeraCode AI and ensures our solutions deliver maximum value to clients.",
      initials: "FE"
    },
    {
      name: "Dr. Mrs. Berachach Ezuruike",
      role: "Chief Technology Officer",
      description: "Distinguished technologist and AI researcher with deep expertise in machine learning and software engineering. Dr. Berachach leads our technical innovation and ensures the highest quality in our AI solutions.",
      initials: "BE"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="gradient-text">BeraCode AI</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              BeraCode AI Ltd is a cutting-edge technology company specializing in artificial intelligence 
              and machine learning solutions. We transform businesses by implementing intelligent systems 
              that drive efficiency, innovation, and growth.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of experienced developers, data scientists, and AI engineers work collaboratively 
              to deliver solutions that not only meet today's needs but anticipate tomorrow's challenges. 
              We believe in the power of AI to revolutionize how businesses operate.
            </p>
            
            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-xl border-l-4 border-primary">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
              <p className="text-gray-700">
                To democratize AI technology by making it accessible, practical, and transformative 
                for businesses of all sizes. We simplify complex AI concepts and deliver solutions 
                that create real value.
              </p>
            </div>
          </div>

          <div className="relative">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 shadow-lg card-hover">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="gradient-text">Leadership</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the visionary leaders driving BeraCode AI's mission to transform businesses through AI innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="p-8 shadow-lg card-hover border-0">
                <CardContent className="pt-6 text-center">
                  <Avatar className="mx-auto w-24 h-24 mb-6">
                    <AvatarImage src="" alt={member.name} />
                    <AvatarFallback className="text-xl font-bold bg-gradient-to-r from-primary to-accent text-white">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h4>
                  <p className="text-primary font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Core <span className="gradient-text">Values</span>
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do and ensure we deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {values.map((value, index) => (
            <Card key={index} className="text-center p-6 card-hover border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="mx-auto w-16 h-16 hero-gradient rounded-2xl flex items-center justify-center mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="text-center">
          <div className="bg-gray-50 rounded-2xl p-12">
            <Rocket className="mx-auto h-16 w-16 text-primary mb-6" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose BeraCode AI?
            </h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We combine deep technical expertise with business acumen to deliver AI solutions 
              that drive real results. Our collaborative approach ensures your vision becomes reality, 
              while our ongoing support guarantees long-term success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
