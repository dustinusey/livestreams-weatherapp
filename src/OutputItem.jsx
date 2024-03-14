const OutputItem = (props) => {
  const { type, value } = props;
  return (
    <li className="px-8 py-3 flex justify-between items-center text-gray-600 odd:bg-gray-100">
      <p className="font-bold">{type}</p>
      <p className="text-xs">{value}</p>
    </li>
  );
};
export default OutputItem;
