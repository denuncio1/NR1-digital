import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const AutomaticMeasuresSuggestion = () => {
  const [riskType, setRiskType] = useState<string>("");
  const [suggestedMeasures, setSuggestedMeasures] = useState<string[]>([]);

  const getMeasuresSuggestion = () => {
    if (!riskType) {
      toast.error("Por favor, selecione um tipo de risco.");
      setSuggestedMeasures([]);
      return;
    }

    let measures: string[] = [];
    switch (riskType) {
      case "fisico":
        measures = [
          "Eliminação da fonte de ruído/vibração",
          "Controle de engenharia (isolamento, barreiras)",
          "Controle administrativo (limitação de tempo de exposição)",
          "Uso de EPIs (protetores auriculares)",
          "Monitoramento ambiental regular",
        ];
        break;
      case "quimico":
        measures = [
          "Substituição de substâncias perigosas",
          "Ventilação e exaustão localizadas",
          "Armazenamento seguro de produtos químicos",
          "Treinamento sobre manuseio seguro",
          "Uso de EPIs (luvas, máscaras, óculos)",
        ];
        break;
      case "biologico":
        measures = [
          "Vacinação e imunização",
          "Higiene pessoal e sanitização de ambientes",
          "Descarte adequado de resíduos biológicos",
          "Controle de vetores e pragas",
          "Uso de EPIs (luvas, máscaras, aventais)",
        ];
        break;
      case "ergonomico":
        measures = [
          "Análise ergonômica do trabalho (AET)",
          "Ajuste de mobiliário e equipamentos",
          "Pausas e rodízio de tarefas",
          "Treinamento de postura e movimentação",
          "Ginástica laboral",
        ];
        break;
      case "psicossocial":
        measures = [
          "Programas de gestão de estresse",
          "Canais de comunicação e feedback",
          "Promoção de equilíbrio vida-trabalho",
          "Treinamento de liderança em gestão de equipes",
          "Apoio psicológico e programas de bem-estar",
        ];
        break;
      default:
        measures = ["Nenhuma sugestão disponível para este tipo de risco."];
    }
    setSuggestedMeasures(measures);
    toast.success("Sugestões de medidas geradas!");
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Sugestão Automática de Medidas de Prevenção</h1>
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Sugestão de Medidas (Hierarquia NR-1)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Receba sugestões de medidas de prevenção e controle baseadas na hierarquia da NR-1 para diferentes tipos de riscos.
          </p>
          <div className="grid gap-2">
            <Label htmlFor="riskType">Tipo de Risco</Label>
            <Select onValueChange={setRiskType} value={riskType}>
              <SelectTrigger id="riskType">
                <SelectValue placeholder="Selecione o tipo de risco" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fisico">Físico</SelectItem>
                <SelectItem value="quimico">Químico</SelectItem>
                <SelectItem value="biologico">Biológico</SelectItem>
                <SelectItem value="ergonomico">Ergonômico</SelectItem>
                <SelectItem value="psicossocial">Psicossocial</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button onClick={getMeasuresSuggestion} className="w-full">Gerar Sugestões</Button>
          {suggestedMeasures.length > 0 && (
            <div className="mt-4 space-y-2">
              <h3 className="font-semibold">Medidas Sugeridas:</h3>
              <ul className="list-disc pl-5 text-sm text-muted-foreground">
                {suggestedMeasures.map((measure, index) => (
                  <li key={index}>{measure}</li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AutomaticMeasuresSuggestion;