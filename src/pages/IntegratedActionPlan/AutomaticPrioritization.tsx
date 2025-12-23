import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const AutomaticPrioritization = () => {
  const handlePrioritize = () => {
    toast.info("Priorização automática de ações acionada!");
    // Lógica para simular a priorização
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Priorização Automática de Ações</h1>
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Priorizar Ações com Base em Trabalhadores Expostos</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Esta funcionalidade permite priorizar automaticamente as ações do plano com base no número de trabalhadores expostos aos riscos.
          </p>
          <Button onClick={handlePrioritize} className="w-full">Executar Priorização Automática</Button>
          <p className="text-sm text-muted-foreground">
            (A priorização será exibida em uma tabela ou lista após a execução.)
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AutomaticPrioritization;