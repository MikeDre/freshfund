import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
// import Image from 'gatsby-image';

import Layout from '../components/Layouts/Layout';
import WinnersLayout from '../components/Layouts/WinnersLayout';
import VideoWinner from '../components/Video/VideoWinner';
import TextBlockWinner from '../components/TextBlock/TextBlockWinner';

import FreshFundOGImage from '../images/freshfund-ogimage.jpg';

export const query = graphql`
  query($slug: String!) {
    winnersJson(slug: { eq: $slug }) {
      name
      company
      bio
      companyWebsite
      sector
      typeOfBusiness
      basedIn
      image
      wistiaVideoID
    }
    allFile (filter: { extension: { eq: "png" } }) {
      edges {
        node {
          publicURL
          name
        }
      }
    }
  }
`;

const WinnersPage = ({ data }) => {
  const winner = data.winnersJson;
  const winnerImages = data.allFile.edges;
  let currentWinnerImage = '';

  // Get current winner image from available images
  winnerImages.forEach((imageSet) => {
    if (imageSet.node.name === winner.image) {
      currentWinnerImage = imageSet.node.publicURL;
    }
  });

  return (
    <>
      <Helmet>
        <title>
          {winner.name}
          {' '}
          | Fresh Fund Winner
        </title>
        <meta name="description" content={winner.bio} />
        <meta name="image" content={FreshFundOGImage} />

        {/* OpenGraph tags */}
        <meta property="og:url" content="" />
        <meta property="og:title" content={`${winner.name} | Fresh Fund`} />
        <meta property="og:description" content={winner.bio} />
        <meta property="og:image" content={FreshFundOGImage} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${winner.name} | Fresh Fund`} />
        <meta name="twitter:description" content={winner.bio} />
        <meta name="twitter:image" content={FreshFundOGImage} />
        <script src="https://fast.wistia.net/assets/external/E-v1.js" async />
      </Helmet>
      <Layout>
        <div className="u-overflow-hidden--off">
          <div className="uk-container">
            <div className="uk-margin-large-bottom">
              <VideoWinner
                wistiaID={winner.wistiaVideoID}
                caption="The following films were all made at a safe distance or by winners themselves to ensure safety during the Covid-19 pandemic"
              />
            </div>
          </div>
        </div>
        <WinnersLayout>
          <div className="uk-container uk-margin-large-top">
            <div className="uk-grid" data-uk-grid>
              <div className="uk-width-3-5@m">
                <div className="uk-margin-large-top uk-margin-large-bottom">
                  <div className="uk-hidden@m">
                    <div className="uk-margin-large-top uk-text-center">
                      <img className="winner__image" src={currentWinnerImage} alt={`Illustration of ${winner.name}`} />
                    </div>
                  </div>
                  <TextBlockWinner
                    subheading={winner.company}
                    heading={winner.name}
                    content={winner.bio}
                    website={winner.companyWebsite}
                    sector={winner.sector}
                    typeOfBusiness={winner.typeOfBusiness}
                    basedIn={winner.basedIn}
                  />
                </div>
              </div>
              <div className="uk-width-2-5@m uk-text-center uk-visible@m" data-uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 500">
                <div className="uk-margin-large-top">
                  <img src={currentWinnerImage} alt={`Illustration of ${winner.name}`} />
                </div>
              </div>
            </div>
          </div>
        </WinnersLayout>
      </Layout>
    </>
  );
};

WinnersPage.propTypes = {
  data: PropTypes.PropTypes.shape({
    winnersJson: PropTypes.shape({
      name: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
      companyWebsite: PropTypes.string.isRequired,
      sector: PropTypes.string.isRequired,
      typeOfBusiness: PropTypes.string.isRequired,
      basedIn: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      wistiaVideoID: PropTypes.string.isRequired,
    }).isRequired,
    allFile: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
    }).isRequired,
  }).isRequired,
};

export default WinnersPage;
