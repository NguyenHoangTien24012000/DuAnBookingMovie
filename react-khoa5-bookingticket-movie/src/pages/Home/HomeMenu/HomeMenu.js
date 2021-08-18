import React from 'react'
import { Tabs } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

export default function HomeMenu() {
    return (
        <>

            <div class="container mx-auto mt-20">
                <Tabs tabPosition="left">
                    <TabPane tab={<Avatar size="large" src="http://picsum.photos/24" />} key="1">
                        Content of Tab 1
                    </TabPane>
                    <TabPane tab={<Avatar size="large" src="http://picsum.photos/01" />} key="2">
                        Content of Tab 2
                    </TabPane>
                    <TabPane tab={<Avatar size="large" src="http://picsum.photos/00" />} key="3">
                        Content of Tab 3
                    </TabPane>
                </Tabs>
            </div>
        </>
    )
}
