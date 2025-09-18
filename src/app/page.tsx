import Hero from './(sections)/Hero';
import ProblemSolution from './(sections)/ProblemSolution';
import HowItWorks from './(sections)/HowItWorks';
import Features from './(sections)/Features';
import Benefits from './(sections)/Benefits';
import UseCasesAbout from './(sections)/UseCasesAbout';
import WaitlistFooter from './(sections)/WaitlistFooter';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <Features />
      <Benefits />
      <UseCasesAbout />
      <WaitlistFooter />
    </main>
  );
}
