// Dynamically import all .jsx files in /src/scenes
const modules = import.meta.glob('../scenes/*.jsx', { eager: true });

const sceneRegistry = {};
for (const path in modules) {
  const sceneName = path.split('/').pop().replace('.jsx', '');
  sceneRegistry[sceneName] = modules[path].default;
}

export default sceneRegistry;
