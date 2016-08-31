import React, { Component, PropTypes } from 'react';

export default function wrap(states, handlers) {
    return function extend(WrappedComponent) {
        return class extends Component {
            static propTypes() {
                return {
                    store: PropTypes.object.isRequired
                };
            }

            render() {
                return (
                    <WrappedComponent
                        {...this.props}
                        {...states(this.props.store.getState(), this.props)}
                        {...handlers(this.props.store.send, this.props)}
                    />
                );
            }

            componentDidMount() {
                this.unsubscribe = this.props.store.subscribe(this.forceUpdate.bind(this));
            }

            componentWillUnmount() {
                this.unsubscribe();
            }
        };
    };
}
