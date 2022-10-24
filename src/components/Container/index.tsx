import classnames from 'classnames';
const Container = ({ children, className = "first-line:" }: any) => {
    const classNames = classnames("md:max-w-[1920px] w-full relative  md:mx-auto", className)
    return (
        <div className={classNames} >
            {children}
        </div>
    );
}

export default Container;