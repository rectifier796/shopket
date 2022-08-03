import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import { Box } from '@mui/material'

//components
import Header from './components/header/Header';
import DetailView from './components/details/DetailView';
import ContextProvider from './context/DataProvider';
import Cart from './components/cart/Cart';

function App() {
  return (
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Box style={{marginTop: 54}}>
            <Routes>
              <Route path= '/' element={<Home />} />
              <Route path= '/cart' element={<Cart />} />
              <Route path= '/product/:id' element={<DetailView />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </ContextProvider>
  );
}

export default App;