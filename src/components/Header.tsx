import { Badge } from "@/components/ui/badge";
import { Shield } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-gradient-header text-primary-foreground py-6 px-6 shadow-elevated">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-2">
          <Shield className="h-8 w-8" />
          <h1 className="text-2xl font-bold">BaFin Compliance Portal</h1>
        </div>
        <p className="text-primary-foreground/90 text-sm">
          Bundesanstalt für Finanzdienstleistungsaufsicht – Administrative Orders Management
        </p>
      </div>
    </header>
  );
};