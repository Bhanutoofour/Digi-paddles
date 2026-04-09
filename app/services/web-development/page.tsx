import { ServiceDetailPage } from "@/app/components/service-detail-page";

export default function WebDevelopmentPage() {
  return (
    <ServiceDetailPage
      eyebrow="Web Development Services"
      title="Web Development"
      description="Custom website development, business website design, landing pages, and scalable web application development built for performance, SEO, and conversion."
      intro="Our web development service is designed for brands that need more than a basic brochure site. We build fast, responsive, search-friendly websites and custom web applications that support lead generation, customer trust, digital marketing campaigns, and long-term business growth."
      sectionTitle="Modern website development that supports search visibility and business performance"
      sectionDescription="A strong website is not only about visual appeal. It should also load quickly, communicate the offer clearly, support SEO strategy, guide user behavior, and be flexible enough to grow with your business. DigiPaddles approaches website development with a balance of UX clarity, technical performance, and conversion-focused structure."
      offerings={[
        "Custom business website development using modern frameworks and responsive front-end architecture.",
        "Next.js and React development for marketing websites, lead generation pages, and web applications.",
        "SEO-friendly page structure, on-page content layouts, and technical performance improvements.",
        "Landing page design and development for paid ads, campaigns, and service-specific funnels.",
        "API integrations, CRM integrations, form systems, and custom business logic implementation.",
        "Website redesign, speed optimization, mobile responsiveness, and conversion-focused UX refinement.",
      ]}
      keywords={[
        "Custom Website Development",
        "Responsive Web Design",
        "SEO-Friendly Websites",
        "Next.js Development",
        "Business Website Design",
      ]}
      stats={[
        { value: "Fast", label: "Optimized site performance for better user experience and search readiness." },
        { value: "Mobile", label: "Responsive layouts built to perform across phones, tablets, and desktops." },
        { value: "Scalable", label: "Flexible codebases that support future features, pages, and integrations." },
      ]}
      benefits={[
        "Website architecture built around business goals, search intent, and conversion opportunities.",
        "Page layouts that help visitors understand your offer quickly and move toward inquiry or purchase.",
        "Technical decisions focused on speed, maintainability, and future content expansion.",
        "A polished digital presence that supports branding, campaigns, and customer confidence.",
      ]}
      process={[
        {
          title: "Discovery and planning",
          description:
            "We review your goals, competitors, service positioning, and target audience to define the right website structure and development priorities.",
        },
        {
          title: "UX structure and content planning",
          description:
            "We map key pages, calls to action, service hierarchy, and messaging so the site supports both SEO and customer decision-making.",
        },
        {
          title: "Design and development",
          description:
            "We build responsive interfaces, reusable sections, and modern front-end systems that look polished and perform reliably.",
        },
        {
          title: "Optimization and launch",
          description:
            "Before launch, we improve speed, test across screen sizes, refine interaction details, and prepare the site for growth.",
        },
      ]}
      industries={[
        "Professional service businesses that need a more credible and conversion-focused online presence.",
        "Startups that need a modern marketing website or product-focused web experience.",
        "Local businesses that want stronger visibility, better messaging, and more qualified leads.",
        "Growing brands that need a website redesign with improved performance and SEO structure.",
      ]}
      outcomes={[
        "Clearer digital positioning that helps customers understand your services and trust your brand faster.",
        "Stronger technical performance through responsive design, modern code, and cleaner page structure.",
        "More effective lead generation through sharper calls to action, landing pages, and inquiry flows.",
        "A website foundation that supports content marketing, SEO growth, and future feature expansion.",
      ]}
      faqs={[
        {
          question: "What kind of websites do you build?",
          answer:
            "We build custom business websites, service websites, landing pages, portfolio websites, and custom web applications depending on the project goals.",
        },
        {
          question: "Can you redesign an existing website?",
          answer:
            "Yes. We can redesign outdated websites, improve user experience, upgrade performance, and restructure content for better SEO and conversion.",
        },
        {
          question: "Will the website be mobile-friendly and fast?",
          answer:
            "Yes. Responsive web design and performance optimization are part of the development process so the site works well across devices.",
        },
        {
          question: "Do you also help with website content structure?",
          answer:
            "Yes. We help shape page hierarchy, service messaging, call-to-action placement, and SEO-friendly section planning.",
        },
      ]}
     />
  );
}
