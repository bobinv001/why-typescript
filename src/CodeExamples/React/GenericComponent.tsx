type Props<T> = {
  options: T[];
  selectedOption: string;
  onChange: (value: string) => void;
};

type Option = OptionObject | string;

type OptionObject = {
  value: string;
  label: string;
};

const isOptionObject = (option: Option): option is OptionObject =>
  (option as OptionObject).value !== undefined;

export function Dropdown<T extends Option>(props: Props<T>) {
  return (
    <select>
      {props.options.map((option) => {
        /// Error, JS would have thrown an error at runtime
        // @ts-expect-error
        console.log(option.label);
        // Safer usage
        if (isOptionObject(option)) {
          console.log(option.label);
        }
        return isOptionObject(option) ? option.value : option;
      })}
    </select>
  );
}
