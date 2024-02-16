import { Collapse, Container } from 'react-bootstrap';
import AppMenu from './Menu';
import { getHorizontalMenuItems } from '@/common';

type NavbarProps = {
  isMenuOpened?: boolean;
};

const NavBar = ({ isMenuOpened }: NavbarProps) => {
  console.log(isMenuOpened);
  return (
    <div className="topnav">
      <Container fluid>
        <nav className="navbar navbar-expand-lg">
          <Collapse in={isMenuOpened}>
            <div className="collapse navbar-collapse" id="topnav-menu-content">
              <AppMenu menuItems={getHorizontalMenuItems()}/>
            </div>
          </Collapse>
        </nav>
      </Container>
    </div>
  );
};

export default NavBar;
