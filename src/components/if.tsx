import React, { ReactNode } from 'react';

interface IfProps {
    condition: boolean;
    children: ReactNode;
    else?: ReactNode;
}

function If({ condition, children, else: elseElement }: IfProps) {
    if (condition) {
        return <>{children}</>;
    } else if (elseElement) {
        return <>{elseElement}</>;
    } else {
        return null;
    }
}

export { If };