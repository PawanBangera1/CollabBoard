import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link,useNavigate } from "react-router-dom";


const Signin = () => {
  const [username,setUsername]=useState<string>("");
  const [password,setPassword]=useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if(username.length === 0 || password.length === 0){
      alert("Please enter username and password");
    } else {
      navigate("/project-overview");
    }
  }
  return (
    <>
      <div className="absolute top-4 right-4">
      </div>
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Sign in</CardTitle>
          <CardDescription>
            Enter your email below to sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" type="username" value={username} onChange={(e) => setUsername(e.target.value)} required placeholder="m@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" required type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="text-end text-sm">
            <a href="/forgot-password" className="underline">
              Forgot your password?
            </a>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
            <Button className="w-full" onClick={handleSubmit}>Sign In</Button>
          <div className="text-center text-sm">
            Don't have an account?{" "}
            <a href="/signup" className="underline">
              Sign up
            </a>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default Signin;
