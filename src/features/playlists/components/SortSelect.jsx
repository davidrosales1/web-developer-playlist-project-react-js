import { SORT_OPTIONS } from "../../../constants/playlistConstants";

export function SortSelect({ value, onChange }) {
  return (
    <div className="select-wrapper">
      <label className="select-prefix" htmlFor="sortSelect">
        SORT:
      </label>
      <select
        id="sortSelect"
        className="sort-select"
        aria-label="Sort playlists"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {Object.entries(SORT_OPTIONS).map(([optionValue, label]) => (
          <option key={optionValue} value={optionValue}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
