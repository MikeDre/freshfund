import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './text-block.scss';

function createMarkup(data) {
  return { __html: data };
}

class TextBlockWinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasButton: (this.props.buttonText.length > 0),
    };
  }

  /*
  * @summary: dangerouslySetInnerHTML required here to output Winner's biography
  * @todo: Currently pulling from static file (winners.json), replace with headless CMS data
  */
  /* eslint react/no-danger: 0 */
  render() {
    return (
      <div>
        <h2 className="text-block__subheading u-color-tertiary">{this.props.subheading}</h2>
        <h1 className="text-block__heading">{this.props.heading}</h1>
        <div className="text-block-winner__website uk-margin-medium-bottom">
          <span><a className="u-color-black" href={`https://${this.props.website}`} target="_blank" rel="noopener noreferrer">{this.props.website}</a></span>
        </div>

        <div className="text-block__content" dangerouslySetInnerHTML={createMarkup(this.props.content)} />
        {this.state.hasButton ? (
          <Button
            text={this.props.buttonText}
            link={this.props.buttonLink}
            color="secondary"
          />
        ) : ''}
        <div className="text-block-winner__info">
          <div className="uk-grid uk-grid-small uk-child-width-1-3 uk-margin-top" uk-grid>
            <div>
              <div className="u-color-tertiary">Sector</div>
              <div className="text-block-winner__info-content u-bold">{this.props.sector}</div>
            </div>
            <div>
              <div className="u-color-tertiary">Type of business</div>
              <div className="text-block-winner__info-content u-bold">{this.props.typeOfBusiness}</div>
            </div>
            <div>
              <div className="u-color-tertiary">Based in</div>
              <div className="text-block-winner__info-content u-bold">{this.props.basedIn}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TextBlockWinner.defaultProps = {
  subheading: '',
  content: '',
  buttonText: '',
  buttonLink: '',
  website: '',
  sector: '',
  typeOfBusiness: '',
  basedIn: '',
};

TextBlockWinner.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string,
  content: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  website: PropTypes.string,
  sector: PropTypes.string,
  typeOfBusiness: PropTypes.string,
  basedIn: PropTypes.string,
};

export default TextBlockWinner;
