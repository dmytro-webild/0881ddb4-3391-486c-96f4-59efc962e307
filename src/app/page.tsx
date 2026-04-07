"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="medium"
        sizing="largeSizeMediumTitles"
        background="noise"
        cardStyle="solid"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "home",
        },
        {
          name: "Features",
          id: "features",
        },
        {
          name: "Pricing",
          id: "pricing",
        },
      ]}
      brandName="TradeAI"
      button={{
        text: "Get Started",
        href: "#contact",
      }}
    />
  </div>

  <div id="home" data-section="home">
      <HeroSplitDualMedia
      background={{
        variant: "gradient-bars",
      }}
      title="Master the Markets with AI Precision"
      description="Upload your TradingView charts and let our advanced AI generate high-probability trade setups with optimized SL and TP points."
      tag="AI-Powered Trade Signals"
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/digital-presentation-related-performance-business-using-graph_53876-98525.jpg",
          imageAlt: "AI Trading Dashboard",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-render-modern-network-communications-science-background-with-plexus-design_1048-13217.jpg",
          imageAlt: "Market Data Analysis",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/expert-meeting-with-accounting-staff-video-call-share-economic-situation_482257-120017.jpg",
          imageAlt: "Automated Trading Indicators",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/mock-up-animation-financial-stock-market-data-software-with-different-diagrams-graphs_482257-26904.jpg",
          imageAlt: "Risk Management Tools",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/digital-presentation-related-performance-business-using-graph_53876-98525.jpg",
          imageAlt: "Advanced Analytics",
        },
      ]}
      mediaAnimation="slide-up"
      rating={5}
      ratingText="Rated 5/5 by pro traders"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureBento
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Pattern Recognition",
          description: "Advanced AI scans candlestick formations to identify breakout signals instantly.",
          bentoComponent: "media-stack",
          items: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/3d-render-modern-network-communications-science-background-with-plexus-design_1048-13217.jpg",
              imageAlt: "Pattern Analysis",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/expert-meeting-with-accounting-staff-video-call-share-economic-situation_482257-120017.jpg",
              imageAlt: "Signal Indicators",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/mock-up-animation-financial-stock-market-data-software-with-different-diagrams-graphs_482257-26904.jpg",
              imageAlt: "Dashboard View",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/digital-presentation-related-performance-business-using-graph_53876-98525.jpg",
          imageAlt: "modern trading chart analysis dashboard",
        },
      ]}
      title="Engineered for High-Profit Trades"
      description="Our proprietary algorithms analyze chart patterns to give you the edge you need."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Platform Impact"
      tag="Performance Stats"
      metrics={[
        {
          id: "m1",
          value: "94%",
          description: "Signal Accuracy",
        },
        {
          id: "m2",
          value: "24/7",
          description: "Market Monitoring",
        },
        {
          id: "m3",
          value: "15ms",
          description: "Latency",
        },
        {
          id: "m4",
          value: "50K+",
          description: "Active Traders",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          handle: "@sarah_trade",
          testimonial: "The SL and TP calculations are incredible.",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-render-modern-network-communications-science-background-with-plexus-design_1048-13217.jpg",
          imageAlt: "ai pattern recognition financial chart",
        },
        {
          id: "2",
          name: "Mike D.",
          handle: "@miked",
          testimonial: "Finally, an AI that understands market context.",
          imageSrc: "http://img.b2bpic.net/free-photo/expert-meeting-with-accounting-staff-video-call-share-economic-situation_482257-120017.jpg",
          imageAlt: "professional trading software workspace",
        },
        {
          id: "3",
          name: "Alex R.",
          handle: "@alexr",
          testimonial: "My profit consistency has doubled since using TradeAI.",
          imageSrc: "http://img.b2bpic.net/free-photo/mock-up-animation-financial-stock-market-data-software-with-different-diagrams-graphs_482257-26904.jpg",
          imageAlt: "trading portfolio dashboard analytics",
        },
        {
          id: "4",
          name: "Jordan P.",
          handle: "@jordanp",
          testimonial: "Highly recommended for all levels of traders.",
          imageSrc: "http://img.b2bpic.net/free-photo/digital-presentation-related-performance-business-using-graph_53876-98525.jpg",
          imageAlt: "modern trading chart analysis dashboard",
        },
        {
          id: "5",
          name: "Chris B.",
          handle: "@chrisb",
          testimonial: "The best tool for technical analysis!",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-render-modern-network-communications-science-background-with-plexus-design_1048-13217.jpg",
          imageAlt: "ai pattern recognition financial chart",
        },
      ]}
      title="Traders Love Us"
      description="See why top traders trust our signals."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "How do I upload charts?",
          content: "Simply screenshot your TradingView chart and upload it via the dashboard.",
        },
        {
          id: "f2",
          title: "Which markets are supported?",
          content: "We support Forex, Crypto, and major Indices.",
        },
        {
          id: "f3",
          title: "Is the analysis automated?",
          content: "Yes, our engine processes the visual data in milliseconds.",
        },
      ]}
      title="Common Questions"
      description="Everything you need to know about TradeAI."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Start Your Trading Journey"
      description="Get in touch to learn more about our enterprise plans."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Email Address",
          required: true,
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/digital-presentation-related-performance-business-using-graph_53876-98525.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="TradeAI"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Blog",
              href: "#",
            },
            {
              label: "API",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
