import * as React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layouts/Layout';
import WinnersLayout from '../components/Layouts/WinnersLayout';
import TextBlock from '../components/TextBlock/TextBlock';
import WinnersListing from '../components/Winners/WinnersListing';

import FreshFundOGImage from '../images/freshfund-ogimage.jpg';
import '../sass/main.scss';

// Winners Illustrations
import AnisaIllustration from '../images/Courier_portrait_Anisa.png';
import LeahIllustration from '../images/Courier_portrait_Leah.png';
import SaraIllustration from '../images/Courier_portrait_Sara.png';
import KendallIllustration from '../images/Courier_portrait_Kendall.png';
import HaniIllustration from '../images/Courier_portrait_Hani.png';
import JaynikaIllustration from '../images/Courier_portrait_Jay.png';
import SaVonneIllustration from '../images/Courier_portrait_SaVonne.png';

const ourWinners = [
  {
    name: 'Anisa Sloan',
    company: 'Souvinear',
    image: AnisaIllustration,
    slug: '/winners/anisa-sloan',
  },
  {
    name: 'Leah Hernandez',
    company: 'Young Authors Publishing',
    image: LeahIllustration,
    slug: '/winners/leah-hernandez',
  },
  {
    name: 'Sara Berkai',
    company: 'Ambessa Play',
    image: SaraIllustration,
    slug: '/winners/sara-berkai',
  },
  {
    name: 'Kendall Finlay',
    company: 'Ohm',
    image: KendallIllustration,
    slug: '/winners/kendall-finlay',
  },
  {
    name: 'Dr Hani Hassan',
    company: 'Hue by Dr Hani',
    image: HaniIllustration,
    slug: '/winners/dr-hani-hassan',
  },
  {
    name: 'Jaynika McGregor',
    company: 'Graceful Graves',
    image: JaynikaIllustration,
    slug: '/winners/jaynika-mcgregor',
  },
  {
    name: 'SaVonne Anderson',
    company: 'Aya Paper Co',
    image: SaVonneIllustration,
    slug: '/winners/savonne-anderson',
  },
];

export default function OurWinners() {
  return (
    <>
      <Helmet>
        <title>Winners | Fresh Fund - Supporting young Black founders</title>
        <meta name="description" content="From a mobile grave-cleaning service to an intelligent skincare brand for POC, our winners have a wide variety of businesses and inspirations for how they came to be. Over the past month, we’ve been working with filmmaker Naomi Joda and the seven winners to document who they are, what their business is and find out what drives them." />
        <meta name="image" content={FreshFundOGImage} />

        {/* OpenGraph tags */}
        <meta property="og:url" content="" />
        <meta property="og:title" content="Winners | Fresh Fund - Supporting young Black founders" />
        <meta property="og:description" content="From a mobile grave-cleaning service to an intelligent skincare brand for POC, our winners have a wide variety of businesses and inspirations for how they came to be. Over the past month, we’ve been working with filmmaker Naomi Joda and the seven winners to document who they are, what their business is and find out what drives them." />
        <meta property="og:image" content={FreshFundOGImage} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Winners | Fresh Fund - Supporting young Black founders" />
        <meta name="twitter:description" content="From a mobile grave-cleaning service to an intelligent skincare brand for POC, our winners have a wide variety of businesses and inspirations for how they came to be. Over the past month, we’ve been working with filmmaker Naomi Joda and the seven winners to document who they are, what their business is and find out what drives them." />
        <meta name="twitter:image" content={FreshFundOGImage} />
        <script src="https://fast.wistia.net/assets/external/E-v1.js" async />
      </Helmet>
      <Layout>
        <div className="uk-container uk-margin-large-bottom">
          <div className="uk-grid" data-uk-grid>
            <div className="uk-width-2-3@m">
              <TextBlock
                subheading="Fresh Fund"
                heading="Our winners"
                content="<p>From a mobile grave-cleaning service to an intelligent skincare brand for POC, our winners have a wide variety of businesses and inspirations for how they came to be. Over the past month, we’ve been working with filmmaker <a class='u-color-black u-medium' href='https://www.joda.studio/' target='_blank' rel='noopener noreferrer'>Naomi Joda</a> and the seven winners to document who they are, what their business is and find out what drives them.</p>"
              />
            </div>
          </div>
        </div>
        <WinnersLayout>
          <div className="uk-container">
            <div className="uk-grid uk-child-width-1-2@s" data-uk-grid data-uk-scrollspy="cls: uk-animation-fade; target: .winners-listing__item; delay: 300; repeat: false">
              <WinnersListing
                winners={ourWinners}
              />
            </div>
          </div>
        </WinnersLayout>
      </Layout>
    </>
  );
}
