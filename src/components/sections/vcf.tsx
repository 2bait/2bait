import React, { FC } from 'react';
import vCard from '../vcard/vCard';
import QRCode from 'react-qr-code';
import { ResumeAbout } from "../../data/types";

type VCardProps = {
    about: ResumeAbout;
};


const Vcf: FC<VCardProps> = ({ about }) => {

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


    return (<>
        <QRCode size={128}
            value={vcf.getFormattedString()} /><br />
        <a className="button" download={"card.vcf"} href={`data:,${vcf.getFormattedString()}`}>Download VCard</a>
    </>
    );
};

export default Vcf;
