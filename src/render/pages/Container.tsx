import { ipcRenderer } from 'electron';
import React from 'react';

interface ContainerProps {
    data: number;
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(({ data }, ref) => {
    return (
        <div style={{ width: 200, height: 200, background: '#ccc' }} ref={ref}
            onClick={() => {
                ipcRenderer.send('set-title', 'testsetsetts');
            }}
        >
            这是一个盒子
            {data}
        </div>
    );
});
