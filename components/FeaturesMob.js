/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import Image from 'next/image';
// import { css } from '@emotion/css';
import BackgroundImage from '../public/static/images/backgroundimage.png'


function FeaturesMob() {

    return (
        <div css={css`width: 100%; display: flex; justify-content: center;`}>
        <div css={css`position: relative; overflow-x: hidden;`}>
            <div css={css`position: absolute; display: flex, justify-content: center; width: 360px; height: 600px;`}>
                <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 700; font-size: 26px; line-height: 34px; text-align: center; letter-spacing: -0.02em; color: #383838; padding: 2rem 0;`}>무작정 많은 실을 넣어 당긴다고<br/>예.쁜.동.안이 될 수 없습니다!</div>
                <div css={css`display: grid; grid-template-columns: 180px 180px; height: 450px;`}>
                    <div css={css`display: flex; align-items: center; justify-content: center;`}>
                        <div>
                            <div css={css`background: #AAC2E7; align-text: center; mardin: center; border-radius: 15px; padding: 5px 20px; font-family: 'Pretendard'; font-style: normal; font-weight: 700; font-size: 14px; line-height: 17px; letter-spacing: -0.02em; color: #FFFFFF;`}>미들라인 리프팅</div>
                            <div css={css`font-family: 'Pretendard'; padding-top: 1rem; font-style: normal; font-weight: 400; font-size: 14px; line-height: 22px; text-align: center; letter-spacing: -0.02em; color: #383838;`}>피하지방층과 SMAS층에<br/>실의 코그가 잘 걸리도록<br/>실을 일자라인으로<br/>삽입하여 효과는 UP!<br/>부작용은 DOWN!</div>
                        </div>
                    </div>
                    <div css={css`border-left: 0.01px dashed rgba(0, 0, 0, .1); display: flex; align-items: center; justify-content: center;`}>
                        <div>
                            <div css={css`background: #AAC2E7; align-text: center; mardin: center; border-radius: 15px; padding: 5px 30px; font-family: 'Pretendard'; font-style: normal; font-weight: 700; font-size: 14px; line-height: 17px; letter-spacing: -0.02em; color: #FFFFFF;`}>고정 솔루션</div>
                            <div css={css`font-family: 'Pretendard'; padding-top: 1rem; font-style: normal; font-weight: 400; font-size: 14px; line-height: 22px; text-align: center; letter-spacing: -0.02em; color: #383838;`}>리프팅실의 코그와<br/>매듭을 활용,<br/>처진 피부를 즉시 리프팅<br/>활성화된 섬유화세포가<br/>콜라겐 재생까지!</div>
                        </div>
                    </div>
                    <div css={css`border-top: 0.01px dashed  rgba(0, 0, 0, .1); display: flex; align-items: center; justify-content: center;`}>
                        <div>
                            <div css={css`background: #AAC2E7; align-text: center; mardin: center; border-radius: 15px; padding: 5px 20px; font-family: 'Pretendard'; font-style: normal; font-weight: 700; font-size: 14px; line-height: 17px; letter-spacing: -0.02em; color: #FFFFFF;`}>멀티 리프팅 디자인</div>
                            <div css={css`font-family: 'Pretendard'; padding-top: 1rem; font-style: normal; font-weight: 400; font-size: 14px; line-height: 22px; text-align: center; letter-spacing: -0.02em; color: #383838;`}>움직임이 적은 부위에<br/>강력하게 실을 고정하여<br/>흔들림 없이<br/>유지되는 고정효과</div>
                        </div>
                    </div>
                    <div css={css`border-top: 0.01px dashed  rgba(0, 0, 0, .1); border-left: 0.01px dashed  rgba(0, 0, 0, .1); display: flex; align-items: center; justify-content: center;`}>
                        <div>
                            <div css={css`background: #AAC2E7; align-text: center; mardin: center; border-radius: 15px; padding: 5px 20px; font-family: 'Pretendard'; font-style: normal; font-weight: 700; font-size: 14px; line-height: 17px; letter-spacing: -0.02em; color: #FFFFFF;`}>타이트닝 리프팅</div>
                            <div css={css`font-family: 'Pretendard'; padding-top: 1rem; font-style: normal; font-weight: 400; font-size: 14px; line-height: 22px; text-align: center; letter-spacing: -0.02em; color: #383838;`}>리프팅구간과 고정구간을<br/>최적의 비율로 맞추어,<br/>더욱 오랫동안<br/>안정적인 리프팅 효과</div>
                        </div>
                    </div>
                </div>
            </div>
            <Image
            src={BackgroundImage}
            css={css`object-fit: cover; width: 100%;`}
            loading="lazy"
            />
        </div>
      </div>
    )
}

export default FeaturesMob;