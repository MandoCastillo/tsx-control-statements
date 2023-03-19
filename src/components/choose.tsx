import React, { ReactNode } from 'react';

interface WhenProps {
    condition: boolean;
    children: ReactNode;
}

interface OtherwiseProps {
    children: ReactNode;
}

function When({ condition, children }: WhenProps) {
    return condition ? <>{children}</> : null;
}

function Otherwise({ children }: OtherwiseProps) {
    return <>{children}</>;
}

interface ChooseProps {
    children: ReactNode;
}

function Choose({ children }: ChooseProps) {
    let hasChosen = false;
    let defaultElement: ReactNode = null;

    // Loop over each child element of the Choose component
    const elements = React.Children.toArray(children);
    const renderedElements = elements.map((element) => {
        // If the child element is a When component, check its condition and return its children
        if (React.isValidElement(element) && element.type === When) {
            const whenElement = element as React.ReactElement<WhenProps>;
            if (whenElement.props.condition) {
                hasChosen = true;
                return whenElement.props.children;
            }
        }
        // If the child element is an Otherwise component, return its children
        else if (React.isValidElement(element) && element.type === Otherwise) {
            // @ts-ignore
            defaultElement = element.props.children;
        }
        // If the child element is neither a When nor an Otherwise component, throw an error
        else {
            throw new Error('Choose component can only contain When and Otherwise components');
        }
        return null;
    });

    // If no When component was chosen, render the default Otherwise component (if any)
    if (!hasChosen && defaultElement) {
        renderedElements.push(defaultElement);
    }

    return <>{renderedElements}</>;
}

export { Choose, When, Otherwise };
