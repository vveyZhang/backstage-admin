import React, { Component } from 'react';
import { routerRedux, Route, Switch } from 'dva/router';
import { connect } from 'dva';
import { Radio, Card, List, Avatar, Tooltip, Icon } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import { getRoutes } from '../../utils/utils';
import styles from './coupon.less'
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
@connect()
export default class SearchList extends Component {
    render() {
        const { match, routerData, location } = this.props;
        const routes = getRoutes(match.path, routerData);
        const titleContent = (
            <RadioGroup defaultValue="on">
                <RadioButton value="on">发放中</RadioButton>
                <RadioButton value="off">下架中</RadioButton>
                <RadioButton value="delete">删除</RadioButton>
            </RadioGroup>
        )
        return (
            <PageHeaderLayout
                title="优惠券"
            >
                <Card title={titleContent} bordered={false}  >
                    <List
                        rowKey="id"
                        dataSource={[{ id: 1 }, { id: 2 }, { id: 3 }]}
                        grid={{ gutter: 24, xl: 3, md: 1, sm: 1, xs: 1 }}
                        renderItem={item => (<List.Item key={item.id} >
                            <Card className={styles.card}
                                actions={[<Tooltip title="查看" ><Icon type="eye-o" /></Tooltip>,
                                <Tooltip title="编辑"  ><Icon type="edit" /></Tooltip>,
                                <Tooltip title="取消投放"  ><Icon type="pushpin-o" /></Tooltip>,
                                <Tooltip title="删除" ><Icon type="delete" /></Tooltip>]}
                            >
                                <Card.Meta
                                    avatar={<Avatar size="large" className={styles.avatar}  >优</Avatar >}
                                    title={<Tooltip placement="topLeft" title="优惠券名"><div className={styles.title} >优惠券名</div></Tooltip>}
                                    description={<Tooltip placement="topLeft" title="优惠券使用详情" ><div className={styles.desc} >优惠券使用详情</div></Tooltip>}
                                />
                                <div className={styles.cardContent} >
                                    <p className={styles.item} >
                                        <span>使用条件</span>
                                        <br />
                                        <em>满 ￥200</em>
                                    </p>
                                    <p className={styles.item} >
                                        <span>优惠</span>
                                        <br />
                                        <em>￥20</em>
                                    </p>
                                    <p className={styles.item} >
                                        <span>投放范围</span>
                                        <br />
                                        <em>全部</em>
                                    </p>
                                </div>
                            </Card>
                        </List.Item>)}
                    />

                </Card>
            </PageHeaderLayout>
        );
    }
}
