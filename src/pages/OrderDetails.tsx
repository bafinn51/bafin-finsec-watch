import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TransactionCard } from "@/components/TransactionCard";
import { LegalBasisSection } from "@/components/LegalBasisSection";
import { Header } from "@/components/Header";
import { mockAdministrativeOrder } from "@/data/mock-data";
import { Calendar, FileText, Euro } from "lucide-react";

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

        <Card className="shadow-elevated border-destructive/20">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-destructive flex items-center gap-2">
              <Euro className="h-5 w-5" />
              Tax Obligation - German VAT (UStG)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-green-50 border border-green-200 p-3 rounded-lg">
              <p className="text-sm font-semibold text-green-800">
                ✓ PAYMENT CONFIRMED: The beneficiary has already paid administrative fees of <strong>€2,306.10</strong>, duly recorded in the file.
              </p>
            </div>
            
            <p className="text-sm">
              However, BaFin has established that a tax obligation applies under the <strong>German VAT Act (UStG)</strong>, at the statutory rate of 19%.
            </p>
            
            <div className="bg-muted/50 p-4 rounded-lg space-y-2">
              <div className="flex justify-between items-center">
                <span>Total taxable base:</span>
                <span className="font-semibold">€27,000.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span>VAT at 19%:</span>
                <span className="font-semibold">€5,130.00</span>
              </div>
              <div className="flex justify-between items-center text-green-600 bg-green-50 p-2 rounded">
                <span><strong>Administrative fees ALREADY PAID:</strong></span>
                <span className="font-bold">− €2,306.10 ✓</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between items-center text-lg font-bold text-destructive">
                <span>Remaining balance due:</span>
                <span>€2,823.90</span>
              </div>
            </div>

            <div className="bg-destructive/10 p-4 rounded-lg border border-destructive/20">
              <h4 className="font-semibold text-destructive mb-2">PAYMENT CONDITIONS</h4>
              <ul className="text-sm space-y-1">
                <li>• Payment of this balance is a <strong>mandatory prerequisite</strong> for lifting the suspension.</li>
                <li>• It must be completed within <strong>five (5) business days</strong> from receipt of this notice.</li>
                <li>• In case of non-payment, transfers will remain blocked and the case may be referred to federal tax authorities.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <LegalBasisSection />
      </div>
    </div>
  );
};