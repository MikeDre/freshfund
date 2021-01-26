import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import './winners-listing.scss';

class WinnersListing extends React.Component {
  render() {
    const winnerItems = this.props.winners.map((winner) => (
      <div key={winner.name} className="winners-listing__item uk-flex uk-flex-middle uk-margin-large-bottom">
        <Link to={winner.slug} className="winners-listing__link">
          <div className="uk-grid uk-child-width-1-2@m" uk-grid>
            <div>
              <img className="winners-listing__illustration" src={winner.image} alt={`Illustration of ${winner.name}`} />
            </div>
            <div className="uk-flex uk-flex-middle">
              <div className="uk-text-left@m uk-text-center">
                <h4 className="winner-listing__company u-color-tertiary">{winner.company}</h4>
                <h3 className="winner-listing__name ">{winner.name}</h3>
              </div>
            </div>
          </div>
        </Link>
      </div>
    ));
    return (
      <>
        <div className="winners-listing__intro uk-margin-large-bottom uk-flex uk-flex-middle">
          <p>Click on a winner below to check out their film and get to know them better.  and check out their individual films to get to know each of them better.</p>
        </div>
        {winnerItems}
      </>
    );
  }
}

WinnersListing.propTypes = {
  winners: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  })).isRequired,
};

export default WinnersListing;
