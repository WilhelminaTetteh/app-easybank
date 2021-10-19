import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom"; // importing Switch
import Home from "./pages/Home";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import RequestInvite from "./pages/RequestInvite";
import Footer from "./components/Footer";
function App() {
  return (
    <div
      className="page__container"
      style={{ maxWidth: "1440px", margin: "0 auto" }}
    >
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/careers">
            <Careers />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/request-invite">
            <RequestInvite />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

// import "./App.css";
// import Navbar from "./components/Navbar/Navbar";
// function App() {
//   return (
//     <div className='App'>
//       <Navbar />
//     </div>
//   );
// }
// export default App;

// import "bootstrap/dist/css/bootstrap.css";
// import { Nav, Navbar } from "react-bootstrap";
// import "./App.css";
// import logo from "./images/logo.svg";
// function App() {
//   return (
//     <>
//       <Navbar bg='myRed' variant='dark' sticky='top'>
//         <Navbar.Brand>
//           <img alt='logo' src={logo} />
//         </Navbar.Brand>
//         <Nav>
//           <Nav.Link href='products'></Nav.Link>
//         </Nav>
//       </Navbar>
//       <div className='content'>THIS IS SOME CONTENT</div>
//     </>
//   );
// }
