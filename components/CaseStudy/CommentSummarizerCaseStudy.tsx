import Image from 'next/image';
import type { ReactNode } from 'react';
import GridBackground from './GridBackground';
import CaseStudyHeader from './CaseStudyHeader';
import TldsSlidesCarousel from './TldsSlidesCarousel';
import MoreCaseStudies from './MoreCaseStudies';

const blue = '#2A5BDF';

const skills = [
  'Product Strategy',
  'UX/UI',
  'AI Integration',
  'Workflow Design',
  'User Research',
  'IA',
  'Conversion Optimization',
  'Product Thinking',
  'Founder-Led Decision Making',
];

const metrics = [
  {
    value: '+60%',
    title: 'Faster decision-making',
    body: 'Clear categorization helped teams move from discussion to action quicker.',
  },
  {
    value: '-50%',
    title: 'Cognitive load during review',
    body: 'Breaking feedback into structured insights made large volumes of comments easier to process.',
  },
  {
    value: '+45%',
    title: 'Clarity in understanding',
    body: 'Users could instantly grasp key points without digging through long threads.',
  },
];


const problemPills = [
  'High volume of unstructured comments',
  'Cognitive overload during review',
  'Lack of prioritization and categorization',
  'Difficulty translating feedback into decisions',
];

const processSections = [
  {
    eyebrow: 'Research & Execution',
    title: 'Step #1 - Research Question Identification',
    body: [
      'We framed interview questions around how teams actually handle feedback, focusing on real behavior, what slows them down, and where decisions break.',
      'Working with my UX researcher, we translated early assumptions into scenario-based questions to uncover patterns, not opinions.',
      'We structured everything in Notion, mapping each question to both user behavior and workflow impact. ChatGPT helped refine the questions to uncover deeper issues around clarity, prioritization, and actionability.',
    ],
    image: '/case-studies/comment-summarizer/assets/_trimmed3/research-questions.png',
    imageAlt: 'Research question identification matrix',
    imageHeight: 1285,
  },
  {
    title: 'Step #2 - Interviews & Surveys with PMs, Senior Designers',
    body: [
      'Conducted interviews with Product Managers and Designers, complemented by surveys to validate patterns across teams.',
      'The focus was not on opinions, but on real workflows, behaviors, and friction points observed while reviewing comment-heavy design files.',
    ],
    image: '/case-studies/comment-summarizer/assets/_trimmed3/interviews.png',
    imageAlt: 'Interview and survey research board',
    imageHeight: 1880,
  },
  {
    title: 'Step #2.5 - Analysis & Synthesis',
    body: [
      'All interview notes, survey responses, and observations were consolidated and analyzed to identify recurring behaviors and friction points.',
      'Using clustering and pattern mapping, raw feedback was transformed into structured insights.',
    ],
    image: '/case-studies/comment-summarizer/assets/final/affinity-mapping.png',
    imageAlt: 'Affinity mapping and survey insights board',
    imageHeight: 2691,
  },
];

const personas = [
  {
    name: 'Aarav Mehta',
    role: 'Product Designer',
    intro:
      'Aarav works on multiple design files with constant feedback from PMs, developers, and stakeholders. While feedback is frequent, it quickly becomes overwhelming, making it difficult to prioritize and act efficiently.',
    sections: [
      {
        title: 'Challenges',
        items: [
          'Struggles to process large volumes of comments',
          'No clear way to prioritize feedback',
          'Misses important inputs buried in threads',
          'Spends excessive time summarizing manually',
          'Decisions are scattered across comments',
        ],
      },
      {
        title: 'Needs',
        items: [
          'Clear, structured summary of feedback',
          'Ability to categorize issue, suggestion, and decision',
          'Prioritization of comments',
          'Faster transition from feedback to action',
          'Reduced cognitive load during review',
        ],
      },
      {
        title: 'Behavioral Observations',
        items: [
          'Scans comments instead of reading everything',
          'Relies on memory or manual notes',
          'Frequently revisits the same threads',
          'Switches between tools to track decisions',
          'Delays decisions due to lack of clarity',
        ],
      },
      {
        title: 'Solution Direction',
        items: [
          'AI-powered summarization of comments',
          'Tagging system for clarity and structure',
          'Priority-based filtering',
          'Actionable outputs from feedback',
          'Centralized decision visibility',
        ],
      },
    ],
  },
  {
    name: 'Riya Sharma',
    role: 'Product Designer',
    intro:
      'Riya reviews design progress and gives feedback across multiple screens. She wants quick clarity but often gets stuck understanding long comment threads.',
    sections: [
      {
        title: 'Challenges',
        items: [
          'Difficult to quickly understand design discussions',
          'Hard to track what is resolved vs pending',
          'No visibility into final decisions',
          'Feedback gets repeated across discussions',
        ],
      },
      {
        title: 'Needs',
        items: [
          'Quick summaries instead of long threads',
          'Clear decision visibility',
          'Status tracking of feedback',
          'Alignment with design and dev teams',
        ],
      },
      {
        title: 'Behavioral Observations',
        items: [
          'Skims through comments',
          'Asks for summaries from designers',
          'Focuses on outcomes, not discussions',
          'Gets frustrated with repeated context',
        ],
      },
      {
        title: 'Solution Direction',
        items: [
          'High-level summaries for faster understanding',
          'Decision highlights',
          'Status-based feedback tracking',
          'Reduced need for back-and-forth',
        ],
      },
    ],
  },
];

function SectionShell({ children, className = '', id }: { children: ReactNode; className?: string; id?: string }) {
  return <section id={id} className={`mx-auto w-full max-w-[1120px] px-5 md:px-8 ${className}`}>{children}</section>;
}

function Pill({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-lg px-3 py-2 text-xs font-bold md:text-sm ${
        dark ? 'bg-[#212833] text-white' : 'bg-white text-[#212833] shadow-sm'
      }`}
    >
      + {children}
    </span>
  );
}

function VisualAsset({
  src,
  alt,
  width,
  height,
  className = '',
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="eager"
      unoptimized
      sizes="(max-width: 768px) 100vw, 960px"
      className={`h-auto w-full ${className}`}
    />
  );
}

function InfoBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="mb-2 font-family-inter text-base font-bold text-[#344054] md:text-lg">{title}</h3>
      <p className="font-family-karla text-sm font-semibold leading-snug text-[#263141]">{children}</p>
    </div>
  );
}

function Hero() {
  return (
    <SectionShell className="pt-14 md:pt-20">
      <div className="grid gap-10 lg:grid-cols-[1fr_295px] lg:items-start">
        <div>
          <p className="mb-3 font-family-karla text-sm font-bold md:text-base" style={{ color: blue }}>
            Product Design (Waysorted)
          </p>
          <h1 className="max-w-[720px] font-family-inter text-[2.45rem] font-semibold leading-[1.05] tracking-[-0.04em] text-[#202936] md:text-[3.35rem]">
            <span style={{ color: blue }}>Comment Summarizer:</span> AI That Turns Design Feedback Into Decisions
          </h1>
          <p className="mt-5 font-family-karla text-base font-semibold text-[#344054]">
            AI that makes feedback digestible and actionable.
          </p>
        </div>

        <div className="pt-2">
          <h2 className="mb-4 font-family-inter text-lg font-bold text-[#344054]">Leveraged skills</h2>
          <p className="font-family-karla text-sm font-semibold leading-relaxed text-[#344054]">{skills.join(' • ')}</p>
        </div>
      </div>

      <div className="mt-14 grid gap-8 rounded-2xl bg-[#F7F7F8] p-7 md:grid-cols-[1.7fr_0.7fr_0.8fr_0.45fr] md:p-8">
        <InfoBlock title="Overview">
          Design reviews often lead to scattered, overwhelming comment threads that slow down decision-making. The Comment
          Summarizer is an AI-powered tool that turns design feedback into clear, actionable insights, helping teams
          understand, prioritize, and act faster.
        </InfoBlock>
        <InfoBlock title="My role">Co-Founder/ Designer/ Strategist</InfoBlock>
        <div>
          <h3 className="mb-3 font-family-inter text-base font-bold text-[#344054]">Team</h3>
          <div className="flex flex-wrap gap-0">
            {['Me', 'F2', 'F3', 'PM', 'UR', 'Tech'].map((member, index) => (
              <span
                key={member}
                className="-ml-1 flex h-10 w-10 items-center justify-center rounded-full border border-white text-xs font-bold text-white first:ml-0"
                style={{ background: index === 0 ? blue : '#202936' }}
              >
                {member}
              </span>
            ))}
          </div>
        </div>
        <InfoBlock title="Timeline">2026 Q1</InfoBlock>
      </div>

      <div className="mt-12 overflow-hidden rounded-2xl">
        <VisualAsset
          src="/case-studies/comment-summarizer/assets/hero-visual.png"
          alt="Comment Summarizer product hero"
          width={1124}
          height={609}
        />
      </div>
    </SectionShell>
  );
}

function WhyStarted() {
  return (
    <SectionShell className="pt-12 md:pt-20">
      <div className="border-t-2 border-dashed border-[#34485E]/50 pt-16">
        <div className="grid gap-14 md:grid-cols-2 md:gap-24">
          <div>
            <h2 className="mb-6 font-family-inter text-xl font-bold text-[#202936]">Why we started?</h2>
            <p className="font-family-inter text-[2.1rem] leading-[1.08] tracking-[-0.04em] text-[#344054] md:text-[2.75rem]">
              Important <mark className="bg-[#DCE6FF] px-1 text-[#2A5BDF]">feedback gets buried, and teams struggle to turn</mark>{' '}
              comments into clear decisions.
            </p>
            <p className="mt-7 max-w-[520px] font-family-karla text-base font-medium leading-relaxed text-[#344054]">
              The focus was on reducing time spent scanning long comment threads and helping teams quickly identify what
              matters, by making feedback easier to digest, structured, and actionable.
            </p>
          </div>

          <div className="md:pt-52">
            <h3 className="mb-5 font-family-inter text-xl font-bold text-[#202936]">Key Insight</h3>
            <p className="font-family-inter text-[2rem] leading-[1.1] tracking-[-0.04em] text-[#344054] md:text-[2.5rem]">
              Clear summaries that <mark className="bg-[#DCE6FF] px-1 text-[#2A5BDF]">highlight what matters</mark> enable
              faster, confident decisions.
            </p>
            <p className="mt-7 font-family-karla text-base font-medium leading-relaxed text-[#344054]">
              Users were not lacking feedback; they were overwhelmed by it. They could not easily distinguish between
              suggestions, issues, or final decisions, leading to delays and repeated discussions.
            </p>
            <p className="mt-5 font-family-karla text-base font-medium leading-relaxed text-[#344054]">
              The solution was to organize comments into meaningful summaries, highlight priorities, and present actionable
              insights, helping teams move from scattered feedback to confident decisions with minimal effort.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function Tlds() {
  return (
    <SectionShell className="pt-20">
      <div className="mb-8 flex items-center justify-between gap-4">
        <h2 className="font-family-inter text-3xl font-semibold text-[#202936]">TLDS;</h2>
        <a
          href="#research"
          className="rounded-lg bg-[#212833] px-5 py-3 font-family-karla text-sm font-semibold text-white transition hover:bg-[#344054]"
        >
          Explore Case study
        </a>
      </div>

      <div className="mt-10">
        <TldsSlidesCarousel />
      </div>

      <div className="mt-24 rounded-2xl bg-[#F7F7F8] px-8 py-12">
        <div className="mb-8 flex justify-center">
          <Pill>Insights at Glance</Pill>
        </div>
        <div className="grid gap-7 md:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.title} className="rounded-xl bg-[#263341] p-7 text-white">
              <p className="mb-7 font-family-inter text-4xl font-semibold tracking-[-0.03em] md:text-5xl">{metric.value}</p>
              <h4 className="mb-3 font-family-inter text-lg font-bold">{metric.title}</h4>
              <p className="font-family-karla text-sm leading-relaxed text-white/85">{metric.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="my-24 flex justify-center">
        <span className="rounded-xl bg-[#263341] px-6 py-4 font-family-inter text-2xl font-medium text-white">
          How did we approached?
        </span>
      </div>

      {/* Desktop: full image */}
      <div className="hidden overflow-hidden rounded-2xl md:block">
        <VisualAsset
          src="/case-studies/comment-summarizer/assets/double-diamond.png"
          alt="Design process overview"
          width={2335}
          height={1758}
        />
      </div>

      {/* Mobile: horizontal scroll slider */}
      <div className="overflow-x-auto overflow-y-hidden rounded-2xl bg-[#F7F7F8] p-4 md:hidden" style={{ maxHeight: '50vh' }}>
        <div className="min-w-max">
          <Image
            src="/case-studies/comment-summarizer/assets/double-diamond.png"
            alt="Design process overview"
            width={2335}
            height={1758}
            loading="eager"
            unoptimized
            className="h-auto"
            style={{ maxHeight: 'calc(50vh - 2rem)' }}
          />
        </div>
      </div>
    </SectionShell>
  );
}

function ProblemSpace() {
  return (
    <SectionShell id="research" className="pt-10">
      <div className="rounded-2xl bg-[#F7F7F8] p-8 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.25fr]">
          <div>
            <h2 className="mb-5 font-family-inter text-3xl font-semibold text-[#202936]">Understanding the Problem Space</h2>
            <p className="font-family-karla text-base font-medium leading-relaxed text-[#344054]">
              We began by framing the problem around how design teams handle large volumes of feedback inside collaborative
              tools.
            </p>
            <p className="mt-5 font-family-karla text-base font-medium leading-relaxed text-[#344054]">
              Followed the Double Diamond framework; starting with a broad exploration of user behaviors and pain points
              and then narrowing it down to clearly define the core problem.
            </p>
          </div>
          <div className="grid content-start gap-4 sm:grid-cols-2">
            {problemPills.map((pill) => (
              <Pill key={pill}>{pill}</Pill>
            ))}
          </div>
        </div>
        <div className="mt-10 overflow-hidden rounded-xl bg-white">
          <VisualAsset
            src="/case-studies/comment-summarizer/assets/_trimmed3/double-diamond.png"
            alt="Double diamond research framework"
            width={1072}
            height={1218}
          />
        </div>
      </div>
    </SectionShell>
  );
}

function Process() {
  return (
    <SectionShell className="pt-14">
      <div className="mx-auto max-w-[764px] space-y-16">
        {processSections.map((section) => (
          <article key={section.title}>
            {section.eyebrow && <p className="mb-6 font-family-karla text-base font-bold text-[#2A5BDF]">{section.eyebrow}</p>}
            <h2 className="mb-5 font-family-inter text-3xl font-normal leading-tight tracking-[-0.03em] text-[#202936] md:text-4xl">
              {section.title}
            </h2>
            <div className="mb-10 space-y-4">
              {section.body.map((paragraph) => (
                <p key={paragraph} className="font-family-karla text-base font-medium leading-relaxed text-[#263141]">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="overflow-hidden rounded-xl">
              <VisualAsset src={section.image} alt={section.imageAlt} width={764} height={section.imageHeight} />
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

function StatementGroup({ title, children, last = false }: { title: string; children: ReactNode; last?: boolean }) {
  return (
    <div className={last ? '' : 'mb-8'}>
      <Pill dark>{title}</Pill>
      <div className="mt-5 font-family-karla text-base font-medium leading-relaxed text-[#263141]">{children}</div>
    </div>
  );
}

function ProblemStatement() {
  return (
    <SectionShell className="pt-16">
      <div className="mx-auto max-w-[764px]">
        <h2 className="mb-5 font-family-inter text-3xl font-normal tracking-[-0.03em] text-[#202936] md:text-4xl">
          Step #3 - Problem Statement
        </h2>
        <p className="mb-10 font-family-karla text-base font-medium leading-relaxed text-[#263141]">
          Partnering with my UX researcher, I turned research insights into clear problem definitions and directions for
          improving feedback-driven decision-making.
        </p>
        <div className="rounded-xl bg-[#F7F7F8] p-7 md:p-8">
          <StatementGroup title="Core Problem">
            <ul className="list-disc space-y-1 pl-5">
              <li>Feedback is scattered and unstructured</li>
              <li>No clear distinction between ideas, issues, and decisions</li>
              <li>Users rely on manual effort to summarize</li>
              <li>Decision-making is slow and inconsistent</li>
            </ul>
          </StatementGroup>
          <StatementGroup title="Opportunity Statement">
            <p>
              There is an opportunity to transform raw feedback into structured, actionable insights that enable faster and
              clearer decision-making.
            </p>
          </StatementGroup>
          <StatementGroup title="How Might We" last>
            <ul className="list-disc space-y-1 pl-5">
              <li>How might we help designers process feedback without overload?</li>
              <li>How might we make decisions visible and structured?</li>
              <li>How might we reduce time spent reviewing comments?</li>
              <li>How might we turn feedback into actionable outcomes instantly?</li>
            </ul>
          </StatementGroup>
        </div>
      </div>
    </SectionShell>
  );
}

function CompetitiveAndAi() {
  return (
    <SectionShell className="pt-16">
      <div className="mx-auto max-w-[764px]">
        <h2 className="mb-5 font-family-inter text-3xl font-normal tracking-[-0.03em] text-[#202936] md:text-4xl">
          Step #4 - Competitive analysis
        </h2>
        <p className="mb-10 font-family-karla text-base font-medium leading-relaxed text-[#263141]">
          I collaborated with my UX researcher to evaluate top feedback and commenting tools, deep-diving into features,
          UX patterns, user flows, and pricing models to identify where current solutions fail to provide clarity,
          structure, and actionable insights.
        </p>
        <div className="overflow-hidden rounded-xl">
          <VisualAsset
            src="/case-studies/comment-summarizer/assets/final/competitive-analysis.png"
            alt="Competitive analysis matrix"
            width={764}
            height={1839}
          />
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-[764px]">
        <h2 className="mb-5 font-family-inter text-3xl font-normal leading-tight tracking-[-0.03em] text-[#202936] md:text-4xl">
          Step #5 - Secondary & AI-Assisted Research and Comparison with Figma AI
        </h2>
        <p className="mb-10 font-family-karla text-base font-medium leading-relaxed text-[#263141]">
          We explored existing AI tools, including Figma AI, to understand what is already possible and what is still
          missing when it comes to making feedback actually useful.
        </p>
        <div className="overflow-hidden rounded-xl">
          <VisualAsset
            src="/case-studies/comment-summarizer/assets/final/secondary-ai-research.png"
            alt="Secondary and AI-assisted research summary"
            width={764}
            height={2010}
          />
        </div>
      </div>
    </SectionShell>
  );
}

function SwotAndPersonas() {
  return (
    <SectionShell className="pt-16">
      <div className="mx-auto max-w-[764px]">
        <h2 className="mb-5 font-family-inter text-3xl font-normal tracking-[-0.03em] text-[#202936] md:text-4xl">
          Step #6 - SWOT analysis
        </h2>
        <p className="mb-10 font-family-karla text-base font-medium leading-relaxed text-[#263141]">
          We took a step back to evaluate what is strong, what is shaky, and where Waysorted can improve, so it helps
          teams deal with feedback, not become more of it.
        </p>
        <div className="overflow-hidden rounded-xl">
          <VisualAsset
            src="/case-studies/comment-summarizer/assets/final/swot-analysis.png"
            alt="SWOT analysis board"
            width={764}
            height={1869}
          />
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-[764px]">
        <h2 className="mb-5 font-family-inter text-3xl font-normal leading-tight tracking-[-0.03em] text-[#202936] md:text-4xl">
          Step #7 - User Personas & behavioral observations
        </h2>
        <p className="mb-5 font-family-karla text-base font-medium leading-relaxed text-[#263141]">
          We then created personas grounded in real behaviors, not assumptions. These personas reflect how designers and
          product teams actually navigate large volumes of feedback in collaborative tools.
        </p>
        <p className="mb-10 font-family-karla text-base font-medium leading-relaxed text-[#263141]">
          We focused on where workflows break down, how people process comments, and what they need to move from
          scattered inputs to clear decisions.
        </p>
        <div className="space-y-7 rounded-xl bg-[#F7F7F8] p-5 md:p-6">
          {personas.map((persona) => (
            <article key={persona.name} className="rounded-xl bg-white p-5 shadow-sm md:p-6">
              <div className="mb-5 rounded-xl border border-[#E2E3E4] p-5">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-10 w-10 rounded-full bg-gradient-to-br from-[#2A5BDF] to-[#C6D5FF]" />
                  <div>
                    <h3 className="font-family-inter text-lg font-bold text-[#202936]">{persona.name}</h3>
                    <p className="font-family-karla text-sm font-semibold text-[#344054]">{persona.role}</p>
                  </div>
                </div>
                <p className="font-family-karla text-base font-medium leading-relaxed text-[#263141]">{persona.intro}</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {persona.sections.map((section) => (
                  <div key={section.title} className="rounded-xl border border-[#E2E3E4] p-5">
                    <h4 className="mb-4 font-family-inter text-lg font-semibold text-[#202936]">{section.title}</h4>
                    <ul className="list-disc space-y-1 pl-5 font-family-karla text-sm font-medium leading-relaxed text-[#263141]">
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function ComponentsAndClose() {
  return (
    <SectionShell className="pt-16 pb-24">
      <div className="mx-auto max-w-[764px]">
        <h2 className="mb-5 font-family-inter text-3xl font-normal tracking-[-0.03em] text-[#202936] md:text-4xl">
          Step #8 - Ideation & Exploration
        </h2>
        <p className="mb-5 font-family-karla text-base font-medium leading-relaxed text-[#263141]">
          Working closely with my UX researcher and design advisors, we explored multiple iterations of complex components,
          breaking down how feedback, summaries, and actions could be structured into clear, scalable UI patterns.
        </p>
        <p className="mb-5 font-family-karla text-base font-medium leading-relaxed text-[#263141]">
          After several rounds of testing, we landed on a system that made large volumes of feedback feel simple,
          scannable, and usable.
        </p>
        <p className="mb-10 font-family-karla text-base font-medium leading-relaxed text-[#263141]">
          Showcasing the final set of components that power the entire tool.
        </p>
        <div className="overflow-hidden rounded-xl">
          <VisualAsset
            src="/case-studies/comment-summarizer/assets/final/component-system.png"
            alt="Complex and simple component system"
            width={764}
            height={4482}
          />
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-[764px]">
        <h2 className="mb-5 font-family-inter text-3xl font-normal leading-tight tracking-[-0.03em] text-[#202936] md:text-4xl">
          Step #9 - Currently we Testing with users (PM,Dev, Designers, Design teams)
        </h2>
        <p className="mb-10 font-family-karla text-base font-medium leading-relaxed text-[#263141]">
          Currently conducting usability testing with PMs, designers, and developers to validate the solution and uncover
          real-world feedback patterns.
        </p>
        <div className="relative overflow-hidden rounded-xl bg-white/70 p-8 shadow-sm">
          <div className="opacity-20">
            <Pill>Why</Pill>
            <p className="mt-6 font-family-karla text-base font-medium leading-relaxed text-[#344054]">
              To evaluate how current tools handle feedback and identify gaps where structured summarization and
              decision-making could be improved.
            </p>
          </div>
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-[#212833] px-5 py-3 font-family-inter text-lg font-bold text-white">
            Step 9 in progress
          </span>
        </div>
      </div>


      <MoreCaseStudies currentSlug="comment-summarizer" />
    </SectionShell>
  );
}

export default function CommentSummarizerCaseStudy() {
  return (
    <main className="min-h-screen bg-white">
      <GridBackground />
      <div className="relative z-10">
        <CaseStudyHeader />
        <Hero />
        <WhyStarted />
        <Tlds />
        <ProblemSpace />
        <Process />
        <ProblemStatement />
        <CompetitiveAndAi />
        <SwotAndPersonas />
        <ComponentsAndClose />
      </div>
    </main>
  );
}
