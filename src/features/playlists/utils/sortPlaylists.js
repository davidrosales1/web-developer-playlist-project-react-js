const sortStrategies = {
  popularity: (a, b) => b.popularity - a.popularity,
  tier: (a, b) => a.tier - b.tier,
  title: (a, b) => a.title.localeCompare(b.title),
};

export function sortPlaylists(playlists, sortOption) {
  return [...playlists].sort(sortStrategies[sortOption]);
}
