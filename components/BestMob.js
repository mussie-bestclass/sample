/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import Image from 'next/image';

import Cartoon from '../public/static/images/FaceUpDown.png';
import Cartoon_small from '../public/static/images/FaceUpDown-small.png';
import BestMobTitle from '../public/static/images/BestMobTitle.png';
import Skin from '../public/static/images/skin.png';
import Skin_small from '../public/static/images/skin-small.png';
import Up from '../public/static/images/up.png';
import Down from '../public/static/images/down.png';


function BestMob() {


    const [srcCartoon, { blurCartoon }] = useProgressiveImg(Cartoon_small, Cartoon);
    const [srcSkin, { blurSkin }] = useProgressiveImg(Skin_small, Skin);

    return (
        <div css={css`width: 100%; display: flex; justify-content: center; background-image: repeating-linear-gradient(to bottom, transparent, transparent 5px, #fff 1px, #fff 6px), repeating-linear-gradient(to right, #E6EDFA, #E6EDFA 5px, #fff 1px, #fff 6px);`}>
            <div css={css`overflow: hidden;`}>
                <div css={css`font-family: 'Pretendard'; padding-top: 6rem; padding-bottom: 0.5rem; font-style: normal; font-weight: 100; font-size: 18px; line-height: 29px; text-align: center; letter-spacing: -0.02em; color: #383838`}>효과는 높이고 부작용은 줄이는</div>
                <div css={css`font-family: 'Pretendard'; padding-top: 0.5rem; padding-bottom: 2rem; font-style: normal; font-weight: 800; font-size: 28px; line-height: 48px; text-align: center; letter-spacing: -0.02em; color: #383838; padding-bottom: 2rem;`}>일자라인 리프팅</div>
                <div css={css`background: #FFFFFF; box-shadow: 0px 0px 22px 5px rgba(131, 170, 217, 0.25); padding: 0 2rem; margin: auto;`}>
                    <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 300; font-size: 10px; line-height: 12px; text-align: center; letter-spacing: 0.2em; color: #AAAAAA; padding: 2rem 0;`}>ONLIF LIFTING CENTER</div>
                    <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 400; font-size: 26px; line-height: 27px; text-align: center; letter-spacing: -0.04em; color: #383838;`}>
                        <Image
                        src={BestMobTitle}
                        css={css`width: 240px; height: 27px;`}
                        alt="image-best"
                        />
                    </div>
                    <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 300; font-size: 14px; line-height: 22px; text-align: center; letter-spacing: -0.02em; color: #383838; padding: 2rem 0;`}>피하지방층과 SMAS층에<br/>실의 코그가 잘 걸리도록 실을 일자라인으로<br/>삽입하여 효과는 높이고 부작용은 줄입니다.</div>
                    <div css={css`position: relative; width: 100%; display: flex; justify-content: center;`}>
                        <div css={css`position: absolute; z-index: 20; top: 75%; left: 5%; font-family: 'Pretendard'; font-style: normal; font-weight: 400; font-size: 12px; line-height: 14px; text-align: center; letter-spacing: -0.02em; color: #383838;`}>리프팅효과는 <br/><span css={css`color: #5991E7`}><Image src={Up} css={css`width: 20px; height: 22px;`} alt="image-up"/></span></div>
                        <div css={css`position: absolute; z-index: 20; top: 16%; left: 75%; font-family: 'Pretendard'; font-style: normal; font-weight: 400; font-size: 12px; line-height: 14px; text-align: center; letter-spacing: -0.02em; color: #383838;`}>딤플 가능성은 <br/><span css={css`color: #5991E7`}><Image src={Down} css={css`width: 40px; height: 15px;`} alt="image-down"/></span></div>
                        <Image src={srcCartoon} css={css`width: 264px; height: 257px; ${blurCartoon ? "filter : blur(20px); transition: none;" : "filter : none; transition: filter 0.3s ease-out;"}`} alt="image-cartoon"/>
                    </div>
                    <div css={css`width: 100%; display: flex; justify-content: center; padding-top: 1rem;`}>
                        <div>
                            <Image src={srcSkin} css={css`width: 230px; height: 230px; ${blurSkin ? "filter : blur(20px); transition: none;" : "filter : none; transition: filter 0.3s ease-out;"}`} alt="image-skin"/>
                            <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 500; font-size: 14px; line-height: 17px; text-align: center; letter-spacing: -0.02em; color: #383838; padding: 1rem 0;`}><span css={css`color: #953636`}>[ 일자라인으</span>로 완성하는 SMAS PLANE ]</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestMob;