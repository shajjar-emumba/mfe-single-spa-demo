import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../index.css';
import CardReact from './components/CardReact';

export default function Root(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<CardReact />} />
        <Route path="*" element={<CardReact />} />
      </Routes>
    </BrowserRouter>
  );
}
