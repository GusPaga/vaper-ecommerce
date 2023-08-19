import { Layout } from "./components/Layout/Layout";
import { Form } from "./components/Form/Form";
import {
  BrowserRouter as Browser,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <div>
      <Browser>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/form" element={<Form />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>
      </Browser>
    </div>
  );
}

export default App;
