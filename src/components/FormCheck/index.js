
import React, { Component } from 'react'
import styles from './index.less'
import classnames from 'classnames'
import PropTypes from 'prop-types'
class FormCheck extends Component {
    static defaultProps = {
        name: null,
        errors: {},
        after: null,
        before: null,
        className: null
    }
    render() {
        const { name, errors, after, before, className, children } = this.props;
        return (
            <div className={classnames(styles.formCheckWaper, className)} >
                <div className={errors[name] ? 'has-error' : ""} >
                    <div className={styles.formitemwaper} >
                        {before ? <div className={styles.formitemBefore} >{before}</div> : null}
                        {children}
                        <div className={styles.formitemAfter} >{after}</div>
                    </div>
                    <div className="ant-form-explain">{errors[name]}</div>
                </div>
            </div>
        )
    }
}

FormCheck.propTypes = {
    name: PropTypes.string,
    errors: PropTypes.object,
    className: PropTypes.string,
    after: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.element
    ]),
    before: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.element
    ])
}


export default FormCheck