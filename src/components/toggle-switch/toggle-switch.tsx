import styles from "./toggle.module.css";

interface ToggleSwitchProps {
  checked: boolean;
  onToggleChange: () => void;
}

export const AppToggleSwitch = ({
  checked,
  onToggleChange,
}: ToggleSwitchProps) => {
  return (
    <div className="flex flex-row justify-around w-full max-w-lg h-10 items-center bg-ghost-white">
      <span className="text-lg font-bold text-legal-eagle">Annually</span>
      <label className={styles.switch}>
        <input type="checkbox" checked={checked} onChange={onToggleChange} />
        <span className={styles.slider}></span>
      </label>
      <span className="text-lg font-bold text-legal-eagle">Monthly</span>
    </div>
  );
};
