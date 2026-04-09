import { ServiceDetailPage } from "@/app/components/service-detail-page";

export default function GenAIAgentsPage() {
  return (
    <ServiceDetailPage
      eyebrow="Gen AI Agent Development"
      title="Gen AI Agents"
      description="Custom AI agent development, intelligent automation, AI chatbots, workflow assistants, and business process automation for modern teams."
      intro="Our Gen AI agent service helps businesses use artificial intelligence in practical ways, from lead qualification and support automation to internal productivity and workflow orchestration. We focus on useful AI systems that fit business operations, not gimmicky demos."
      sectionTitle="AI agents built for automation, support, efficiency, and smarter digital operations"
      sectionDescription="Generative AI can improve customer communication, internal workflow speed, content handling, and data-driven support when implemented with the right structure. DigiPaddles designs AI agents that fit clearly defined business roles, integrate with workflows, and deliver measurable value."
      offerings={[
        "Custom AI chatbot development for lead capture, customer support, and conversational experiences.",
        "AI workflow automation for repetitive tasks, routing, summaries, and operational support.",
        "Knowledge-based AI assistants trained around business information, SOPs, and service data.",
        "Internal AI copilots for team productivity, content support, and structured task assistance.",
        "Integration of AI agents with websites, dashboards, forms, CRM workflows, and business systems.",
        "Conversation design, prompt strategy, fallback logic, and practical AI implementation planning.",
      ]}
      keywords={[
        "AI Agent Development",
        "Custom AI Chatbots",
        "Business Automation",
        "Intelligent Workflows",
        "Generative AI Solutions",
      ]}
      stats={[
        { value: "Useful", label: "AI implementations focused on business tasks that actually save time or improve service." },
        { value: "Integrated", label: "Agents connected to your website, workflows, and business systems where needed." },
        { value: "Structured", label: "Clear use cases, guardrails, and conversation logic for more reliable results." },
      ]}
      benefits={[
        "Faster response handling for customer inquiries, support flows, and lead qualification.",
        "Reduced manual workload through automation of repetitive content and workflow tasks.",
        "Practical AI adoption with clearer use cases, safer structure, and business-specific logic.",
        "A stronger foundation for future automation, team productivity, and intelligent digital experiences.",
      ]}
      process={[
        {
          title: "Use-case discovery",
          description:
            "We identify the business tasks where AI can create the most practical value, from support to internal operations.",
        },
        {
          title: "Agent design",
          description:
            "We shape prompts, flows, guardrails, business rules, and data access patterns around the selected use cases.",
        },
        {
          title: "Integration and testing",
          description:
            "We connect the AI agent with the right interfaces and validate how it performs in realistic scenarios.",
        },
        {
          title: "Launch and refinement",
          description:
            "We review outputs, improve the workflow, and strengthen the system based on usage patterns and business needs.",
        },
      ]}
      industries={[
        "Service businesses that want AI chatbots for inquiries, lead capture, and customer support.",
        "Operations-heavy teams that want to automate repetitive tasks and internal coordination.",
        "Growing companies exploring AI-powered workflow assistants and knowledge-based support tools.",
        "Brands that want a practical AI implementation partner with both product and business perspective.",
      ]}
      outcomes={[
        "Faster handling of repetitive business tasks through AI-powered workflow support and automation.",
        "Improved customer interaction through conversational systems that answer, route, and qualify inquiries.",
        "Stronger internal productivity through AI assistants that reduce manual searching, drafting, and coordination.",
        "A more intentional AI roadmap built around use-case clarity instead of trend-chasing.",
      ]}
      faqs={[
        {
          question: "What can a Gen AI agent do for a business?",
          answer:
            "A Gen AI agent can help with lead capture, support conversations, internal assistance, information retrieval, summaries, and workflow automation depending on the setup.",
        },
        {
          question: "Do you build AI chatbots for websites?",
          answer:
            "Yes. We can build custom AI chatbots and assistant experiences for websites, portals, and internal tools.",
        },
        {
          question: "Can AI agents connect with our current tools?",
          answer:
            "Yes. When appropriate, we can integrate AI agents with forms, CRMs, dashboards, and other business systems.",
        },
        {
          question: "How do you keep the AI implementation practical?",
          answer:
            "We start with clearly defined use cases, establish response logic and guardrails, and align the system with specific business outcomes.",
        },
      ]}
    />
  );
}
