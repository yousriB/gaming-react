import './GamingLibrary.css'
import {GamingLibraryCard,SectionHeader,SectionWrapper} from '../../Components/index'

import GamingLibraryData from '../../Data/GamingLibraryData'

const GamingLibrary = () => {

  const Cards = GamingLibraryData.map(card =>{
    return <GamingLibraryCard key={card.id} image={card.image} titel={card.titel} category={card.category} rate={card.rate} download={card.download}/>
   })
  return (

      <>
      <SectionWrapper>
        <SectionHeader>Most Popular</SectionHeader>
        <div className='gaming-library-cards'>
           {Cards}
        </div>
        </SectionWrapper>
    </>
  )
}

export default GamingLibrary
