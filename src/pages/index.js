import * as React from 'react';
import '../sass/main.scss';
import Layout from '../components/Layout';
import TextBlock from '../components/TextBlock/TextBlock';

export default function Home() {
  return (
    <Layout>
      <div className="uk-container">

        <div className="uk-grid" uk-grid>
          <div className="uk-width-2-3@m">
            <TextBlock
              subheading="Overview"
              heading="Fresh Fund"
              content="<p> Last summer we launched the Courier Fresh Fund – a <strong>$50,000</strong> fund of cash grants for <strong>young black founders in the UK and US</strong> who have great ideas to start or grow a business. We’re excited to announce our <strong>seven winners</strong> , each of whom will receive a cash grant of at least <strong>$5,000</strong> to help bring their plans to life, <strong>one-on-one mentorship</strong> from a relevant founder and a series of masterclasses. </p>"
              buttonText="See our winners"
              buttonLink="/winners"
            />
          </div>
          <div className="uk-width-1-3@m"><strong>Take a closer look</strong></div>
        </div>

      </div>
    </Layout>
  );
}
