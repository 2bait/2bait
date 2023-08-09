import React, { FC } from 'react';
import ReactModal from 'react-modal';

type ModalProps = {
    name: string;
    image: string;
    summary: string;
    website: string;
    keywords: string[];
    isOpen: boolean;
    onRequestClose: any;
}

const Modal: FC<ModalProps> = (props) => {

    const style = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)'
        }
    };

    return (
        <ReactModal className='popup-modal mfp-hide' style={style} isOpen={props.isOpen} onRequestClose={props.onRequestClose}>
            <img
                className='scale-with-grid'
                src={props.image}
                alt={props.name} />
            <div className='description-box'>
                <h5>{props.name}</h5>
                <p>{props.summary}</p>
                <span className='categories'>
                    <i className='fa fa-tag' />
                    {props.keywords.join(', ')}
                </span>
            </div>
            <div className='link-box'>
                <a
                    href={props.website}
                    target='_blank'
                    rel='noopener noreferrer'>
                    Details
                </a>
                <a className='popup-modal-dismiss' onClick={props.onRequestClose}>Close</a>
            </div>
        </ReactModal>
    );
};

export default Modal;