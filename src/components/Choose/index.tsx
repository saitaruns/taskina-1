import { useState } from "react";
import Button from "../ui/Button";
import styles from "./styles.module.css";
import CheckBox from "../ui/CheckBox";

interface CheckBoxOption {
  id: string;
  value: string;
  checked: boolean;
}

const Choose = () => {
  const [allChecked, setAllChecked] = useState(false);
  const [checkBoxOptions, setCheckBoxOptions] = useState<CheckBoxOption[]>([
    { id: "1", value: "Page 1", checked: false },
    { id: "2", value: "Page 2", checked: true },
    { id: "3", value: "Page 3", checked: false },
    { id: "4", value: "Page 4", checked: false },
    { id: "5", value: "Page 5", checked: false },
    { id: "6", value: "Page 6", checked: false },
    { id: "7", value: "Page 7", checked: false },
    { id: "8", value: "Page 8", checked: false },
  ]);

  const handleCheckBoxChange = ({
    id,
    checked,
  }: {
    id: string;
    checked: boolean;
  }) => {
    setCheckBoxOptions((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, checked };
        }
        return item;
      })
    );
  };

  return (
    <div className={styles.choose}>
      <CheckBox
        id="all"
        value="All Pages"
        checked={allChecked}
        onChange={() => {
          setAllChecked(!allChecked);
          setCheckBoxOptions((prev) =>
            prev.map((item) => {
              return { ...item, checked: !allChecked };
            })
          );
        }}
      />

      <hr />
      <div className={styles.options}>
        {checkBoxOptions.map(({ id, value, checked }) => (
          <CheckBox
            key={id}
            id={id}
            value={value}
            checked={checked}
            onChange={() =>
              handleCheckBoxChange({
                id: id,
                checked: !checked,
              })
            }
          />
        ))}
      </div>
      <hr />
      <div className={styles.row}>
        <Button onClick={() => {}} disabled={false} type="button">
          Done
        </Button>
      </div>
    </div>
  );
};

export default Choose;
