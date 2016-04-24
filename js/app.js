global.React = require("react");
global.ReactDom = require("react-dom");

const MainContent = require("./components/MainContent");

ReactDom.render(
    <MainContent />,
	document.getElementById( 'container' )
);