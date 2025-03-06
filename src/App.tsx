import { Route, Routes } from "react-router";
import { LoginPage } from "./pages/login-page";
import { PasswordResetPage } from "./pages/password-reset";
import { ConfirmEmailPage } from "./pages/confirm-email";
import Results from "./pages/results";
import { DashboardPage } from "./pages/dashboard";

function App() {
  return (
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path="password-reset" element={<PasswordResetPage />} />
      <Route path="confirm-email" element={<ConfirmEmailPage />} />
      <Route path="results" element={<Results />} />
      <Route path="dashboard" element={<DashboardPage />} />
    </Routes>
  );
}

export default App;
