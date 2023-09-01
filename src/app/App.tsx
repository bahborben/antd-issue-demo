import React from 'react';
import { Layout, Tabs, Space, Tooltip, Button, Spin, Col, Row, Watermark } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';

import { useSelector } from 'react-redux';
import { RootState } from './rootReducer';


const { Content, Sider } = Layout;
const { TabPane } = Tabs;
const App: React.FC = () => {
  const {userInfo} = useSelector((state : RootState) => state.co_system_auth);

  return (
    <React.Fragment>
      <Col style={{height: "100%"}}>
        <Row align='middle' style={{height: 64, background: "#001529"}}>          
          <Col flex="0 1 auto" style={{textAlign: "right", margin: "0px 8px"}}>
            <Space>
              <Tooltip title="User info">
                <Button
                  style={{ backgroundColor: '#f56a00' }}
                  size="middle"
                  shape="circle"
                  icon={<UserOutlined />}                  
                />
              </Tooltip>
              <span style={{color: "white"}}>{`Hello ${userInfo.employeeName ? userInfo.employeeName : ""}`}</span>            
              <Tooltip title="exit">
                <Button
                  style={{ backgroundColor: '#f56a00' }}
                  size="middle"
                  shape="circle"
                  icon={<LogoutOutlined />}                  
                />
              </Tooltip>
            </Space>
          </Col>
        </Row>
        <Row style={{height: (window.innerHeight - 64)}}>
          <Layout hasSider={true} style={{backgroundColor: "#FFFFFF"}}>
            <Sider
              collapsible
              width='180'                    
              breakpoint='lg'              
            >
              {"menu"}
            </Sider>
            <Content>
              <Spin size="large" spinning={false} delay={200}>
                <Watermark
                  content={[userInfo.employeeName || "", userInfo.employeeCode || ""]}                  
                >
                  <Tabs
                    style={{paddingTop: "5px"}}
                    type="editable-card"
                    hideAdd={true}
                    activeKey="1"                    
                  >
                        <TabPane key="1" tab="tab 1">
                          {"content..."}
                        </TabPane>                    
                  </Tabs>
                </Watermark>
              </Spin>
            </Content>
          </Layout>          
        </Row>
      </Col>
     
      </React.Fragment>
  );
}

export default App;
