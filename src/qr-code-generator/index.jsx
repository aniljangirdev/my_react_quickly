import { useState } from "react";
import QRCode from "react-qr-code";

function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const handleGenerateQRcode = () => {
    setQrCode(input);
    setInput("");
  };

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          type="text"
          name="qr-code"
          placeholder="Enter your value here!"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          disabled={input && input.trim !== "" ? false : true}
          onClick={handleGenerateQRcode}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode
          id="qr-code-value"
          value={qrCode}
          size={400}
          bgColor="#fff"
        ></QRCode>
      </div>
    </div>
  );
}

export default QRCodeGenerator;
