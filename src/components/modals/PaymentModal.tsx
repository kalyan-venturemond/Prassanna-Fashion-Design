import { useState } from 'react';
import { X, Loader2, CheckCircle, CreditCard, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseName: string;
  price: number;
}

const PaymentModal = ({ isOpen, onClose, courseName, price }: PaymentModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [step, setStep] = useState<'details' | 'payment'>('details');

  const validateDetails = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Enter valid 10-digit phone';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validatePayment = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.cardNumber.trim() || formData.cardNumber.replace(/\s/g, '').length < 16) {
      newErrors.cardNumber = 'Enter valid card number';
    }
    if (!formData.expiry.trim() || !/^\d{2}\/\d{2}$/.test(formData.expiry)) {
      newErrors.expiry = 'Enter valid expiry (MM/YY)';
    }
    if (!formData.cvv.trim() || formData.cvv.length < 3) {
      newErrors.cvv = 'Enter valid CVV';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateDetails()) {
      setStep('payment');
    }
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePayment()) return;
    
    setIsProcessing(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsProcessing(false);
    setIsSuccess(true);
    
    setTimeout(() => {
      setIsSuccess(false);
      setStep('details');
      setFormData({ name: '', email: '', phone: '', cardNumber: '', expiry: '', cvv: '' });
      onClose();
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    
    // Format card number
    if (name === 'cardNumber') {
      value = value.replace(/\D/g, '').slice(0, 16).replace(/(\d{4})/g, '$1 ').trim();
    }
    
    // Format expiry
    if (name === 'expiry') {
      value = value.replace(/\D/g, '').slice(0, 4);
      if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2);
      }
    }
    
    // Format CVV
    if (name === 'cvv') {
      value = value.replace(/\D/g, '').slice(0, 4);
    }
    
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleClose = () => {
    if (!isProcessing) {
      setStep('details');
      setFormData({ name: '', email: '', phone: '', cardNumber: '', expiry: '', cvv: '' });
      setErrors({});
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-card rounded-xl shadow-2xl w-full max-w-md overflow-hidden"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-10"
              disabled={isProcessing}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="font-display text-2xl mb-2">Payment Successful!</h3>
                  <p className="text-muted-foreground mb-4">
                    Thank you for enrolling in {courseName}.
                  </p>
                  <div className="bg-muted p-4 rounded-lg text-sm">
                    <p className="font-medium">Amount Paid: ₹{price.toLocaleString('en-IN')}</p>
                    <p className="text-muted-foreground mt-1">
                      Confirmation sent to {formData.email}
                    </p>
                  </div>
                </motion.div>
              ) : (
                <>
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <CreditCard className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-2xl text-foreground">{courseName}</h3>
                    <p className="text-accent font-bold text-xl mt-1">
                      ₹{price.toLocaleString('en-IN')}
                    </p>
                  </div>

                  {/* Step Indicator */}
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <div className={`w-3 h-3 rounded-full ${step === 'details' ? 'bg-primary' : 'bg-muted'}`} />
                    <div className="w-8 h-0.5 bg-muted" />
                    <div className={`w-3 h-3 rounded-full ${step === 'payment' ? 'bg-primary' : 'bg-muted'}`} />
                  </div>

                  {step === 'details' ? (
                    <form onSubmit={handleDetailsSubmit} className="space-y-4">
                      <div>
                        <label className="label-fashion">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`input-fashion ${errors.name ? 'border-destructive' : ''}`}
                          placeholder="Enter your name"
                        />
                        {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                      </div>
                      
                      <div>
                        <label className="label-fashion">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`input-fashion ${errors.email ? 'border-destructive' : ''}`}
                          placeholder="Enter your email"
                        />
                        {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                      </div>
                      
                      <div>
                        <label className="label-fashion">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`input-fashion ${errors.phone ? 'border-destructive' : ''}`}
                          placeholder="Enter phone number"
                        />
                        {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
                      </div>

                      <Button type="submit" variant="fashion" size="lg" className="w-full mt-6">
                        Continue to Payment
                      </Button>
                    </form>
                  ) : (
                    <form onSubmit={handlePaymentSubmit} className="space-y-4">
                      <div>
                        <label className="label-fashion">Card Number</label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          className={`input-fashion ${errors.cardNumber ? 'border-destructive' : ''}`}
                          placeholder="1234 5678 9012 3456"
                        />
                        {errors.cardNumber && <p className="text-destructive text-sm mt-1">{errors.cardNumber}</p>}
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="label-fashion">Expiry</label>
                          <input
                            type="text"
                            name="expiry"
                            value={formData.expiry}
                            onChange={handleChange}
                            className={`input-fashion ${errors.expiry ? 'border-destructive' : ''}`}
                            placeholder="MM/YY"
                          />
                          {errors.expiry && <p className="text-destructive text-sm mt-1">{errors.expiry}</p>}
                        </div>
                        <div>
                          <label className="label-fashion">CVV</label>
                          <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleChange}
                            className={`input-fashion ${errors.cvv ? 'border-destructive' : ''}`}
                            placeholder="123"
                          />
                          {errors.cvv && <p className="text-destructive text-sm mt-1">{errors.cvv}</p>}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted p-3 rounded-lg">
                        <Shield className="w-4 h-4 text-green-600" />
                        <span>Your payment is secure and encrypted</span>
                      </div>

                      <div className="flex gap-3 mt-6">
                        <Button
                          type="button"
                          variant="outline"
                          size="lg"
                          className="flex-1"
                          onClick={() => setStep('details')}
                          disabled={isProcessing}
                        >
                          Back
                        </Button>
                        <Button
                          type="submit"
                          variant="fashion"
                          size="lg"
                          className="flex-1"
                          disabled={isProcessing}
                        >
                          {isProcessing ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin mr-2" />
                              Processing...
                            </>
                          ) : (
                            `Pay ₹${price.toLocaleString('en-IN')}`
                          )}
                        </Button>
                      </div>
                    </form>
                  )}
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PaymentModal;
