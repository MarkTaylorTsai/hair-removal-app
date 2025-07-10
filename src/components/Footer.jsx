import React from 'react';
import { FaInstagram, FaPhoneAlt, FaLine } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={{
            textAlign: 'center',
            marginTop: '20px',
            padding: '20px',
            backgroundColor: '#f8f9fa',
            color: '#212529',
        }}>
            <p>📍台中市北區進化北路（大衛營）</p>
            <p>📍斗六近斗六國中（預約完成給予詳細地址）</p>

            <hr></hr>
            <p>請透過以下社群媒體進行預約:</p>
            <div style={{ marginTop: '10px', fontSize: '1.5rem' }}>
                <a
                    href="https://www.instagram.com/raeraewaxing?igsh=MXJ4Zjg5dmY2bDJmcg%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ margin: '0 10px', color: '#E1306C' }}
                >
                    <FaInstagram />
                </a>
                <a
                    href="tel:0912345667"
                    style={{ margin: '0 10px', color: '#000' }}
                >
                    <FaPhoneAlt />
                </a>
                <a
                    href="https://line.me/ti/p/~@545vfzij"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ margin: '0 10px', color: '#00C300' }}
                >
                    <FaLine />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
