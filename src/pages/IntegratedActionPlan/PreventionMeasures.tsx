import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const PreventionMeasures = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Medida de prevenção registrada com sucesso!");
    // Lógica para salvar os dados
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Criação de Medidas de Prevenção</h1>
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Registrar Medida de Prevenção</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="measureName">Nome da Medida</Label>
              <Input id="measureName" placeholder="Ex: Programa de Bem-Estar, Ergonomia" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Descrição</Label>
              <Textarea id="description" placeholder="Descreva a medida e seus objetivos." />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="responsible">Responsável</Label>
              <Input id="responsible" placeholder="Nome ou Departamento" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="dueDate">Cronograma (Prazo)</Label>
              <Input id="dueDate" type="date" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="goal">Meta</Label>
              <Input id="goal" placeholder="Ex: Reduzir absenteísmo em 10%" />
            </div>
            <Button type="submit" className="w-full">Registrar Medida</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PreventionMeasures;