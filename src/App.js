import 'font-awesome/css/font-awesome.min.css';
import './assets/css/app.css';
import DashboardPage from './pages/DashboardPage';
import TypographyPage from './pages/TypographyPage'
import LoginPage from './pages/auth/LoginPage'
import ResetPassword from './pages/auth/ResetPassword';
import ProfilePage from './pages/profile/ProfilePage';
import ChangePasswordPage from './pages/profile/ChangePasswordPage';
import UserPreferencesPage from './pages/profile/UserPreferencesPage'
import AdminBlankPage from './pages/AdminBlankPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// User Management
import UserPage from './pages/user_management/UserPage';
import AccessPage from './pages/user_management/AccessPage';
import RolePage from './pages/user_management/RolePage';

// System Setup
import BranchPage from './pages/system_setup/BranchPage';
import UserPaCategoryPagege from './pages/system_setup/CategoryPage';
import DiscountPage from './pages/system_setup/DiscountPage';
import LoyaltyCardPage from './pages/system_setup/LoyaltyCardPage';
import ProductPage from './pages/system_setup/ProductPage';
import SupplierPage from './pages/system_setup/SupplierPage';
import TaxPage from './pages/system_setup/TaxPage';






function App() {
  return (
        <Router>
            <Routes>
                <Route exact path='/' element={<LoginPage/>} />
                <Route exact path='/dashboard' element={<DashboardPage/>} />
                <Route exact path='/reset-password' element={<ResetPassword/>} />
                <Route exact path='/profile' element={<ProfilePage/>} />
                <Route exact path='/change-password' element={<ChangePasswordPage/>} />
                <Route exact path='/preferences' element={<UserPreferencesPage/>} />
                <Route exact path='/typography' element={<TypographyPage/>} />
                <Route exact path='/blank-page' element={<AdminBlankPage/>} />

                {/* User Management */}
                <Route exact path='/access' element={<AccessPage/>} />
                <Route exact path='/role' element={<RolePage/>} />
                <Route exact path='/user' element={<UserPage/>} />

                {/* System Setup */}
                <Route exact path='/branch' element={<BranchPage/>} />
                <Route exact path='/category' element={<UserPaCategoryPagege/>} />
                <Route exact path='/discount' element={<DiscountPage/>} />
                <Route exact path='/loyalty-card' element={<LoyaltyCardPage/>} />
                <Route exact path='/product' element={<ProductPage/>} />
                <Route exact path='/supplier' element={<SupplierPage/>} />
                <Route exact path='/tax' element={<TaxPage/>} />






            </Routes>  
        </Router>
    )
}

export default App;
