import React from 'react';
import Newsletter from '../Newsletter/Newsletter';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Daily News / Home</title>
      </Helmet>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.postimg.cc/MKwHD6Ps/newsletter-erstellen-t.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-7xl">
            <h1 className="my-5 text-5xl font-bold">join Our Newsletter</h1>
            <p className="mb-5">
              A newsletter website is an online platform enabling content
              creators to craft and distribute email updates to subscribers. It
              facilitates audience building, engagement, and potential
              monetization, offering customizable templates and list management
              tools. Subscribers can access their favorite newsletters, making
              it a central hub for content consumption and communication.
            </p>
          </div>
        </div>
      </div>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;