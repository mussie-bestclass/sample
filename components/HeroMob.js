/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import Image from 'next/image';
import HeroBackgroundMob from '../public/static/images/HeroBackgroundMob.png';
import RightHeroMob from '../public/static/images/RightHeroMobTitle.png';
import LeftHeroMob from '../public/static/images/LeftHeroMobtitle.png';
import HeroDown from '../public/static/images/HeroDown.png';

function HeroMob () {

    return (
        <div css={css`width: 100%; display:flex; justify-content: center; overflow: hidden; background: radial-gradient(50% 100% at bottom, rgba(254, 162, 147, 0.8), #C6DBEE);`}>
            <div css={css`width: 360px; heigth: 640px; position: relative; display: flex; justify-content: center;`}>
                <div css={css`position: absolute; bottom: 5%;`}>
                    <div css={css`font-family: 'Poppins'; padding-bottom: 1rem; font-style: normal; font-weight: 700; font-size: 12px; line-height: 18px; text-align: center; letter-spacing: 0.35em; color: #FFFFFF;`}>ONLIF PLASTIC SURGERY</div>
                    <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 300; font-size: 40px; line-height: 48px; text-align: center; letter-spacing: -0.02em; color: #FFFFFF; text-shadow: 0px 0px 10px rgba(217, 103, 141, 0.2);`}>온리프<br/>실리프팅 솔루션</div>
                    <div css={css`display: flex; justify-content: center; padding-top: 1rem;`}><Image src={HeroDown} css={css`animation: bounce 2s infinite;`} loading="lazy"/></div>
                </div>
                <div css={css`position: absolute; top: 231px; left: 21px;`}>
                    <Image src={RightHeroMob} css={css`width: 51px; height: 32px;`} loading="lazy"/>
                </div>
                <div css={css`position: absolute; top: 259px; left: 286px;`}>
                    <Image src={LeftHeroMob} css={css`width: 51px; height: 32px;`} loading="lazy"/>
                </div>
                <Image
                src={HeroBackgroundMob}
                css={css`width: 360px; height: 640px;`}
                loading="lazy"
                />
            </div>
        </div>
    );
}

export default HeroMob;