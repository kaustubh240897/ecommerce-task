import bag from './bag.png';
import './App.css';
import RoutesCom from "./routes";

import * as ReactBootstrap from "react-bootstrap";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />


    //   </header>
    // </div>

    <div>
      <ReactBootstrap.Navbar bg="light" expand="lg">
        <ReactBootstrap.Container fluid>
          <ReactBootstrap.Navbar.Brand href="#">Wealthy</ReactBootstrap.Navbar.Brand>
          <ReactBootstrap.Navbar.Toggle aria-controls="navbarScroll" />
          <ReactBootstrap.Navbar.Collapse id="navbarScroll">
            <ReactBootstrap.Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >

            </ReactBootstrap.Nav>
            {/* <ReactBootstrap.Form className="d-flex">
            <ReactBootstrap.FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <ReactBootstrap.Button variant="outline-success">Search</ReactBootstrap.Button>
          </ReactBootstrap.Form> */}

            <img src={bag} className="App-logo" alt="logo" />
            <p className='bag'>3 items </p>
          </ReactBootstrap.Navbar.Collapse>
        </ReactBootstrap.Container>
      </ReactBootstrap.Navbar>




      <RoutesCom />
    </div>







  );
}

export default App;
