import classNames from "classnames";
import React from "react";
import { v4 } from "uuid";

const Button = ({
  isActive,
  number,
  onClick,
}: {
  isActive: boolean;
  number: number;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "rounded-full transition-all shadow-2xl duration-100 hover:shadow-inner min-w-[56px] min-h-[56px] hover:bg-[white] bg-[#DADECB] text-[#A1AA82]",
        { "!shadow-inner  !bg-[white]": isActive }
      )}
    >
      {number}
    </button>
  );
};
type Props = {
  active: number;
  setter: (value: number) => void;
  parts: number;
};
export default function Form2Footer({ active, setter, parts }: Props) {
  const back = () => {
    if (active > 1) {
      setter(active - 1);
    } else {
      console.log("back to previous sub step of form");
    }
  };

  const next = () => {
    if (active < parts) {
      setter(active + 1);
    } else {
      console.log("submit for save");
    }
  };

  return (
    <div className="min-h-[112px] my-[10px] w-full px-[40px] rounded-[20px_5px] p-2 flex bg-[#E9EDD9]  text-[#5B623D] items-center justify-between">
      <div className="flex flex-wrap gap-[10px]">
        {parts > 6 ? (
          <>
            <span className="mr-[10px]">
              <Button
                isActive={active === 1}
                number={1}
                onClick={() => setter(1)}
              />
            </span>

            {![1, parts - 1].includes(active - 1) && (
              <Button
                isActive={false}
                number={active > 1 ? active - 1 : 2}
                onClick={() => setter(active > 1 ? active - 1 : 2)}
              />
            )}
            {![1, parts].includes(active) && (
              <Button
                isActive={active === active}
                number={active}
                onClick={() => setter(active)}
              />
            )}
            {![2, parts].includes(active + 1) && (
              <Button
                isActive={false}
                number={active < parts ? active + 1 : parts - 1}
                onClick={() => setter(active < parts ? active + 1 : parts - 1)}
              />
            )}
            <span className="ml-[10px]">
              <Button
                isActive={active === parts}
                number={parts}
                onClick={() => setter(parts)}
              />
            </span>
          </>
        ) : (
          Array(parts)
            .fill(1)
            .map((_, number) => (
              <Button
                key={v4()}
                isActive={number + 1 === active}
                number={number + 1}
                onClick={() => setter(number + 1)}
              />
            ))
        )}
      </div>

      <div className="flex gap-[20px]">
        <button
          className={classNames(
            "rounded-[5px_20px] min-w-[152px] min-h-[56px] hover:bg-[white] transition-all shadow-2xl duration-100 hover:shadow-inner hover:text-[#83895E] bg-[#83895E] text-[#FFFFFF]"
          )}
          onClick={back}
        >
          Önceki
        </button>
        <button
          onClick={next}
          className={classNames(
            "rounded-[20px_5px] min-w-[152px] min-h-[56px] hover:bg-[white] transition-all shadow-2xl duration-100 hover:shadow-inner hover:text-[#83895E] bg-[#83895E] text-[#FFFFFF]"
          )}
        >
          Sonraki
        </button>
      </div>
    </div>
  );
}
