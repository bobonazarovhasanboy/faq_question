import React from 'react'
import ReactDOM from 'react-dom/client'
import FAQ from './pages/aiLanding/AiLanding.jsx'
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<FAQ />
	</React.StrictMode>
)



reportWebVitals()
