import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLine } from 'react-icons/fa';

const Contact = () => {
    const instagramUrl =
        'https://www.instagram.com/raeraewaxing?igsh=MXJ4Zjg5dmY2bDJmcg%3D%3D&utm_source=qr';
    const phoneNumber = 'tel:0912345667';
    const lineId = 'https://line.me/ti/p/~@545vfzij';

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Contact Us</h1>
            <p>Reach out to us on:</p>
            <div style={{ marginBottom: '20px' }}>
                <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#E1306C', fontSize: '2rem', marginRight: '15px' }}
                >
                    <FaInstagram />
                </a>
                <a
                    href={phoneNumber}
                    style={{ color: '#000', fontSize: '2rem', marginRight: '15px' }}
                >
                    <FaPhoneAlt />
                </a>
                <a
                    href={lineId}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#00C300', fontSize: '2rem' }}
                >
                    <FaLine />
                </a>
            </div>
        </div>
    );
};

export default Contact;