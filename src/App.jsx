import { useMemo, useState } from "react";
import { DEFAULT_SORT_OPTION } from "./constants/playlistConstants";
import { REQUEST_STATUS } from "./constants/requestStatus";
import { PlaylistGrid } from "./features/playlists/components/PlaylistGrid";
import { usePlaylists } from "./features/playlists/hooks/usePlaylists";
import { sortPlaylists } from "./features/playlists/utils/sortPlaylists";
import { SortSelect } from "./features/playlists/components/SortSelect";

export default function App() {
  const [sortOption, setSortOption] = useState(DEFAULT_SORT_OPTION);
  const { playlists, status, error } = usePlaylists();

  const sortedPlaylists = useMemo(
    () => sortPlaylists(playlists, sortOption),
    [playlists, sortOption],
  );

  return (
    <main className="page">
      <header className="header">
        <h1>
          Turning Point <strong>Playlists</strong>
        </h1>
        <SortSelect value={sortOption} onChange={setSortOption} />
      </header>
      {status === REQUEST_STATUS.LOADING && <p>Loading playlists...</p>}
      {status === REQUEST_STATUS.ERROR && (
        <p role="alert">Failed to load playlists. Please try again.</p>
      )}
      {status === REQUEST_STATUS.SUCCESS && (
        <PlaylistGrid playlists={sortedPlaylists} />
      )}
    </main>
  );
}
