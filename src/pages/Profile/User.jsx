// import axios from 'axios';
// import { Form, Input, Button, message } from 'antd';

// const User = ({ onSuccess }) => {
//   const [form] = Form.useForm();

//   const onFinish = (values) => {
//     axios.post('http://localhost:8080/user/', values)
//       .then((response) => {
//         message.success('User created successfully');
//         form.resetFields();
//         onSuccess(); // Llama a la función onSuccess para indicar que se ha creado el usuario
//       })
//       .catch((error) => {
//         console.error('There was an error creating the user!', error);
//       });
//   };

//   return (
//     <Form
//       form={form}
//       name="register"
//       onFinish={onFinish}
//       layout="vertical"
//       style={{ maxWidth: 400, margin: '0 auto' }}
//     >
//       <Form.Item
//         name="nickname"
//         label="Nickname"
//         rules={[{ required: true, message: 'Please input your nickname!' }]}
//       >
//         <Input />
//       </Form.Item>
//       <Form.Item
//         name="password"
//         label="Password"
//         rules={[{ required: true, message: 'Please input your password!' }]}
//       >
//         <Input.Password />
//       </Form.Item>
//       <Form.Item
//         name="email"
//         label="Email"
//         rules={[{ required: true, message: 'Please input your email!' }]}
//       >
//         <Input />
//       </Form.Item>
//       <Form.Item>
//         <Button type="primary" htmlType="submit">
//           Register
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };

// export default User;
