import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const UpdateHistory = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Histórico de Atualizações por 20 Anos</h1>
      <Card>
        <CardHeader>
          <CardTitle>Conteúdo do Histórico de Atualizações</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Aqui será mantido um registro detalhado das atualizações e conformidades ao longo de 20 anos.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default UpdateHistory;