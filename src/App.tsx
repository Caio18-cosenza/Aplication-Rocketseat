import { Route, BrowserRouter } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

import { AuthContentextProvider } from './context/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthContentextProvider>
        <Route path='/' exact component={Home} />
        <Route path='/rooms/new' exact component={NewRoom} />
      </AuthContentextProvider>
    </BrowserRouter>
  );
}

export default App;
