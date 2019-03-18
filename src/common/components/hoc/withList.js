import React from 'react';

export function withList(WrappedComponent, data = []) {
    return class extends React.Component {
        render() {
            return (
                data.map((item) => <WrappedComponent data={item} />)
            )
        }
    }
}
