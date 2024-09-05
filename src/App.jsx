import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AttendanceProvider } from "./components/AttendanceContext";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import Layout from "./layout/Layout";
import Attendance from "./pages/Attendance";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Signin />} />
      <Route path="/dashboard" element={<Layout />}>
      <Route index element={<Dashboard />} />
      <Route path="attendance" element={<Attendance/>} />
      </Route>     
    </Route>
  )
);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <AttendanceProvider>
    <div className="max-w-[1440px] mx-auto min-h-[100vh] font-poppins bg-[#F5F5F5] w-[100%]">
      <RouterProvider router={router} />
    </div>
    </AttendanceProvider>
       </QueryClientProvider>
  );
};

export default App