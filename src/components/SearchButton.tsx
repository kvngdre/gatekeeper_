interface props {
  isSearching: boolean;
  //   onClick: () => void;
}

export default function SearchButton({ isSearching }: props) {
  if (isSearching) {
    return (
      <button className="btn btn-primary" type="button" disabled>
        <span
          className="spinner-border spinner-border-sm"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden" role="status">
          Loading...
        </span>
      </button>
    );
  }
  return (
    <button className="btn btn-outline-success" type="submit">
      Search
    </button>
  );
}
