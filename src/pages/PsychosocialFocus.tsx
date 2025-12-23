import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const PsychosocialFocus = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Foco em Riscos Psicossociais</h1>
      <Card>
        <CardHeader>
          <CardTitle>Conteúdo de Foco em Riscos Psicossociais</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Esta página aprofundará o foco e as ferramentas específicas para riscos psicossociais.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PsychosocialFocus;