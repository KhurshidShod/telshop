export default function FilterCheckbox({ id, label }) {
  return (
    <label
      htmlFor={id}
      className="
        flex
        cursor-pointer
        items-center
        gap-2
        select-none
        text-sm
        text-gray-700
        dark:text-zinc-300
      "
    >
      <input
        id={id}
        type="checkbox"
        className="texnodom-checkbox"
      />

      <span>{label}</span>
    </label>
  );
}
