export default function QueryFilter({ handleQueryChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="search by name..."
        onChange={(e) => handleQueryChange(e.target.value)}
      />
    </div>
  );
}
