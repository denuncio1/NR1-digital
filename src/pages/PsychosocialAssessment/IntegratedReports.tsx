import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const IntegratedReports = () => {
  const handleGenerateReport = () => {
    toast.info("Simulando geração de relatórios integrados.");
    // Lógica para gerar relatórios
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Relatórios Integrados ao Inventário e Plano de Ação</h1>
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Gerar Relatórios Integrados</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Gere relatórios completos que integram dados do inventário de riscos e do plano de ação psicossocial.
          </p>
          <Button onClick={handleGenerateReport} className="w-full">Gerar Relatório</Button>
          <p className="text-sm text-muted-foreground">
            (Os relatórios podem incluir gráficos, tabelas e análises de tendências.)
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default IntegratedReports;