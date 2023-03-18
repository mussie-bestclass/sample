/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';

import Cartoon from '../public/static/images/Cartoon.png';
import Up from '../public/static/images/upBest.png';
import Down from '../public/static/images/downBest.png';
import Skin from '../public/static/images/skin.png';
import Cartoon_small from '../public/static/images/Cartoon-small.png';
import Up_small from '../public/static/images/upBest-small.png';
import Down_small from '../public/static/images/downBest-small.png';
import Skin_small from '../public/static/images/skin-small.png';
import Image from 'next/image';
import BestFont from '../public/static/images/BestFont.png';
import useProgressiveImg from '../hooks/useProgressiveImg';

function Best () {

    const [srcCartoon, { blurCartoon }] = useProgressiveImg(Cartoon_small, Cartoon);
    const [srcUp, { blurUp }] = useProgressiveImg(Up_small, Up);
    const [srcDown, { blurDown }] = useProgressiveImg(Down_small, Down);
    const [srcSkin, { blurSkin }] = useProgressiveImg(Skin_small, Skin);

    return (
        <div css={css`width: 100%; display: flex; justify-content: center;`}>
        <div css={css`width: 1920px; position: relative; background: #E6EDFA; background-image: repeating-linear-gradient(to bottom, transparent, transparent 5px, #fff 1px, #fff 6px), repeating-linear-gradient(to right, #E6EDFA, #E6EDFA 5px, #fff 1px, #fff 6px);`}>
          <div css={css`display: flex; justify-content: center; items`}>
            <div css={css`padding-top: 4rem;`}>
              <div css={css`padding-bottom: 4rem;`}>
                <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 100; font-size: 24px; line-height: 29px; text-align: center; letter-spacing: -0.02em; color: #383838;`}>효과는 높이고 부작용은 줄이는</div>
                <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 800; font-size: 40px; line-height: 48px; text-align: center; letter-spacing: -0.02em; color: #383838;`}>일자라인 리프팅</div>
              </div>
              <div css={css`width: 730px; background: #FFFFFF; box-shadow: 0px 0px 22px 5px rgba(131, 170, 217, 0.25);`}>
                <div css={css``}>
                    <div css={css`font-family: 'Poppins'; padding: 30px 0; font-style: normal; font-weight: 300; font-size: 10px; line-height: 15px; text-align: center; letter-spacing: 0.2em; color: #AAAAAA;`}>ONLIF LIFTING CENTER</div>
                    <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 400; font-size: 40px; line-height: 41px; text-align: center; letter-spacing: -0.04em; color: #383838;`}>
                      <Image src={BestFont} css={css`width: 369px; height: 41px;`} alt="image-best"/>
                    </div>
                    <div css={css`font-family: 'Pretendard'; padding-top: 30px; font-style: normal; font-weight: 300; font-size: 16px; line-height: 26px; text-align: center; letter-spacing: -0.02em; color: #383838;`}>피하지방층과 SMAS층에 실의 코그가 잘 걸리도록<br/>실을 일자라인으로 삽입하여 효과는 높이고 부작용은 줄입니다.</div>
                </div>
                <div css={css`display: flex; position: relative; overflow: visible;`}>
                    <div css={css`display: flex; width: 60%;`}>
                        <div css={css`width: 330px;`}><Image src={srcCartoon} css={css`height: 345px; width: 330px; ${blurCartoon ? "filter : blur(20px); transition: none;" : "filter : none; transition: filter 0.3s ease-out;"}`} alt="image-cartoon"/></div>
                        <div css={css`position: absolute; left: -5%; z-index: 100; bottom: 2%; `}><Image src={srcUp} css={css`width: 200px; height: 200px; ${blurUp ? "filter : blur(20px); transition: none;" : "filter : none; transition: filter 0.3s ease-out;"}`} alt="image-up"/> </div>
                        <div css={css`position: absolute; left: 28%; top: 0`}><Image src={srcDown} css={css`width: 200px; height: 200px; ${blurDown ? "filter : blur(20px); transition: none;" : "filter : none; transition: filter 0.3s ease-out;"}`} alt="image-down"/></div>
                    </div>
                    <div css={css`display: flex; justify-content: center; width: 40%;`}>
                        <div>
                            <div css={css`padding-top: 2rem;`}><Image src={srcSkin} css={css`width: 230px; height: 230px; ${blurSkin ? "filter : blur(20px); transition: none;" : "filter : none; transition: filter 0.3s ease-out;"}`} alt="image-skin"/></div>
                            <div css={css`font-family: 'Pretendard'; padding-top: 1rem; font-style: normal; font-weight: 500; font-size: 14px; line-height: 17px; text-align: center; letter-spacing: -0.02em; color: #383838;`}>[ <span css={css`color: #953636`}>일자라인</span>으로 완성하는 SMAS PLANE ]</div>
                        </div> 
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Best;