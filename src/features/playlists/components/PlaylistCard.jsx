export function PlaylistCard({ playlist }) {
  return (
    <article className="playlist-card">
      <img src={playlist.image} alt={playlist.title} />
    </article>
  );
}
