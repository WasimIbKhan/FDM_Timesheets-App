import React from 'react';
import './App.css';
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


const BlogPosts = {
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
  console.log ('hello world')
  return(
      <div>
          <h1>Login</h1>
          <button type="button" onClick={onLogin}>
              Login
          </button>
          <Link to="signup">
            <button type="button">
                Sign Up
            </button>
          </Link>
      </div>
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
    <div style={{ padding: 20 }}>
      <h2>Organisation Members</h2>
      <ul>
      {Object.entries(BlogPosts).map(([slug, { name }]) => (
        <li key={slug}>
          <Link to={`${slug}`}>
            <h3>{name}</h3>
          </Link>
        </li>
      ))}
      </ul>
    </div>
    
  );
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
