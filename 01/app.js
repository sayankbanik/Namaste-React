// create an element with React
const heading = React.createElement(
  "h1",
  { id: "heading", sad: "lopo" },
  "Hello World! from React."
);
// createElement("tag",{attributes},"tag content")
console.log(heading); // object
// createElement(type,props(attributes,children)) / returns a react element
// create the root to manipulate/adding in the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
// it's added to DOM, now we have to render it in the page
root.render(heading);
// render(object/reactElement) , it accepts the reactElement as an object and convert it to html tag
