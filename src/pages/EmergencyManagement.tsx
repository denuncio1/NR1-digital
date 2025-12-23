import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const EmergencyManagement = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Gestão de Emergências</h1>
      <Card>
        <CardHeader>
          <CardTitle>Conteúdo de Gestão de Emergências</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Esta página conterá informações e ferramentas para o plano de gestão de emergências.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmergencyManagement;