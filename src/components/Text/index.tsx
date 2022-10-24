import React, { HTMLAttributes } from 'react'
import classNames from 'classnames'
type TextProps = {
    type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'overline' | 'paragraph',
    className?: HTMLAttributes<HTMLParagraphElement>['className'],
    children?: React.ReactNode
}

const Text = ({ type = 'body', children = '', className = 'text-black' }: TextProps) => {
    let elementTagName: string = ``;
    elementTagName = `${type}`;
    if (type === 'body') elementTagName = 'p'
    if (type === 'overline') elementTagName = 'span'
    if (type === 'paragraph') elementTagName = 'p'
    let classes = {
        h1: 'text-[60px] font-nexa-bold',
        h2: 'text-[49px] font-nexa-bold',
        h3: 'text-[39px] font-nexa-bold',
        h4: 'text-[31px] font-nexa-bold',
        h5: 'text-[25px] font-nexa-bold',
        h6: 'text-[20px] font-nexa-bold',
        body: 'text-[16px] font-nexa-bold',
        overline: 'text-[12px] font-nexa-bold',
        paragraph: 'text-[16px] font-nexa-light'
    }
    let Element: JSX.Element = React.createElement(elementTagName, {
        className: classNames(classes[type], className)
    }, children);

    return Element;
}

export default Text;