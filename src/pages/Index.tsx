import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { AdministrativeOrderCard } from "@/components/AdministrativeOrderCard";
import { mockAdministrativeOrders } from "@/data/mock-data";
import { Search, Plus, Filter, BarChart3, AlertTriangle } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredOrders = mockAdministrativeOrders.filter(order =>
    order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.division.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const activeOrders = mockAdministrativeOrders.filter(o => o.status === 'active').length;
  const totalTransactions = mockAdministrativeOrders.reduce((sum, o) => sum + o.totalTransactions, 0);
  const totalAmount = mockAdministrativeOrders.reduce((sum, o) => sum + o.totalAmount, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="shadow-card">
            <CardContent className="pt-6">
              <div className="flex items-center">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Active Orders</p>
                  <p className="text-2xl font-bold text-primary">{activeOrders}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-warning ml-auto" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="pt-6">
              <div className="flex items-center">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Total Orders</p>
                  <p className="text-2xl font-bold">{mockAdministrativeOrders.length}</p>
                </div>
                <BarChart3 className="h-8 w-8 text-muted-foreground ml-auto" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="pt-6">
              <div className="flex items-center">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Blocked Transactions</p>
                  <p className="text-2xl font-bold text-destructive">{totalTransactions}</p>
                </div>
                <Filter className="h-8 w-8 text-destructive ml-auto" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="pt-6">
              <div className="flex items-center">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Total Amount</p>
                  <p className="text-2xl font-bold">€{totalAmount.toLocaleString()}</p>
                </div>
                <div className="text-2xl ml-auto">€</div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search orders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="mr-2 h-4 w-4" />
            New Order
          </Button>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Administrative Orders</h2>
          {filteredOrders.length > 0 ? (
            <div className="grid gap-4">
              {filteredOrders.map((order) => (
                <AdministrativeOrderCard
                  key={order.id}
                  order={order}
                  onClick={() => navigate(`/order/${order.id}`)}
                />
              ))}
            </div>
          ) : (
            <Card className="shadow-card">
              <CardContent className="pt-6 text-center">
                <p className="text-muted-foreground">No orders found matching your search.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
