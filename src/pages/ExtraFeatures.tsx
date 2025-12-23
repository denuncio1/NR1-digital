import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const ExtraFeatures = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Funcionalidades Extras</h1>
      <Card>
        <CardHeader>
          <CardTitle>Conteúdo de Funcionalidades Extras</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Aqui serão listadas e gerenciadas funcionalidades adicionais da plataforma.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExtraFeatures;