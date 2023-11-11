import RecordItem from "./RecordItem";

export default function RecordList({ itemList }) {
  return (
    <>
      {itemList.map((item) => (
        <RecordItem
          key={item.id}
          id={item.id}
          image={item.image}
          text={item.text}
        />
      ))}
    </>
  );
}
