import React from 'react';
import '../App.css';
import CollectionMain from '../components/CollectionMain/collectionMain';
import ProductSection from '../components/ProductSection/productSection';
import SliderWrapper from '../components/SliderWrapper/sliderWrapper';
import PartnershipSectionMain from '../components/PartnershipSectionMain/partnershipSectionMain';
import NewsLetterSubscriptionMain from '../components/NewsLetterSubscriptionMain/newsLetterSubscriptionMain';
import CollectionOfShades from '../components/CollectionOfShades/collectionOfShades';
import ContactUs from '../components/ContactUs/ContactUs';
import FollowOnInstegramMain from '../components/FollowOnInstegramMain/followOnInstegramMain';

function Home() {
  return (
    <div className="Home">
        <SliderWrapper />   
        <CollectionMain />
        <CollectionOfShades />
        <ProductSection />
        <PartnershipSectionMain />
        <FollowOnInstegramMain />
        <NewsLetterSubscriptionMain />
    </div>
  );
}

export default Home;
