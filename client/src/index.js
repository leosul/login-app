import ReactDOM from 'react-dom';
import './index.css';
import routes from './routes'
require('dotenv').config()

ReactDOM.render(routes,
    document.getElementById('root')
);