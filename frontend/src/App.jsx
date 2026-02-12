import { BrowserRouter, Routes, Route } from "react-router-dom";
import LeadFormPage from "./pages/LeadFormPage";
import LeadListPage from "./pages/LeadListPage";
import LeadDetailPage from "./pages/LeadDetailPage";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LeadFormPage />} />
          <Route path="/leads" element={<LeadListPage />} />
          <Route path="/leads/:id" element={<LeadDetailPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
