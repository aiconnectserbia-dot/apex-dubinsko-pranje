import { Toaster } from "@/components/ui/toaster"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import Home from './pages/Home';
import DubinskoCiscenjePancevo from './pages/DubinskoCiscenjePancevo';
import CiscentjeNamestajaPancevo from './pages/CiscentjeNamestajaPancevo';
import PranjeTepiha from './pages/PranjeTepiha';
import DubinskoPranjeKola from './pages/DubinskoPranjeKola';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dubinsko-ciscenje-pancevo" element={<DubinskoCiscenjePancevo />} />
        <Route path="/ciscenje-namestaja-pancevo" element={<CiscentjeNamestajaPancevo />} />
        <Route path="/pranje-tepiha-pancevo" element={<PranjeTepiha />} />
        <Route path="/dubinsko-pranje-kola-pancevo" element={<DubinskoPranjeKola />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;