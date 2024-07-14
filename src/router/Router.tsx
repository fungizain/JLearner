import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

export default function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home} />
      </Routes>
    </BrowserRouter>
  );
}
