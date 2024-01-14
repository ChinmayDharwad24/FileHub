import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBBtn,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
} from "mdb-react-ui-kit";
import UserPool from "../Auth/UserPool";
import "./NavBar";

export default function App() {
  const [openNavColor, setOpenNavColor] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    const user = UserPool.getCurrentUser();

    try {
      if (user) {
        user.signOut();
        navigate("/");
      }
    } catch (error) {
      console.log("Logout failed: ", error);
    }
  };

  return (
    <div style={{ width: "110%" }}>
      <MDBNavbar expand="lg" dark bgColor="primary">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">FileHub</MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenNavColor(!openNavColor)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse open={openNavColor} navbar>
            <MDBNavbarNav className="me-auto mb-2 mb-lg-0">
              <MDBNavbarItem className="active">
                <MDBNavbarLink aria-current="page" href="/documents">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/documents">Features</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/documents">Pricing</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/documents">About</MDBNavbarLink>
              </MDBNavbarItem>
              <div className="ms-auto">
                <MDBBtn
                  color="success"
                  className="me-2"
                  type="button"
                  onClick={handleLogout}
                >
                  Logout
                </MDBBtn>
              </div>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}
