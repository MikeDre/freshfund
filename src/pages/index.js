import * as React from 'react';

import Layout from '../components/Layouts/Layout';
import TextBlock from '../components/TextBlock/TextBlock';
import VideoHero from '../components/Video/VideoHero';

import '../sass/main.scss';

import CurlArrow from '../images/curl-arrow.svg';

export default function Home() {
  return (
    <Layout>
      <div className="u-overflow-hidden--off">
        <div className="uk-container">
          <div className="uk-margin-large-bottom">
            <VideoHero
              vimeoUrl="https://vimeo.com/480734452"
            />
          </div>
        </div>
      </div>
      <div className="uk-container uk-margin-large-top uk-margin-large-bottom">
        <div className="uk-grid" uk-grid>
          <div className="uk-width-2-3@m">
            <TextBlock
              subheading="Overview"
              heading="Fresh Fund"
              content="<p>Last summer we launched the Courier Fresh Fund – a <strong>$50,000</strong> fund of cash grants for <strong>young black founders in the UK and US</strong> who have great ideas to start or grow a business. We’re excited to announce our <strong>seven winners</strong> , each of whom will receive a cash grant of at least <strong>$5,000</strong> to help bring their plans to life, <strong>one-on-one mentorship</strong> from a relevant founder and a series of masterclasses.</p>"
              buttonText="See our winners"
              buttonLink="/winners"
            />
          </div>
          <div className="uk-width-1-3@m uk-text-center">
            <div>
              <img src={CurlArrow} alt="Curly arrow pointing to video" />
            </div>
            <div className="uk-margin-top">
              <strong>Take a closer look</strong>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
