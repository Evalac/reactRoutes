import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StylendLink = styled(NavLink)`
  color: green;
  &.active {
    color: red;
  }
`;

function Layout() {
  return (
    <div>
      <header className="Layout-header">
        <ul>
          <li>
            <StylendLink to="/">Home</StylendLink>
          </li>
          <li>
            <StylendLink to="/dogs">Dogs</StylendLink>
          </li>
          <li>
            <StylendLink to="/products">Products</StylendLink>
          </li>
        </ul>
      </header>
      <main>
        {/* це щоб вибрати де саме буде рендеритись колекція */}
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default Layout;
