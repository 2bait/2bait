import vCard from '../vcard/vCard';
import QRCode from 'react-qr-code';
import { ResumeAbout } from "../../../src/data/types";

type VCardProps = {
    about: ResumeAbout;
};


export default function Vcf({ about }:VCardProps)  {

    const vcf = vCard();
    vcf.version = '3.0';
    //set basic  properties
    vcf.firstName = `${about.firstName}`;
    vcf.middleName = `${about.middleName}`;
    vcf.lastName = `${about.lastName}`;
    vcf.organization = `${about.organization}`;

    vcf.workPhone = `${about.phone}`;
    vcf.workUrl = `${about.website}`;
    vcf.workEmail = `${about.email}`;
    vcf.email = `${about.email}`;
    //set social media URLs
    //vCard.socialUrls['facebook'] = 'https://...';
    //vCard.socialUrls['linkedIn'] = 'https://...';
    //vCard.socialUrls['twitter'] = 'https://...';
    //vCard.socialUrls['flickr'] = 'https://...';
    //vCard.socialUrls['custom'] = 'https://...';


    return (
        <>
            <div className="qr-code-placeholder">
                <QRCode size={128}
                    value={vcf.getFormattedString()} />
            </div>
            <a className="qr-caption" download={"card.vcf"} href={`data:,${vcf.getFormattedString()}`}>Scan or save contact details</a>
        </>
    );
};
