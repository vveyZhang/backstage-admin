import React, { PureComponent } from 'react';
import { Form, Input, Card, DatePicker, Radio, InputNumber, Row, Col, Checkbox } from 'antd';
import moment from 'moment';
import config from './form.config'
import styles from './form.less'
import classnames from 'classnames'
import FormCheck from '../../components/FormCheck'
const RangePicker = DatePicker.RangePicker;
const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
    },
};
function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().startOf('day');
}
@Form.create()
export default class CouponForm extends PureComponent {
    state = {
        isEndtime: false
    }
    render() {
        const { getFieldDecorator, getFieldsError } = this.props.form;
        const { isEndtime } = this.state;
        const effectiveTime = (rule, value, callback) => {
            if (isEndtime) return callback();
            if (parseInt(value) <= 0) callback('请填写有效天数')
            callback();
        }
        const afterTime = (rule, value, callback) => {
            if (isEndtime) return callback();
            if (parseInt(value) <= 0) callback('请填写生效天数')
            callback();
        }
        const endTime = (rule, value, callback) => {
            if (!isEndtime) return callback();
            if (value == "") callback('请选择有效期');
            callback();
        }
        const errors = getFieldsError(['end_time', 'after_day', "effective_day"])
        const soltOptions = [
            { label: '星期一', value: '1' },
            { label: '星期二', value: '2' },
            { label: '星期三', value: '3' },
            { label: '星期四', value: '4' },
            { label: '星期五', value: '5' },
            { label: '星期六', value: '6' },
            { label: '星期日', value: '0' },
        ]
        return (
            <Form className={classnames(styles.form, styles.couponForm)}   >
                <FormItem {...formItemLayout} label="优惠卷名称" extra="建议填写优惠券提供的服务或商品名称，描述卡券提供的具体优惠" >
                    {
                        getFieldDecorator('name', config.name)(<Input placeholder="填写名称" />)
                    }
                </FormItem>
                <FormItem {...formItemLayout} label="优惠价格" required >
                    {
                        getFieldDecorator('coupon', config.coupon)(<InputNumber min={0} precision={2} />)
                    }
                    <span className={styles.unit} >元</span>
                </FormItem>
                <FormItem {...formItemLayout} label="使用条件" extra="提示：0或者不填表示不限制" >
                    满：
                    {
                        getFieldDecorator('condition')(<InputNumber min={0} precision={2} />)
                    }
                    <span className={styles.unit} >元,可使用</span>
                </FormItem>
                <Row>
                    <Col {...formItemLayout.labelCol} className={classnames('ant-form-item-label', styles.formLabel)} ><label className="ant-form-item-required " >有效期</label></Col>
                    <Col {...formItemLayout.wrapperCol} className={styles.formWaper}  >
                        <div className={styles.timeRadioTab} >
                            <RadioGroup value={isEndtime} onChange={(e) => { this.setState({ isEndtime: e.target.value }); console.log(e) }} >
                                <RadioButton value={true} >固定日期</RadioButton>
                                <RadioButton value={false} >领取后生效</RadioButton>
                            </RadioGroup>
                        </div>
                        {isEndtime ? <FormCheck name='end_time' errors={errors} >{
                            getFieldDecorator('end_time', {
                                rules: [{
                                    validator: endTime
                                }]
                            })(
                                <DatePicker disabledDate={disabledDate} />
                            )
                        }</FormCheck> : <div>
                                <FormCheck name="after_day" errors={errors} before="领取后，" after="天生效，有效天数" >
                                    {
                                        getFieldDecorator('after_day', {
                                            rules: [{
                                                validator: afterTime
                                            }]
                                        })(
                                            <InputNumber min={0} precision={0} className={styles.afterTime} />
                                        )
                                    }
                                </FormCheck>
                                <FormCheck name="effective_day" errors={errors} >
                                    {
                                        getFieldDecorator('effective_day', {
                                            rules: [{
                                                validator: effectiveTime
                                            }]
                                        })(
                                            <InputNumber min={0} precision={0} className={styles.effectiveTime} />)
                                    }
                                </FormCheck>

                            </div>

                        }
                    </Col>
                </Row>
                <FormItem {...formItemLayout} label="有效时间段"  >
                    {
                        getFieldDecorator('time_slot', { ...config.time_slot, initialValue: ['0', '1', '2', '3', '4', '5', '6'] })
                            (<CheckboxGroup options={soltOptions} />)
                    }
                </FormItem>
                <FormItem {...formItemLayout} label="每人限领" required >
                    {
                        getFieldDecorator('recevie_number', config.recevie_number)(<InputNumber min={0} precision={0} />)
                    }
                    <span className={styles.unit} >次</span>
                </FormItem>
                <FormItem {...formItemLayout} label="发放数目" required >
                    {
                        getFieldDecorator('number', config.recevie_number)(<InputNumber min={0} precision={0} />)
                    }
                    <span className={styles.unit} >张</span>
                </FormItem>
            </Form>
        )
    }
}