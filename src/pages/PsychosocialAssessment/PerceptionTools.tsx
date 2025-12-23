import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const PerceptionTools = () => {
  const handleLaunchTool = () => {
    toast.info("Simulando lançamento de ferramenta de coleta de percepção.");
    // Lógica para lançar ferramenta
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Ferramentas para Coleta de Percepção dos Trabalhadores</h1>
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Coleta de Percepção (NR-1 Item 1.5.3.3)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Utilize ferramentas para coletar a percepção dos trabalhadores sobre os riscos ocupacionais, conforme exigido pela NR-1.
          </p>
          <Button onClick={handleLaunchTool} className="w-full">Iniciar Ferramenta de Coleta</Button>
          <p className="text-sm text-muted-foreground">
            (Esta funcionalidade pode integrar questionários ou outras formas de feedback.)
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PerceptionTools;