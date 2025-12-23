import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <img src="/logo.png" alt="NR-1 Digital Logo" className="h-32 mx-auto mb-4" />
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-gray-50 leading-tight">
          Bem-vindo à Plataforma de Gestão NR-1
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Sua solução completa para o gerenciamento de riscos ocupacionais e avaliações psicossociais,
          em conformidade com a Norma Regulamentadora nº 1.
        </p>
        <p className="text-md text-gray-600 dark:text-gray-400">
          Use o menu lateral para navegar pelas funcionalidades.
        </p>
      </div>
      <div className="mt-auto pt-10">
        <MadeWithDyad />
      </div>
    </div>
  );
};

export default Index;