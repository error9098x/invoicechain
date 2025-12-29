import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Upload, Camera, FileText, MapPin, AlertCircle } from 'lucide-react';
import { Card, Button, Input, Badge } from '../components/ui/LayoutPrimitives';

const steps = [
  { id: 1, title: 'Invoice Details' },
  { id: 2, title: 'Buyer Info' },
  { id: 3, title: 'Line Items' },
  { id: 4, title: 'Proof Metadata' },
  { id: 5, title: 'Review' },
];

export default function CreateInvoice() {
  const [currentStep, setCurrentStep] = useState(1);
  const [dragActive, setDragActive] = useState(false);

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Create New Invoice</h1>
        <p className="text-text-secondary">Upload invoice details and proof of delivery for verification.</p>
      </div>

      {/* Stepper */}
      <div className="flex justify-between items-center mb-10 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-bg-tertiary -z-10" />
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center gap-2 bg-bg-primary px-2">
            <div 
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                step.id < currentStep ? 'bg-accent-success text-white' : 
                step.id === currentStep ? 'bg-accent-primary text-white shadow-glow' : 
                'bg-bg-tertiary text-text-tertiary border border-border-secondary'
              }`}
            >
              {step.id < currentStep ? <Check size={18} /> : step.id}
            </div>
            <span className={`text-xs font-medium ${step.id === currentStep ? 'text-accent-primary' : 'text-text-tertiary'}`}>
              {step.title}
            </span>
          </div>
        ))}
      </div>

      <Card className="min-h-[400px]">
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h2 className="text-xl font-semibold mb-6">Basic Invoice Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Invoice Number</label>
                  <Input defaultValue="INV-2024-" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Total Amount (INR)</label>
                  <Input type="number" placeholder="₹ 0.00" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Invoice Date</label>
                  <Input type="date" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Due Date</label>
                  <Input type="date" />
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
             <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
               <h2 className="text-xl font-semibold mb-6">Buyer Information</h2>
               <div className="space-y-4">
                 <div className="space-y-2">
                   <label className="text-sm font-medium">Buyer GSTIN</label>
                   <div className="flex gap-2">
                     <Input placeholder="27AA..." />
                     <Button variant="outline">Verify</Button>
                   </div>
                 </div>
                 <div className="space-y-2">
                   <label className="text-sm font-medium">Company Name</label>
                   <Input placeholder="Search company..." />
                 </div>
                 <div className="space-y-2">
                   <label className="text-sm font-medium">Email for Verification</label>
                   <Input type="email" placeholder="accountspayable@company.com" />
                   <p className="text-xs text-text-tertiary">We will send a collaborative verification link to this email.</p>
                 </div>
               </div>
             </motion.div>
          )}
          
          {currentStep === 3 && (
             <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
               <h2 className="text-xl font-semibold mb-6">Line Items</h2>
               <div className="border border-border-primary rounded-lg overflow-hidden mb-4">
                 <table className="w-full text-sm">
                   <thead className="bg-bg-tertiary">
                     <tr>
                       <th className="px-4 py-2 text-left">Description</th>
                       <th className="px-4 py-2 text-right">Qty</th>
                       <th className="px-4 py-2 text-right">Price</th>
                       <th className="px-4 py-2 text-right">Total</th>
                     </tr>
                   </thead>
                   <tbody>
                     <tr className="border-b border-border-primary">
                       <td className="px-4 py-2"><Input className="h-8" placeholder="Item name" /></td>
                       <td className="px-4 py-2"><Input className="h-8 text-right" placeholder="0" type="number" /></td>
                       <td className="px-4 py-2"><Input className="h-8 text-right" placeholder="0.00" type="number" /></td>
                       <td className="px-4 py-2 text-right font-mono">₹0.00</td>
                     </tr>
                   </tbody>
                 </table>
                 <div className="p-2 bg-bg-hover text-center">
                   <Button variant="ghost" size="sm" className="w-full text-accent-primary">+ Add Item</Button>
                 </div>
               </div>
             </motion.div>
          )}

          {currentStep === 4 && (
            <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-xl font-semibold">Proof Metadata</h2>
                  <p className="text-sm text-text-secondary">Upload evidence to increase trust score and lower interest rates.</p>
                </div>
                <Badge variant="info" className="flex items-center gap-1">
                  <AlertCircle size={12} /> Earn ~0.5% Discount
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div 
                  className={`border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-center transition-colors ${dragActive ? 'border-accent-primary bg-accent-primary/5' : 'border-border-secondary hover:border-text-secondary'}`}
                  onDragEnter={() => setDragActive(true)}
                  onDragLeave={() => setDragActive(false)}
                >
                  <div className="w-12 h-12 bg-bg-tertiary rounded-full flex items-center justify-center mb-4">
                    <Camera size={24} className="text-accent-primary" />
                  </div>
                  <h3 className="font-medium mb-1">Delivery Photos</h3>
                  <p className="text-xs text-text-tertiary mb-4">Upload clear photos of goods at delivery site</p>
                  <Button variant="secondary" size="sm">Browse Files</Button>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 border border-border-primary rounded-lg bg-bg-tertiary/50">
                    <div className="p-2 bg-blue-500/20 text-blue-400 rounded-md"><MapPin size={18} /></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">GPS Location</p>
                      <p className="text-xs text-text-tertiary">Pune, MH (18.5204° N, 73.8567° E)</p>
                    </div>
                    <Badge variant="success">Auto-Captured</Badge>
                  </div>
                  <div className="flex items-center gap-3 p-3 border border-border-primary rounded-lg bg-bg-tertiary/50">
                    <div className="p-2 bg-purple-500/20 text-purple-400 rounded-md"><FileText size={18} /></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Digital Signature</p>
                      <p className="text-xs text-text-tertiary">Signed by Receiver</p>
                    </div>
                    <Button variant="ghost" size="sm" className="text-xs">Request</Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 5 && (
            <motion.div key="step5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
               <h2 className="text-xl font-semibold mb-6">Review & Submit</h2>
               <div className="bg-bg-tertiary/50 rounded-lg p-6 mb-6 border border-border-primary">
                 <div className="flex justify-between mb-4">
                    <span className="text-text-secondary">Risk Grade Estimate</span>
                    <span className="text-xl font-bold text-emerald-400">A</span>
                 </div>
                 <div className="flex justify-between mb-2">
                    <span className="text-text-secondary">Expected Funding Rate</span>
                    <span className="font-mono">1.8% - 2.2%</span>
                 </div>
                 <div className="flex justify-between">
                    <span className="text-text-secondary">Potential Payout</span>
                    <span className="font-mono text-white">₹ 12,25,000</span>
                 </div>
               </div>
               
               <div className="flex items-start gap-3 p-4 bg-accent-info/5 rounded-lg border border-accent-info/20 mb-6">
                 <AlertCircle className="text-accent-info shrink-0 mt-0.5" size={18} />
                 <p className="text-sm text-text-secondary">
                   By submitting, this invoice will be hashed on Polygon Mainnet. Collaborative verification request will be sent to the buyer automatically.
                 </p>
               </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-between mt-8 pt-6 border-t border-border-primary">
          <Button variant="ghost" onClick={prevStep} disabled={currentStep === 1}>Back</Button>
          {currentStep < 5 ? (
            <Button onClick={nextStep}>Continue</Button>
          ) : (
            <Button className="bg-gradient-success hover:brightness-110" onClick={() => window.location.hash = '#/dashboard'}>Mint Invoice & Request Funding</Button>
          )}
        </div>
      </Card>
    </div>
  );
}