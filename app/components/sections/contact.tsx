import Section from '../shared/section';
import ContactForm from './contact_form';
import { TextHighlight } from '../shared/textHighlight';

type ContactSectionProps = {
}
export default function ContactSection({ }: ContactSectionProps) {
    return (
        <Section id="contact" title="Contact"
            subtitle={<>
                Where can I create the  {" "}
                <TextHighlight
                    variant="underline"
                    color="neonPurple"
                >
                    most impact?
                </TextHighlight>
            </>}>
            <ContactForm />

        </Section>
    );
};
