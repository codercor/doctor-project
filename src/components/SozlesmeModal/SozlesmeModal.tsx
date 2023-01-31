import React from "react";

export default function SozlesmeModal({
  closeWithValue,
  children
}: {
  closeWithValue: (response: boolean) => void;
  children: React.ReactNode;
}) {
  const boxRef = React.useRef<HTMLDivElement>(null);
  const [buttonActive, setButtonActive] = React.useState(false);

  React.useEffect(() => {
    if (boxRef.current) {
      boxRef.current.addEventListener("scroll", (e) => {
        console.log("scroll");

        if (boxRef.current) {
          console.log(
            boxRef.current.scrollTop + boxRef.current.clientHeight,
            boxRef.current.scrollHeight
          );
          if (
            boxRef.current.scrollTop + boxRef.current.clientHeight >=
            boxRef.current.scrollHeight - 1
          ) {
            console.log("OKK");

            setButtonActive(true);
          } else {
            setButtonActive(false);
            console.log("NOOO");
          }
        }
      });
    }
  }, [boxRef.current]);

  return (
    <div
      className="w-screen h-screen bg-[#00000099] fixed top-0 left-0 z-50 flex justify-center items-center"
      onClick={() => closeWithValue(false)}
    >
      <div className="w-[800px] min-h-[200px]  h-[400px] bg-secondary-light rounded-[30px_5px] p-[30px]">
        <div
          ref={boxRef}
          className="w-full h-[calc(100%-50px)] overflow-y-scroll"
        >
          {children}
        </div>
        <div className="w-full h-[50px]  flex justify-center items-center">
          <button
            disabled={!buttonActive}
            className="w-[200px] h-[50px] bg-[#4D5628] rounded-[30px_5px] text-[white] disabled:opacity-30"
            onClick={(e) => {
              e.stopPropagation();
              closeWithValue(true);
            }}
          >
            Kabul ediyorum
          </button>
        </div>
      </div>
    </div>
  );
}
