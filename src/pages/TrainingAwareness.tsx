import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const TrainingAwareness = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Capacitação e Sensibilização</h1>
      <Card>
        <CardHeader>
          <CardTitle>Conteúdo de Capacitação</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Aqui serão disponibilizados materiais e recursos para capacitação e sensibilização sobre riscos ocupacionais.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrainingAwareness;