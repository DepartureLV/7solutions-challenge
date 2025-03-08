import "./App.css";
import list from "./list.json";
import { useRef, useState } from "react";
import Button from "./components/Button";

type ListItem = {
  name: string;
  type: "Fruit" | "Vegetable";
};

interface movingProps {
  item: ListItem;
  from: ListItem[];
  setFrom: React.Dispatch<React.SetStateAction<ListItem[]>>;
  setTo: React.Dispatch<React.SetStateAction<ListItem[]>>;
  force: boolean;
}

function App() {
  const [items, setItems] = useState<ListItem[]>(list as ListItem[]);
  const [fruits, setFruits] = useState<ListItem[]>([]);
  const [vegetables, setVegetables] = useState<ListItem[]>([]);

  const timeoutRef = useRef<Record<string, number>>({});

  const handleMoveToColumn = ({
    item,
    from,
    setFrom,
    setTo,
    force,
  }: movingProps): void => {
    const index = from.findIndex((i) => i.name === item.name);

    if (index === -1) return;

    setFrom((prev) => prev.filter((_, i) => i !== index));
    setTo((prev) => [...prev, item]);

    if (timeoutRef.current[item.name]) {
      clearTimeout(timeoutRef.current[item.name]);
      delete timeoutRef.current[item.name];
    }

    if (!force) {
      timeoutRef.current[item.name] = setTimeout(() => {
        setFrom((prev) => [...prev, item]);
        setTo((prev) => prev.filter((i) => i.name !== item.name));
        delete timeoutRef.current[item.name];
      }, 5000);
    }
  };

  return (
    <div className="todo-list">
      <div className="column">
        {items.map((item) => (
          <Button
            text={item.name}
            onClick={() =>
              handleMoveToColumn({
                item,
                from: items,
                setFrom: setItems,
                setTo: item.type === "Fruit" ? setFruits : setVegetables,
                force: false,
              })
            }
          />
        ))}
      </div>

      <div className="todo border">
        <header>Fruit</header>
        <div className="column">
          {fruits.map((item) => (
            <Button
              text={item.name}
              onClick={() =>
                handleMoveToColumn({
                  item,
                  from: fruits,
                  setFrom: setFruits,
                  setTo: setItems,
                  force: true,
                })
              }
            />
          ))}
        </div>
      </div>

      <div className="todo border">
        <header>Vegetable</header>
        <div className="column">
          {vegetables.map((item) => (
            <Button
              text={item.name}
              onClick={() =>
                handleMoveToColumn({
                  item,
                  from: vegetables,
                  setFrom: setVegetables,
                  setTo: setItems,
                  force: true,
                })
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
