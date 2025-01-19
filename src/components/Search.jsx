function Search({ searchTerm, setSearchTerm }) {
      return (
        <div className="search">
          <input
            type="text"
            placeholder="Search tenders..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      );
    }

    export default Search;
