import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  LineChart,
  Rocket,
  Target,
} from "lucide-react";

type Stat = {
  label: string;
  value: string;
};

type ProcessStep = {
  title: string;
  description: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type ServiceDetailPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  sectionTitle: string;
  sectionDescription: string;
  offerings: string[];
  keywords: string[];
  stats: Stat[];
  benefits: string[];
  process: ProcessStep[];
  industries: string[];
  outcomes: string[];
  faqs: FaqItem[];
};

export function ServiceDetailPage({
  eyebrow,
  title,
  description,
  intro,
  sectionTitle,
  sectionDescription,
  offerings,
  keywords,
  stats,
  benefits,
  process,
  industries,
  outcomes,
  faqs,
}: ServiceDetailPageProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="relative overflow-hidden bg-[#080808] px-[6%] pb-24 pt-36 text-white">
        <div className="absolute inset-0">
          <div className="absolute right-[-120px] top-[-120px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,_rgba(244,81,30,0.24),_transparent_72%)] blur-[70px]" />
          <div className="absolute bottom-[-100px] left-[8%] h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,_rgba(255,122,69,0.14),_transparent_72%)] blur-[70px]" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-4 text-[0.72rem] font-extrabold uppercase tracking-[0.22em] text-[#F4511E]">
              {eyebrow}
            </p>
            <h1 className="max-w-4xl text-[clamp(2.8rem,5vw,4.8rem)] font-black leading-[1.02]">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-[1.9] text-white/74">
              {description}
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/60">
              {intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.08em] text-white/78"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[20px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-[10px]"
              >
                <div className="text-3xl font-black text-[#F4511E]">
                  {stat.value}
                </div>
                <p className="mt-2 text-sm leading-6 text-white/68">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-[6%] py-18">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="mb-4 text-[0.72rem] font-extrabold uppercase tracking-[0.2em] text-[#F4511E]">
              Strategic Overview
            </p>
            <h2 className="text-[clamp(2rem,3.6vw,3.3rem)] font-black leading-[1.08]">
              {sectionTitle}
            </h2>
            <p className="mt-5 text-base leading-8 text-[#6B6B6B]">
              {sectionDescription}
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <article
                key={benefit}
                className="rounded-[22px] border border-black/8 bg-[#FAF8F3] p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#F4511E]/10">
                  <Target className="h-5 w-5 text-[#F4511E]" />
                </div>
                <p className="text-sm leading-7 text-[#111111]">{benefit}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F4F0] px-[6%] py-18">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-[0.72rem] font-extrabold uppercase tracking-[0.2em] text-[#F4511E]">
              Core Deliverables
            </p>
            <h2 className="text-[clamp(2rem,3.5vw,3.1rem)] font-black">
              What we include in this service
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {offerings.map((item) => (
              <article
                key={item}
                className="rounded-[22px] border border-black/8 bg-white p-7 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
              >
                <CheckCircle2 className="h-6 w-6 text-[#F4511E]" />
                <p className="mt-4 text-base leading-8 text-[#111111]">
                  {item}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-[6%] py-18">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-[0.72rem] font-extrabold uppercase tracking-[0.2em] text-[#F4511E]">
              Delivery Process
            </p>
            <h2 className="text-[clamp(2rem,3.5vw,3.1rem)] font-black">
              How DigiPaddles moves the work forward
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {process.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[22px] border border-black/8 bg-[#FAF8F3] p-7"
              >
                <div className="text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-[#F4511E]">
                  Step {index + 1}
                </div>
                <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#6B6B6B]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#080808] px-[6%] py-18 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="mb-4 text-[0.72rem] font-extrabold uppercase tracking-[0.2em] text-[#F4511E]">
              Business Impact
            </p>
            <h2 className="text-[clamp(2rem,3.5vw,3.1rem)] font-black leading-[1.08]">
              Outcomes that support visibility, conversion, and long-term growth
            </h2>
            <div className="mt-6 space-y-5">
              {outcomes.map((outcome) => (
                <div key={outcome} className="flex items-start gap-3">
                  <LineChart className="mt-1 h-5 w-5 shrink-0 text-[#F4511E]" />
                  <p className="text-sm leading-7 text-white/72">{outcome}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-[0.72rem] font-extrabold uppercase tracking-[0.2em] text-[#F4511E]">
              Ideal Fit
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {industries.map((industry) => (
                <article
                  key={industry}
                  className="rounded-[20px] border border-white/10 bg-white/[0.04] p-6"
                >
                  <Rocket className="h-5 w-5 text-[#F4511E]" />
                  <p className="mt-4 text-sm leading-7 text-white/74">
                    {industry}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF8F3] px-[6%] py-18">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-[0.72rem] font-extrabold uppercase tracking-[0.2em] text-[#F4511E]">
              FAQ
            </p>
            <h2 className="text-[clamp(2rem,3.5vw,3.1rem)] font-black">
              Common questions about this service
            </h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-[22px] border border-black/8 bg-white p-7"
              >
                <h3 className="text-lg font-bold leading-8 text-[#111111]">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#6B6B6B]">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(135deg,#F4511E,#D93E10)] px-[6%] py-20 text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-8 rounded-[28px] border border-white/10 bg-white/[0.05] p-10 backdrop-blur-[8px]">
          <div className="max-w-3xl">
            <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.2em] text-white/70">
              Ready To Talk?
            </p>
            <h3 className="mt-4 text-[clamp(2rem,3.2vw,3rem)] font-black leading-[1.08] text-black">
              Ready to build this with us?
            </h3>
            <p className="mt-4 max-w-2xl text-white/88">
              We combine strategy, design, development, and AI implementation to
              deliver work that feels polished, search-friendly, and practical
              for real business growth.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded bg-white px-8 py-4 text-sm font-extrabold uppercase tracking-[0.07em] !text-[#080808] shadow-[0_14px_34px_rgba(8,8,8,0.14)] transition-all hover:-translate-y-0.5 hover:bg-[#fff4ef] hover:!text-[#F4511E]"
          >
            <span className="!text-inherit">Start Your Project</span>
            <ArrowRight className="h-5 w-5 !text-inherit" />
          </Link>
        </div>
      </section>

      <section className="bg-white px-[6%] py-12">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 rounded-[24px] border border-black/8 bg-[#FAF8F3] p-8">
          <div>
            <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-[#F4511E]">
              Next Step
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#6B6B6B]">
              Want a proposal, scope estimate, or roadmap for your project?
              Share your goals and we will recommend the best direction.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.07em] text-[#F4511E]"
          >
            Talk to DigiPaddles <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
