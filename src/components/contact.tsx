import React, { FC } from 'react';

type ContactProps = {
};

const Contact: FC<ContactProps> = () => {

    return (

        <div id="contact" className="row form-wrapper">
            <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" autoComplete='on' className="react-form-contents">
                <input type="hidden" name="form-name" value="contact" />
                <div className="field-list"><fieldset className="form-item fields form-fieldset name" id="name-yui_3_17_2_1_1653409543210_4368">
                    <legend className="title">
                        <div className="pDrrGovH4WPE4ap28zXo"><span>Name</span><span className="description required">(required)</span>
                        </div>
                    </legend>
                    <div className="field first-name" data-dynamic-strings=""><label className="form-label caption" htmlFor="first-name">
                        <div className="field-1">
                            <div className="field-2"><span className="caption-text">First Name</span>
                            </div>
                        </div>
                    </label>
                        <input aria-invalid="false" aria-required="true" autoComplete="given-name" className="form-input" id="first-name" name="first-name" type="text" />
                    </div>
                    <div className="field last-name" data-dynamic-strings=""><label className="form-label caption" htmlFor="last-name">
                        <div className="field-1">
                            <div className="field-2"><span className="caption-text">Last Name</span>
                            </div>
                        </div>
                    </label>
                        <input aria-invalid="false" aria-required="true" autoComplete="family-name" className="form-input" id="last-name" name="last-name" type="text" />
                    </div>
                </fieldset>
                    <div className="form-item field text required" id="text-f61d2580-1531-4cb0-bb6f-f2e546c647c1" data-dynamic-strings="">
                        <label htmlFor="" className="title">
                            <div className="">
                                <div className=""><span>Title</span><span className="description required">(required)</span>
                                </div>
                            </div>
                        </label>
                        <input aria-invalid="false" aria-required="true" autoComplete="false" className="form-input" id="title" name="title" placeholder="" type="text" />
                    </div>
                    <div className="form-item field text required" id="text-c7d4fff1-3262-4860-a673-ef2221ccff5e" data-dynamic-strings="">
                        <label htmlFor="organization" className="title">
                            <div className="">
                                <div className=""><span>Organization</span><span className="description required">(required)</span>
                                </div>
                            </div>
                        </label>
                        <input aria-invalid="false" aria-required="true" autoComplete="false" className="form-input" id="organization" placeholder="" type="text" />
                    </div>
                    <div className="form-item field email required" id="email" data-dynamic-strings="">
                        <label htmlFor="email" className="title">
                            <div className="">
                                <div className=""><span>Email</span><span className="description required">(required)</span>
                                </div>
                            </div>
                        </label>
                        <input aria-invalid="false" aria-required="true" autoComplete="false" className="form-input" id="email" placeholder="" type="email" />
                    </div>
                    <fieldset className="form-item field checkbox" id="checkbox-55c0b0ea-87c1-4b21-a94c-f3e08c14b922">
                        <legend className="title">
                            <div className="pDrrGovH4WPE4ap28zXo">
                                <span>How can we help you?</span>
                                <span className="description required">(required)</span>
                            </div>
                            <p className="description">Check all areas of interest</p>
                        </legend>
                        <div className="option">
                            <label className="qGAklBFFTuSX3STwNfpc">
                                <input className="XxADG6E7bVECCxE_Md1x" name="checkbox-interest-1" type="checkbox" />
                                Book Michelle as a speaker for a conference, a team retreat or workshop
                            </label>
                        </div>
                        <div className="option">
                            <label className="qGAklBFFTuSX3STwNfpc">
                                <input className="XxADG6E7bVECCxE_Md1x" name="checkbox-interest-2" type="checkbox" />
                                Other
                            </label>
                        </div>
                    </fieldset>
                    <div className="form-item field textarea required" id="textarea-yui_3_17_2_1_1653409543210_4371" data-dynamic-strings="">
                        <label htmlFor="" className="title" >
                            <div className="">
                                <div className=""><span>Message</span><span className="description required">(required)</span>
                                </div>
                            </div>
                        </label>
                        <p aria-label="Tell us more!" className="description">Tell us more!</p>
                        <textarea id="message" name="message" aria-invalid="false" className="" placeholder=""></textarea>
                    </div>
                </div>
                <div className="form-button-wrapper form-button-wrapper--align-">
                    
                    <button type="submit" className="button">Send</button>
                </div>
            </form>

        </div>
    );
};

export default Contact;



