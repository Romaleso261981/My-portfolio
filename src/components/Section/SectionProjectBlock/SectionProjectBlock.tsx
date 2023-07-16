import { SectionProjectBlockPropsType } from '@/src/Types/PropsTypes'
import { useRef, useState } from 'react'
import { Project } from './Project/Project'
import s from './SectionProjectBlock.module.css'

export const SectionProjectBlock = ({ sliderData }: SectionProjectBlockPropsType) => {
   const projectsContainer = useRef<HTMLDivElement | null>(null)
   let currentPos = 0

   function moveSlider(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, direction: string) {
      const slider = projectsContainer.current!
      const gap = slider.offsetWidth * 0.02
      const sliderItemWidth = (slider.children[0] as HTMLElement).offsetWidth + gap

      if (direction === 'right') {
         const rightButton = e.currentTarget
         const leftButton = rightButton.previousElementSibling as HTMLButtonElement
         leftButton.style.borderColor = 'rgb(var(--gamma-c))'

         if (Math.abs(currentPos / sliderItemWidth) + 3 == slider.children.length - 1) {
            rightButton.style.borderColor = 'gray'
         }
         if (Math.abs(currentPos / sliderItemWidth) + 3 == slider.children.length) return
         currentPos -= sliderItemWidth

         slider.style.transform = `translate(${currentPos}px)`

      } else {
         const leftButton = e.currentTarget
         const rightButton = leftButton.nextElementSibling as HTMLButtonElement
         rightButton.style.borderColor = 'rgb(var(--gamma-c))'
         if (currentPos / sliderItemWidth == -1) {
            leftButton.style.borderColor = 'gray'
         }
         if (currentPos == 0) return
         currentPos += sliderItemWidth

         slider.style.transform = `translate(${currentPos}px)`
      }
   }


   return sliderData ? (
      <div className={s.mainWrapper}>
         <div className={s.projectsWrapper}>
            <div className={s.projects} ref={projectsContainer}>
               {sliderData.map(({ id, imageSrc, projectTitle, projectDescription, technologies, src }) => (
                  <Project
                     key={id}
                     id={id}
                     imageSrc={imageSrc}
                     projectTitle={projectTitle}
                     projectDescription={projectDescription}
                     technologies={technologies}
                     src={src}
                  />
               ))}
            </div>
         </div>
         <button
            style={{borderColor: 'gray'}}
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => moveSlider(e, 'left')}
            className={[s.arrow, s.arrowLeft].join(' ')}
         ></button>
         <button onClick={e => moveSlider(e, 'right')} className={[s.arrow, s.arrowRight].join(' ')}></button>
      </div>
   ) : (
      <></>
   )
}
