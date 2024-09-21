// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
// import DigitalIdentity from './pages/DigitalIdentity';
// import FinancialLiteracy from './pages/FinancialLiteracy';
// import TaxCompliance from './pages/TaxCompliance';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signin" element={<SignIn />} />
                    {/*<Route path="/signup" element={<SignUp />} />*/}
                    <Route path="/dashboard" element={<Dashboard />} />
                    {/*<Route path="/digital-identity" element={<DigitalIdentity />} />*/}
                    {/*<Route path="/financial-literacy" element={<FinancialLiteracy />} />*/}
                    {/*<Route path="/tax-compliance" element={<TaxCompliance />} />*/}
                </Routes>
                {/*<Footer />*/}
            </Router>
        </ThemeProvider>
    );
}

export default App;
