import { useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

function LeitorCamera() {
  const [data, setData] = useState("Nenhum código detectado");

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Leitor de Código de Barras (Câmera)</h2>
      <BarcodeScannerComponent
        width={500}
        height={400}
        onUpdate={(err, result) => {
          if (result) setData(result.text);
        }}
      />
      <p><strong>Código:</strong> {data}</p>
    </div>
  );
}

export default LeitorCamera;