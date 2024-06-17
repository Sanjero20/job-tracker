import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  options: string[];
  value: string;
  setValue: (value: string, key: string) => void;
  name: string;
  placeholder: string;
  className?: string;
}

function SelectFilter({
  options,
  value,
  setValue,
  placeholder,
  className,
  name,
}: Props) {
  //
  const handleSelect = (value: string) => {
    const newValue = value === "null" ? "" : value;
    setValue(newValue, name);
  };

  return (
    <Select value={value} onValueChange={handleSelect}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>

      <SelectContent>
        {value != "" && (
          <SelectItem value="null" className="font-bold opacity-80">
            None
          </SelectItem>
        )}

        {options.map((option, index) => (
          <SelectItem key={index} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default SelectFilter;
