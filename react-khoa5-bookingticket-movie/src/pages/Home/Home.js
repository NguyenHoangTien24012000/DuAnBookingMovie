import React from 'react'
import HomeMenu from './HomeMenu/HomeMenu'
import { Card } from 'antd';
import { Row, Col, Divider } from 'antd';
const { Meta } = Card;
export default function Home() {
    return (


        <div className="container mx-auto mt-20">
            <div>

                <Divider >sub-element align full</Divider>
                <Row justify="space-around">
                    <Col span={3}>
                        <Card
                            hoverable
                            style={{ width: "150%" }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                    <Col span={3}>
                        <Card
                            hoverable
                            style={{ width: "150%" }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                    <Col span={3}>
                        <Card
                            hoverable
                            style={{ width: "150%" }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>

                </Row>
            </div>
            <HomeMenu />
        </div>
    )
}
