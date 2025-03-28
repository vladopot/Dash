import { Controller, useForm } from 'react-hook-form'
import { FeedBackScheme, FeedBackValidationScheme } from '../../../../common/schemes/feedBack';
import { Button, Form, Input, message } from 'antd';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';

const FeedBackForm = () => {
    
    const { t } = useTranslation();

    const [messageApi, contextHolder] = message.useMessage();

    const success = () => {
        messageApi.open({
        type: 'success',
        content: t("ContactUS.succesMessage"),
        });
    };

    const {
        control,
        reset,
        formState :{
            errors,
        },
        handleSubmit,
    } = useForm<FeedBackScheme>({
        mode: 'onChange',
        resolver: yupResolver(FeedBackValidationScheme)
    });

    const handler = (data: FeedBackScheme) => {
        success();
        console.log(data);
        reset();
    };

    console.log(errors);

  return (
    <>
        {contextHolder}
        <Form onFinish={handleSubmit(handler)} layout="vertical">
            <Form.Item
                label="Name"
                validateStatus={errors.name ? "error" : ""}
                help={errors.name?.message}
            >
                <Controller
                    name="name"
                    control={control}
                    render={({ field }) => <Input {...field} />}
                />
            </Form.Item>

            <Form.Item
                label="Surname"
                validateStatus={errors.surname ? "error" : ""}
                help={errors.surname?.message}
            >
                <Controller
                    name="surname"
                    control={control}
                    render={({ field }) => <Input {...field} />}
                />
            </Form.Item>

            <Form.Item
                label="Father Name"
                validateStatus={errors.fatherName ? "error" : ""}
                help={errors.fatherName?.message}
            >
                <Controller
                    name="fatherName"
                    control={control}
                    render={({ field }) => <Input {...field} />}
                />
            </Form.Item>

            <Form.Item
                label="Email"
                validateStatus={errors.email ? "error" : ""}
                help={errors.email?.message}
            >
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => <Input {...field} />}
                />
            </Form.Item>

            <Button type="primary" htmlType="submit">Submit</Button>
        </Form>
    </>
  )
}

export default FeedBackForm
