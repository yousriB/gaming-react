import './MostPopular.css'
import {Card,SectionHeader,SectionWrapper,} from '../../Components/index'
import MostPopularData from '../../Data/MostPopularData copy'

const MostPopular = () => {
   const Cards = MostPopularData.map(card =>{
    return <Card key={card.id} image={card.image} titel={card.titel} category={card.category} rate={card.rate} download={card.download}/>
   })
  return (
    <>
      <SectionWrapper>
        <SectionHeader>Most Popular</SectionHeader>
        <div className='most-popular-items'>
           {Cards}
        </div>
        </SectionWrapper>
    </>
  )
}
export default MostPopular
