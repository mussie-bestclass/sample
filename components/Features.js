/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import Image from 'next/image';
// import { css } from '@emotion/css';

import { useMediaQuery } from 'react-responsive';
import Abstract from '../public/static/images/abstract.png';
import Woman from '../public/static/images/woman.png';

function Features() {
    const isLaptop = useMediaQuery({query: '(max-width: 1440px)'})
    const isTablet = useMediaQuery({query: '(max-width: 1180px)'})
    return (
        <div css={css`width: 100%; display: flex; justify-content: center;`}>
        <div css={css`width: 1920px; position: relative; overflow-x: hidden;`}>
          <div css={css`position: absolute; width: 1920px; z-index: 10; top: 0; ${isTablet ? 'left: -300px;' : `${isLaptop? 'left: -170px;': 'left: 0px;'}`}  overflow-x: hidden; display: flex; justify-content: center;`}>
            <Image src={Abstract} css={css`width: 1920px; height: 100%;`} loading="lazy"/>
          </div>
          <div css={css`position: absolute; z-index: 20; ${isTablet ? 'left: -150px;' : `${isLaptop? 'left: 100px': 'left: 160px;'}`} width: 1920px; top: 30px; overflow-x: hidden display: flex; justify-content: center;`}>
            <Image src={Woman} css={css`height: 868px; width: 811px;`} loading="lazy"/>
          </div>
          <div css={css`width: 1920px; height: 127px; background: linear-gradient(to right, #E8EEF9 0%, #D6E1F4 100% );`}></div>
          <div css={css`width: 1920px; height: 777px; overflow-y: hidden;`}>
            <div css={css`width: 600px; position: absolute; z-index: 30; top: 350px; ${isTablet ? 'left: 400px;' : `${isLaptop? 'left:630px': 'left: 900px;'}`}`}>
              <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 700; font-size: 50px; line-height: 60px; letter-spacing: -0.04em; color: #383838;`}>무작정 많은 실을 넣어 당긴다고 <br/><span css={css`color: #5991E7`}>예.쁜.동.안</span>이 될 수 없습니다!</div>
              <div css={css`display: grid; grid-row-start: 4;`}>
                <div css={css`display: flex; align-items: center; padding: 1rem 0;`}>
                  <div css={css`width: 200px; padding: 0 2rem 0 0;`}><div css={css`font-family: 'Pretendard'; background-color: #AAC2E7; padding: 6px 20px; display: flex; flex-direction: row; justify-content: center; align-items: center; font-style: normal; font-weight: 700; font-size: 18px; line-height: 22px; letter-spacing: -0.02em; color: #FFFFFF; border-radius: 20px; width: 180px;`}>미들라인 리프팅</div></div>
                  <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 300; font-size: 16px; line-height: 24px; letter-spacing: -0.02em; color: #383838;`}>피하지방층과 SMAS층에 실의 코그가 잘 걸리도록 실을<br/>일자라인으로 삽입하여 효과는 UP! 부작용은 DOWN!</div>
                </div>  
                <div css={css`display: flex; align-items: center; padding: 1rem 0;`}>
                  <div css={css`width: 200px; padding: 0 5rem 0 0;`}><div css={css`font-family: 'Pretendard'; background-color: #AAC2E7; padding: 6px 20px; display: flex; flex-direction: row; justify-content: center; align-items: center; font-style: normal; font-weight: 700; font-size: 18px; line-height: 22px; letter-spacing: -0.02em; color: #FFFFFF; border-radius: 20px; width: 150px;`}>고정 솔루션</div></div>
                  <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 300; font-size: 16px; line-height: 24px; letter-spacing: -0.02em; color: #383838;`}>리프팅실의 코그와 매듭을 활용, 처진 피부를<br/>즉시 리프팅 활성화된 섬유화세포가 콜라겐 재생까지!</div>
                </div> 
                <div css={css`display: flex; align-items: center; padding: 1rem 0;`}>
                  <div css={css`width: 200px; padding: 0 2rem 0 0;`}><div css={css`font-family: 'Pretendard'; background-color: #AAC2E7; padding: 6px 20px; display: flex; flex-direction: row; justify-content: center; align-items: center; font-style: normal; font-weight: 700; font-size: 18px; line-height: 22px; letter-spacing: -0.02em; color: #FFFFFF; border-radius: 20px; width: 180px;`}>멀티 리프팅 디자인</div></div>
                  <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 300; font-size: 16px; line-height: 24px; letter-spacing: -0.02em; color: #383838;`}>움직임이 적은 부위에 강력하게 실을 고정하여<br/>흔들림 없이 유지되는 고정효과</div>
                </div> 
                <div css={css`display: flex; align-items: center; padding: 1rem 0;`}>
                  <div css={css`width: 200px; padding: 0 2rem 0 0;`}><div css={css`font-family: 'Pretendard'; background-color: #AAC2E7; padding: 6px 20px; display: flex; flex-direction: row; justify-content: center; align-items: center; font-style: normal; font-weight: 700; font-size: 18px; line-height: 22px; letter-spacing: -0.02em; color: #FFFFFF; border-radius: 20px; width: 170px;`}>타이트닝 리프팅</div></div>
                  <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 300; font-size: 16px; line-height: 24px; letter-spacing: -0.02em; color: #383838;`}>리프팅구간과 고정구간을 최적의 비율로 맞추어,<br/>더욱 오랫동안 안정적인 리프팅 효과</div>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Features;