import React, { useContext } from 'react';
import MyContext from '../context/Context';
import SubmitButton from './SubmitButton';
import { LAST_PAGE, PAGES } from '../services/Constants';

export default function Footer() {
  const consumer = useContext(MyContext);
  const { page, setPage, planetList } = consumer;

  const previousButtonProps = {
    className: 'pure-button',
    id: 'previouspageButton',
    name: 'previousButton',
    onClick: () => setPage(page - 1),
    text: 'Anterior',
    disabled: page === 1,
  };

  const nextoButtonProps = {
    className: 'pure-button',
    id: 'nextpageButton',
    name: 'nextButton',
    onClick: () => setPage(page + 1),
    text: 'Próximo',
    disabled: page === LAST_PAGE,
  };

  const displayFooter = () => (
    <>
      <div>
        { PAGES.map((item, index) => (
          <button
            type="button"
            key={ item }
            className={ index + 1 === page
              ? 'actual-page index-button' : 'index-button' }
            onClick={ () => setPage(index + 1) }
          >
            {item}
          </button>
        )) }
      </div>
      <div>
        <SubmitButton { ...previousButtonProps } />
        <SubmitButton { ...nextoButtonProps } />
      </div>
    </>
  );

  return (
    <footer>
      { planetList.length > 0 ? displayFooter() : null}
    </footer>
  );
}
