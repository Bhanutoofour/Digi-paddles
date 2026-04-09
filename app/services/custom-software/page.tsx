import { ServiceDetailPage } from "@/app/components/service-detail-page";

export default function CustomSoftwarePage() {
  return (
    <ServiceDetailPage
      eyebrow="Custom Software Development"
      title="Custom Software"
      description="Custom software development for business operations, internal tools, customer platforms, workflow systems, SaaS products, and scalable digital transformation."
      intro="Our custom software development service is for businesses that need systems built around their real workflows, not forced into generic tools. We create scalable software solutions that improve operations, automate manual work, and support long-term growth."
      sectionTitle="Software solutions built around your process, team, and growth goals"
      sectionDescription="Off-the-shelf tools can be useful, but they often create limitations when your business process is unique. DigiPaddles builds custom software that fits the way your team works, improves efficiency, and creates a stronger digital foundation for future scale."
      offerings={[
        "Custom business software development for internal workflows, operations, and team productivity.",
        "SaaS product development, admin dashboards, and customer-facing platforms.",
        "CRM systems, portals, booking systems, and process automation tools.",
        "Cloud-based software architecture, API integrations, and scalable back-end systems.",
        "Legacy workflow replacement and software modernization for growing businesses.",
        "Custom reporting tools, business logic implementation, and role-based user systems.",
      ]}
      keywords={[
        "Custom Software Development",
        "Business Automation",
        "SaaS Development",
        "Workflow Software",
        "Digital Transformation",
      ]}
      stats={[
        { value: "Tailored", label: "Software built around your workflow instead of forcing your team into rigid tools." },
        { value: "Connected", label: "System integrations and automation that reduce repetitive work and data silos." },
        { value: "Scalable", label: "Architecture designed to support growth, additional users, and future functionality." },
      ]}
      benefits={[
        "Software features aligned with real operational needs, approval flows, and team responsibilities.",
        "Less manual work through automation, integrations, and cleaner information flow.",
        "More control over how the system evolves as the business grows or processes change.",
        "A stronger digital foundation for service delivery, reporting, and internal efficiency.",
      ]}
      process={[
        {
          title: "Business process discovery",
          description:
            "We study current workflows, bottlenecks, team roles, and technical needs to define the right software scope.",
        },
        {
          title: "System planning",
          description:
            "We map features, user roles, data structure, and integration points so the product supports real operations.",
        },
        {
          title: "Build and iterate",
          description:
            "We develop the software in a structured way, validate the logic, and refine the experience based on practical usage needs.",
        },
        {
          title: "Launch and scale",
          description:
            "We prepare the platform for rollout, improve reliability, and help shape the next phase of feature growth.",
        },
      ]}
      industries={[
        "Service businesses that need a custom operations dashboard, portal, or booking workflow.",
        "Growing companies replacing spreadsheets and disconnected tools with one system.",
        "Startups building SaaS platforms, internal admin tools, or customer-facing applications.",
        "Businesses with unique approval processes, reporting needs, or specialized service delivery flows.",
      ]}
      outcomes={[
        "Improved efficiency through software that matches your internal process and removes repetitive manual tasks.",
        "Cleaner data movement across teams and systems through integrations and centralized workflows.",
        "Stronger visibility into operations, performance, and customer activity through custom reporting features.",
        "A scalable platform that can keep evolving with your business instead of limiting it.",
      ]}
      faqs={[
        {
          question: "How is custom software different from buying an existing tool?",
          answer:
            "Custom software is built around your process, team roles, and business logic, which gives you more control and a better operational fit.",
        },
        {
          question: "Can you build internal tools and customer-facing platforms?",
          answer:
            "Yes. We can develop internal dashboards, admin systems, customer portals, SaaS products, and workflow platforms.",
        },
        {
          question: "Do you integrate with third-party services?",
          answer:
            "Yes. We can connect CRMs, payment systems, communication tools, APIs, and other business platforms where needed.",
        },
        {
          question: "Can custom software grow over time?",
          answer:
            "Yes. We plan software architecture to support feature expansion, new user roles, and future workflow changes.",
        },
      ]}
    />
  );
}
