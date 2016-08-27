import React, { Component } from 'react';

export function wrap(states, commands) {
    return function (WrappedComponent) {
        return class extends Component {
            render() {
                return (
                    <WrappedComponent
                        {...this.props}
                        {...states(this.props.store.getState(), this.props)}
                        {...commands(this.props.store.send, this.props)}
                        />
                )
            }

            componentDidMount() {
                this.unsubscribe = this.props.store.subscribe(this.handleChange.bind(this))
            }

            componentWillUnmount() {
                this.unsubscribe()
            }

            handleChange() {
                this.forceUpdate()
            }
        }
    }
}