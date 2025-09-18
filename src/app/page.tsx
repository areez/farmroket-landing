import Hero from './(sections)/Hero';
import ProblemSolution from './(sections)/ProblemSolution';
import HowItWorks from './(sections)/HowItWorks';
import Features from './(sections)/Features';
import Benefits from './(sections)/Benefits';
import WhyNow from './(sections)/WhyNow';
import UseCasesAbout from './(sections)/UseCasesAbout';
import WaitlistFooter from './(sections)/WaitlistFooter';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="relative">
        {/* Unified page background is now handled by body in globals.css */}
        <Hero />
        <ProblemSolution />
        <HowItWorks />
        <Features />
        <Benefits />
        <WhyNow />
        <UseCasesAbout />
        <WaitlistFooter />
      </div>
    </main>
  );
}
