// src/pages/index.tsx
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>AI-Powered Solutions | BeracodeAI</title>
        <meta name="description" content="Unlock your business potential with BeracodeAI's custom AI-powered software solutions, from machine learning to natural language processing." />
        <meta name="author" content="BeracodeAI" />
        <meta property="og:image" content="/android-chrome-512x512.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@beracode_ai" />
        <meta name="twitter:image" content="/android-chrome-512x512.png" />
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
