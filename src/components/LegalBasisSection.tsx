import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { legalBasis } from "@/data/mock-data";
import { Scale } from "lucide-react";

export const LegalBasisSection = () => {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Scale className="h-5 w-5 text-primary" />
          Legal Basis
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {legalBasis.map((basis, index) => (
            <li key={index} className="flex flex-col gap-1">
              <strong className="text-primary text-sm font-semibold">
                {basis.section}:
              </strong>
              <span className="text-sm text-muted-foreground pl-4">
                {basis.description}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};