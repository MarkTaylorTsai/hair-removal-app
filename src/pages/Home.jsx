import React from 'react';
import bannerImg from '../assets/images/Banner.jpg'; 
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Service from '../components/Service';
import Comparison from '../components/Comparison';

const Home = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <img 
                src={bannerImg} 
                alt="Hair Removal Studio Banner" 
                style={{
                    width: '100%',          
                    height: 'auto',         
                    display: 'block',       
                    marginBottom: '20px'    
                }} 
            />    
            <div style={{ margin: '0 20px' }}>
             <div className="text-center my-4">
                <hr className="mb-3" style={{ borderTop: '2px solid #999', width: '60%', margin: '0 auto' }} />

                <h2 className="text-secondary mb-3">
                    歡迎來到<br />瑞瑞除毛所
                </h2>

                <hr className="mt-3" style={{ borderTop: '2px solid #999', width: '60%', margin: '0 auto' }} />
            </div>
                <p>我們提供專業的除毛服務，讓您擁有光滑肌膚</p>
                <p>我們的服務包括：</p> 

                <Service />
                <Comparison />
                
            </div>
            <Footer />
        </div>
    );
};


export default Home;