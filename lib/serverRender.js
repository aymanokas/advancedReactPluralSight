const React = require("react");
const ReactDOMServer = require("react-dom/server");
const App = require("./components/App");

const serverRender = () => {
    return ReactDOMServer.renderToString(
        <App />
    );
};

export default serverRender;