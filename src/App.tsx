import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router";
import HomePage from "@/pages/HomePage";
import { MainLayout } from "@/components/UI/MainLayout";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { GamePage } from "@/pages/GamePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { persistQueryClient } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

export const queryClient = new QueryClient();

const localStoragePersister = createSyncStoragePersister({
  storage: window.localStorage,
  key: "GAMES_APP_CACHE",
});

persistQueryClient({
  queryClient,
  persister: localStoragePersister,
  maxAge: 5 * 60 * 1000,
  //caching only detailed game for 5 minutes
  dehydrateOptions: {
    shouldDehydrateQuery: (query) => {
      return query.queryKey[0] === "game";
    },
  },
});

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
