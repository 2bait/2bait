import React, { FC } from 'react';

type ContactFormProps = {
};

export default function ContactForm ({}:ContactFormProps) {

    return (
        <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/.netlify/functions/contact"  
            autoComplete='on'
            className="card contact-card fade-in-up"
        >
            <input type="hidden" name="form-name" value="contact" />
            <div className="form-row">
                <div className="form-field">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" autoComplete='name' required />
                </div>
                <div className="form-field">
                    <label htmlFor="title">Title</label>
                    <input id="title" name="title" type="text" autoComplete='title' />
                </div>
            </div>
            <div className="form-row">
                <div className="form-field">
                    <label htmlFor="organization">Organization</label>
                    <input id="organization" name="organization" type="text" autoComplete='organization' />
                </div>
                <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" autoComplete='email' required />
                </div>
            </div>
            <fieldset className="form-field">
                <legend>What are you interested in?</legend>
                <div className="checkbox-grid">
                    <label>
                        <input type="checkbox" name="interest" value="consulting" />
                        Consulting
                    </label>
                    <label>
                        <input type="checkbox" name="interest" value="freelance" />
                        Freelance work
                    </label>
                    <label>
                        <input type="checkbox" name="interest" value="longterm" />
                        Long term collaboration
                    </label>
                    <label>
                        <input type="checkbox" name="interest" value="other" />
                        Other
                    </label>
                </div>
            </fieldset>
            <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required />
            </div>
            <div className="form-actions">
                <button type="submit" className="btn btn-primary">
                    Send
                </button>
            </div>
        </form>
    );
};



