import React from 'react'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
      <button onClick={(e) => {
        console.log('click')
      }}>Button</button>
      </>
    )
  }
}



// import React, { useEffect, useState } from "react";
// import { Form, Input } from "antd-mobile";
// export default () => {
//   console.log("home init");
//   const [name, setName] = useState("zhangrh");
//   const [form] = Form.useForm();
//   const id = 11;
//   useEffect(() => {
//     console.log('effect id')
//     setTimeout(() => {
//       console.log('setName')
//       setName('支付宝')
//       form.setFieldsValue({
//         name: "支付宝"
//       })
//     }, 400);
//   }, [id]);
//   console.log('name: ' + name)
//   return (
//     <>
//       Name: {name}
//       <Form form={form}>
//         <Form.Item name="name" label="名称" initialValue={name}>
//           <Input
//             value={name}
//             onChange={(v) => setName(v)}
//             placeholder="请输入名称"
//             clearable
//           ></Input>
//         </Form.Item>
//       </Form>
//       <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
//       {/* <Child type="normal"></Child> */}
//     </>
//   );
// };

// const Child = (props) => {
//   console.log("child init");
//   const [count, setCount] = useState(0);
//   const [type, setType] = useState(props.type);
//   useEffect(() => {
//     document.title = `You clicked ${count} times`;
//   });
//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//       <p>Type: {type}</p>
//     </div>
//   );
// };
