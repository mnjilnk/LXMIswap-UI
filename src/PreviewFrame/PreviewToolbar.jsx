import sceneRegistry from './SceneRegistry';

export default function PreviewToolbar({
  scene,
  setScene,
  viewport,
  setViewport,
  isDarkMode,
  setIsDarkMode,
  orientation,
  setOrientation,
}) {
  return (
    <div
      id="previewToolbar"
      style={{
        display: 'flex',
        gap: '10px',
        padding: '4px 8px',
        alignItems: 'center',
        backgroundColor: '#fafafa',
        borderBottom: '1px solid #ddd',
        flexShrink: 0
      }}
    >
      <select value={scene} onChange={(e) => setScene(e.target.value)}>
        {Object.keys(sceneRegistry).map((key) => (
          <option key={key} value={key}>{key}</option>
        ))}
      </select>

      <select value={viewport} onChange={(e) => setViewport(e.target.value)}>
        <option value="mobile">📱 Mobile</option>
        <option value="tablet">💊 Tablet</option>
        <option value="desktop">🖥️ Desktop</option>
      </select>

      <label>
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={() => setIsDarkMode(!isDarkMode)}
        />
        Dark Mode
      </label>

      <select value={orientation} onChange={(e) => setOrientation(e.target.value)}>
        <option value="portrait">🔳 Portrait</option>
        <option value="landscape">🌄 Landscape</option>
      </select>
    </div>
  );
}
