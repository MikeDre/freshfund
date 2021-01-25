import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './text-block.scss';

function createMarkup(data) {
  return { __html: data };
}

class TextBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasButton: (this.props.buttonText.length > 0),
    };
  }

  render() {
    return (
      <div>
        <h2 className="text-block__subheading u-color-tertiary">{this.props.subheading}</h2>
        <h1 className="text-block__heading uk-margin-bottom">{this.props.heading}</h1>
        <div className="text-block__content" dangerouslySetInnerHTML={createMarkup(this.props.content)} />
        {this.state.hasButton ? (
          <Button
            text={this.props.buttonText}
            link={this.props.buttonLink}
            color="secondary"
          />
        ) : ''}
      </div>
    );
  }
}

TextBlock.defaultProps = {
  subheading: '',
  content: '',
  buttonText: '',
  buttonLink: '',
};

TextBlock.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string,
  content: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
};

export default TextBlock;
