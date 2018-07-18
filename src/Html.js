import React from 'react';

const Html = (props) => {
  const assets = Object.keys(props.locals.webpackStats.compilation.assets);
  const scripts = assets.filter(value => value.match(/\.js$/));

  return (
    <html>
      <head><title>My Static Site</title></head>
      <body>
        <div id="app">
          {props.children}
        </div>
        {scripts.map((item, index) => <script key={index} src={`http://localhost:8080/${item}`}></script>)}
      </body>
    </html>
  );
};

export default Html;
