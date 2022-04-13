import React from 'react';
import './App.css';
<<<<<<< Updated upstream
=======
import './member.js'
>>>>>>> Stashed changes
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useParams,
  NavLink,
  Navigate,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import Navigation from './Components/MainNavigation'
import Schedule from './Pages/ScheduleTab/Schedule'
import Profile from './Pages/ProfileTab/Profile'
import EditProfile from './Pages/ProfileTab/EditProfile'
import { render } from '@testing-library/react';




const fakeAuth = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve('2342f2f1d131rf12'), 250);
  });

const AuthContext = React.createContext(null);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [token, setToken] = React.useState(null);

  const handleLogin = async () => {
    const token = await fakeAuth();

    setToken(token);

    const origin = location.state?.from?.pathname || '/dashboard';
    navigate(origin);
  };

  const handleLogout = () => {
    setToken(null);
  };

  const value = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return React.useContext(AuthContext);
};

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  const location = useLocation();

  if (!token) {
    return <Navigate to="/authentication" replace state={{ from: location }} />;
  }

  return children;
};


const BlogPosts = []
  new Members(
    '1091','Jack Williamson','jackWill@hello.com','FDM Business Consultant','Is meant to work on the Schedule Tab'

  )
  '1': {
    name: 'Wasim',
    description: 'Is meant to work on the Schedule Tab, hes completed it as now you can add any task to the schedule'
  },
  '2': {
    name: 'Amr Khalid A Bawzeer',
    description: 'Is meant to work on the profile UI and Edit Profile UI'
  },
  '3': {
    name: 'Aadil Sayed',
    description: 'Is meant to work on the Login Page UI'
  },
  '4': {
    name: 'Haotian Chen',
    description: 'Is meant to work on the Signup page UI'
  },
  '5': {
    name: 'Santhya Kugathas',
    description: 'Is meant to work on the Menu Tab, which is suppost to be able to assign user permissions and assign group members to a line manager'
  },
  '6': {
    name: 'Naivedhya Premal Shah',
    description: 'Is meant to work on the Menu Tab, which is suppost to be able to assign user permissions and assign group members to a line manager'
  },
  '7': {
    name: 'Venkata Stripada Gayatri Sistla',
    description: 'Is meant to work on the Menu Tab, which is suppost to be able to assign user permissions and assign group members to a line manager'
  },
};


function App() {
  return (
    <Router>
      <AuthProvider>
      <Routes>
        <Route index element={<Login />} />
        <Route path="authentication" element={<Outlet />} >
          <Route path="/" element={<Login title="title" auth={useAuth()}/>} />
          <Route path="signup" element={<Signup auth={useAuth()}/>} />
        </Route>

        <Route path='dashboard' element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }>
          <Route path="scheduleTab" element={<Outlet />} >
            <Route path='/' element={<Schedule />} />
          </Route>
          <Route path="profileTab" element={<Outlet />} >
            <Route path="/" element={ <Profile />} />
            <Route path="edit-profile" element={ <EditProfile />} />
          </Route>
          <Route path="menu-tab" element={<Outlet />}>
            <Route path="/" element={<OrganisationMembers />} />
            <Route path=":slug" element={<Member />} />
          </Route>
        </Route>
      </Routes>
      </AuthProvider>
    </Router>
  );
}


const Login = props => {
  const { onLogin } = useAuth();
  const location = useLocation();

return(
<<<<<<< Updated upstream
    <div className='box'>
        <h1>Login</h1>
        <div>
          <form>
            <div>
              <label>
                Username:
                <input type="username" placeholder="Enter Username" name="Username" /*value={this.state.details.username}*//>
              </label>
            </div>
            <div>
              <label>
                Password:
                <input type="password" placeholder="Enter Password" name="Password" /*value={this.state.details.password}*/ />
              </label>
            </div>
            <div>
            <button className='btn' type="button" onClick={onLogin}>
            Login
            </button>
            <Link to="signup">
              <button className='btn' type="button">
                  Sign Up
              </button>
            </Link>
            </div>
          </form>
        </div>
    </div>
=======
  <div>
        <title>login</title>
        <link rel="stylesheet" type="text/css" href="fontawesome/css/all.min.css" />
        <link rel="stylesheet" type="text/css" href="login.css" />
        <div className="containerw">
          <div className="headerw">
            <h1>Login</h1>
          </div>
          <div className="mains">
            <form>
              <span>
                <i className="fa fa-user" />
                <input type="text" placeholder="Username" name />
              </span><br />
              <span>
                <i className="fa fa-lock" />
                <input type="password" placeholder="Password" name />
              </span><br />
              <button className='btn' type="button" onClick={onLogin}>Login</button>
              <Link to="signup">
                <button className='btn' type="button">
                    Sign Up
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>

>>>>>>> Stashed changes
  )
}

const Signup = props => {
  const { onLogin } = useAuth();
  return(
      <div>
          <h1>Signup</h1>
          <button type="button" onClick={onLogin}>
              Signup
          </button>
      </div>
  )
}

const Dashboard = () => {
  return (
    <div>
      <Navigation auth={useAuth()}/>
      <Outlet />
    </div>
  )
}

function OrganisationMembers() {
  return (
    <div className="html">
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="stylesheet" href="css.css" />
        {/*font-awesome */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        {/*Bootstrap 4*/}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossOrigin="anonymous" />
         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" />

        <div className="container">
          <div className="row">
            {/* team section*/}
            {/*1st member*/}
            <div className="col-md-3 col-sm-6">
              <div className="our-team">
                <div className="pic">
            <img src="https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-755-1-1024x683.jpg" />
                </div>
                <h3 className="title">Jack Williamson</h3>
                <span className="post">FDM Business Consultant</span>
                {/*social icon*/}
                <ul className="social">
                  <li><a href="https://www.facebook.com" className="fa fa-facebook" /></li>
                  <li><a href="https://www.google.com" className="fa fa-twitter" /></li>
                  <li><a href="https://www.twitter.com" className="fa fa-google-plus" /></li>
                  <li><a href="https://www.linkedin.com" className="fa fa-linkedin" /></li>
                  <li><button onclick="myFunction()" type="button" class="btn btn-light"><span class="bi bi-plus"></span></button></li>

                </ul>
              </div>
            </div>
            {/*2nd member*/}
            <div className="col-md-3 col-sm-6">
              <div className="our-team">
                <div className="pic">
                  <img src="https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-1029-1024x683.jpg" />
                </div>
                <h3 className="title">Alex Damion</h3>
                <span className="post">Team Leader</span>
                {/*social Icon*/}
                <ul className="social">
                  <li><a href="https://www.facebook.com" className="fa fa-facebook" /></li>
                  <li><a href="https://www.google.com" className="fa fa-twitter" /></li>
                  <li><a href="https://www.twitter.com" className="fa fa-google-plus" /></li>
                  <li><a href="https://www.linkedin.com" className="fa fa-linkedin" /></li>
                </ul>
              </div>
            </div>
            {/*3rd member*/}
            <div className="col-md-3 col-sm-6">
              <div className="our-team">
                <div className="pic">
                  <img src="https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-791-1-1024x683.jpg" />
                </div>
                <h3 className="title">Kristiana Watson</h3>
                <span className="post"> FDM Web Designer</span>
                {/*social icon*/}
                <ul className="social">
                  <li><a href="https://www.facebook.com" className="fa fa-facebook" /></li>
                  <li><a href="https://www.google.com" className="fa fa-twitter" /></li>
                  <li><a href="https://www.twitter.com" className="fa fa-google-plus" /></li>
                  <li><a href="https://www.linkedin.com" className="fa fa-linkedin" /></li>
                </ul>
              </div>
            </div>
            {/*4th member*/}
            <div className="col-md-3 col-sm-6">
              <div className="our-team">
                <div className="pic">
                  <img src="https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-177-1024x683.jpg" />
                </div>
                <h3 className="title">Isabelle Donker</h3>
                <span className="post">Team Leader</span>
                {/*social icon*/}
                <ul className="social">
                  <li><a href="https://www.facebook.com" className="fa fa-facebook" /></li>
                  <li><a href="https://www.google.com" className="fa fa-twitter" /></li>
                  <li><a href="https://www.twitter.com" className="fa fa-google-plus" /></li>
                  <li><a href="https://www.linkedin.com" className="fa fa-linkedin" /></li>
                </ul>
              </div>
            </div>
            {/*5th member*/}
            <div className="col-md-3 col-sm-6">
              <div className="our-team">
                <div className="pic">
                  <img src="https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-1663-1-1024x683.jpg" />
                </div>
                <h3 className="title">Shaun Connor</h3>
                <span className="post"> FDM Web Developer</span>
                {/*social icon*/}
                <ul className="social">
                  <li><a href="https://www.facebook.com" className="fa fa-facebook" /></li>
                  <li><a href="https://www.google.com" className="fa fa-twitter" /></li>
                  <li><a href="https://www.twitter.com" className="fa fa-google-plus" /></li>
                  <li><a href="https://www.linkedin.com" className="fa fa-linkedin" /></li>
                </ul>
              </div>
            </div>
            {/*6th member*/}
            <div className="col-md-3 col-sm-6">
              <div className="our-team">
                <div className="pic">
                  <img src="https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/Option-3-1024x683.jpg" />
                </div>
                <h3 className="title">Emma Dawson</h3>
                <span className="post">FDM Business Analyst</span>
                {/*social icon*/}
                <ul className="social">
                  <li><a href="https://www.facebook.com" className="fa fa-facebook" /></li>
                  <li><a href="https://www.google.com" className="fa fa-twitter" /></li>
                  <li><a href="https://www.twitter.com" className="fa fa-google-plus" /></li>
                  <li><a href="https://www.linkedin.com" className="fa fa-linkedin" /></li>
                </ul>
              </div>
            </div>
            {/*7th member*/}
            <div className="col-md-3 col-sm-6">
              <div className="our-team">
                <div className="pic">
                  <img src="https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-2397-1-2-1024x683.jpg" />
                </div>
                <h3 className="title">Mark Pieterson</h3>
                <span className="post">FDM Web Designer</span>
                {/*social icon*/}
                <ul className="social">
                  <li><a href="https://www.facebook.com" className="fa fa-facebook" /></li>
                  <li><a href="https://www.google.com" className="fa fa-twitter" /></li>
                  <li><a href="https://www.twitter.com" className="fa fa-google-plus" /></li>
                  <li><a href="https://www.linkedin.com" className="fa fa-linkedin" /></li>
                </ul>
              </div>
            </div>
            {/*8th member*/}
            <div className="col-md-3 col-sm-6">
              <div className="our-team">
                <div className="pic">
                  <img src="https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-1315-1024x683.jpg" />
                </div>
                <h3 className="title">Sarah Thomson</h3>
                <span className="post">FDM Accountant</span>
                {/*social icon*/}
                <ul className="social">
                  <li><a href="https://www.facebook.com" className="fa fa-facebook" /></li>
                  <li><a href="https://www.google.com" className="fa fa-twitter" /></li>
                  <li><a href="https://www.twitter.com" className="fa fa-google-plus" /></li>
                  <li><a href="https://www.linkedin.com" className="fa fa-linkedin" /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
}
function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}

function Member() {
  const { slug } = useParams();
  const member = BlogPosts[slug];

  const { name, description } = member;

  return (
    <div style={{ padding: 20 }}>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}
export default App;
