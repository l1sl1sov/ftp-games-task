import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router";
import HomePage from "@/pages/HomePage";
import { MainLayout } from "@/components/UI/MainLayout";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { GamePage } from "@/pages/GamePage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/games/:slug" element={<GamePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
