import { ServiceDetailPage } from "@/app/components/service-detail-page";

export default function DigitalMarketingPage() {
  return (
    <ServiceDetailPage
      eyebrow="Digital Marketing Services"
      title="Digital Marketing"
      description="Digital marketing services focused on SEO, content strategy, social media marketing, paid ads, lead generation, and measurable business growth."
      intro="Our digital marketing service is built for businesses that want more visibility, better-quality traffic, and stronger conversion performance. We combine strategy, content, campaign execution, and analytics to help brands grow consistently instead of relying on guesswork."
      sectionTitle="Digital marketing strategy built around visibility, trust, and revenue growth"
      sectionDescription="Effective digital marketing is a connected system. Search engine optimization, content planning, paid campaigns, social media, and conversion tracking should all support the same business goals. DigiPaddles creates practical marketing systems that improve reach while staying focused on real outcomes."
      offerings={[
        "SEO strategy, keyword research, on-page optimization, and search-friendly content planning.",
        "Google Ads, paid social campaigns, and performance marketing focused on qualified leads and ROI.",
        "Social media marketing, content calendars, creative direction, and audience engagement support.",
        "Email marketing campaigns, automation sequences, and lead nurturing workflows.",
        "Marketing analytics, reporting dashboards, funnel tracking, and conversion analysis.",
        "Local SEO, business profile optimization, and digital visibility support for service-based brands.",
      ]}
      keywords={[
        "SEO Services",
        "Performance Marketing",
        "Lead Generation",
        "Social Media Marketing",
        "Google Ads Management",
      ]}
      stats={[
        { value: "SEO", label: "Search-focused planning to improve discoverability, authority, and inbound traffic." },
        { value: "Paid", label: "Campaign structures built to reduce wasted spend and improve conversion quality." },
        { value: "Measured", label: "Analytics and reporting tied to leads, growth signals, and business outcomes." },
      ]}
      benefits={[
        "Marketing strategy aligned with your audience, offer positioning, and sales goals.",
        "Keyword-focused content planning that supports long-term organic visibility.",
        "Campaign execution that connects traffic generation with landing page performance and conversion tracking.",
        "Clear reporting so you know what is driving inquiries, engagement, and customer acquisition.",
      ]}
      process={[
        {
          title: "Research and audit",
          description:
            "We assess your current visibility, competitors, audience behavior, and content gaps to identify the best growth opportunities.",
        },
        {
          title: "Channel strategy",
          description:
            "We define the right mix of SEO, paid advertising, social media, and content marketing based on your budget and goals.",
        },
        {
          title: "Campaign execution",
          description:
            "We launch and manage the selected marketing activities with strong messaging, targeting, and creative consistency.",
        },
        {
          title: "Optimization and reporting",
          description:
            "We track performance, improve campaigns, refine content direction, and focus attention on the channels producing results.",
        },
      ]}
      industries={[
        "Local businesses that need stronger online visibility and more inbound inquiries.",
        "Service companies that want better lead generation from search and paid campaigns.",
        "E-commerce and consumer brands that need stronger traffic quality and conversion support.",
        "Growing businesses that want a structured digital marketing partner instead of fragmented freelancers.",
      ]}
      outcomes={[
        "Higher-quality traffic from search engines, paid campaigns, and targeted digital channels.",
        "Improved lead generation through stronger keyword targeting, content strategy, and funnel refinement.",
        "Better campaign efficiency through audience testing, reporting clarity, and data-driven optimization.",
        "A repeatable marketing system that supports awareness, conversion, and long-term growth.",
      ]}
      faqs={[
        {
          question: "Do you handle SEO and paid ads together?",
          answer:
            "Yes. We can combine SEO, Google Ads, social media advertising, and content strategy so the channels support one another.",
        },
        {
          question: "Can digital marketing help local businesses?",
          answer:
            "Absolutely. Local SEO, Google Business Profile optimization, and targeted ad campaigns can improve visibility and lead flow for local businesses.",
        },
        {
          question: "How do you measure digital marketing success?",
          answer:
            "We focus on meaningful metrics such as qualified traffic, inquiries, conversions, engagement quality, and return on investment rather than vanity numbers alone.",
        },
        {
          question: "Do you create content as part of the strategy?",
          answer:
            "Yes. We can support keyword-focused content planning, social content direction, email messaging, and campaign copywriting.",
        },
      ]}
    />
  );
}
