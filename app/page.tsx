import resume from "../src/data/resume";
import Loading from "./components/loading";
import WelcomeSection from "./components/sections/welcome";
import AboutSection from "./components/sections/about";
import ExpertiseSection from "./components/sections/expertise";
import ExperiencesSection from "./components/sections/experience";
import PublicationSection from "./components/sections/publication";
import SkillsSection from "./components/sections/skills";
import Contact from "./components/sections/contact";
import HireMe from "./components/shared/hireme";
import { FaFaceSmile, FaHandshake, FaWrench } from "react-icons/fa6";

export default function Home() {
  return resume ? (
        <>
                <WelcomeSection />
                <AboutSection about={resume.about} />
                <ExpertiseSection />  
                <HireMe caption="Think we're a good fit?" description="I bring years of hands‑on experience solving real‑world challenges with reliable, scalable solutions." actionMessage="let's connect"  >
                    <FaHandshake />
                </HireMe>

                <SkillsSection skills={resume.skills} />
                <HireMe caption="Think that works?" description="I combine a strong technical skillset with adaptability, delivering results across diverse technologies." actionMessage="Let’s Work Together">
                    <FaWrench />
                </HireMe>
                <ExperiencesSection experiences={resume.experiences} />
                <HireMe caption="Think we're a good fit?" description="" actionMessage="Let’s Work Together" >
                    <FaFaceSmile />
                </HireMe>
                <PublicationSection publications={resume.publications} />
                <Contact /> 

        </>
    ) : <Loading />;
}
