import React, { FC } from 'react'; //, useEffect, useState
//import  {IntlProvider } from 'react-intl';
import { Resume as ResumeType } from "../data/types";

//import resumeRequest from 'superagent';
import Header from './header';
//import Navigation from './navigation';
//import Banner from './banner';
import ScrollDown from './scrolldown';
import Footer from './footer';
import About from './sections/about';
import ExpertiseSection from './sections/expertise';
import ExperiencesSection from './sections/experience';
import PublicationSection from './sections/publication';
import EducationSection from './sections/education';
import SkillsSection from './sections/skills';
import Loading from './loading';
import HireMe from './hireme'

type ResumeProps = {
    resume: ResumeType;
  };

const Home: FC<ResumeProps> = ({ resume }) => {
 
    //const [locale, setLocale] = useState('sl');

    // useEffect(()=> {
    //     import('./locales/${locale}.json').then((messages) => {
    //         console.log({messages});
    //         setMessages(messages);
    //     })
    // },[locale]);

    return resume ? (
        <div>
            {/* <IntlProvider messages={messages} key={locale} locale={locale}>
                <FormattedMessage id="app.section.caption" defaultMessage={""} />
            </IntlProvider> */}
            
             <Header>
                {/* <Navigation navigation={this.props.route.config.navigation}/>
                <Banner basics={data.resume.basics}/> */}
                <ScrollDown/>
            </Header>
            <About about={resume.about}/>
            <ExpertiseSection />
            <HireMe caption={"Think that works? let's connect"} />
            <SkillsSection skills={resume.skills}/>            
            <HireMe caption={"Think we're a good fit? get in touch"} />
            <ExperiencesSection experiences={resume.experiences}/>
            <PublicationSection publications={resume.publications}/>
            <EducationSection education={resume.education}/>
            <Footer about={resume.about}/>
            {/* <Expertises content={this.props.expertises}/>
            
             <Portfolio content={this.props.portfolio}/> 
            <References content={this.props.references}/>

            {resume.sections.map((section, sectionIndex) => (
                <Section
                    basics={data.resume.basics}
                    expertises={data.resume.expertises}
                    work={data.resume.work}
                    education={data.resume.education}
                    skills={data.resume.skills}
                    portfolio={data.resume.projects}
                    references={data.resume.references}/> 
            ) */}
        </div>
    ):<Loading/>;   //config?.resume ? onLoad() : 
}

export default Home;
