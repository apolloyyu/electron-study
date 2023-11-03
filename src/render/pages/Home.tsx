import React, { useRef, useState } from 'react';
import { sleep } from '@/lib';
import { asyncComponent } from '@/lib/asyncComponent';

interface HomeProps {}

let Container = asyncComponent(async () => {
    await sleep(1500);
    return (await import(/* webpackChunkName: "test-chunk" */'./Container')).Container;
});

export const Home: React.FC<HomeProps> = props => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    return (
        <div>
            hello
            <Container data={count} ref={ref} />
        </div>
    );
};
