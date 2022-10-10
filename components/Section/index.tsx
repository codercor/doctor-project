import Image from 'next/image';
import classNames from 'classnames';
const Section = ({ children, className }: any) => {
    return (
        <div
            className={
                classNames('w-full', className)}>
            {children}
        </div>
    );
}

export default Section;