import PreviewShell from './PreviewShell';

export default function PreviewFrame() {
  return (
    <div
      style={{
        // Try removing strict height or use minHeight if you prefer:
        // height: '100vh',
        minHeight: '100vh',
        padding: '8px',
        fontFamily: 'sans-serif',
        overflow: 'auto'
      }}
    >
      <PreviewShell />
    </div>
  );
}
