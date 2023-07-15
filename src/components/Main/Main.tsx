import { MainPropsType } from '@/src/Types/PropsTypes'
import { Section } from '../Section/Section'
import { SectionImageBlock } from '../Section/SectionImageBlock/SectionImageBlock'
import { SectionList } from '../Section/SectionList/SectionList'
import { SectionProjectBlock } from '../Section/SectionProjectBlock/SectionProjectBlock'
import { SectionDescription } from '../UI/SectionDescription/SectionDescription'
import { SectionTitle } from '../UI/SectionTitle/SectionTitle'
import s from './Main.module.css'

export const Main = ({ mainData }: MainPropsType) => {

   return (
      <main className={s.main}>
         <div className={s.mainContainer}>
            <Section>
               <SectionTitle>{mainData[0].title}</SectionTitle>
               <SectionDescription>{mainData[0].description}</SectionDescription>
            </Section>
            <Section>
               <SectionTitle>{mainData[1].title}</SectionTitle>
               <SectionDescription>{mainData[1].description}</SectionDescription>
               <SectionImageBlock images={mainData[1].images} />
            </Section>

            <Section>
               <SectionTitle>{mainData[6].title}</SectionTitle>
               <SectionDescription>{mainData[6].description}</SectionDescription>
               <SectionList listItems={mainData[6].listItems} />
            </Section>

            <Section>
               <SectionTitle>{mainData[3].title}</SectionTitle>
               <SectionDescription>{mainData[3].description}</SectionDescription>
            </Section>

            <Section>
               <SectionTitle>{mainData[2].title}</SectionTitle>
               <SectionDescription>{mainData[2].description}</SectionDescription>
            </Section>
            <Section>
               <SectionTitle>{mainData[4].title}</SectionTitle>
               <SectionDescription>{mainData[4].description}</SectionDescription>
               <SectionList listItems={mainData[4].listItems} />
            </Section>

            <Section>
               <SectionTitle>{mainData[5].title}</SectionTitle>
               <SectionProjectBlock sliderData={mainData[5].sliderData} />
            </Section>
         </div>
      </main>
   )
}
