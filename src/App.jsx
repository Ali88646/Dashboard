import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Support from "./pages/Dashboard/Support/Support";
import TransactionPage from "./pages/Dashboard/Transactions/TransactionPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/transactionPage",
    element: <TransactionPage />,
  },
  {
    path: "/support",
    element: <Support />,
  },
]);
const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
