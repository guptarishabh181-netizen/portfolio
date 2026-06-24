// import Link from 'next/link';
// import GridBackground from '@/components/CaseStudy/GridBackground';

// export default function NotFound() {
//   return (
//     <main className="min-h-screen bg-white relative overflow-hidden">
//       <GridBackground />

//       {/* Large 404 Background Text */}
//       <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
//         <h1 className="text-[20rem] md:text-[30rem] lg:text-[40rem] font-bold font-family-inter text-bg-gray opacity-50 select-none leading-none">
//           404
//         </h1>
//       </div>

//       <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
//         <div className="max-w-2xl mx-auto text-center">
//           {/* Main Heading */}
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-1 mb-6 font-family-inter">
//             Oops, I think we're lost...
//           </h2>

//           {/* Description */}
//           <p className="text-base md:text-xl text-primary-1 font-regular leading-relaxed font-family-karla mb-12 max-w-xl mx-auto">
//             Let's get you back to somewhere familiar.
//           </p>

//           {/* Back to Home Button */}
//           <Link
//             href="/"
//             className="inline-block px-6 py-3 bg-box-1 text-white rounded-lg text-base font-medium hover:bg-primary-1-hover transition-all duration-300 font-family-karla"
//           >
//             Back Home
//           </Link>
//         </div>
//       </div>
//     </main>
//   );
// }


import Link from 'next/link';
import GridBackground from '@/components/CaseStudy/GridBackground';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white relative">
      <GridBackground />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Badge */}
          <div className="inline-flex items-center gap-2 bg-bg-gray px-5 py-2 rounded-lg mb-8">
            <span className="text-primary-1 text-sm md:text-base font-semibold font-family-inter">
              ✦ 404 Error
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-1 mb-6 font-family-inter">
            Page Not Found
          </h1>

          {/* Description */}
          <p className="text-base md:text-2xl text-primary-1 font-regular leading-relaxed font-family-karla mb-12 max-w-xl mx-auto">
            Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
          </p>

          {/* Back to Home Button */}
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-box-1 text-white rounded-lg text-base font-medium hover:bg-primary-1-hover transition-all duration-300 font-family-karla"
          >
            Back Home
          </Link>
        </div>
      </div>
    </main>
  );
}
