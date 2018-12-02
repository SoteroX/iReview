import React from "react";
import { logout } from "../../../helpers/auth";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "mdbreact";

const appTokenKey = "appToken";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      photo: "",
      isLoggedIn: false
    };
    this.onClick = this.onClick.bind(this);
  }

  handleSignOut = () => {
    logout().then(() => {
      localStorage.removeItem(appTokenKey);
      localStorage.removeItem("data");
      this.props.history.push("/login");
      console.log("user signed out");
    });
  };

  componentDidMount() {
    const photo = localStorage.getItem("firebaseui::rememberedAccounts");
    const pic = JSON.parse(photo);
    if (localStorage.getItem(appTokenKey)) {
      this.setState({
        isLoggedIn: true,
        photo: pic[0].photoUrl
      });
    }
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }
  render() {
    const { isLoggedIn } = this.state;

    return (
      <Navbar
        color="elegant-color-dark"
        sticky="top"
        dark
        expand="md"
        transparent
        scrolling
      >
        <NavbarBrand href="/">
          <strong>iReviews</strong>
        </NavbarBrand>
        {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
        <Collapse isOpen={this.state.collapse} navbar>
          <NavbarNav left>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/movies">Movies</NavLink>
            </NavItem>
          </NavbarNav>
          <NavbarNav right>
            <div style={{ display: "flex", alignItems: "center" }}>
              {isLoggedIn !== true ? (
                <NavItem>
                  <NavLink to="/login">Login</NavLink>
                </NavItem>
              ) : (
                <NavItem>
                  <Dropdown>
                    <DropdownToggle nav>
                      <div style={{ display: "grid" }}>
                        <img
                          src={this.state.photo}
                          alt="thumbnail"
                          className="float-right"
                          style={{ width: "40px", borderRadius: "50%" }}
                        />
                      </div>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem href="/" onClick={this.handleSignOut}>
                        Signout
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </NavItem>
              )}
            </div>
          </NavbarNav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
