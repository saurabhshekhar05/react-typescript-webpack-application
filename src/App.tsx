import './styles.css';
import Image from './react.png';
// import Logo from './react-logo.svg';
// import { Counter } from './Counter';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link } from 'react-router-dom';
import { Main } from './Main';

export const App = () => {
  const name = 'Saurabh Shekhar';
  return (
    <>
      {/* <h1>Welcome to React Typescript Webpack Application</h1>
      <img src={Image} alt="React Logo" />
      <img src={Logo} alt="React Logo" width={200} />
      <div style={{ paddingLeft: '20px', paddingRight: '15px' }}>
        <Counter />
      </div> */}
      <BrowserRouter>
        <div>
          <nav className="navbar navbar-expand-sm bg-light navbar-light">
            <div className="container-fluid">
              <Link className="nav-link" to="/">
                <img src={Image} alt="React Logo" width={40} />
              </Link>
              <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/scenarios">
                      Scenarios
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/scenariovariants">
                      Scenario Variants
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/multi-select-dropdown">
                      Multi-Select DropDown
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/execution">
                      Process Execution
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* <hr /> */}
          <div className='container mt-3'>
            <Main />
          </div>

        </div>
      </BrowserRouter>
    </>
  );
};
