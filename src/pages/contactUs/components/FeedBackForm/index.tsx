import { useForm } from 'react-hook-form'
import { FeedBackScheme, FeedBackValidationScheme } from '../../../../common/schemes/feedBack';
import { message } from 'antd';
import { yupResolver } from '@hookform/resolvers/yup';
import Styles from './index.module.scss'
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
        register,
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
        <form onSubmit={handleSubmit(handler)} className={Styles.formClass}>

            <div className={Styles.inputWrapper}>
                <label className={Styles.Label}>{t("ContactUS.name")}:</label>
                <input {...register('name')} className={Styles.inputClass} type="text" placeholder=''/>
                <p className={Styles.error}>{errors.name?.message}</p>
            </div>
            <div className={Styles.inputWrapper}>
                <label>{t("ContactUS.surname")}:</label>
                <input {...register('surname')} className={Styles.inputClass} type="text" placeholder=''/>
                <p className={Styles.error}>{errors.surname?.message}</p>
            </div>
            <div className={Styles.inputWrapper}>
                <label>{t("ContactUS.fatherName")}:</label>
                <input {...register('fatherName')} className={Styles.inputClass} type="text" placeholder=''/>
                <p className={Styles.error}>{errors.fatherName?.message}</p>
            </div>
            <div className={Styles.inputWrapper}>
                <label>{t("ContactUS.email")}:</label>
                <input {...register('email')} className={Styles.inputClass} type="email" placeholder=''/>
                <p className={Styles.error}>{errors.email?.message}</p>
            </div>
        
            <button className={Styles.SubmitBtn}>Submit</button>

        </form>
    </>
  )
}

export default FeedBackForm
