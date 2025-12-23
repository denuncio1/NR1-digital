import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const TrainingTracks = () => {
  const handleAccessTracks = () => {
    toast.info("Simulando acesso às trilhas de treinamento.");
    // Lógica para navegar ou exibir trilhas de treinamento
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Trilhas de Treinamento e Sensibilização</h1>
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Gerenciar Trilhas de Treinamento (NR-1 Item 1.4.1.1)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Acesse e gerencie trilhas de treinamento sobre temas como assédio, violência, diversidade e saúde mental, conforme exigido pela NR-1.
          </p>
          <Button onClick={handleAccessTracks} className="w-full">Acessar Trilhas de Treinamento</Button>
          <p className="text-sm text-muted-foreground">
            (Esta funcionalidade pode integrar módulos de e-learning ou materiais educativos.)
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrainingTracks;