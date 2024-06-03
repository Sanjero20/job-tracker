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
  required?: boolean;
}

function CustomSelect({
  options,
  value,
  setValue,
  placeholder,
  className,
  required = false,
  name,
}: Props) {
  //
  const handleSelect = (value: string) => {
    const newValue = !required && value === "null" ? "" : value;
    setValue(newValue, name);
  };

  return (
    <Select value={value} onValueChange={handleSelect} required={required}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>

      <SelectContent>
        {!required && value != "" && (
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

export default CustomSelect;
