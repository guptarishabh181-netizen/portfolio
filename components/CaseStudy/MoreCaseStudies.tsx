'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { projects } from '@/data/index';
import { Project } from '@/types/index';

interface MoreCaseStudiesProps {
  currentSlug: string;
}

type CaseStudyCard = Pick<Project, 'id' | 'title' | 'description' | 'tags' | 'image'> & {
  href: string;
};

const featuredCaseStudyCards: Record<string, Partial<Pick<CaseStudyCard, 'title' | 'description' | 'tags'>>> = {
  '1': {
    title: 'Waysorted Platform',
    description:
      'A product workflow case study focused on making design feedback clearer, faster, and easier to act on.',
    tags: ['Design Strategy', 'UX Research', 'UI'],
  },
  '8': {
    title: 'Assentcode Website',
    description:
      'Assentcode Technologies: Revolutionize your business with AI-driven solutions, custom app development, and scalable cloud services.',
    tags: ['Design Strategy', 'UX Research', 'UI'],
  },
};

const caseStudyCardOrder = ['1', '8', '2', '3', '7'];

function getCaseStudyCards(currentSlug: string): CaseStudyCard[] {
  return projects
    .filter((project) => project.caseStudySlug !== currentSlug)
    .map((project) => ({
      id: project.id,
      title: featuredCaseStudyCards[project.id]?.title ?? project.title,
      description: featuredCaseStudyCards[project.id]?.description ?? project.description,
      tags: featuredCaseStudyCards[project.id]?.tags ?? project.tags,
      image: project.image,
      href: project.caseStudySlug ? `/case-study/${project.caseStudySlug}` : '/case-study/coming-soon',
    }))
    .filter((project) => Boolean(project.image))
    .sort((first, second) => {
      const firstIndex = caseStudyCardOrder.indexOf(first.id);
      const secondIndex = caseStudyCardOrder.indexOf(second.id);

      if (firstIndex === -1 && secondIndex === -1) {
        return Number(first.id) - Number(second.id);
      }

      if (firstIndex === -1) {
        return 1;
      }

      if (secondIndex === -1) {
        return -1;
      }

      return firstIndex - secondIndex;
    });
}

function shuffleCards(cards: CaseStudyCard[]) {
  const shuffled = [...cards];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const nextIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[nextIndex]] = [shuffled[nextIndex], shuffled[index]];
  }

  if (shuffled.length > 1 && shuffled[0].id === cards[0].id) {
    shuffled.push(shuffled.shift() as CaseStudyCard);
  }

  return shuffled;
}

function CardImage({ card }: { card: CaseStudyCard }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl bg-bg-gray">
      <Image
        src={card.image}
        alt={card.title}
        fill
        sizes="(max-width: 1024px) 100vw, 410px"
        className="object-cover"
      />
    </div>
  );
}

function Skills({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-border-2 bg-white px-3 py-1.5 font-family-karla text-xs font-medium text-primary-1"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export default function MoreCaseStudies({ currentSlug }: MoreCaseStudiesProps) {
  const [cards, setCards] = useState(() => getCaseStudyCards(currentSlug));
  const [isShuffling, setIsShuffling] = useState(false);
  const [shuffleCount, setShuffleCount] = useState(0);

  useEffect(() => {
    setCards(getCaseStudyCards(currentSlug));
  }, [currentSlug]);

  const visibleCards = cards.slice(0, 3);
  const frontCard = visibleCards[0];
  const backCards = visibleCards.slice(1);

  if (!frontCard) {
    return null;
  }

  const handleShuffle = () => {
    if (isShuffling || cards.length < 2) {
      return;
    }

    setIsShuffling(true);

    window.setTimeout(() => {
      setCards((currentCards) => shuffleCards(currentCards));
      setShuffleCount((count) => count + 1);
      setIsShuffling(false);
    }, 260);
  };

  return (
    <section className="mb-16">
      <div className="mx-auto mb-10 flex w-fit rounded-full border border-border-2 bg-white px-7 py-3">
        <span className="font-family-karla text-sm font-semibold tracking-[0.08em] text-primary-2">
          Thank you for watching!
        </span>
      </div>

      <h2 className="mb-12 text-center font-family-inter text-4xl font-semibold text-primary-1 md:text-5xl">
        More Case Studies
      </h2>

      <div className="relative mx-auto mb-7 min-h-[390px] w-full max-w-[957px] lg:min-h-[362px]">
        {backCards.map((card, index) => (
          <div
            key={`${card.id}-back-${shuffleCount}`}
            className="absolute hidden rounded-2xl border border-border-2 bg-white shadow-[0_18px_45px_rgba(33,40,51,0.06)] transition-all duration-500 lg:block"
            style={{
              inset: '0 auto auto 50%',
              height: 342,
              width: 937,
              transform: `translateX(-50%) translateY(${index * -16}px) scale(${0.98 - index * 0.02})`,
              opacity: 0.55 - index * 0.12,
              zIndex: 1 - index,
            }}
          />
        ))}

        <article
          key={`${frontCard.id}-${shuffleCount}`}
          className={`relative z-10 flex flex-col gap-6 rounded-2xl border border-border-2 bg-white p-4 shadow-[0_20px_52px_rgba(33,40,51,0.08)] transition-all duration-500 md:p-6 lg:h-[342px] lg:flex-row ${
            isShuffling ? 'translate-y-6 scale-[0.98] opacity-0' : 'translate-y-0 scale-100 opacity-100'
          }`}
        >
          <div className="h-56 w-full shrink-0 lg:h-[291px] lg:w-[410px]">
            <CardImage card={frontCard} />
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div>
              <h3 className="mb-3 font-family-inter text-2xl font-semibold leading-tight text-primary-1 md:text-3xl">
                {frontCard.title}
              </h3>
              <p className="mb-5 font-family-karla text-sm leading-relaxed text-primary-1">
                {frontCard.description}
              </p>
              <Link
                href={frontCard.href}
                className="inline-flex rounded-lg bg-box-1 px-5 py-2.5 font-family-karla text-sm font-medium text-white transition-colors duration-300 hover:bg-primary-1-hover"
              >
                View Case study
              </Link>
            </div>

            <div className="mt-6">
              <div className="mb-4 border-t border-dashed border-border-2" />
              <div className="flex flex-col gap-3 md:flex-row md:items-start">
                <h4 className="shrink-0 font-family-inter text-base font-semibold text-primary-1">
                  Leveraged skills
                </h4>
                <Skills tags={frontCard.tags} />
              </div>
            </div>
          </div>
        </article>
      </div>

      <div className="flex justify-center">
        <button
          type="button"
          onClick={handleShuffle}
          disabled={isShuffling || cards.length < 2}
          className="rounded-lg bg-box-1 px-6 py-3 font-family-karla text-sm font-medium text-white transition-all duration-300 hover:bg-primary-1-hover disabled:cursor-not-allowed disabled:opacity-50"
        >
          Shuffle
        </button>
      </div>
    </section>
  );
}
