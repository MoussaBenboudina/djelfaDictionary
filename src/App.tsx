import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchWord from "./components/Words";
import WordDetail from "./components/WordDetail";
import Header from "./components/header";

function App() {
  return (
    <div className="flex flex-col items-center dark:bg-dark-color-1 min-h-screen dark:text-white relative transition-colors duration-500 ease-in-out">
      <Header />
      <Routes>
        <Route path="/" element={<SearchWord />} />
        <Route path="/words/:id" element={<WordDetail />} />
      </Routes>
    </div>
  );
}

export default function Root() {
  return (
    <Router basename="/djelfaDictionary">
      <App />
    </Router>
  );
}
