import { Outlet } from 'react-router-dom';
import Header from './shared/components/Header';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
