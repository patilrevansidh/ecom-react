import React from 'react';

export function withList(WrappedComponent, OtherComponent) {
    return class extends React.Component {
        render() {
            if (!this.props.isLoading && this.props.count === 0)
                return <div> No Record Found </div>
            return (
                <React.Fragment>
                    {this.props.isLoading && [1, 2, 4, 5, 6, 6, 7, 8].map((item, index) => <OtherComponent key={index} item={item} />)}
                    {!this.props.isLoading && this.props.data.map((item, index) => <WrappedComponent key={index} item={item} history={this.props.history} />)}
                </React.Fragment>
            )
        }
    }
}
