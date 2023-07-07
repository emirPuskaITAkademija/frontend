import ReactDOM from 'react-dom/client';
import App from './App';

//index.html -> DOM stablu rootDiv
const rootDiv = document.getElementById('root');
//root -> rootDIV -> virtuelnog React DOm 
const root = ReactDOM.createRoot(rootDiv);
root.render(<App />);