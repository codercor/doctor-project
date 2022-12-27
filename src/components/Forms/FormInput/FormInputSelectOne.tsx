import { Check } from "@mui/icons-material";
import classNames from "classnames";
import { Field } from "formik";
import { v4 } from "uuid";
import FormSectionHeader from "../FormSectionHeader/FormSectionHeader";

const FormInputSelectOne = ({
  options,
  name,
  value,
  error,
  label,
}: {
  options: { value: string; label: string }[];
  name: string;
  value: string;
  error?: string;
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
        aria-labelledby="my-radio-group"
      >
        {options.map((option: any) => (
          <label
            className={classNames(
              "min-h-[50px] pr-[10px] bg-[#F9F9F9] border-[1px] gap-[10px] rounded-[5px_20px] border-[#D4E5E8] flex items-center justify-start min-w-[196px]",
              {
                "!bg-[#4E929D] text-[white]": value == option.value,
              }
            )}
            key={v4()}
          >
            <Field
              className="hidden"
              type="radio"
              name={name}
              value={option.value}
            />
            {value === option.value ? (
              <div className="bg-[#D4E5E8] text-[#4E929D] flex items-center justify-center  border-none h-[48px] w-[48px] rounded-[5px_20px]">
                <Check />
              </div>
            ) : (
              <div className="bg-[#D4E5E8]  border-none h-[48px] w-[48px] rounded-[5px_20px]"></div>
            )}

            {option.label}
          </label>
        ))}
        {error && (
          <span className="text-[#FF0000] text-[16px] font-nexa-regular ml-2">
            * {error}
          </span>
        )}
      </div>
    </div>
  );
};

export default FormInputSelectOne;
