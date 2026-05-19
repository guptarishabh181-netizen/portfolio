'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/index';

interface MoreCaseStudiesProps {
  currentSlug: string;
}

interface FooterCard {
  id: string;
  title: string;
  description: string;
  image: string;
  skills: string[];
  href: string;
}

const CASE_STUDY_IN_PROGRESS_HREF = '/case-study/coming-soon';
const FIGMA_MORE_CASE_STUDY_PROJECT_IDS = ['3', '4', '5', '6', '7', '8', '9', '10', '11'];

function shuffleCards(cards: FooterCard[]) {
  const nextCards = [...cards];

  for (let index = nextCards.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [nextCards[index], nextCards[swapIndex]] = [nextCards[swapIndex], nextCards[index]];
  }

  return nextCards;
}

export default function MoreCaseStudies({ currentSlug }: MoreCaseStudiesProps) {
  const allCards = projects
    .filter(
      project =>
        FIGMA_MORE_CASE_STUDY_PROJECT_IDS.includes(project.id) &&
        project.caseStudySlug !== currentSlug
    )
    .map<FooterCard>(project => ({
      id: project.id,
      title: project.title,
      description: project.description,
      image: project.image,
      skills: project.tags,
      href: CASE_STUDY_IN_PROGRESS_HREF,
    }));

  const [cardList, setCardList] = useState(allCards);
  const [isAnimating, setIsAnimating] = useState(false);

  const shuffleCaseStudies = () => {
    if (isAnimating || cardList.length < 2) return;

    setIsAnimating(true);

    window.setTimeout(() => {
      setCardList(previousCards => shuffleCards(previousCards));
      setIsAnimating(false);
    }, 460);
  };

  const currentCard = cardList[0];
  const nextCard = cardList[1] ?? cardList[0];
  const thirdCard = cardList[2] ?? cardList[0];

  return (
    <section className="mb-16 pt-8 md:pt-12">
      <h2 className="mb-10 text-center font-family-inter text-4xl font-semibold text-primary-1 md:mb-12 md:text-5xl">
        More Case Studies
      </h2>

      <div className="relative mx-auto mb-8 w-full max-w-[1008px] px-4 md:px-6">
        <div className="block lg:hidden">
          <MobileCard card={currentCard} isAnimating={isAnimating} />
        </div>

        <div className="relative hidden h-[388px] lg:block">
          <DesktopShadowCard
            card={thirdCard}
            className={isAnimating ? 'translate-y-0 rotate-[-2deg] opacity-40' : 'translate-y-1 rotate-[-2deg] opacity-55'}
            style={{
              left: '3%',
              right: '10%',
              top: '6px',
            }}
          />

          <DesktopShadowCard
            card={nextCard}
            className={
              isAnimating
                ? 'translate-y-4 rotate-[1.4deg] opacity-55'
                : 'translate-y-3 rotate-[1.2deg] opacity-75'
            }
            style={{
              left: '1.5%',
              right: '5.5%',
              top: '18px',
            }}
          />

          <DesktopFrontCard card={currentCard} isAnimating={isAnimating} />
        </div>
      </div>

      <div className="flex justify-center">
        <button
          type="button"
          onClick={shuffleCaseStudies}
          disabled={isAnimating}
          className="rounded-lg bg-box-1 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-primary-1-hover disabled:cursor-not-allowed disabled:opacity-60"
        >
          Shuffle
        </button>
      </div>
    </section>
  );
}

function MobileCard({ card, isAnimating }: { card: FooterCard; isAnimating: boolean }) {
  return (
    <article
      className={`rounded-[28px] border border-border-2 bg-white p-5 shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition-all duration-500 md:p-6 ${
        isAnimating ? 'translate-y-5 rotate-[1.5deg] opacity-0 scale-[0.98]' : 'translate-y-0 rotate-0 opacity-100 scale-100'
      }`}
    >
      <div className="grid gap-5">
        <CardImage card={card} imageClassName="h-[220px] md:h-[280px]" />
        <CardContent card={card} />
      </div>
    </article>
  );
}

function DesktopShadowCard({
  card,
  className,
  style,
}: {
  card: FooterCard;
  className: string;
  style: { left: string; right: string; top: string };
}) {
  return (
    <article
      className={`absolute rounded-[26px] border border-border-2 bg-white p-5 shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition-all duration-500 ${className}`}
      style={style}
    >
      <div className="grid grid-cols-[352px_minmax(0,1fr)] items-start gap-6">
        <CardImage card={card} imageClassName="h-[248px]" />
        <div className="pt-2">
          <h3 className="line-clamp-2 font-family-inter text-[22px] font-semibold leading-[1.08] text-primary-1">
            {card.title}
          </h3>
        </div>
      </div>
    </article>
  );
}

function DesktopFrontCard({ card, isAnimating }: { card: FooterCard; isAnimating: boolean }) {
  return (
    <article
      className={`absolute inset-x-0 top-[28px] rounded-[28px] border border-border-2 bg-white p-5 shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition-all duration-500 ${
        isAnimating
          ? 'translate-x-8 -translate-y-3 rotate-[1.5deg] opacity-0 scale-[0.985]'
          : 'translate-x-0 translate-y-0 rotate-0 opacity-100 scale-100'
      }`}
    >
      <div className="grid grid-cols-[352px_minmax(0,1fr)] gap-6">
        <CardImage card={card} imageClassName="h-[268px]" />
        <CardContent card={card} />
      </div>
    </article>
  );
}

function CardImage({
  card,
  imageClassName,
}: {
  card: FooterCard;
  imageClassName: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-[18px] bg-[#F3F4F7] ${imageClassName}`}>
      <Image
        src={card.image}
        alt={card.title}
        fill
        loading="eager"
        sizes="(max-width: 1024px) 100vw, 352px"
        className="object-cover object-top"
      />
    </div>
  );
}

function CardContent({ card }: { card: FooterCard }) {
  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <h3 className="mb-3 font-family-inter text-[28px] font-semibold leading-[1.04] text-primary-1 md:text-[32px]">
          {card.title}
        </h3>
        <p className="mb-5 max-w-[420px] font-family-karla text-sm leading-6 text-primary-2 md:text-[15px]">
          {card.description}
        </p>
        <Link
          href={card.href}
          className="inline-flex rounded-lg bg-box-1 px-5 py-2.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-primary-1-hover"
        >
          View Case study
        </Link>
      </div>

      <div className="mt-5 border-t border-dashed border-border-2 pt-4">
        <div className="grid gap-3 md:grid-cols-[108px_minmax(0,1fr)] md:items-start">
          <h4 className="font-family-inter text-base font-semibold leading-5 text-primary-1">
            Leveraged
            <br className="hidden md:block" /> skills
          </h4>
          <div className="flex flex-wrap gap-2">
            {card.skills.map(skill => (
              <span
                key={skill}
                className="rounded-full border border-border-2 bg-white px-3 py-1.5 font-family-karla text-xs font-medium text-primary-1"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
