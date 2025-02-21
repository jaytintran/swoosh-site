import HeroSection from "./HeroSection";
import ProfileCard from "./ProfileCard";
import SkillsSection from "./SkillsSection";
import RecentProjects from "./RecentProjects";
import SkillsTools from "./SkillsTools";
import ContactForm from "./ContactForm";

const Home = () => (
  <>
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-23 container mx-auto">
      {/* Left Column: Sticky ProfileCard */}
      <div className="lg:w-1/4 md:block">
        <div className="lg:sticky lg:top-20">
          <ProfileCard />
        </div>
      </div>

      {/* Right Column: Content */}
      <div className="flex-1 md:mt-12">
        <HeroSection />
        <SkillsSection />
        <RecentProjects />
        <SkillsTools />
        <ContactForm />
      </div>
    </div>
  </>
);

export default Home;
