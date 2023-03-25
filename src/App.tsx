import { Header } from './components/Header';
import CssBaseline from '@mui/material/CssBaseline';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { EventosGerais } from './pages/EventosGerais';
import { ptBR } from 'date-fns/locale';



export function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
        <Header />
        <Routes>
          <Route path="/eventos" element={<EventosGerais />} />
        </Routes>
      </LocalizationProvider>
    </BrowserRouter>
  );
}
