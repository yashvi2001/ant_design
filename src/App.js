import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Layout, Menu, Divider, Button, Input,Checkbox ,Card} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;
const {Search} = Input;
const { SubMenu } = Menu;
function App() {
  return (
    <Layout>
        <Sider className="sider-style">
          <div className="logo"><h1 style={{ color: '#000000', fontWeight: 'bold' }}>Filter By</h1></div>
          <Divider />
          <Menu theme="light" mode="inline">
            <SubMenu key="1" title="Catagory" style={{ fontSize: 14 }}>
            <div style={{ width: 245, paddingLeft: 25 }}>
              <Input placeholder="Select Catatgories" prefix={<SearchOutlined style={{ color: '#ffffffa6', marginLeft: 24 }} />} />
            </div>
       </SubMenu>
       <Divider />
       <SubMenu key="3" title="Experience Level" style={{ fontSize: 14 }}>
            <div style={{ width: 245, paddingLeft: 25 }}>
            <Checkbox style={{marginBottom:"8px"}}>Entry Level-$</Checkbox><br/>
            <Checkbox style={{marginBottom:"8px"}}>Intermediate-$$</Checkbox><br/>
            <Checkbox >Expert-$$$</Checkbox>
            </div>
            </SubMenu>
            <Divider />
            <SubMenu key="4" title="Job Type" style={{ fontSize: 14 }}>
            <div style={{ width: 245, paddingLeft: 25 }}>
            <Checkbox style={{marginBottom:"8px"}}>Hourly</Checkbox><br/>
            <Checkbox style={{marginBottom:"8px"}}>Fixed-Price</Checkbox><br/>
            </div>
       </SubMenu>
            <Divider />
            <SubMenu key="5" title="Client-Info" style={{ fontSize: 14 }}>
            <div style={{ width: 245, paddingLeft: 25 }}>
            <Checkbox style={{marginBottom:"8px"}}>My Previous Clients</Checkbox><br/>
            </div>
       </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
        <Header style={{backgroundColor:"white"}}>
          <Search className="search"
            placeholder="input search text"
            enterButton
          />
        </Header>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
            <div style={{width:"500px",marginLeft:"320px",height:"350px",backgroundColor:"grey"}} className="site-layout-content"></div>
            <div style={{position:"relative",top:"40px"}}>
            <Button style={{right:"80px",width:"100px"}}type="primary">Start</Button>
          <Button
            style={{
              background: "#FFC107",
              borderColor: "#FFC107" ,
              marginLeft: "40px",
              marginRight: "40px",
              right:"80px",width:"100px"
            }}
            type="primary"
          >
            Pause
          </Button>
          <Button style={{right:"80px",width:"100px"}}type="primary" danger>
            Stop
          </Button>
          </div>
          <div  className="task"style={{position:"relative",top:"-380px",right:"-75%"}}>
          <Card title="Task Queue" style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Card size="small" title="Server Info" style={{ width: 300 }}>
      <p>Cpu usage</p>
      <p>Memory usage</p>
      <p>Processes</p>
      <p>Threads</p>
    </Card>
          </div>
          </div>
        
          </Content>
        </Layout>
      </Layout>
  );
}

export default App;
