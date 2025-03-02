import DashboardLayout from '../../components/DashboardLayout'
import SupportCard from './components/SupportCard'
import ContactCard from './components/ContactCard'
import { IoMdMail } from 'react-icons/io'
import { AiTwotoneMessage } from 'react-icons/ai'
// import InfoCard from '../Dashboard/components/InfoCard'

const Support = () => {
  return (
    <DashboardLayout>
      <SupportCard leftComponent={<ContactCard/>} title='Contact Us' text='Have a question or just want to know more? Feel free to reach out to us.' icon={IoMdMail}/>
      <SupportCard  title='Live Chat' text="Don't have time to wait for the Answer? Chat with us now." icon={AiTwotoneMessage} />
    </DashboardLayout>
    // STOPPED -npm 7:16
  )
}

export default Support
