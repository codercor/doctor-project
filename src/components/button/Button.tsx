import classNames from "classnames";

const Button = ({
    children = "click me",
    className = "",
    ...attr
}: {
    children?: string | React.ReactNode;
    className?: string;
    [key: string]: any;
}) => {
    return (
        <button {...attr} className={classNames('bg-secondary text-white px-[30px] py-[15px] rounded-tl-[20px] rounded-br-[20px]', className)}>
            {children}
        </button>
    );
}

export default Button;