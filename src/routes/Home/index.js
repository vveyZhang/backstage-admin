import React, { PureComponent } from 'react';
import { Card, Avatar, Row, Col } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import { Link } from 'dva/router'
import styles from './index.less';
export default class Home extends PureComponent {
    render() {
        const pageHeaderContent = (
            <div className={styles.pageHeaderContent}>
                <div className={styles.avatar}>
                    <Avatar
                        size="large"
                        src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
                    />
                </div>
                <div className={styles.content}>
                    <div className={styles.contentTitle}>早安，曲丽丽，祝你开心每一天！</div>
                    <div>交互专家 | 蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED</div>
                </div>
            </div>
        );
        return (
            <PageHeaderLayout content={pageHeaderContent}>
                <Card
                    className={styles.shopInfo}
                    style={{ marginBottom: 24 }}
                    title="店铺名"
                    bordered={false}
                    extra={<Link to="/">修改</Link>}
                    loading={false}
                    bodyStyle={{ padding: 20 }}
                >
                    <Row gutter={24} >
                        <Col sm={6} span={24} >
                            <img className={styles.image} src="https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png" />
                        </Col>
                        <Col sm={18} span={24} >
                            <div>那是一种内在的东西， 他们到达不了，也无法触及的，那是一种内在的东西， 他们到达不了，也无法触及的，那是一种内在的东西， 他们到达不了，也无法触及的</div>
                        </Col>
                    </Row>
                    <div className={styles.images} >
                        <Row gutter={16}>
                            <Col sm={6} span={24}  >
                                <img className={styles.image} src="https://gw.alipayobjects.com/zos/rmsportal/uVZonEtjWwmUZPBQfycs.png" />
                            </Col>
                            <Col sm={6} span={24} >
                                <img className={styles.image} src="https://gw.alipayobjects.com/zos/rmsportal/uVZonEtjWwmUZPBQfycs.png" />
                            </Col>
                            <Col sm={6} span={24} >
                                <img className={styles.image} src="https://gw.alipayobjects.com/zos/rmsportal/uVZonEtjWwmUZPBQfycs.png" />
                            </Col>
                            <Col sm={6} span={24} >
                                <img className={styles.image} src="https://gw.alipayobjects.com/zos/rmsportal/uVZonEtjWwmUZPBQfycs.png" />
                            </Col>
                        </Row>
                    </div>
                </Card>

            </PageHeaderLayout>
        );
    }
}
