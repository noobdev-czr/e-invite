export default function Gifts() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">

      <h1 className="text-3xl font-serif text-center">
        With Love & Gratitude
      </h1>

      <div className="bg-[#F3E9DF] p-6 rounded-xl">
        <h2 className="font-semibold">Bank Details</h2>
        <p>Bank: ABC Bank</p>
        <p>Account Name: Julie May Doyo Tudas</p>
        <p>Account Number: 1234 5678</p>
      </div>

      <div className="bg-[#E6D3C2] p-6 rounded-xl text-center">
        <h2 className="font-semibold mb-4">QR Code</h2>
        <div className="w-48 h-48 mx-auto bg-white rounded-xl flex items-center justify-center">
          QR CODE
        </div>
      </div>
    </div>
  );
}