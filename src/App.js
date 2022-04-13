import React, { useEffect, useState, useCallback } from 'react';
import { Provider, useDispatch, useSelector } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import './App.css';
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import {getFirestore, doc, setDoc } from "firebase/firestore"; 
import * as userAction from './store/action/user'
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
import userReducer from './store/reducer/user'
import Navigation from './Components/MainNavigation'
import Schedule from './Pages/ScheduleTab/Schedule'
import Profile from './Pages/ProfileTab/Profile'
import EditProfile from './Pages/ProfileTab/EditProfile'

const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

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

const Navigator = () => {

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
            <Route path="/" element={<Schedule />} />
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
};


function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyA2v8gZk5ukxLAPvh-_XopGbYP4DTMkePU",
    authDomain: "fdm-timesheet-app.firebaseapp.com",
    projectId: "fdm-timesheet-app",
    storageBucket: "fdm-timesheet-app.appspot.com",
    messagingSenderId: "561581032823",
    appId: "1:561581032823:web:2642285e26fa03c6980d72"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}


const Login = props => {
  const { onLogin } = useAuth();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const auth = getAuth();
  const onSubmit = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then(async(userCredential) => {
      // Signed in 
      onLogin()
      const user = userCredential.user;
      await dispatch(userAction.fecthUser(user.uid))
      

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    
  }
  return(
      <div className='box'>
          <h1>Login</h1>
          <div>
            <form>
              <div>
                <label>
                  Username:
                  <input type="username" placeholder="Enter Username" name="Username" onChange={event => setEmail(event.target.value)}/>
                </label>
              </div>
              <div>
                <label>
                  Password:
                  <input type="password" placeholder="Enter Password" name="Password" onChange={event => setPassword(event.target.value)} />
                </label>
              </div>
              <div>
              <button className='btn' type="button" onClick={onSubmit}>
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
    )
}

const Signup = props => {
  const {onLogin} = useAuth();
  return(
    <div className='Signup'>
      <Form />
    </div>
  );
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
  const dispatch = useDispatch()
  const users = useSelector(state => state.user.users)
  const [loading, setIsLoading] = useState(false)
  
  const loadUsers = useCallback(async () => {
    try {
      await dispatch(userAction.fecthUsers());
    } catch(err) {
      console.log(err.message);
    }
  }, [dispatch, setIsLoading]);

  useEffect(() => {
    setIsLoading(true)
    loadUsers().then(
      setIsLoading(false)
    )
  }, [dispatch]);

  if(loading) {
    return(
      <div>here</div>
    )
  }
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
            {users.map(user => (
              <div className="col-md-3 col-sm-6">
              <div className="our-team">
                <div className="pic">
                  <img src={user.profileImage} />
                </div>
                <h3 className="title">{user.name}</h3>
                <span className="post">{user.description}</span>
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
            ))}
          </div>
        </div>
      </div>
  )

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
