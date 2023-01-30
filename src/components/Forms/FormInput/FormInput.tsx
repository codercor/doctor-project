import classNames from "classnames";

interface FormInputProps {
  label?: string;
  placeholder?: string;
  type?:
    | "text"
    | "email"
    | "number"
    | "password"
    | "date"
    | "tel"
    | "datetime-local"
    | "month"
    | "week"
    | "time"
    | "url"
    | "search"
    | "color"
    | "range"
    | "file"
    | "image"
    | "submit"
    | "reset"
    | "button"
    | "checkbox"
    | "radio"
    | "hidden";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  value?: string;
  name?: string;
  error?: string;
  disabled?: boolean;
}
const FormInput = ({
  error,
  name,
  value = undefined,
  onKeyUp,
  onChange,
  label,
  placeholder = "Lütfen doldurunuz",
  type = "text",
  disabled = false,
}: FormInputProps) => {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className="text-[#4E929D] text-[16px] font-nexa-bold">
          {label}
        </label>
      )}
      <input
        value={value}
        name={name}
        onChange={onChange}
        onKeyUp={onKeyUp}
        className="text-[black] text-[16px] font-nexa-bold rounded-[5px_20px_0px_20px]"
        type={type}
        placeholder={placeholder}
        disabled={disabled}
      />
      {error && (
        <span className="text-[#FF0000] text-[16px] font-nexa-regular ml-2">
          * {error}
        </span>
      )}
    </div>
  );
};
//modify for select (onChange, onKeyUp)  Types of property 'onChange' are incompatible.
interface FormInputSelectProps
  extends Omit<FormInputProps, "onChange" | "onKeyUp"> {
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLSelectElement>) => void;
  options?: { value: string; label: string }[];
}

export const FormInputSelect = ({
  options,
  error,
  name,
  value = undefined,
  onChange,
  label,
  placeholder = "Lütfen doldurunuz",
  disabled = false,
}: FormInputSelectProps) => {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className="text-[#4E929D] text-[16px] font-nexa-bold">
          {label}
        </label>
      )}
      <select
        value={value}
        name={name}
        onChange={onChange}
        className="text-[black] text-[16px] font-nexa-bold rounded-[5px_20px_0px_20px]"
        placeholder={placeholder}
        disabled={disabled}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options?.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
      {error && (
        <span className="text-[#FF0000] text-[16px] font-nexa-regular ml-2">
          * {error}
        </span>
      )}
    </div>
  );
};

interface FormInputTextAreaProps
  extends Omit<FormInputProps, "onChange" | "onKeyUp"> {
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  maxLength?: number;
}

export const FormInputTextArea = ({
  error,
  name,
  value = undefined,
  onChange = () => {},
  label,
  placeholder = "Lütfen doldurunuz",
  disabled = false,
  maxLength = 10000,
}: FormInputTextAreaProps) => {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className="text-[#4E929D] text-[16px] font-nexa-bold">
          {label}
        </label>
      )}
      <textarea
        maxLength={maxLength}
        value={value}
        name={name}
        onChange={onChange}
        disabled={disabled}
        className="text-[black] text-[16px] font-nexa-bold rounded-[5px_20px_0px_20px]"
        placeholder={placeholder}
      />
      {error && (
        <span className="text-[#FF0000] text-[16px] font-nexa-regular ml-2">
          * {error}
        </span>
      )}
    </div>
  );
};

//component radio button but look like checkbox

interface FormInputRadioProps
  extends Omit<FormInputProps, "onChange" | "onKeyUp"> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  options?: { value: string; label: string }[];
}

export const FormInputRadio = ({
  options,
  error,
  name,
  value = undefined,
  onChange,
  label,
  disabled = false,
  placeholder = "Lütfen doldurunuz",
}: FormInputRadioProps) => {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className="text-[#4E929D] text-[16px] font-nexa-bold">
          {label}
        </label>
      )}
      <div className="flex w-full">
        {options?.map((option, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-start w-full mt-2"
            >
              <input
                value={option.value}
                name={name}
                onChange={onChange}
                type="radio"
                disabled={disabled}
                className="text-[black] text-[16px] font-nexa-bold rounded-[5px_20px_0px_20px]"
              />
              <label className="text-[black] text-[16px] font-nexa-bold ml-2">
                {option.label}
              </label>
            </div>
          );
        })}
      </div>
      {error && (
        <span className="text-[#FF0000] text-[16px] font-nexa-regular ml-2">
          * {error}
        </span>
      )}
    </div>
  );
};

export default FormInput;
