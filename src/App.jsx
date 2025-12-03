import { RatingProvider } from "./context/RatingContext";
import { Routes, Route } from "react-router-dom";
import FilmPage from "./pages/FilmPage";
import UserProfile from "./pages/UserProfile";
import ActivityDashboard from "./pages/ActivityDashboard";

function App() {
  return (
    <RatingProvider>
      <Routes>
        <Route path="/" element={<FilmPage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/dashboard" element={<ActivityDashboard />} />
      </Routes>
    </RatingProvider>
  );
}

export default App;
