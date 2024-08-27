// components/Payment.js

const Payment = () => {
  // Example data, replace with actual data
  const paymentsReceived = [
    { date: "2024-08-01", amount: "$100", from: "Company A" },
    { date: "2024-08-15", amount: "$150", from: "Company B" },
  ];

  const paymentsMade = [
    { date: "2024-08-05", amount: "$200", to: "Candidate A" },
    { date: "2024-08-20", amount: "$250", to: "Candidate B" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold">Payment History</h1>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Payments Received</h2>
        <ul>
          {paymentsReceived.map((payment, index) => (
            <li key={index} className="flex justify-between py-2">
              <span>{payment.date}</span>
              <span>{payment.amount}</span>
              <span>from {payment.from}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Payments Made</h2>
        <ul>
          {paymentsMade.map((payment, index) => (
            <li key={index} className="flex justify-between py-2">
              <span>{payment.date}</span>
              <span>{payment.amount}</span>
              <span>to {payment.to}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Payment;
