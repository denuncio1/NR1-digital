import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const QuestionnairesAnalysis = () => {
  const handleAnalyze = () => {
    toast.info("Simulando análise de questionários e fatores psicossociais.");
    // Lógica para análise
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Questionários, Entrevistas e Análise de Fatores Psicossociais</h1>
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Gerenciar Avaliações Psicossociais</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Gerencie questionários, registre entrevistas e realize a análise de fatores psicossociais para uma avaliação completa.
          </p>
          <Button onClick={handleAnalyze} className="w-full">Iniciar Análise</Button>
          <p className="text-sm text-muted-foreground">
            (Aqui você pode adicionar links para os questionários e ferramentas de análise.)
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuestionnairesAnalysis;