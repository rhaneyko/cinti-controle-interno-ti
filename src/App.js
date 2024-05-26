import './App.css';
import Home from './components/pages/Home/Home';
import RoutesApp from './routes/routes';
import GlobalStyle from './styles/global';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <RoutesApp/>
      <GlobalStyle/>
    </>
  );
}

export default App;
