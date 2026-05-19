import { useEffect, useState } from "react";
import { DATA_URL } from "../../../constants/playlistConstants";
import { REQUEST_STATUS } from "../../../constants/requestStatus";

export function usePlaylists() {
  const [playlists, setPlaylists] = useState([]);
  const [status, setStatus] = useState(REQUEST_STATUS.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadPlaylists() {
      try {
        setStatus(REQUEST_STATUS.LOADING);

        const response = await fetch(DATA_URL);

        if (!response.ok) {
          throw new Error(
            `Unable to load playlists. Status: ${response.status}`,
          );
        }

        const data = await response.json();
        setPlaylists(data);
        setStatus(REQUEST_STATUS.SUCCESS);
      } catch (error) {
        setError(error);
        setStatus(REQUEST_STATUS.ERROR);
      }
    }

    loadPlaylists();
  }, []);

  return { playlists, status, error };
}
