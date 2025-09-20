import Navbar from './(sections)/Navbar';
import BottomDock from './(sections)/BottomDock';
import Hero from './(sections)/Hero';
import SupplierDashboardPreview from './(sections)/SupplierDashboardPreview';
import KeyFeatures from './(sections)/KeyFeatures';
import BenefitsGrid from './(sections)/BenefitsGrid';
import HowItWorks from './(sections)/HowItWorks';
import WhySuppliersNeedThis from './(sections)/WhySuppliersNeedThis';
import PilotPartnerCTA from './(sections)/PilotPartnerCTA';
import Founders from './(sections)/Founders';
import WaitlistForm from './(sections)/WaitlistForm';
import Footer from './(sections)/Footer';

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Navbar />
        <div className="relative pb-4 lg:pb-0">
          {/* Supplier-focused landing page sections */}
          <Hero />
          <SupplierDashboardPreview />
          <KeyFeatures />
          <BenefitsGrid />
          <HowItWorks />
          <WhySuppliersNeedThis />
          <PilotPartnerCTA />
          <Founders />
          <WaitlistForm />
          <Footer />
        </div>
      </main>
      <BottomDock />
    </>
  );
}
