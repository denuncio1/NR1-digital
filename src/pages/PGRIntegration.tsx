import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const PGRIntegration = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Integração com PGR</h1>
      <Card>
        <CardHeader>
          <CardTitle>Conteúdo de Integração com PGR</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Esta página detalhará a integração com o Programa de Gerenciamento de Riscos (PGR).
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PGRIntegration;