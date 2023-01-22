import { Lock } from "@mui/icons-material";
import classNames from "classnames";
import StepStatus, { StepStatusType } from "../Status/Status";

export type FormStepType = {
  status?: StepStatusType;
  stepNumber: number;
  stepName: string;
  isActive?: boolean;
  isLocked?: boolean;
  onClick?: () => void;
};
const FormStep = (props: FormStepType) => {
  return (
    <div
      onClick={props?.onClick}
      className={classNames(
        "w-full cursor-pointer h-full border-[#DDDCDC] border-[1px] px-[24px] py-[18px]",
        {
          "bg-[#F9F9F9]": !props.isActive,
          "bg-[#E8F3F4] border-[#B3D3D6]": props.isActive,
        }
      )}
    >
      <div className="flex justify-start items-center leading-none">
        <h1 className="text-[#9D9D9D] font-nexa-bold text-[36px] ">
          {" "}
          {props.stepNumber >= 5 ? 3 : props.stepNumber}{" "}
        </h1>
        {props.status && (
          <span className="ml-[20px]">
            <StepStatus status={props.status} />
          </span>
        )}
        {props.isLocked && <Lock fontSize="small" className="text-[#9D9D9D]" />}
      </div>
      <p className="text-[#9D9D9D] text-[18px] font-nexa-regular">
        {" "}
        {props.stepName}{" "}
      </p>
    </div>
  );
};

//has no locked status and step number dont show
export const FormSubStep = (props: FormStepType) => {
  return (
    <div
      onClick={props?.onClick}
      className={classNames(
        "w-full cursor-pointer h-full border-[#DDDCDC] border-[1px] px-[24px] py-[18px]",
        {
          "bg-[#F9F9F9]": !props.isActive,
          "bg-[#E8F3F4] border-[#B3D3D6]": props.isActive,
        }
      )}
    >
      <p className="text-[#9D9D9D] h-full flex justify-start items-center leading-none text-[14px] text-start  font-nexa-regular">
        {" "}
        {props.stepName}{" "}
      </p>
    </div>
  );
};

export default FormStep;
