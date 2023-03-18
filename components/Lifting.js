/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import Image from 'next/image';
import LiftingOne from '../public/static/images/liftingOne.png';
import LiftingTwo from '../public/static/images/liftingTwo.png';
import LiftingLeftUp from '../public/static/images/LiftingLeftUp.png';
import LiftingRightUp from '../public/static/images/LiftingRightUp.png';

function Lifting () {
    return(
        <div css={css`width: 100%; height: 842px; display: flex; justify-content: center;`}>
            <div css={css`width: 1920px; height: 842px; overflow-x: hidden;`}>
                <div css={css`font-family: 'Pretendard'; padding-top: 6rem; padding-bottom: 0.5rem; font-style: normal; font-weight: 100; font-size: 24px; line-height: 29px; text-align: center; letter-spacing: -0.02em; color: #383838`}>피부 탄력은 제대로 채워야죠</div>
                <div css={css`font-family: 'Pretendard'; padding-top: 0.5rem; padding-bottom: 2rem; font-style: normal; font-weight: 800; font-size: 40px; line-height: 48px; text-align: center; letter-spacing: -0.02em; color: #383838;`}>타이트닝 리프팅</div>
                <div css={css`font-family: 'Pretendard'; padding-top: 1rem; padding-bottom: 3rem; font-style: normal; font-weight: 300; font-size: 20px; line-height: 24px; text-align: center; letter-spacing: -0.02em; color: #383838;`}>타이트닝 리프팅<span css={css`color: #5991E7;`}> <Image src={LiftingLeftUp} css={css`width: 110px; height: 25px;`}/></span> &nbsp; &nbsp;  떨어진 피부 탄력도 바로<span css={css`color: #5991E7;`}> <Image src={LiftingRightUp} css={css`width: 110px; height: 25px;`}/></span></div> 
                <div css={css`display: flex; justify-content: center;`}>
                    <div css={css``}>
                        <div css={css`display: flex; justify-content: center`}>
                            <div css={css``}>
                                <Image
                                src={LiftingOne}
                                css={css`width: 180px; height: 180px`}
                                loading="lazy"
                                />
                            </div>
                            <div css={css`padding-left: 2rem; padding-top: 1rem`}>
                                <div css={css`font-family: 'Poppins'; font-style: normal; font-weight: 700; font-size: 20px; line-height: 30px; letter-spacing: 0.01em; color: #5991E7; padding-top: 2rem'`}>01</div>
                                <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 700; font-size: 20px; line-height: 24px; letter-spacing: -0.02em; color: #191C34; padding-top: 1rem;`}>올리는 리프팅</div>
                                <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 300; font-size: 16px; line-height: 26px; letter-spacing: -0.02em; color: #383838;  padding-top: 1rem;`} >리프팅실의 코그와 매듭을 활용, 처진 피부를 즉시 리프팅 UP!<br/>얼굴의 V라인을 정리하고 볼륨도 같이 올려주는 리프팅</div>
                            </div>
                        </div>
                        <div css={css`width: 720px; border-bottom: 0.2px dashed #383838; padding-top: 2rem;`}></div>
                        <div css={css`padding-top: 2rem; display: flex; justify-content: center`}>
                            <div css={css``}>
                                <Image
                                src={LiftingTwo}
                                css={css`width: 180px; height: 180px`}
                                loading="lazy"
                                />
                            </div>
                            <div css={css`padding-left: 2rem; padding-top: 1rem`}>
                                <div css={css`font-family: 'Poppins'; font-style: normal; font-weight: 700; font-size: 20px; line-height: 30px; letter-spacing: 0.01em; color: #5991E7; padding-top: 2rem'`}>02</div>
                                <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 700; font-size: 20px; line-height: 24px; letter-spacing: -0.02em; color: #191C34; padding-top: 1rem;`}>탱글탱글 타이트닝</div>
                                <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 300; font-size: 16px; line-height: 26px; letter-spacing: -0.02em; color: #383838;  padding-top: 1rem;`}>리프팅실에 의해 활성화된 섬유화세포가 콜라겐 재생까지!<br/>피부 탄력은 UP! 잔주름은 DOWN! 탱글한 타이트닝</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lifting;