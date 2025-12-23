import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const ReportAutomation = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Automação de Relatórios</h1>
      <Card>
        <CardHeader>
          <CardTitle>Conteúdo de Automação de Relatórios</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Esta funcionalidade permitirá a geração e automação de relatórios sobre os riscos e ações.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReportAutomation;