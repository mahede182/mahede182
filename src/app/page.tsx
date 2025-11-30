import { HeroSection } from "~/components/sections/Hero";
import { TechStack } from "~/components/sections/TechStack";
import { ExperienceSection } from "~/components/sections/Experience";
import { ProjectsSection } from "~/components/sections/Projects";
import { ContactSection } from "~/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <HeroSection />
      
      <section className="py-1">
        <div className="container mx-auto px-4 xl:px-24">
          <div className="flex flex-col gap-4 lg:gap-8">
            <div id="experience" className="flex-1">
              <ExperienceSection />
            </div>
            <div id="skills" className="flex-1">
              <TechStack />
            </div>
          </div>
        </div>
      </section>

      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
