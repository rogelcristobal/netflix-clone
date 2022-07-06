import React from 'react';

const Typography = ({children,weight,size,casing,color}) => {
  return (
    <>
        <p className={`text-${size}  text-${color} tracking-wide ${casing} font-${weight}`}>
            {children}
        </p>
    </>
    )
}

Typography.defaultProps={
    children: 'text',
    color: 'neutral-400',
    casing: 'uppercase',
    weight: 'base',
    size:'xs'
}

export default Typography
