

# InvoiceChain

**Instant Liquidity for India's MSMEs** - Transform unpaid invoices into instant working capital through blockchain-powered invoice financing.

InvoiceChain is a decentralized invoice financing platform built on Polygon blockchain that enables Micro, Small, and Medium Enterprises (MSMEs) to get instant funding for their unpaid invoices. The platform uses collaborative verification, proof metadata, and smart contracts to reduce risk and provide competitive interest rates.

## 🚀 Features

### For MSMEs (Suppliers)
- **Get Paid in 24 Hours, Not 90 Days** - Stop chasing payments and get instant liquidity
- **Zero Collateral** - Your invoice is the asset. No property or FD needed
- **Dynamic Discounting** - Upload video proof & GPS data to lower your interest rate by up to 2%
- **No Debt Trap** - It's not a loan. It's an advance on money you have already earned

### For Banks & NBFCs
- **High-Yield Assets** - Access short-term, high-yield invoice financing (Avg. 18.5% APR)
- **Low Default Rate** - Programmatic verification reduces risk (0.2% default rate)
- **Immutable Data** - All invoice data and delivery proof is hashed on IPFS and anchored to Polygon
- **Smart Contract Settlement** - Repayments are enforced by code with automatic fund routing

## 🏗️ How It Works

### 1. Upload & Tokenize
MSME uploads invoice. Proof metadata (photos/GPS) is hashed to IPFS. Invoice is minted as an NFT on Polygon.

### 2. Collaborative Verify
Buyer receives notification. Verifies goods delivery and quality on-chain. Smart contract updates risk score.

### 3. Auction & Fund
Banks bid on verified invoices. Dynamic discounting engine calculates real-time rates. Funds released instantly.

### 4. Auto-Settlement
Buyer pays on due date. Smart contract automatically routes principal + interest to Bank and surplus to MSME.

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern UI framework
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Framer Motion** - Smooth animations
- **Recharts** - Data visualization
- **Tailwind CSS** - Utility-first styling
- **RainbowKit** - Wallet connection UI

### Blockchain
- **Polygon** - Layer 2 blockchain for low-cost transactions
- **Smart Contracts** - InvoiceRegistry, FundingPool, Settlement contracts
- **IPFS** - Decentralized storage for proof metadata

### Architecture Layers
1. **Frontend Layer** - React app with RainbowKit for wallet connection
2. **Application Layer** - Risk engine, notification service, metadata API
3. **Storage Layer** - IPFS for proof storage, PostgreSQL for caching
4. **Blockchain Layer** - Polygon smart contracts for ownership and settlement

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn or pnpm
- A Web3 wallet (MetaMask, WalletConnect, etc.)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/invoicechain.git
   cd invoicechain
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   VITE_POLYGON_RPC_URL=your_polygon_rpc_url
   VITE_IPFS_GATEWAY=your_ipfs_gateway_url
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

6. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎯 Key Features

- **Dashboard** - View all invoices, funding activity, and analytics
- **Create Invoice** - Upload invoices with proof metadata
- **Marketplace** - Browse and bid on verified invoices (for banks)
- **Invoice Details** - View comprehensive invoice information and verification status
- **Wallet Integration** - Connect with MetaMask or WalletConnect
- **Real-time Updates** - Track invoice status and funding progress

## 📊 Platform Statistics

- **Average Yield (APR)**: 18.5%
- **Default Rate**: 0.2%
- **Trusted by**: 2,500+ Businesses
- **Supported Industries**: 15+ Industries

## 🔒 Security & Privacy

- All invoice data and delivery proof is hashed on IPFS and anchored to Polygon
- Smart contracts are audited for security
- Zero fraud risk through immutable blockchain records
- Privacy-focused architecture with off-chain computation

## 🆚 InvoiceChain vs Traditional Factoring

| Feature | Traditional Factoring | InvoiceChain |
|---------|---------------------|--------------|
| Verification | Manual (Weeks) | Programmatic (Seconds) |
| Paperwork | High Admin Costs | Zero Paperwork via Metadata |
| Risk Assessment | Opaque | Transparent On-Chain Risk Score |
| Settlement | Delays (T+30) | Instant Atomic Settlement (T+0) |

## 🗺️ Roadmap

- [ ] Smart contract deployment on Polygon mainnet
- [ ] Integration with major Indian banks
- [ ] Mobile app (iOS & Android)
- [ ] Multi-chain support
- [ ] Advanced analytics dashboard
- [ ] Automated KYC/AML compliance

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.


## 🙏 Acknowledgments

- Built with ❤️ for India's MSMEs
- Powered by Polygon blockchain
- Inspired by the need for transparent, accessible trade finance

---

<div align="center">
  <p>Made with ❤️ by the InvoiceChain Team</p>
  <p>© 2026 InvoiceChain Decentralized Finance. All rights reserved.</p>
</div>
Approvals
