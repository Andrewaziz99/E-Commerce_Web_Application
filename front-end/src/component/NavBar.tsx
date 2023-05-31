import "../Style/NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import handleSearch from "../pages/Home";
function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  
    const handleLinkClick = (name: string) => {
      setActiveLink(name);
    };
    return (
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="/" className="logo">
                  <h4>
                    <em>Gaming</em> Strore
                  </h4>
                </a>
                <div className="search-input">
                  {/* <form id="search" onSubmit={handleSearch}>
                    <input
                      type="text"
                      placeholder="Type Something"
                      id="searchText"
                      name="searchKeyword"
                    />
                    <i className="fa fa-search"></i>
                  </form> */}
                </div>
                <ul className="nav">
                  <li>
                    <a href="/" className="active">
                      Home
                    </a>
                  </li>

                  {/* <li>
                    <a href="/checkout">checkout</a>
                  </li> */}
                  <li>
                    <a href="/cart">Cart</a>
                  </li>
                  <li>
                    <a href="/login">login</a>
                  </li>
                  <li>
                    <a href="/profile">
                      Profile <img src="src\assets\profile-header.jpg" alt="" />
                    </a>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
export default NavBar;
