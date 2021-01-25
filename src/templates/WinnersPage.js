import React from 'react';
import { graphql } from 'gatsby';
// import Image from 'gatsby-image';
import Layout from '../components/Layouts/Layout';
import WinnersLayout from '../components/Layouts/WinnersLayout';

export const query = graphql`
    query($slug: String!) {
        winnersJson(slug: { eq: $slug }) {
            name
            company
            bio
            companyWebsite
        }
    }
`;

const WinnersPage = ({ data }) => {
  const winner = data.winnersJson;

  return (
    <Layout>
      <div className="uk-container uk-margin-large-bottom">
        {winner.name}
      </div>
      <WinnersLayout>
        <div className="uk-container">
          <p>{winner.name}</p>
          <p>{winner.company}</p>
          <p>{winner.bio}</p>
          <p>{winner.companyWebsite}</p>
        </div>
      </WinnersLayout>
    </Layout>
  );
};

export default WinnersPage;
