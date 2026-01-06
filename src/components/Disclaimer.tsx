import { Info } from 'lucide-react';

export default function Disclaimer() {
  return (
    <div 
      className="border rounded-lg p-6"
      style={{
        backgroundColor: '#EFF6FF',
        borderColor: '#2563EB'
      }}
    >
      <div className="flex items-start gap-3">
        <Info
          className="w-5 h-5 mt-0.5 shrink-0"
          style={{ color: '#2563EB' }}
        />
        <div>
          <h3 className="text-sm font-medium mb-1" style={{ color: '#111827' }}>
            Important Notice
          </h3>
          <p className="text-sm" style={{ color: '#111827' }}>
            This page presents producer-declared information. It is not certification or verification.
          </p>
        </div>
      </div>
    </div>
  );
}
