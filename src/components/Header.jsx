import React from 'react';
import FilterForms from './FilterForms';
import OrderForms from './OrderForms';

export default function Header() {
  return (
    <header>
      <div className="header-img">
        <img
          src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-6-1.png"
          alt="Star Wars Logo"
          className="footer-img"
        />
      </div>
      <FilterForms />
      <OrderForms />
    </header>
  );
}
