
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainNavigation from './Components/MainNavigation'
import SchedulePage from './Pages/ScheduleTab/Schedule'
import ProfilePage from './Pages/ProfileTab/Profile'
import MenuListPage from './Pages/MenuTab/MenuList'
function App() {
  return (
    <div className="App">
      <MainNavigation />
      <Routes>
        <Route path='/' element={<SchedulePage />} exac/>
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/menu' element={<MenuListPage />}/>
      </Routes>
    </div>
  );
}

export default App;
