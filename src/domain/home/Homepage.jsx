import React, { useState, useEffect } from 'react';
import {
    Intro,
    TakeAction,
    ActiveCampaigns,
    WaveBreak,
    HowItWorks,
    Partners,
    Newsletter,
} from './components/index';

const Homepage = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        const fetchCampaigns = async () => {
            const resp = await fetch('https://api.now-u.com/api/v1/campaigns');
            const campaigns = await resp.json();
            setCampaigns(campaigns?.data);
        };
        fetchCampaigns();

        const fetchPartners = async () => {
            const respPartners = await fetch(
                'https://api.now-u.com/api/v1/organisations'
            );
            const partners = await respPartners.json();
            setPartners(partners?.data);
        };
        fetchPartners();
    }, []);

    return (
        <main>
            <Intro />
            <TakeAction />
            <ActiveCampaigns campaigns={campaigns} />
            <WaveBreak />
            <HowItWorks />
            <Partners partners={partners} />
            <Newsletter />
        </main>
    );
};

export default Homepage;
