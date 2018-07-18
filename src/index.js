import React from 'react';
import ReactDOMServer from 'react-dom/server';
import ReactDOM from 'react-dom';
import { StaticRouter, BrowserRouter, Route, Link } from 'react-router-dom';
import Html from './Html';
import App from './App';
import About from './About';
import Products from './Products';

const routes = (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/products/1">Product no. 1</Link>
      </li>
    </ul>

    <Route exact path="/" component={App} />
    <Route exact path="/about" component={About} />
    <Route exact path="/products/:id" component={Products} />
  </div>
);

export default locals =>
  ReactDOMServer.renderToString(
    <StaticRouter location={locals.path} context={{}}>
      <Html locals={locals}>
        {routes}
      </Html>
    </StaticRouter>
  );

if (typeof document !== 'undefined') {
  ReactDOM.render(
    <BrowserRouter>{routes}</BrowserRouter>,
    document.getElementById('app')
  )
}
