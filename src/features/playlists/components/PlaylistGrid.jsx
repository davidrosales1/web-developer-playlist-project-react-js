import { PlaylistCard } from "./PlaylistCard";

export function PlaylistGrid({ playlists }) {
  return (
    <section className="playlist-grid" aria-label="Playlists">
      {playlists.map((playlist) => (
        <PlaylistCard key={playlist.id ?? playlist.title} playlist={playlist} />
      ))}
    </section>
  );
}
