import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const LegalCompliance = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Conformidade Legal Automatizada</h1>
      <Card>
        <CardHeader>
          <CardTitle>Conteúdo de Conformidade Legal</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Esta seção ajudará a garantir a conformidade legal automatizada com as normas regulamentadoras.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default LegalCompliance;