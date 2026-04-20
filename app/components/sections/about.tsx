import { ResumeAbout } from "../../../src/data/types";
import Vcf from "./vcf";
import Section from '../shared/section';
import { TextHighlight } from '../shared/textHighlight';
import { mapIcon } from "../social_media";
import { FaHouse, FaLocationDot } from "react-icons/fa6";

type AboutProps = {
    about: ResumeAbout;
};

export default function About({ about }: AboutProps) {

    return (
        <Section id="about" title="About Me" subtitle={<>
            Who I am & how to  {" "}
            <TextHighlight
                variant="underline"
                color="neonPurple"
            >
                reach me
            </TextHighlight>
        </>} >
            <div className='split-layout'>
                <div className="split-left fade-in-up">
                    {about.summary.map(function (content, index) {
                        return (
                            <p key={index}>
                                {content}
                            </p>
                        );
                    })}
                </div>
                <div className="split-right fade-in-up">
                    <div className="glass-panel strong">
                        <h3>Contact &amp; Identity</h3>
                        <ul className="contact-list">
                            <li>
                                <FaHouse /> 2Bait, Borut Ajdič s.p.
                            </li>
                            <li>
                                <FaLocationDot />{about.location.city},{about.location.countryCode}
                            </li>
                            {about.social.map(function (content, index) {
                                
                                const icon = mapIcon(content.network.toLowerCase());
                                return (
                                    <li key={index}>
                                          {icon}
                                        <a href={content.url}>
                                            <span>{content.display}</span>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="qr-block">
                            <Vcf about={about} />
                        </div>
                    </div>
                </div>
            </div>
        </Section>

    );
};
