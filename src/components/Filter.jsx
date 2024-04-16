export const Filter = ({ value, onChange }) => (
  <>
    <label>Find contacts by name</label>
    <input
      value={value}
      type="text"
      onChange={evt => onChange(evt.currentTarget.value)}
      name=""
      placeholder="find name"
    />
  </>
);
