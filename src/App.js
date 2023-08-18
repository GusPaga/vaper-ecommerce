import { Layout } from "./components/Layout/Layout";
import { Carrousel } from "./components/Carrousel/Carrousel.jsx";
import { GoUp } from "./components/GoUpButt.jsx";
import { Cards } from "./components/Cards/Cards.jsx";

function App() {
  return (
    <div>
      <Layout>
        <Carrousel />
        <Cards />
        <GoUp />
      </Layout>
    </div>
  );
}

export default App;
