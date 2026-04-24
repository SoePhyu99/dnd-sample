import type { Item } from "../lib/data";

interface Props {
  item: Item;
}

const Card = ({ item }: Props) => {
  return <div>{item.content} helo</div>;
};

export default Card;
