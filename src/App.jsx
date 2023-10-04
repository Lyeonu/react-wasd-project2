import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import HomePage from './pages/HomePage';
import RentPage from './pages/RentPage';
import MyPage from './pages/MyPage';
import ManagerPage from './pages/ManagerPage';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path='/rent' element={<RentPage />} />
                    <Route path='/my-page/:id' element={<MyPage />} />
                    <Route path='/manager' element={<ManagerPage />} />              
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;