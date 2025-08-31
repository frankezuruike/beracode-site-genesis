// src/pages/index.tsx
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>AI-Powered Solutions | BeracodeAI - Custom Software Development</title>
        <meta 
          name="description" 
          content="Transform your business with BeracodeAI's cutting-edge AI development solutions. We create intelligent systems that drive innovation, efficiency, and growth." 
        />
        <meta name="keywords" content="AI solutions, machine learning, software development, artificial intelligence, custom software, BeracodeAI, AI development" />
        <meta name="author" content="BeracodeAI" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://beracodeai.com/" />
        <meta property="og:title" content="AI-Powered Solutions | BeracodeAI - Custom Software Development" />
        <meta property="og:description" content="Transform your business with BeracodeAI's cutting-edge AI development solutions. We create intelligent systems that drive innovation, efficiency, and growth." />
        <meta property="og:image" content="https://beracodeai.com/og-image.jpg" />
        <meta property="og:site_name" content="BeracodeAI" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://beracodeai.com/" />
        <meta name="twitter:title" content="AI-Powered Solutions | BeracodeAI - Custom Software Development" />
        <meta name="twitter:description" content="Transform your business with BeracodeAI's cutting-edge AI development solutions. We create intelligent systems that drive innovation, efficiency, and growth." />
        <meta property="twitter:image" content="https://beracodeai.com/og-image.jpg" />
        <meta name="twitter:site" content="@beracode_ai" />
        
        {/* Additional SEO tags */}
        <link rel="canonical" href="https://beracodeai.com/" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "BeracodeAI",
            "url": "https://beracodeai.com",
            "logo": "https://beracodeai.com/logo.png",
            "description": "AI-powered software development company specializing in custom solutions that drive innovation, efficiency, and growth",
            "sameAs": [
              "https://twitter.com/beracode_ai"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "availableLanguage": "English"
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "US"
            }
          })}
        </script>
      </Helmet>
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
