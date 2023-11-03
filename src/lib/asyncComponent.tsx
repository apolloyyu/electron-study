import React, { lazy, Suspense } from 'react';
import { Spin } from 'antd';

export const asyncComponent = function<P> (
    load: () => Promise<React.ComponentType<P>>,
    fallback: React.ReactNode = <Spin spinning />
) {
    const LazyComponent = lazy(() => load().then(c => ({ default: c })));
    return React.forwardRef((props: P, ref) => <Suspense fallback={fallback}>
        <LazyComponent ref={ref} {...props as any} />
    </Suspense>);
};