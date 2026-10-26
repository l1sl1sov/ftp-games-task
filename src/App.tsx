import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router";
import HomePage from "@/pages/HomePage";
import { MainLayout } from "@/components/UI/MainLayout";
import { QueryClient } from "@tanstack/react-query";
import { GamePage } from "@/pages/GamePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const localStoragePersister = createSyncStoragePersister({
  storage: window.localStorage,
  key: "GAMES_APP_CACHE",
});

function App() {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{
        persister: localStoragePersister,
        maxAge: 5 * 60 * 1000,
        dehydrateOptions: {
          shouldDehydrateQuery: (query) => {
            return query.queryKey[0] === "game";
          },
        },
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/games/:slug" element={<GamePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PersistQueryClientProvider>
  );
}

export default App;
