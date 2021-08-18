function MySelect({ defaultVal, options, value, onChange }) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option disabled value="">
        {defaultVal}
      </option>
      {options.map((item) => {
        return (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        );
      })}
    </select>
  );
}

export default MySelect;
