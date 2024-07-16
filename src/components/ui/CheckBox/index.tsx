import styles from "./styles.module.css";

const CheckBox = ({ id, value, checked, onChange }: CheckBoxProps) => {
  return (
    <label htmlFor={id} className={styles.checkbox} key={id}>
      <span>{value}</span>
      <input
        type="checkbox"
        id={id}
        name={id}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span className={styles.checkmark}></span>
    </label>
  );
};

interface CheckBoxProps {
  id: string;
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default CheckBox;
