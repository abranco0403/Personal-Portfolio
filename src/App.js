import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';

import { ProductList } from './components/ProductList';
import { ProductDetail } from './components/ProductDetail';
import { Contact } from './components/Contact';
import { PageNotFound } from './components/PageNotFound';
import { ContactBr } from './components/ContactBr';
import { ContactCa } from './components/ContactCa';
import { ContactUs } from './components/ContactUs';

import './App.css';

function App() {
  return (
    <div className="box-border m-0 p-0">
      <Header />
      <main className='max-w-[80rem] min-h-[100vh] mx-auto'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='products' element={<ProductList />} />
          <Route path='products/:id/:name' element={<ProductDetail />}></Route>
          <Route path='contact' element={<Contact />} >
            <Route path='br' element={<ContactBr />} />
            <Route path='ca' element={<ContactCa />} />
            <Route path='us' element={<ContactUs />} />
          </Route>
          <Route path='*' element={<PageNotFound title='404' />} />
        </Routes>
      </main>
      <Footer />
    </div>
);
}

export default App;
