import classNames from "classnames";

const TL = ({ className = "" }: { className?: string }) => {
    const classes = classNames("!font-montserrat font-medium", className);
    return (
        <span className={classes}>
            ₺
        </span>
    );
}

export default TL;