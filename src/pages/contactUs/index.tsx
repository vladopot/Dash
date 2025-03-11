import { Flex } from "antd";
import FeedBackForm from './components/FeedBackForm';
import { useTranslation } from 'react-i18next';

const ContactUs = () => {
    const { t } = useTranslation();

  return (
    <Flex
        vertical
        gap={10}
        align='center'
        justify='center'
    >
        <h2>{t("ContactUS.tittle")}</h2>

        <FeedBackForm />
    </Flex>
  )
}

export default ContactUs