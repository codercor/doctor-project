import Text from "../atoms/Text";
import classNames from "classnames";
export type MenuItem = {
    title: string,
    path: string,
    isActive: boolean
}
const NavLink = ({ item }: { item: MenuItem }) => {
    return (
        <Text className={classNames("text-onPrimary-2", {
            "text-active-onPrimary  relative before:content-[' '] before:absolute before:bottom-[-1px] before:w-1/2 before:h-[3px] before:rounded-full before:bg-active-onPrimary": item.isActive
        })} type="bold">{item.title}</Text>
    );
}

export default NavLink;