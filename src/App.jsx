//.JSX is optional.
import Welcome from "../src/components/Welcome";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

//Enclosing the components inside a fragment using <> </>. Div tags can also be used
function App() {
  return (
    <>
      <Welcome />
      <Header />
      <Footer />
    </>
  );
}

export default App;
