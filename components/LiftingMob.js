/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import Image from 'next/image';
import LiftingOne from '../public/static/images/liftingOne.png';
import LiftingTwo from '../public/static/images/liftingTwo.png';

function LiftingMob () {
    return(
        <div css={css`width: 100%; display: flex; justify-content: center;`}>
            <div css={css`overflow-x: hidden;`}>
                <div css={css`font-family: 'Pretendard'; padding-top: 6rem; padding-bottom: 0.5rem; font-style: normal; font-weight: 100; font-size: 18px; line-height: 29px; text-align: center; letter-spacing: -0.02em; color: #383838`}>피부 탄력은 제대로 채워야죠</div>
                <div css={css`font-family: 'Pretendard'; padding-top: 0.5rem; padding-bottom: 2rem; font-style: normal; font-weight: 800; font-size: 28px; line-height: 48px; text-align: center; letter-spacing: -0.02em; color: #383838;`}>타이트닝 리프팅</div> 
                <div css={css`display: flex; justify-content: center;`}>
                    <div css={css``}>
                        <div css={css``}>
                            <div css={css`width: 100%; display: flex; justify-content: center;`}>
                                <Image
                                src={LiftingOne}
                                css={css`width: 180px; height: 180px`}
                                loading="lazy"
                                />
                            </div>
                            <div css={css`padding-top: 1rem`}>
                                <div css={css`font-family: 'Poppins'; font-style: normal; font-weight: 700; font-size: 20px; line-height: 30px; letter-spacing: 0.01em; text-align:center; color: #5991E7; padding-top: 2rem'`}>01</div>
                                <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 700; font-size: 20px; line-height: 24px; letter-spacing: -0.02em; text-align:center; color: #191C34; padding-top: 1rem;`}>올리는 리프팅</div>
                                <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 300; font-size: 16px; line-height: 26px; letter-spacing: -0.02em; text-align:center; color: #383838;  padding-top: 1rem;`} >리프팅실의 코그와 매듭을 활용,<br/>처진 피부를 즉시 리프팅 UP!<br/>얼굴의 V라인을 정리하고<br/>볼륨도 같이 올려주는 리프팅</div>
                            </div>
                        </div>
                        <div css={css`padding-top: 2rem;`}>
                            <div css={css`width: 100%; display: flex; justify-content: center;`}>
                                <Image
                                src={LiftingTwo}
                                css={css`width: 180px; height: 180px`}
                                loading="lazy"
                                />
                            </div>
                            <div css={css`padding-top: 1rem;`}>
                                <div css={css`font-family: 'Poppins'; font-style: normal; text-align:center; font-weight: 700; font-size: 20px; line-height: 30px; letter-spacing: 0.01em; color: #5991E7; padding-top: 2rem'`}>02</div>
                                <div css={css`font-family: 'Pretendard'; font-style: normal; text-align:center; font-weight: 700; font-size: 20px; line-height: 24px; letter-spacing: -0.02em; color: #191C34; padding-top: 1rem;`}>탱글탱글 타이트닝</div>
                                <div css={css`font-family: 'Pretendard'; font-style: normal; text-align:center; font-weight: 300; font-size: 16px; line-height: 26px; letter-spacing: -0.02em; color: #383838;  padding-top: 1rem;`}>리프팅실에 의해 활성화된<br/>섬유화세포가 콜라겐 재생까지!<br/>피부 탄력은 UP! 잔주름은 DOWN!<br/>탱글한 타이트닝</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LiftingMob;