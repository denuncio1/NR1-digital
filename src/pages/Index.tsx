import NR1InfoCard from "@/components/NR1InfoCard";
import DocumentManager from "@/components/DocumentManager";
import PsychosocialRiskForm from "@/components/PsychosocialRiskForm";
import ActionPlanForm from "@/components/ActionPlanForm";
import PsychosocialQuestionnaire from "@/components/PsychosocialQuestionnaire"; // Importar o novo componente
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col items-center justify-center mb-8">
          <img src="/logo.png" alt="NR-1 Digital Logo" className="h-24 mb-4" /> {/* Adicionar o logo */}
          <h1 className="text-4xl font-extrabold text-center text-gray-900 dark:text-gray-50">
            Gestão de Riscos Psicossociais (NR-1)
          </h1>
        </div>

        <NR1InfoCard />

        <DocumentManager />

        <PsychosocialRiskForm />

        <ActionPlanForm />

        <PsychosocialQuestionnaire /> {/* Adicionar o componente do questionário */}

        <MadeWithDyad />
      </div>
    </div>
  );
};

export default Index;