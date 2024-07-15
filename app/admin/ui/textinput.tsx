import { Input, type InputProps } from "@nextui-org/input";

type Props = InputProps & {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  readonly?: boolean;
  errorMessage?: string;
  isInvalid?: boolean;
  size?: "sm" | "md" | "lg";
};

export default function CustomInput({
  type,
  value,
  onChange,
  placeholder,
  readonly,
  errorMessage,
  isInvalid,
  size = "md",
  ...rest
}: Props) {
  const sizeStyles = {
    sm: "w-[60%]",
    md: "w-[80%]",
    lg: "w-[100%]",
  };
  return (
    <div className={`${sizeStyles[size]} mx-[8px] my-[4px] relative`}>
      <Input
        aria-label="input"
        variant="bordered"
        type={type}
        value={value}
        onChange={onChange}
        label={placeholder}
        color="success"
        radius="sm"
        classNames={{
          input: "text-[#222]",
          inputWrapper: "border-[2px] border-[#dec]",
          errorMessage: "text-[#f00] absolute bottom-[-10px]",
          label: "text-[#666]",
        }}
        required={true}
        readOnly={readonly}
        isInvalid={isInvalid}
        {...rest}
      />
      {isInvalid && errorMessage && (
        <small className="text-[10px] text-[#f00] absolute -bottom-[10px] left-2">
          {errorMessage}
        </small>
      )}
    </div>
  );
}
