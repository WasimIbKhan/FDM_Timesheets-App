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
import Profile from './Pages/Pages/ProfileTab/Profile'
import EditProfile from './Pages/Pages/ProfileTab/EditProfile'

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
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
};


const BlogPosts = {
  '1': {
    name: 'Wasim',
    description: 'Is meant to work on the Schedule Tab, hes be able to create tasks, then add them to the schedule'
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
        <Route path="login" element={<Login auth={useAuth()}/>} />
        <Route path='dashboard' element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }>
          <Route path="schedule" element={<Home />} />
          <Route path="profileTab" element={<Outlet />} >
            <Route path="/" element={ <Profile />} />
            <Route path="edit-profile" element={ <EditProfile />} />
          </Route>
          <Route path="posts" element={<Posts />}>
            <Route path="/" element={<PostLists />} />
            <Route path=":slug" element={<Post />} />
          </Route>
        </Route>
      </Routes>
      </AuthProvider>
    </Router>
  );
}

const Home = () => {
  const { onLogin } = useAuth();
  
  return (
    <>
      <h2>Home (Public)</h2>

      <button type="button" onClick={onLogin}>
        Sign In
      </button>
    </>
  );
};

const Login = props => {
  const { onLogin } = useAuth();
  return(
      <div>
          <h1>Login</h1>
          <button type="button" onClick={onLogin}>
              Sign In
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
function About() {
  const { token } = useAuth();
  return (
    <div style={{ padding: 20 }}>
      <h2>About View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
      <div>Authenticated as {token}</div>
    </div>
  );
}

function Posts() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Organisation Members</h2>
      {/* render any matching child */}
      <Outlet />
    </div>
  );
}

function PostLists() {
  return (
    <ul>
      {Object.entries(BlogPosts).map(([slug, { name }]) => (
        <li key={slug}>
          <Link to={`${slug}`}>
            <h3>{name}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Post() {
  const { slug } = useParams();
  const post = BlogPosts[slug];

  const { title, description } = post;

  return (
    <div style={{ padding: 20 }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
export default App;
