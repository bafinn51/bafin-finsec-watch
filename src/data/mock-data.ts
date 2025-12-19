import { AdministrativeOrder, BlockedTransaction, LegalBasis } from "@/types/administrative-order";

export const mockAdministrativeOrder: AdministrativeOrder = {
  id: "gw-2025-117",
  orderNumber: "GW/2025/117",
  issueDate: "2025-12-19",
  division: "Division GW 3: Anti-Money Laundering Supervision",
  status: "active",
  totalTransactions: 2,
  totalAmount: 5500,
  transactions: [
    {
      id: "1",
      mtcn: "700-769-0162",
      amount: 2500,
      currency: "EUR",
      date: "28.11.2025",
      time: "11:37",
      agent: "Tabakwaren Jung, Auf Der Spiegelbruecke 14, Duderstadt 37115",
      location: "Duderstadt",
      operatorId: "WA7",
      sender: {
        name: "Thilo Volz",
        passport: "******4858",
        phone: "0049-15761010101",
        country: "Germany"
      },
      receiver: {
        name: "Harri Harkonen",
        iban: "FI1354550720056810",
        bic: "OKOYFIHH",
        bank: "OP Corporate Bank PLC",
        city: "-",
        country: "Finland"
      },
      status: "blocked",
      grounds: [
        "High-value transfer",
        "Repeated activity in short time",
        "Suspicion of sanctions evasion"
      ]
    },
    {
      id: "2",
      mtcn: "960-149-5320",
      amount: 3000,
      currency: "EUR",
      date: "28.11.2025",
      time: "11:29",
      agent: "Tabakwaren Jung, Auf Der Spiegelbruecke 14, Duderstadt 37115",
      location: "Duderstadt",
      operatorId: "WA7",
      sender: {
        name: "Thilo Volz",
        passport: "******4858",
        phone: "0049-15761010101",
        country: "Germany"
      },
      receiver: {
        name: "Harri Harkonen",
        iban: "FI1354550720056810",
        bic: "OKOYFIHH",
        bank: "OP Corporate Bank PLC",
        city: "-",
        country: "Finland"
      },
      status: "blocked",
      grounds: [
        "High-value transfer",
        "Repeated activity in short time",
        "Suspicion of sanctions evasion"
      ]
    }
  ]
};

export const mockAdministrativeOrders: AdministrativeOrder[] = [
  mockAdministrativeOrder,
  {
    id: "gw-2025-116",
    orderNumber: "GW/2025/116",
    issueDate: "2025-09-15",
    division: "Division GW 2: Payment Services Supervision",
    status: "completed",
    totalTransactions: 1,
    totalAmount: 8500,
    transactions: [
      {
        id: "3",
        mtcn: "842-759-0021",
        amount: 8500,
        currency: "EUR",
        date: "14.09.2025",
        time: "14:22",
        agent: "PostBank AG, München",
        location: "München",
        operatorId: "PB3",
        sender: {
          name: "Klaus Weber",
          passport: "******7432",
          phone: "+49 17665432100",
          country: "Germany"
        },
        receiver: {
          name: "Maria Santos",
          iban: "ES9121000418450200051332",
          bic: "CAIXESBB",
          bank: "CaixaBank",
          city: "Barcelona",
          country: "Spain"
        },
        status: "blocked",
        grounds: [
          "Unusual transaction pattern",
          "High-risk jurisdiction",
          "Insufficient documentation"
        ]
      }
    ]
  },
  {
    id: "gw-2025-115",
    orderNumber: "GW/2025/115",
    issueDate: "2025-09-12",
    division: "Division GW 3: Anti-Money Laundering Supervision",
    status: "under_review",
    totalTransactions: 3,
    totalAmount: 42000,
    transactions: [
      {
        id: "4",
        mtcn: "193-485-7294",
        amount: 18000,
        currency: "EUR",
        date: "11.09.2025",
        time: "10:15",
        agent: "Western Union, Berlin",
        location: "Berlin",
        operatorId: "WU9",
        sender: {
          name: "Ahmed Hassan",
          passport: "******2847",
          phone: "+49 15234567890",
          country: "Germany"
        },
        receiver: {
          name: "Omar Al-Rashid",
          iban: "AE070331234567890123456",
          bic: "ADCBAEAA",
          bank: "Abu Dhabi Commercial Bank",
          city: "Dubai",
          country: "United Arab Emirates"
        },
        status: "under_review",
        grounds: [
          "High-value transfer",
          "Complex transaction structure",
          "Enhanced due diligence required"
        ]
      }
    ]
  }
];

export const legalBasis: LegalBasis[] = [
  {
    section: "§ 6(2) GwG",
    description: "Obligation to prevent money laundering and terrorist financing"
  },
  {
    section: "§ 43 GwG",
    description: "Mandatory suspicious activity reporting"
  },
  {
    section: "§ 51 GwG",
    description: "Supervisory powers of BaFin"
  },
  {
    section: "§ 4(1) ZAG",
    description: "Supervisory authority over payment institutions"
  },
  {
    section: "EU Regulation No. 269/2014",
    description: "Financial sanctions against designated persons and entities"
  }
];