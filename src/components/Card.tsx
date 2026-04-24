import type { Item } from "../lib/data";

interface Props {
  item: Item;
}

const Card = ({ item }: Props) => {
  return <div>{item.content}</div>;
};

export default Card;
