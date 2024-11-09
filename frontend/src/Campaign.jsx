import React from 'react'; 
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';
import img4 from './assets/img4.png';
import img5 from './assets/img5.png';
import './components/Campaign.css'; // Import your CSS here

const Campaign = () => {
    const campaigns = [
        {
            title: 'MLA Rajubhau Manikraoji Karemore organized a great health camp at Polara.',
            date: '17 Aug, 2024',
            time: '1:00 PM to 6:00 PM',
            location: 'Maharashtra, MP.',
            description: 'M.L.A. Rajubhau Manikraoji Karemore organized a health camp at Polara.',
            image: img1,
        },
        {
            title: 'Health Camp at Zilla Parishad High School and Science Junior College, Vardhadi.',
            date: '16 Aug, 2024',
            time: '1:00 PM to 6:00 PM',
            location: 'Maharashtra, MP.',
            description: 'A successful health camp organized at Zilla Parishad High School.',
            image: img2,
        },
        {
            title: 'Health Camp organized in Local Community Center.',
            date: '18 Aug, 2024',
            time: '1:00 PM to 6:00 PM',
            location: 'Maharashtra, MP.',
            description: 'A health camp to promote wellness in the community.',
            image: img3,
        },
        {
            title: 'Great health camp organized at Social Bhavan.',
            date: '19 Aug, 2024',
            time: '1:00 PM to 6:00 PM',
            location: 'Maharashtra, MP.',
            description: 'Another successful health camp for better health awareness.',
            image: img4,
        },
        {
            title: 'Health Camp at Village XYZ.',
            date: '20 Aug, 2024',
            time: '1:00 PM to 6:00 PM',
            location: 'Maharashtra, MP.',
            description: 'Health awareness camp organized for villagers.',
            image: img5,
        },
    ];

    return (
        <div className="campaign-container p-4 md:p-10">
            <h2 className="campaign-header text-center text-2xl md:text-3xl font-bold mb-4">
                Campaign and Programs
            </h2>
            <p className="campaign-subheader text-center mb-8 max-w-2xl mx-auto">
                His programs include setting up health camps, supporting local education centers, and providing vocational training to empower underprivileged communities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {campaigns.map((campaign, index) => (
                    <div 
                        className={`campaign-block p-4 shadow-md rounded-lg flex flex-col md:flex-row items-center bg-white ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`} 
                        key={index}
                    >
                        <img 
                            src={campaign.image} 
                            alt={campaign.title} 
                            className="campaign-image w-full md:w-1/2 h-48 object-cover rounded-lg mb-4 md:mb-0 md:ml-4"
                        />
                        <div className="campaign-info md:w-1/2">
                            <h3 className="campaign-title text-xl font-semibold mb-2">{campaign.title}</h3>
                            <p className="campaign-details text-sm mb-2">
                                <i className="fas fa-calendar-alt"></i> {campaign.date} <br />
                                <i className="fas fa-clock"></i> {campaign.time} <br />
                                <i className="fas fa-map-marker-alt"></i> {campaign.location}
                            </p>
                            <p className="campaign-description text-gray-700">{campaign.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Campaign;
