import { Renderable } from '../../../src/data/types';
import Section from '../shared/section';
import { TextHighlight } from '../shared/textHighlight';

type ExpertiseSectionProps = {
};

type ExpertiseEntryProps = {
  title: string;
  content: Renderable[];
};

// const ExpertiseEntry: FC<ExpertiseEntryProps> = ({ title, content }) => {
//     const [expertiseOpen, setExpertiseOpen] = useState<boolean>(false);

//     return (
//         <li className={expertiseOpen ? 'expertise-item is-active' : 'expertise-item'}
//             onClick={() => setExpertiseOpen((expertiseOpen) => !expertiseOpen)}>
//             <div className={expertiseOpen ? 'expertise-item-header is-active' : 'expertise-item-header'}>
//                 <h5>{title}</h5>
//             </div>
//             <div className="expertise-item-body">
//                 {content &&
//                     content.length > 0 &&
//                     content.map((renderable, renderableIndex) => (
//                         <RenderableComponent key={renderableIndex} data={renderable} />
//                     ))}
//             </div>
//         </li>
//     );
// };

export default function ExpertiseSection({ }: ExpertiseSectionProps) {

  return (
    <Section id="expertise" title="Expertise" subtitle={<>
      Where I create the{" "}
      <TextHighlight
        variant="underline"
        color="neonPurple"
      >
        most impact
      </TextHighlight>
    </>}>
      < div className="grid-3" >
        <article className="card fade-in-up">
          <h3>Vendor & integrator coordination</h3>
          <p>
            Identify areas where technological advancement would be most beneficial for your manufacturing company.
          </p>
          <ul className="card-list">
            <li>Business Process Mapping: potential gaps, bottlenecks, redundancies and areas for optimization</li>
            <li>Operational Assessment: understanding existing worflows</li>
            <li>Risk Assessment: risks and challenges that might arise during digital transformation</li>
            <li>Digital Maturity Assessment:compatibility and effectiveness of existing technologies</li>
          </ul>
        </article>
        <article className="card fade-in-up">
          <h3>Develop a strategy for the digital transformation</h3>
          <p>
            I map your processes, systems and constraints to pinpoint
            where technology will create the most leverage—ERP, planning,
            integrations or automation.
          </p>
          <ul className="card-list">
            <li>Set SMART Objectives: Specific, Measurable, Achievable, Relevant and Time-bound goals</li>
            <li>Process Redesign: integrate digital technologies seamlessly</li>
            <li>Digitizing operations: optimizing, simplifying, and rationalizing existing processes</li>
            <li>Technology Selection: Scalability and compatibility with existings systems</li>
            <li>Set Performance Metrics: define relevant KPIs </li>
            <li>Continous Improvement: evaluate impact of digital transformation on KPIs</li>
          </ul>
        </article>
        <article className="card fade-in-up">
          <h3>Training, rollout & stabilization</h3>
          <p>
            Supervise installation and adoption of the new technology
          </p>
          <ul className="card-list">
            <li>ERP, PLM, CSM, WMS, MRP, MES, QMS, RPA</li>
            <li>Digital Twin Technology</li>
            <li>Smart factory and Industry 4.0</li>
            <li>Advanced data and analytics</li>
            <li>Supply Chain Optimization</li>
            <li>Automation and Robotics</li>
          </ul>
        </article>
      </div >
    </Section>

  );
};
