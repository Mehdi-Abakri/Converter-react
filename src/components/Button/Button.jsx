import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ handleClick, isCurrenciesOpen }) => {
  // classe CSS conditionnelle
  let cssClass = 'custom-button';
  if (isCurrenciesOpen) {
    cssClass += ' custom-button--open';
    // concaténation dans la variable elle-même, équivalent à
    // cssClass = cssClass + ' custom-button--open';
  }

  return (
    <button type="button" onClick={handleClick} className={cssClass}>
      =
    </button>
  );
};

Button.propTypes = {
  // handleClick est une fonction
  handleClick: PropTypes.func.isRequired,
  // isCurrenciesOpen est un booléen
  isCurrenciesOpen: PropTypes.bool.isRequired,
};

export default Button;
