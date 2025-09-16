import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TransactionCard } from "@/components/TransactionCard";
import { LegalBasisSection } from "@/components/LegalBasisSection";
import { Header } from "@/components/Header";
import { mockAdministrativeOrder } from "@/data/mock-data";
import { Calendar, Building2, FileText, Euro } from "lucide-react";

const statusColors = {
  active: "blocked" as const,
  completed: "success" as const,
  under_review: "warning" as const,
};

export const OrderDetails = () => {
  const order = mockAdministrativeOrder;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-7xl mx-auto p-6 space-y-6">

        <Card className="shadow-elevated">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-bold text-primary">
                Administrative Order {order.orderNumber}
              </CardTitle>
              <Badge variant={statusColors[order.status]} className="capitalize text-sm">
                {order.status.replace('_', ' ')}
              </Badge>
            </div>
            <p className="text-muted-foreground">{order.division}</p>
            <div className="mt-2 text-sm text-muted-foreground">
              <p><strong>Legal Authority:</strong> German Money Laundering Act (GwG) § 51, Payment Services Supervision Act (ZAG) § 4(1), EU Regulation No. 269/2014</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">Issue Date</p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(order.issueDate).toLocaleDateString('de-DE')}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">Transactions</p>
                  <p className="text-sm text-muted-foreground">
                    {order.totalTransactions} blocked
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Euro className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">Total Amount</p>
                  <p className="text-sm text-muted-foreground">
                    €{order.totalAmount.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Blocked Transactions</h2>
          {order.transactions.map((transaction) => (
            <TransactionCard key={transaction.id} transaction={transaction} />
          ))}
        </div>

        <LegalBasisSection />

        <Card className="shadow-card bg-muted/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <p><strong>BaFin – Bundesanstalt für Finanzdienstleistungsaufsicht</strong></p>
              <p>Graurheindorfer Straße 108, 53117 Bonn, Germany</p>
              <p className="mt-4">
                <strong>Phone:</strong> +49 (0)228 4108-0
              </p>
              <p>
                <strong>Email:</strong> poststelle@bafin.de
              </p>
              <p>
                <strong>Website:</strong> www.bafin.de
              </p>
              <p className="mt-4 text-xs text-muted-foreground">
                This administrative order is issued under the authority of the German Banking Act (KWG), 
                the Money Laundering Act (GwG), and relevant EU regulations. 
                All affected parties have the right to appeal this decision within 30 days of notification.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};