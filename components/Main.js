import React, { memo, useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'

import { useTranslation } from 'next-i18next'
import { useGlobalContext } from '../context'


import ProfileImage from './ProfileImage'
import { MailIcon, PhoneIcon, EarthIcon } from './svgs'
import Text from './Text'

function Main({ ...props }) {
  const { t } = useTranslation('common')
  console.log(useGlobalContext())
  const [skillCounter, setSkillCounter] = useState(1)
  const [certificateCounter, setCertificateCounter] = useState(1)
  const [experienceCounter, setExperienceCounter] = useState(1)
  const [educationCounter, setEducationCounter] = useState(1)

  useEffect(() => {
    const refNameInput = document.querySelector('.main__header-name')
    refNameInput.focus()
    var b = document.getElementsByClassName('bg')[0]
    var g = document.getElementsByClassName('bordern')[0]
    b.style.display='none';
      g.style.display='none';

  }, [])

  const handleAddClick = e => {
    setSkillCounter(skillCounter + 1)
  }
  const handleAddExperience = e => {
    setExperienceCounter(experienceCounter + 1)
  }
  const handleAddEducation = e => {
    setEducationCounter(educationCounter + 1)
  }
  const handleAddCertificate = e => {
    setCertificateCounter(certificateCounter + 1)
  }
  return (
    <Wrapper {...props}>
      <div className='bordern'/>
        <div className='main__header'>
          <ProfileImage className='main__header-photo' />
          <div className='main__header-box'>
            <Text className='main__header-name' contentEditable placeholder={t('name')} />
            <Text
              className='main__header-sub-name title--2'
              placeholder={t('profession')} contentEditable
            />
          </div>
        </div>
      
      <div className='bg' />
      <div className='main__content'>
        <div className='profile'>
          <div className='profile__box'>
            <Text title placeholder={t('profile')} disable="true">{t('profile')}</Text>
            <Text title placeholder={t('marital-status')} contentEditable>{t('marital-status')}: </Text>
            <Text title placeholder={t('military-service')} contentEditable>{t('military-service')}: </Text>
            <Text placeholder={t('profile-detail')} contentEditable>{t('resume-summery')} : </Text>
          </div>
          <div className='profile__box'>
            <Text title placeholder={t('detail')}>{t('detail')}</Text>
            <div className='profile__logo-box'>
              <EarthIcon />
              <Text placeholder={t('enter-adress')} contentEditable />
            </div>
            <div className='profile__logo-box'>
              <MailIcon />
              <Text placeholder={t('enter-email')} contentEditable />
            </div>
            <div className='profile__logo-box'>
              <PhoneIcon />
              <Text placeholder={t('enter-phone')} contentEditable />
            </div>
          </div>
          {/* <div className='profile__box'>
            <Text title>{t('contant')}</Text>
            <div className='profile__logo-box'>
              <MailIcon />
              <Text placeholder={t('enter-email')} />
            </div>
            <div className='profile__logo-box'>
              <PhoneIcon />
              <Text placeholder={t('enter-phone')} />
            </div>
          </div> */}
        </div>
        <div className='work'>
          <div style={{ position: 'relative' }} className='experience-con'>
            <Text title placeholder={t('experience')}>{t('experience')}</Text>
            <button className='add-btn' onClick={handleAddExperience}>
              +
            </button>
            {new Array(experienceCounter).fill(1).map((_, idx) => (
              <div key={idx}>
                <Text placeholder={t('position')} className='title--3' contentEditable />
                <Text placeholder={t('position-detail')} contentEditable />
                -----------------------------------------------------------------------
              </div>
            ))}
          </div>

          <div style={{ position: 'relative' }} className='experience-con'>
            <Text title placeholder={t('education')}>{t('education')}</Text>
            <button className='add-btn' onClick={handleAddEducation}>
              +
            </button>
            {new Array(educationCounter).fill(1).map((_, idx) => (
              <div key={idx}>
                <Text placeholder={t('degree')} className='title--3' contentEditable />
                <Text placeholder={t('field')} className='title--22' contentEditable />
                <Text placeholder={t('school')} contentEditable />
                -----------------------------------------------------------------------
              </div>
            ))}
          </div>

          {/* <div>
            <Text title placeholder={t('cerificate')}>{t('cerificate')}</Text>
            <Text placeholder={t('enter-certificate')} className='title--3' contentEditable />
            <Text placeholder={t('center-certificate')} contentEditable />
          </div> */}

          <div style={{ position: 'relative' }} className='experience-con'>
            <Text title placeholder={t('cerificate')}>{t('cerificate')}</Text>
            <button className='add-btn' onClick={handleAddCertificate}>
              +
            </button>
            <div>
              {new Array(certificateCounter).fill(1).map((skill, idx) => (
                <div key={idx}>
                  <Text placeholder={t('enter-certificate')} contentEditable />
                  <Text placeholder={t('center-certificate')} contentEditable />
                  -----------------------------------------------------------------------
                </div>
              ))}
            </div>
          </div>

          <div className='skill-con'>
            <Text title placeholder={t('skills')}>{t('skills')}</Text>
            <button className='add-btn' onClick={handleAddClick}>
              +
            </button>
            <div>
              {new Array(skillCounter).fill(1).map((skill, idx) => (
                <div key={idx}>
                  <input type='range' id={idx} />
                  <Text placeholder={t('enter-skill')} contentEditable />
                </div>
              ))}
            </div>
          </div>
          <div className='lang'>
            <div className='lang-r'>
              <Text title placeholder={t('language')}>{t('language')}</Text>
            </div>
            <div className='lang-l'>
              <div>
                <input type='range' />
                <Text placeholder={t('reading-skill')}>{t('reading-skill')}</Text>

                <input type='range' />
                <Text placeholder={t('writing-skill')}>{t('writing-skill')}</Text>
              </div>
              <div>
                <input type='range' />
                <Text placeholder={t('speaking-skill')}>{t('speaking-skill')}</Text>

                <input type='range' />
                <Text placeholder={t('listening-skill')}>{t('listening-skill')}</Text>
              </div>
            </div>

          </div>
        </div>
      </div>

    </Wrapper>
  )
}

const Wrapper = styled.main`
  padding: 10rem;
  width: 119.0551181102rem;
  background-color: var(--color-secondary);

  .main__header {
    display: flex;
    align-items: center;
    font-weight: 700;

    &-photo {
      margin-right: 6rem;
      flex: 0 0 auto;
    }

    &-box {
      flex: 1;
    }

    &-name {
      font-size: 6rem;
      line-height: 1;
      caret-color: red;
      padding: 0.5rem;
      width: 100%;
      display: inline-block;
    }
  }

  .main__content {
    display: flex;
    margin: 6rem 0;

    .profile {
      width: 25rem;
      margin-right: 6rem;
      flex-shrink: 0;

      &__box:not(:first-child) {
        margin-top: 4rem;
      }

      &__logo-box {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .work {
      flex: 1;
      > div:not(:first-child) {
        margin-top: 6rem;
      }
    }

    .skill-con {
      position: relative;

      > div {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
      > div > div {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        p {
          width: auto;
          margin-left: 1rem;
          font-size: 1.4rem;
          line-height: 1.6;
          font-weight: 400;
          padding: 0.5rem;
          white-space: nowrap;
          margin-top: 0.45rem;
          word-break: break-all;
        }
      }
    }
    .skill-con:hover .add-btn {
      opacity: 1;
    }

    .experience-con:hover .add-btn {
      opacity: 1;
    }
    .experience-con .add-btn {
      left: 20rem;
    }
    .add-btn {
      border: 0;
      outline: 0;
      border-radius: 50%;
      width: 2.5rem;
      height: 2.5rem;
      color: var(--color-secondary);
      font-size: 1.8rem;
      background-color: #2ab96b;
      position: absolute;
      left: 10rem;
      top: 0.9rem;
      opacity: 0;
      transition: all 0.2s ease-in-out;
      cursor: pointer;
    }

    .title--3 {
      font-size: 1.8rem;
      font-weight: 600;
      line-height: 1.25;
    }

    .title--22 {
      font-size: 1.5rem;
      font-weight: 600;
      line-height: 1.25;
    }
  }
`

export default memo(Main)
