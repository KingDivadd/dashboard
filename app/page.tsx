import Image from "next/image";
// import Hero from "./component/hero";
// import Footer from "./component/footer";
// import PlatformFeatures from "./component/laindingComponent/platformFeatures";
// import Reviews from "./component/laindingComponent/reviews"
import MainDashboard from "./component/testDashboardComponent/mainDashboard"
import Dashboard from './home/page'


export default function Home(){
  return (
    <main className="overflow-hidden">
      <Dashboard />
      {/* <Hero />
      <PlatformFeatures />
      <Reviews />
      <Footer /> */}
    </main>
  );
}
