import "../css/main.css";
import Hello from "../img/hello.jpg";

//returns only one element but can be nested with children elements
function Welcome() {
  return (
    <>
      <div className="wrapper">
        <h1>Welcome To My App</h1>
        <nav className="nav-bar">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <img src={Hello} alt="Hello Image" />
        <p>
          Hello, I am an aspriing full stack web developer based out of
          California.
        </p>
      </div>
    </>
  );
}

export default Welcome;
