import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
// import Image from 'gatsby-image';

import Layout from '../components/Layouts/Layout';
import WinnersLayout from '../components/Layouts/WinnersLayout';
import VideoWinner from '../components/Video/VideoWinner';
import TextBlockWinner from '../components/TextBlock/TextBlockWinner';

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
    <Layout>
      <div className="u-overflow-hidden--off">
        <div className="uk-container">
          <div className="uk-margin-large-bottom">
            <VideoWinner
              vimeoUrl="https://vimeo.com/480734452"
              caption="The following films were all made at a safe distance or by winners themselves to ensure safety during the Covid-19 pandemic"
            />
          </div>
        </div>
      </div>
      <WinnersLayout>
        <div className="uk-container uk-margin-large-top">
          <div className="uk-grid" uk-grid>
            <div className="uk-width-3-5@m">
              <div className="uk-margin-large-top uk-margin-large-bottom">
                <div className="uk-hidden@m">
                  <div className="uk-margin-large-top">
                    <img src={currentWinnerImage} alt={`Illustration of ${winner.name}`} />
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
            <div className="uk-width-2-5@m uk-text-center uk-visible@m">
              <div className="uk-margin-large-top">
                <img src={currentWinnerImage} alt={`Illustration of ${winner.name}`} />
              </div>
            </div>
          </div>
        </div>
      </WinnersLayout>
    </Layout>
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
    }).isRequired,
    allFile: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
    }).isRequired,
  }).isRequired,
};

export default WinnersPage;
