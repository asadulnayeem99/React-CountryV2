const Region = ({ onSelect }) => {
  const selectHandler = (e) => {
    const value = e.target.value;
    onSelect(value);
  };
  return (
    <select
      className="px-[20px] py-[10px] bg-[hsl(209,23%,22%)] text-white border rounded-[5px]  hover:cursor-pointer "
      name=""
      onChange={selectHandler}
      id=""
    >
      <option value="">Filter By Region</option>
      <option value="africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default Region;
