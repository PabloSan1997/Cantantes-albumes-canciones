import {useRoutes, HashRouter, Navigate} from 'react-router-dom';
import { Home } from './pages/Home';
import { Song } from './pages/Song';
import { Singer } from './pages/Singer';
import { Album } from './pages/Album';

const Rutas = () => useRoutes([
  {
    path:'/home',
    element:<Home/>
  },
  {
    path:'/song',
    element:<Song/>
  },
  {
    path:'/singer',
    element:<Singer/>
  },
  {
    path:'/song',
    element:<Song/>
  },
  {
    path:'/album',
    element:<Album/>
  },
  {
    path:'/',
    element:<Navigate to='/home'/>
  }
]);

function App() {

  return (
    <HashRouter>
      <Rutas/>
    </HashRouter>
  )
}

export default App
