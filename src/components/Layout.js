import { NavLink, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <header>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/dogs">Collections</NavLink>
          </li>
        </ul>
      </header>
      {/* це щоб вибрати де саме буде рендеритись колекція */}
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default Layout;
