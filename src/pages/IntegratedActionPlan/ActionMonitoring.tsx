import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const ActionMonitoring = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Acompanhamento de ação registrado com sucesso!");
    // Lógica para salvar os dados
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Acompanhamento de Execução e Eficácia das Ações</h1>
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Registrar Acompanhamento de Ação</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="actionName">Ação</Label>
              <Input id="actionName" placeholder="Ex: Treinamento de Gestão de Estresse" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="status">Status da Execução</Label>
              <Select>
                <SelectTrigger id="status">
                  <SelectValue placeholder="Selecione o status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nao-iniciada">Não Iniciada</SelectItem>
                  <SelectItem value="em-andamento">Em Andamento</SelectItem>
                  <SelectItem value="concluida">Concluída</SelectItem>
                  <SelectItem value="atrasada">Atrasada</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="efficacy">Eficácia da Ação</Label>
              <Select>
                <SelectTrigger id="efficacy">
                  <SelectValue placeholder="Avalie a eficácia" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nao-avaliada">Não Avaliada</SelectItem>
                  <SelectItem value="baixa">Baixa</SelectItem>
                  <SelectItem value="media">Média</SelectItem>
                  <SelectItem value="alta">Alta</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="observations">Observações</Label>
              <Textarea id="observations" placeholder="Adicione observações sobre a execução e eficácia." />
            </div>
            <Button type="submit" className="w-full">Registrar Acompanhamento</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ActionMonitoring;