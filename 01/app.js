/**
 * Create this nested HTML using React
 *
 * <div id="parent">
 *      <div class="child">
 *          <h1>I am the h1 tag</h1>
 *          <h2>I am the h2 tag</h2>
 *      </div>
 *      <div class="child">
 *      <h2>I am the nect h2</h2>
 *      </div>
 * </div>
 *
 *
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { className: "child" }, [
    React.createElement("h1", {}, "I am the h1 tag"),
    React.createElement("h2", {}, "I am the h2 element"),
  ]),
  React.createElement(
    "div",
    { className: "child" },
    React.createElement("h2", {}, "I am the next h2")
  ),
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

/**
 * if i build it in this way will get below error
 * react.development.js:199 Warning: Each child in a list should have a unique "key" prop.
 * and also
 * if we build this way, it is not efficient and also complicated
 * now JSX come into the picture
 */
