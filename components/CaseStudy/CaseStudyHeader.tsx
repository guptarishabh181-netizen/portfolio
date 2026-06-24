import Image from 'next/image';
import Link from 'next/link';

interface CaseStudyHeaderProps {
  wide?: boolean;
}

export default function CaseStudyHeader({ wide = false }: CaseStudyHeaderProps) {
  const horizontalPadding = wide ? 'px-4 md:px-14 lg:px-20' : 'px-4 md:px-14 lg:px-12';

  return (
    <header className={`w-full ${horizontalPadding} py-6 md:pt-16 flex items-center justify-between`}>
      {/* Logo with Profile + RG - Stacked/Overlapping */}
      <Link href="/" className="relative flex items-center">
        <div className="relative flex items-center">
          <Image
            src="/icons/profile.svg"
            alt="Profile"
            width={46}
            height={46}
            className="w-12 h-12 border-2 border-border-1 rounded-full object-cover"
          />
          <div className="absolute -right-8 rounded-full flex items-center justify-center">
            <div className="relative z-10 glass-effect rg-glass w-12 h-12 rounded-full flex items-center justify-center">
              <p className="text-[#525252] text-sm md:text-base font-medium font-family-karla">RG</p>
            </div>
          </div>
        </div>
      </Link>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <Link
          href="/"
          className="px-4 py-2 bg-transparent text-primary-1 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-all font-family-karla"
        >
          Back
        </Link>
        <a
          href="mailto:guptarishabh181@gmail.com"
          className="px-4 py-2 bg-box-1 text-white rounded-lg text-sm font-medium hover:bg-primary-1-hover transition-all font-family-karla"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
