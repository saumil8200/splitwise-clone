import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import { GroupForm } from './components';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="addgroup" element={<GroupForm />} />
    </Route>
  )
);

export default router;