"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { BackToMenuButton } from "@/components/BackToMenuButton";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Email inválido."),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres."),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

export function Login() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [showResetDialog, setShowResetDialog] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onLoginSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    setLoading(true);
    try {
      await signIn(data.email, data.password);
      toast({
        title: "Login bem-sucedido!",
        description: "Redirecionando para o painel...",
      });
      navigate("/");
    } catch (error: any) {
      toast({
        title: "Erro no Login",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    import { ReactElement } from "react";
    export function Login(): ReactElement {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background">
          <BackToMenuButton />
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Acesso Restrito (RH)</CardTitle>
              <CardDescription>
                O login do RH foi desabilitado temporariamente.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      );
    }
      toast({
