import { useNavigate } from 'react-router-dom';

interface NavItem {
  path: string;
  label: string;
}

const navStyles = {
  nav: {
    backgroundColor: '#f8f9fa',
    padding: '1rem 0',
    borderBottom: '1px solid #e9ecef'
  },
  ul: {
    listStyle: 'none',
    display: 'flex',
    gap: '2rem',
    margin: 0,
    padding: '0 2rem'
  },
  li: {
    cursor: 'pointer',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    transition: 'background-color 0.2s',
    '&:hover': {
      backgroundColor: '#e9ecef'
    }
  }
} as const;

const Nav = () => {
  const navigate = useNavigate();

  const navItems: NavItem[] = [
    { path: '/home', label: 'Home' },
    { path: '/busbooking', label: 'Bus Booking' },
    { path: '/buses', label: 'Manage Buses' },
    { path: '/bookings', label: 'Bookings' }
  ];

  return (
    <nav style={navStyles.nav}>
      <ul style={navStyles.ul}>
        {navItems.map(item => (
          <li
            key={item.path}
            onClick={() => navigate(item.path)}
            style={navStyles.li}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;


