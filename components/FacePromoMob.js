/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';

import Line from '../public/static/images/line.png';
import FaceLift from '../public/static/images/facelift.png';
import NoSvg from '../public/static/images/nosvg.png';
import FaceUp from '../public/static/images/FaceUp.png';
import ChinUp from '../public/static/images/ChinUp.png';
import FaceDown from '../public/static/images/FaceDown.png';
import FacePromoMobTitle from '../public/static/images/FacePromoMobTitle.png';
import Image from 'next/image';

function FacePromoMob () {
    return (
        <div css={css`width: 100%; display: flex; justify-content: center;`}>
        <div css={css`width: 1920px; overflow-x: hidden; background: linear-gradient(322.53deg, #D6E1F4 8.02%, rgba(230, 237, 250, 0) 100%); display: flex; justify-content: center;`}>
          <div css={css`padding-top: 6rem;`}>
            <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 100; font-size: 28px; line-height: 55px; text-align: center; letter-spacing: -0.04em; color: #383838;`}>실을 많이 넣어서</div>
            <div css={css`position: relative`}>
              <div css={css`font-family: 'Pretendard'; padding-top: 1rem;font-style: normal; font-weight: 400; font-size: 38px; line-height: 51px; text-align: center; letter-spacing: -0.04em; color: #383838;`}>
                <Image src={FacePromoMobTitle} css={css`width: 243px; height: 88px;`}/>
              </div>
              <div css={css`position: absolute; left: 60px;`}>
                <Image src={Line} css={css`width: 253px; height: 20px`}/>
              </div>
            </div>
            <div css={css`display: flex; justify-content: center; align-items: center`}>
              <Image src={FaceLift} css={css`width: 370px; height: 410px`} loading="lazy"/>
            </div>
            <div css={css``}>
              <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 400; font-size: 36px; line-height: 37px; text-align: center; letter-spacing: -0.02em; color: #383838;`}>정답은</div>
              <div css={css`padding-left: 1rem; display: flex; justify-content: center; align-items: center;`}>
                <Image src={NoSvg} css={css`width: 92px; height: 77px`}/>
              </div>
            </div>
            <div css={css`display: flex; justify-content: center; align-items: center; padding-top: 2rem;`}>
              <div>
                <div css={css`display: flex; justify-content: center`}><Image src={FaceUp} css={css`width: 210px; height: 170px; padding-bottom: 0.5rem;`} loading="lazy"/></div>
                <div css={css`display: flex; justify-content: center`}><Image src={ChinUp} css={css`width: 210px; height: 170px; padding-bottom: 0.5rem;`} loading="lazy"/></div>
                <div css={css`display: flex; justify-content: center`}><Image src={FaceDown} css={css`width: 210px; height: 170px; padding-bottom: 0.5rem;`} loading="lazy"/></div>
              </div>
            </div>
            <div css={css`font-family: 'Pretendard'; font-style: normal; padding-top: 1rem; padding-bottom: 2rem; font-weight: 100; font-size: 16px; line-height: 32px; text-align: center; letter-spacing: -0.02em; color: #383838;`}>많은 실을 넣으면 적게 넣는 것보다는<br/> 큰 효과를 볼 수 있지만, 중요한 건 <br/> 실의 갯수가 아닌 <span css={css`font-weight: 800;`}>정확한 위치에 섬세하게</span><br/>시술하는 것입니다.</div>
          </div>
        </div>
      </div>
    )
}

export default FacePromoMob;