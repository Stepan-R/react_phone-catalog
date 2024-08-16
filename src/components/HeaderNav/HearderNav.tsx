import { useContext } from 'react';
import './Header.scss';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ProductsContext } from '../../PageContext';
import classNames from 'classnames';

export const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  classNames('link', {
    'is-active': isActive,
  });

export const HeaderNav = () => {
  const { bucketItems, favItems } = useContext(ProductsContext);

  return (
    <div>
      <div className="container">
        <Link to="/" target="_self" className="logo">
          <img src="./uploadedImg/logo.png" alt="Logo"></img>
        </Link>
        <ul className="links">
          <li>
            <NavLink to="/" className={getLinkClass}>
              home
            </NavLink>
          </li>
          <li>
            <NavLink to="/phones" className={getLinkClass}>
              phones
            </NavLink>
          </li>
          <li>
            <NavLink to="/tablets" className={getLinkClass}>
              tablets
            </NavLink>
          </li>
          <li>
            <NavLink to="/accessories" className={getLinkClass}>
              accessories
            </NavLink>
          </li>
        </ul>
        <ul className="icons">
          <li className="icon">
            <Link to="/favorites" className="icon-link onTablet">
              <img src="./uploadedImg/like.png"></img>
              {favItems.length > 0 && (
                <div className="show-items">{favItems.length}</div>
              )}
            </Link>
          </li>
          <li className="icon">
            <Link to="/bucket" className="icon-link onTablet">
              <img src="./uploadedImg/shoppingBag.png"></img>
              {bucketItems.length > 0 && (
                <div className="show-items">{bucketItems.length}</div>
              )}
            </Link>
          </li>
          {useLocation().pathname === '/menu' ? (
            <li className="icon">
              <Link to="/" className="icon-link onMobile">
                <img src="./uploadedImg/Close.png"></img>
              </Link>
            </li>
          ) : (
            <li className="icon">
              <Link to="/menu" className="icon-link onMobile">
                <img src="./uploadedImg/burger.png"></img>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
