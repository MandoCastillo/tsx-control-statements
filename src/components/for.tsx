import React, { ReactNode } from 'react';

interface ForProps<T> {
    of: T[];
    body: (item: T, index: number) => ReactNode;
    filter?: (item: T, index: number) => boolean;

}

function For<T>({ of, body,filter }: ForProps<T>) {
    const filteredItems:T[] = filter ? of.filter(filter) : of;

    return <>{filteredItems.map((item, index) => body(item, index))}</>;
}

export { For };