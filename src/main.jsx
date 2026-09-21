
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router.jsx'
import ThemeProvider from './context/ThemeContext.jsx';
import ErrorBoundary from './components/ErrorBoundary';


ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <ErrorBoundary>
            <RouterProvider router={router}/>
        </ErrorBoundary>
    </ThemeProvider>
)
