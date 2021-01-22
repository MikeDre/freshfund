import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './text-block.scss';

function createMarkup(data) {
  return { __html: data };
}

const TextBlock = ({
  heading, subheading, content, buttonText, buttonLink,
}) => (
  <div>
    <h2 className="text-block__subheading u-color-tertiary">{subheading}</h2>
    <h1 className="text-block__heading uk-margin-bottom">{heading}</h1>
    <div className="text-block__content" dangerouslySetInnerHTML={createMarkup(content)} />
    <Button
      text={buttonText}
      link={buttonLink}
      color="secondary"
    />
  </div>
);

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
