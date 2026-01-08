import { useState } from "react";
import { useNavigate } from "react-router-dom";

// shadcn/ui
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// helper login admin
import { loginAdmin } from "./adminAuth";

export default function LoginAdminDialog() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (loginAdmin(username, password)) {
      setError("");
      navigate("/admin/dashboard"); // redirect ke dashboard
    } else {
      setError("Username atau password salah");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="bg-white text-[#5C3A21] px-4 py-1.5 rounded-md text-sm font-medium hover:bg-[#F3E6DB] transition"
        >
          Login Admin
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>Login Admin</DialogTitle>
        </DialogHeader>

        <Card>
          <CardContent className="space-y-4 pt-6">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Masukkan username"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan password"
              />
            </div>

            {error && <p className="text-sm text-red-500">{error}</p>}

            <Button className="w-full" onClick={handleLogin}>
              Login
            </Button>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
