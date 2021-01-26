import * as React from 'react';

import Layout from '../components/Layouts/Layout';
import WinnersLayout from '../components/Layouts/WinnersLayout';
import TextBlock from '../components/TextBlock/TextBlock';
import WinnersListing from '../components/Winners/WinnersListing';

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
    company: 'Ohm',
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
    <Layout>
      <div className="uk-container uk-margin-large-bottom">
        <div className="uk-grid" uk-grid>
          <div className="uk-width-2-3@m">
            <TextBlock
              subheading="Fresh Fund"
              heading="Our winners"
              content="<p>From a mobile grave-cleaning service to an intelligent skincare brand for POC, our winners have a wide variety of businesses and inspirations for how they came to be. Over the past month, we’ve been working with filmmaker Naomi Joda and the seven winners to document who they are, what their business is and find out what drives them.</p>"
            />
          </div>
        </div>
      </div>
      <WinnersLayout>
        <div className="uk-container">
          <div className="uk-grid uk-child-width-1-2@m" uk-grid>
            <WinnersListing
              winners={ourWinners}
            />
          </div>
        </div>
      </WinnersLayout>
    </Layout>
  );
}
