import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ForgetPassword = () => {
  return (
    <>
      <Card className="w-80">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Reset password</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full">Send Reset Link</Button>
          <div className="text-center text-sm">
            Remember your password?{" "}
            <a href="/signin" className="underline">
              Sign in
            </a>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default ForgetPassword;
