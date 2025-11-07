import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "../components/layout";
import { AuthLayout } from "../components/auth-layout";
import Home from "../pages/Home";
import Signin from "../pages/auth/Signin";
import Signup from "../pages/auth/Signup";
import ForgetPassword from "../pages/auth/ForgetPassword";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Main app routes with sidebar and navbar */}
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/home"
        element={
          <Layout>
            <Home />
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

      {/* Catch all redirect */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
