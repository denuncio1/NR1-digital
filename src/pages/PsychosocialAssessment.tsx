import React from "react";
import PsychosocialRiskForm from "@/components/PsychosocialRiskForm";
import ActionPlanForm from "@/components/ActionPlanForm";
import PsychosocialQuestionnaire from "@/components/PsychosocialQuestionnaire";

const PsychosocialAssessment = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Módulo de Avaliação Psicossocial</h1>
      <PsychosocialRiskForm />
      <ActionPlanForm />
      <PsychosocialQuestionnaire />
    </div>
  );
};

export default PsychosocialAssessment;