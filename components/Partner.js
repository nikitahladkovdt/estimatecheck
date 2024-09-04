import Image from 'next/image';
import "@/styles/partner.css"
import { schools } from './data'

const Partner = () => {
  return (
    <div className='partner'>
        <div className='p-header'>
            <h2>Partner Schools and Universities</h2>
            <p>For over a decade, we have built strong partnerships with leading institutions across the UK, Canada, USA, Ireland, Malta, Cyprus, the Netherlands, Germany, Spain, Italy, and many other countries. Our collaborations span a wide range of educational levels and programs, including secondary school students (private day and boarding schools, summer schools with English language learning), university students (Foundation, Undergraduate, Postgraduate, and MBA programs), and adults (language immersion programs). Below are just a few examples of our esteemed partners:</p>
        </div>
        <div className='p-container'>
            {
                schools.map((school) => (
                    <div className='ps-box' key={school.id}>
                        <Image src={school.logo} className='ps-item' />
                        <h5>{school.name}</h5>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Partner