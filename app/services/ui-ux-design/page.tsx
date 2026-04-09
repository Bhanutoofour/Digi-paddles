import { ServiceDetailPage } from "@/app/components/service-detail-page";

export default function UIUXDesignPage() {
  return (
    <ServiceDetailPage
      eyebrow="UI/UX Design Services"
      title="UI/UX Design"
      description="UI/UX design services for websites, apps, dashboards, and digital products that need intuitive flows, polished visuals, and conversion-focused user experience."
      intro="Our UI/UX design service helps businesses create clear, modern digital experiences that are easier to use and easier to trust. From information architecture to final interface design, we focus on usability, brand alignment, and journey clarity."
      sectionTitle="User experience design that improves clarity, usability, and visual trust"
      sectionDescription="Strong UI/UX design is a business tool, not only a visual layer. Better user journeys reduce friction, help users understand the product faster, and improve the likelihood of conversion. DigiPaddles designs interfaces that look polished while supporting product goals, user behavior, and scalable design systems."
      offerings={[
        "UX audits, journey mapping, and interface reviews to identify friction and improve usability.",
        "Wireframes, low-fidelity planning, and user flow design for websites, apps, and product screens.",
        "High-fidelity UI design with strong typography, visual hierarchy, and component consistency.",
        "Interactive prototypes for stakeholder alignment, testing, and smoother development handoff.",
        "Design systems, reusable UI patterns, and interface rules for scalable product growth.",
        "Conversion-focused interface design for landing pages, dashboards, portals, and service websites.",
      ]}
      keywords={[
        "UI UX Design",
        "User Experience Design",
        "Website UI Design",
        "App Design Services",
        "Design Systems",
      ]}
      stats={[
        { value: "Clear", label: "Structured user journeys that reduce confusion and support action." },
        { value: "Polished", label: "High-quality interface design that improves credibility and perceived value." },
        { value: "Usable", label: "Design choices informed by hierarchy, flow, and real user behavior." },
      ]}
      benefits={[
        "Improved user journeys that help people navigate faster and complete key actions more confidently.",
        "A more consistent visual system across pages, screens, and product touchpoints.",
        "Higher perceived trust through cleaner layouts, stronger hierarchy, and professional design language.",
        "A smoother handoff into development with reusable patterns and clearer design decisions.",
      ]}
      process={[
        {
          title: "Research and UX review",
          description:
            "We examine user goals, current friction points, competitor patterns, and the actions your interface needs to support.",
        },
        {
          title: "Wireframes and structure",
          description:
            "We shape navigation, user flows, content hierarchy, and interaction priorities before the final visual layer.",
        },
        {
          title: "High-fidelity design",
          description:
            "We build polished interface designs with thoughtful spacing, typography, color use, and reusable component logic.",
        },
        {
          title: "Prototype and handoff",
          description:
            "We prepare prototypes, refinements, and implementation-ready direction so development is faster and more accurate.",
        },
      ]}
      industries={[
        "Startups designing new products, MVPs, SaaS dashboards, or early-stage platforms.",
        "Businesses redesigning outdated websites or customer-facing portals for better usability.",
        "Teams that need a clearer design system before scaling product or marketing experiences.",
        "Brands that want more polished, modern, and conversion-aware digital interfaces.",
      ]}
      outcomes={[
        "Better user flow clarity, helping visitors and users understand where to go and what to do next.",
        "Improved visual consistency across pages, states, and interface components.",
        "Stronger conversion potential through thoughtful hierarchy, interaction design, and CTA placement.",
        "A more credible digital experience that supports branding and customer trust.",
      ]}
      faqs={[
        {
          question: "Do you design only websites or also apps?",
          answer:
            "We design websites, dashboards, internal tools, portals, SaaS products, and mobile app experiences depending on the project scope.",
        },
        {
          question: "Can you redesign an existing interface?",
          answer:
            "Yes. We can audit an existing UI, identify usability issues, and redesign the experience to improve clarity and engagement.",
        },
        {
          question: "Do you create design systems?",
          answer:
            "Yes. We can define reusable UI components, spacing rules, visual standards, and interaction patterns to support long-term consistency.",
        },
        {
          question: "Will the designs be development-friendly?",
          answer:
            "Yes. We focus on clear structure and reusable patterns so design handoff is practical for implementation, not just visually appealing.",
        },
      ]}
    />
  );
}
