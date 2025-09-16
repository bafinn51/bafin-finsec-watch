import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AdministrativeOrder } from "@/types/administrative-order";
import { Calendar, FileText, AlertTriangle, Euro } from "lucide-react";

interface AdministrativeOrderCardProps {
  order: AdministrativeOrder;
  onClick?: () => void;
}

const statusColors = {
  active: "blocked" as const,
  completed: "success" as const,
  under_review: "warning" as const,
};

export const AdministrativeOrderCard = ({ order, onClick }: AdministrativeOrderCardProps) => {
  return (
    <Card className="hover:shadow-elevated transition-all duration-300 cursor-pointer animate-fade-in" onClick={onClick}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-primary">
            {order.orderNumber}
          </CardTitle>
          <Badge variant={statusColors[order.status]} className="capitalize">
            {order.status.replace('_', ' ')}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">{order.division}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>Issued: {new Date(order.issueDate).toLocaleDateString('de-DE')}</span>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">{order.totalTransactions}</p>
              <p className="text-xs text-muted-foreground">Transactions</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Euro className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">€{order.totalAmount.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">Total Amount</p>
            </div>
          </div>
        </div>

        {order.transactions.some(t => t.grounds.includes("Suspicion of sanctions evasion")) && (
          <div className="flex items-center gap-2 text-warning">
            <AlertTriangle className="h-4 w-4" />
            <span className="text-sm font-medium">High Risk</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};