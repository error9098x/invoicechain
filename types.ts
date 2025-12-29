export type InvoiceStatus = 'DRAFT' | 'PENDING_VERIFICATION' | 'VERIFIED' | 'LISTED' | 'FUNDED' | 'SETTLED';

export type RiskGrade = 'A+' | 'A' | 'B+' | 'B' | 'C';

export interface Invoice {
  id: string;
  invoiceNumber: string;
  msmeName: string;
  buyerName: string;
  amount: number;
  date: string;
  dueDate: string;
  status: InvoiceStatus;
  riskGrade: RiskGrade;
  verificationScore: number;
  discountRate: number; // Percentage
  items: InvoiceItem[];
  proofMetadata?: ProofMetadata;
}

export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface ProofMetadata {
  deliveryPhotos: string[];
  videoUrl?: string;
  gpsLocation?: string;
  deliveryTimestamp: string;
  qualityCheckPassed: boolean;
}

export interface User {
  id: string;
  name: string;
  companyName: string;
  role: 'MSME' | 'FUNDER' | 'BUYER';
  walletAddress: string;
  gstin: string;
}

export interface Activity {
  id: string;
  type: 'UPLOAD' | 'VERIFICATION' | 'FUNDING' | 'SETTLEMENT';
  description: string;
  timestamp: string;
  amount?: number;
}
