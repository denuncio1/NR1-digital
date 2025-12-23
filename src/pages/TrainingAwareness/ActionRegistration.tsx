import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const ActionRegistration = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Registro de ação de capacitação realizado com sucesso!");
    // Lógica para salvar os dados
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Registro de Ações de Capacitação e Periodicidade</h1>
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Registrar Ação de Capacitação</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="actionName">Nome da Ação</Label>
              <Input id="actionName" placeholder="Ex: Treinamento sobre Assédio Moral" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Descrição</Label>
              <Textarea id="description" placeholder="Detalhe o conteúdo e objetivo da ação." />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="datePerformed">Data de Realização</Label>
              <Input id="datePerformed" type="date" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="periodicity">Periodicidade</Label>
              <Select>
                <SelectTrigger id="periodicity">
                  <SelectValue placeholder="Selecione a periodicidade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="anual">Anual</SelectItem>
                  <SelectItem value="semestral">Semestral</SelectItem>
                  <SelectItem value="trimestral">Trimestral</SelectItem>
                  <SelectItem value="mensal">Mensal</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="participants">Número de Participantes</Label>
              <Input id="participants" type="number" placeholder="Ex: 50" />
            </div>
            <Button type="submit" className="w-full">Registrar Ação</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ActionRegistration;