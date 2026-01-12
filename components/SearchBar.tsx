export function SearchBar() {
  return (
    <div className="search-open">
      <form action="/search" className="searchbar w-form">
        <input
          className="search-input w-input"
          maxLength={256}
          name="query"
          placeholder="Search Here..."
          type="search"
          id="search"
          required
        />
        <input type="submit" className="d-none w-button" value="Search" />
        <div
          data-w-id="d3adb6d7-cc56-c118-6985-cf7153b164f9"
          className="close-icon"
        >
          <img
            src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f7b22b344fca339adf748_ic-close.svg"
            loading="lazy"
            alt="Close Icon"
          />
        </div>
      </form>
    </div>
  );
}
