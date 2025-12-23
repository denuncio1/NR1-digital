import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const InteractiveRiskCalculator = () => {
  const [severity, setSeverity] = useState<string>("");
  const [probability, setProbability] = useState<string>("");
  const [riskLevel, setRiskLevel] = useState<string>("");

  const calculateRisk = () => {
    if (!severity || !probability) {
      toast.error("Por favor, selecione a severidade e a probabilidade.");
      setRiskLevel("");
      return;
    }

    // Simple risk matrix logic (example)
    let calculatedLevel = "";
    if (severity === "alta") {
      if (probability === "quase-certa" || probability === "provavel") {
        calculatedLevel = "Risco Extremo";
      } else if (probability === "possivel") {
        calculatedLevel = "Risco Alto";
      } else {
        calculatedLevel = "Risco Moderado";
      }
    } else if (severity === "media") {
      if (probability === "quase-certa") {
        calculatedLevel = "Risco Alto";
      } else if (probability === "provavel" || probability === "possivel") {
        calculatedLevel = "Risco Moderado";
      } else {
        calculatedLevel = "Risco Baixo";
      }
    } else if (severity === "baixa") {
      if (probability === "quase-certa" || probability === "provavel") {
        calculatedLevel = "Risco Moderado";
      } else {
        calculatedLevel = "Risco Baixo";
      }
    }
    setRiskLevel(calculatedLevel);
    toast.success("Nível de risco calculado!");
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Calculadora Interativa de Nível de Risco</h1>
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Calcular Nível de Risco</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="severity">Severidade</Label>
            <Select onValueChange={setSeverity} value={severity}>
              <SelectTrigger id="severity">
                <SelectValue placeholder="Selecione a severidade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="baixa">Baixa</SelectItem>
                <SelectItem value="media">Média</SelectItem>
                <SelectItem value="alta">Alta</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="probability">Probabilidade</Label>
            <Select onValueChange={setProbability} value={probability}>
              <SelectTrigger id="probability">
                <SelectValue placeholder="Selecione a probabilidade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rara">Rara</SelectItem>
                <SelectItem value="improvavel">Improvável</SelectItem>
                <SelectItem value="possivel">Possível</SelectItem>
                <SelectItem value="provavel">Provável</SelectItem>
                <SelectItem value="quase-certa">Quase Certa</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button onClick={calculateRisk} className="w-full">Calcular Risco</Button>
          {riskLevel && (
            <div className="mt-4 p-4 border rounded-md bg-secondary text-secondary-foreground">
              <p className="font-semibold">Nível de Risco Calculado: <span className="text-primary">{riskLevel}</span></p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default InteractiveRiskCalculator;