import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { BlockedTransaction } from "@/types/administrative-order";
import { Clock, MapPin, User, Banknote, AlertCircle } from "lucide-react";

interface TransactionCardProps {
  transaction: BlockedTransaction;
}

const statusColors = {
  blocked: "blocked" as const,
  under_review: "warning" as const,
  released: "success" as const,
};

export const TransactionCard = ({ transaction }: TransactionCardProps) => {
  return (
    <Card className="shadow-card animate-fade-in">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">
            MTCN {transaction.mtcn}
          </CardTitle>
          <Badge variant={statusColors[transaction.status]} className="capitalize">
            {transaction.status.replace('_', ' ')}
          </Badge>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Banknote className="h-4 w-4" />
            <span className="font-medium text-foreground">
              €{transaction.amount.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{transaction.date} – {transaction.time}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{transaction.location}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="text-sm text-muted-foreground">
          <strong>Agent:</strong> {transaction.agent} | <strong>Operator ID:</strong> {transaction.operatorId}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-primary" />
              <span className="font-semibold text-primary">Sender</span>
            </div>
            <div className="pl-6 space-y-1 text-sm">
              <p><strong>Name:</strong> {transaction.sender.name}</p>
              {transaction.sender.passport && (
                <p><strong>Passport:</strong> {transaction.sender.passport}</p>
              )}
              {transaction.sender.phone && (
                <p><strong>Phone:</strong> {transaction.sender.phone}</p>
              )}
              <p><strong>Country:</strong> {transaction.sender.country}</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-primary" />
              <span className="font-semibold text-primary">Receiver</span>
            </div>
            <div className="pl-6 space-y-1 text-sm">
              <p><strong>Name:</strong> {transaction.receiver.name}</p>
              {transaction.receiver.iban && (
                <p><strong>IBAN:</strong> {transaction.receiver.iban}</p>
              )}
              {transaction.receiver.bic && (
                <p><strong>BIC:</strong> {transaction.receiver.bic}</p>
              )}
              {transaction.receiver.bank && (
                <p><strong>Bank:</strong> {transaction.receiver.bank}</p>
              )}
              <p><strong>Location:</strong> {transaction.receiver.city}, {transaction.receiver.country}</p>
            </div>
          </div>
        </div>

        <Separator />

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-warning" />
            <span className="font-semibold text-warning">Blocking Grounds</span>
          </div>
          <ul className="pl-6 space-y-1">
            {transaction.grounds.map((ground, index) => (
              <li key={index} className="text-sm text-muted-foreground">
                • {ground}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};