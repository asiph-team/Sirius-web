import React from 'react'
import { ContextAuth } from '../../../utility/context/Auth'
import { rules } from '../../../configs/rules';

function permitted(role, rule) {
    return rules[role].includes(rule)
}

const Can = props => {
    return (
        <ContextAuth.Consumer>
            {({ user }) => {
                if (permitted(user.role, props.rule)) return props.children
                return null
            }}
        </ContextAuth.Consumer>
    )
}

export default Can;