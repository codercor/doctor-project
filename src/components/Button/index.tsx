import classnames from "classnames";
type Props = {
    children: React.ReactNode;
    className?: string;
    type?: "transparent-white" | "secondary" | "tertiary-flat" | "quaternary-flat";
    direction?: "left" | "right";
}

const Button = ({ children, className, type = "transparent-white", direction = "left" }: Props) => {
    const typeStyle = {
        "transparent-white": "bg-transparent text-white border-white",
        "secondary": "bg-secondary text-white  border-secondary",
        "tertiary-flat": "bg-tertiary-flat text-white border-tertiary-flat",
        "quaternary-flat": "bg-quaternary-flat text-white border-quaternary-flat",
    }
    const directionStyle = {
        "left": "rounded-br-[20px] rounded-tl-[20px]",
        "right": " rounded-tr-[20px] rounded-bl-[20px]",
    }
    const classNames = classnames("cursor-pointer px-[34px] py-[15px] text-[white] border-[1.4px]  ", typeStyle[type], directionStyle[direction], className)
    return (
        <div className={classNames}>
            {children}
        </div>
    );
}

export default Button;