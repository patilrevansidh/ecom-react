import React from 'react';

export function withList(WrappedComponent, OtherComponent) {
    return class extends React.Component {
        render() {
            return (
                <React.Fragment>
                    {this.props.isLoading && [1, 2, 4, 5, 6, 6, 7, 8].map((item, index) => <OtherComponent key={index} item={item} />)}
                    {this.props.data.map((item, index) => <WrappedComponent item={index} item={item} history={this.props.history} />)}
                </React.Fragment>
            )
        }
    }
}
