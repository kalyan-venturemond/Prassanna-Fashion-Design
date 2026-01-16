import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import CourseDetails from "./pages/CourseDetails";
import Policies from "./pages/Policies";
import Webinars from "./pages/Webinars";
import WebinarDashboard from "./pages/dashboard/WebinarDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

import { AdminWebinarProvider } from "./context/AdminWebinarContext";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminWebinars from "./pages/admin/AdminWebinars";
import AdminWebinarForm from "./pages/admin/AdminWebinarForm";
import AdminRegistrations from "./pages/admin/AdminRegistrations";
import AdminLiveSessions from "./pages/admin/AdminLiveSessions";
import AdminTrainers from "./pages/admin/AdminTrainers";
import AdminTrainerForm from "./pages/admin/AdminTrainerForm";
import AdminSettings from "./pages/admin/AdminSettings";

import Login from "./pages/Login";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AdminWebinarProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/courses" element={<CourseDetails />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/webinars" element={<Webinars />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard/webinars" element={<WebinarDashboard />} />

            {/* Admin Routes */}
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/webinars" element={<AdminWebinars />} />
            <Route path="/admin/webinars/new" element={<AdminWebinarForm />} />
            <Route path="/admin/webinars/edit/:id" element={<AdminWebinarForm />} />
            <Route path="/admin/registrations" element={<AdminRegistrations />} />
            <Route path="/admin/live-sessions" element={<AdminLiveSessions />} />
            <Route path="/admin/trainers" element={<AdminTrainers />} />
            <Route path="/admin/trainers/new" element={<AdminTrainerForm />} />
            <Route path="/admin/trainers/edit/:id" element={<AdminTrainerForm />} />
            <Route path="/admin/settings" element={<AdminSettings />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AdminWebinarProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
