import { useState } from 'react';
import { processPayment } from '../../services/integrationService';

const PaymentIntegration = () => {
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('stripe');
  const [msg, setMsg] = useState('');

  const handlePayment = async () => {
    try {
      await processPayment({ amount, method });
      setMsg("Payment processed!");
    } catch (err) {
      setMsg("Payment failed.");
    }
  };

  return (
    <div className="p-4 border rounded shadow mt-4">
      <h2 className="text-lg font-bold mb-2">Process Test Payment</h2>
      <input
        type="number"
        className="border p-2 w-full mb-2"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select className="border p-2 w-full mb-2" value={method} onChange={(e) => setMethod(e.target.value)}>
        <option value="stripe">Stripe</option>
        <option value="paypal">PayPal</option>
      </select>
      <button className="bg-green-600 text-white px-4 py-2" onClick={handlePayment}>
        Pay
      </button>
      {msg && <p className="mt-2">{msg}</p>}
    </div>
  );
};

export default PaymentIntegration;
