import classNames from "classnames";
type TextProps = {
    text?: string;
    type?: "regular" | "bold" | "light";
    className?: string;
    children?: React.ReactNode;
}
const Text = ({ text = "empyt text component", type = "regular", className = "", children = "empyt text component" }: TextProps) => {
    return (
        <span className={classNames([{
            "font-nexa-regular": type === "regular",
            "font-nexa-bold": type === "bold",
            "font-nexa-light": type === "light",
        }, { [className]: true }])}>{children || text}</span>
    );
}

export default Text;