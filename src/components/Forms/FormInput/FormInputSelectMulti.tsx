import { Check } from "@mui/icons-material";
import classNames from "classnames";
import { Field } from "formik";
import { v4 } from "uuid";

const FormInputSelectMulti = ({
  options,
  name,
  value,
  error,
  label,
}: {
  options: { value: string; label: string }[];
  name: string;
  value?: string[] | string;
  error?: string | undefined | string[] | never[];
  label: string;
}) => {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className="text-[#4E929D] text-[16px] font-nexa-bold">
          {label}
        </label>
      )}
      <div
        role="group"
        className="w-full flex-wrap gap-[12px] flex items-center justify-start"
        aria-labelledby="checkbox-group"
      >
        {options.map((option: any) => (
          <label
            className={classNames(
              "min-h-[50px] bg-[#F9F9F9] border-[1px] gap-[10px] rounded-[5px_20px] border-[#D4E5E8] flex items-center justify-start min-w-[196px]",
              {
                "!bg-[#4E929D] text-[white]":
                  value == option.value ||
                  value?.includes(option.value as string),
              }
            )}
            key={v4()}
          >
            <Field
              type="checkbox"
              className="hidden"
              name={name}
              value={option.value}
            />
            {value === option.value ||
            value?.includes(option.value as string) ? (
              <div className="bg-[#D4E5E8] text-[#4E929D] flex items-center justify-center  border-none h-[48px] w-[48px] rounded-[5px_20px]">
                <Check />
              </div>
            ) : (
              <div className="bg-[#D4E5E8]  border-none h-[48px] w-[48px] rounded-[5px_20px]"></div>
            )}
            {option.label}
          </label>
        ))}
        {error && typeof error == "string" && (
          <span className="text-[#FF0000] text-[16px] font-nexa-regular ml-2">
            * {error}
          </span>
        )}
        {error &&
          typeof error == "object" &&
          error.map((err: string) => (
            <span
              key={v4()}
              className="text-[#FF0000] text-[16px] font-nexa-regular ml-2"
            >
              * {err}
            </span>
          ))}
      </div>
    </div>
  );
};

export default FormInputSelectMulti;
