import { Button, Space } from "antd";
import "./App.css";

function App() {
    return (
        <>
            <Space wrap>
                <Button type="primary" danger>Primary Button</Button>
                <Button>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
            </Space>
        </>
    );
}

export default App;
