import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

const Signin = () => {
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
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required placeholder="m@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" required type="password" />
          </div>
          <div className="text-end text-sm">
            <a href="/forgot-password" className="underline">
              Forgot your password?
            </a>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Link to="/home" className="w-full">
            <Button className="w-full" onClick={() => {}}>Sign In</Button>
          </Link>
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
