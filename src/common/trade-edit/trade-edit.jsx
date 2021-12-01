import { Form, Button, DatePicker, Input, Picker } from "antd-mobile";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { dateFormat } from "../../util/date.js";
import { getAccountList } from "../../api/account.js";

const Wrapper = styled.div`
  padding-top: 1rem;
`;

export default (props) => {
  const [accountData, setAccountData] = useState([]);
  const [accountPickerVisible, setAccountPickerVisible] = useState(false);
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const onFinish = (values) => {
    props.onFinish(values);
  };
  const [form] = Form.useForm();
  useEffect(() => {
    getAccountList().then((r) => {
      const data = r.data.map((i) => {
        return {
          label: i.name,
          value: i.id,
        };
      });
      setAccountData([data]);
    });
  }, []);

  useEffect(() => {
    form.setFieldsValue(props.initialValues);
  }, [props.initialValues]);

  return (
    <Wrapper>
      <Form
        form={form}
        onFinish={onFinish}
        footer={
          <Button block type="submit" color="primary">
            提交
          </Button>
        }
      >
        <Form.Item
          name="account"
          label="账户"
          trigger="onConfirm"
          onClick={() => {
            setAccountPickerVisible(true);
          }}
          rules={[{ required: true, message: "账户不可为空格" }]}
        >
          <Picker
            visible={accountPickerVisible}
            cols={1}
            columns={accountData}
            onClose={() => {
              setAccountPickerVisible(false);
            }}
          >
            {(value) => (value[0] ? value[0].label : "请选择账户")}
          </Picker>
        </Form.Item>
        <Form.Item
          name="spendDate"
          label="日期"
          trigger="onConfirm"
          onClick={() => {
            setDatePickerVisible(true);
          }}
          rules={[{ required: true, message: "操作日期不可为空" }]}
        >
          <DatePicker
            visible={datePickerVisible}
            max={new Date()}
            onClose={() => {
              setDatePickerVisible(false);
            }}
          >
            {(value) =>
              // TODO: 格式化日期
              value ? dateFormat(value, "yyyy-MM-dd") : "请选择日期"
            }
          </DatePicker>
        </Form.Item>
        <Form.Item
          name="money"
          label="金额"
          rules={[{ required: true, message: "账户不可为空格" }]}
        >
          <Input placeholder="请输入金额" type="number" />
        </Form.Item>
        <Form.Item name="remark" label="备注">
          <Input placeholder="请输入备注" />
        </Form.Item>
      </Form>
    </Wrapper>
  );
};
