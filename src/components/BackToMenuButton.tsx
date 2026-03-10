import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export function BackToMenuButton() {
  const navigate = useNavigate();
  const location = useLocation();
  // Não renderiza no menu principal
  if (location.pathname === "/" || location.pathname === "/dashboard" || location.pathname === "/index") return null;
  return (
    <div className="mb-4">
      <Button variant="outline" onClick={() => navigate("/index")}> 
        <ArrowLeft className="mr-2 h-4 w-4" />
        Voltar ao Menu Principal
      </Button>
    </div>
  );
}
