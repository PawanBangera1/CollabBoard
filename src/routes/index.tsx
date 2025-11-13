import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "../components/layout";
import { AuthLayout } from "../components/auth-layout";
import Signin from "../pages/auth/Signin";
import Signup from "../pages/auth/Signup";
import ForgetPassword from "../pages/auth/ForgetPassword";
import ProjectOverview from "../pages/project/ProjectOverview";
import TaskOverview from "../pages/task/TaskOverview";
import ProjectDetailedOverview from "@/pages/project/ProjectDetailedOverview";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Main app routes with sidebar and navbar */}
      <Route
        path="/"
        element={
          <AuthLayout>
            <Signin />
          </AuthLayout>
        }
      />
      <Route
        path="/project-overview"
        element={
          <Layout>
            <ProjectOverview />
          </Layout>
        }
      />

      <Route
        path="/task-overview"
        element={
          <Layout>
            <TaskOverview />
          </Layout>
        }
      />

      <Route
        path="/project-detailed-overview/:id"
        element={
          <Layout>
            <ProjectDetailedOverview />
          </Layout>
        }
      />

      {/* Auth routes without sidebar and navbar */}
      <Route
        path="/signin"
        element={
          <AuthLayout>
            <Signin />
          </AuthLayout>
        }
      />
      <Route
        path="/signup"
        element={
          <AuthLayout>
            <Signup />
          </AuthLayout>
        }
      />
      <Route
        path="/forgot-password"
        element={
          <AuthLayout>
            <ForgetPassword />
          </AuthLayout>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
