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
            <div onClick={() => {
                // 动态载入print.ts
                import('@/components/print').then(res => {
                    res.default();
                });
                setCount(count + 1);
                console.log(ref.current);
            }}
            >
                test
                <Container data={count} ref={ref} />
            </div>
        </div>
    );
};
