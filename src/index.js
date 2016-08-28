import React, { Component } from 'react';

export function wrap(states, handlers) {
    return function (WrappedComponent) {
        return class extends Component {
            render() {
                return (
                    <WrappedComponent
                        {...this.props}
                        {...states(this.props.store.getState(), this.props)}
                        {...handlers(this.props.store.send, this.props)}
                    />
                )
            }

            componentDidMount() {
                this.unsubscribe = this.props.store.subscribe(this.forceUpdate.bind(this))
            }

            componentWillUnmount() {
                this.unsubscribe()
            }
        }
    }
}