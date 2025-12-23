import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const questions = [
  {
    id: "q1",
    text: "Você se sente sobrecarregado(a) com a quantidade de trabalho?",
    options: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"],
  },
  {
    id: "q2",
    text: "Você tem autonomia para tomar decisões relacionadas ao seu trabalho?",
    options: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"],
  },
  {
    id: "q3",
    text: "Você recebe feedback construtivo e regular sobre seu desempenho?",
    options: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"],
  },
  {
    id: "q4",
    text: "Você sente que há um bom equilíbrio entre sua vida profissional e pessoal?",
    options: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"],
  },
  {
    id: "q5",
    text: "Você se sente apoiado(a) por seus colegas e superiores?",
    options: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"],
  },
];

const PsychosocialQuestionnaire = () => {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.keys(answers).length !== questions.length) {
      toast.error("Por favor, responda a todas as perguntas do questionário.");
      return;
    }
    // In a real application, you would send these answers to a backend
    console.log("Respostas do questionário:", answers);
    toast.success("Questionário psicossocial enviado com sucesso!");
    // Clear answers
    setAnswers({});
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Questionário de Avaliação Psicossocial</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {questions.map((question) => (
            <div key={question.id} className="space-y-2">
              <Label className="text-base font-medium">{question.text}</Label>
              <RadioGroup
                onValueChange={(value) => handleAnswerChange(question.id, value)}
                value={answers[question.id] || ""}
                className="flex flex-col space-y-1"
              >
                {question.options.map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <RadioGroupItem value={option} id={`${question.id}-${option}`} />
                    <Label htmlFor={`${question.id}-${option}`}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          ))}
          <Button type="submit" className="w-full">Enviar Questionário</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PsychosocialQuestionnaire;