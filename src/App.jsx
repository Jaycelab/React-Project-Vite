//.JSX is optional.
import Welcome from "../src/components/Welcome";
import Footer from "../src/components/Footer";

//Enclosing the components inside a fragment using <> </>. Div tags can also be used
function App() {
  return (
    <>
      <Welcome />
      <Footer />
    </>
  );
}

export default App;
