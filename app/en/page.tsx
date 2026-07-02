import { Nav } from "./_sections/nav";
import { Hero } from "./_sections/hero";
import { PourToiSi } from "./_sections/pour-toi-si";
import { About } from "./_sections/about";
import { SideProjects } from "./_sections/side-projects";
import { TrackRecord } from "./_sections/track-record";
import { HowIWork } from "./_sections/how-i-work";
import { Contact } from "./_sections/contact";

export default function HomeEn() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main>
        <Hero />
        <PourToiSi />
        <About />
        <SideProjects />
        <TrackRecord />
        <HowIWork />
      </main>
      <Contact />
    </div>
  );
}
