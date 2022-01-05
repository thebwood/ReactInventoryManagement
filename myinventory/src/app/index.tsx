import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Layout from './layout';
import AppRoutes from './routes/AppRoutes';



function App() {
  
  return (
    <Layout>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Layout>
  );
}

export default App;

