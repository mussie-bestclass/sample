/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';

import Line from '../public/static/images/line_web.png';
import FaceLift from '../public/static/images/facelift_web.png';
import NoSvg from '../public/static/images/nosvg.png';
import FaceUp from '../public/static/images/FaceUp.png';
import ChinUp from '../public/static/images/ChinUp.png';
import FaceDown from '../public/static/images/FaceDown.png';
import FacePromoTitle from '../public/static/images/facepromotitle.png'
import Image from 'next/image';

function FacePromo () {
    return (
        <div css={css`width: 100%; height: 1400px; display: flex; justify-content: center;`}>
        <div css={css`width: 1920px; height: 1400px; overflow-x: hidden; background: linear-gradient(322.53deg, #D6E1F4 8.02%, rgba(230, 237, 250, 0) 100%); display: flex; justify-content: center;`}>
          <div css={css`padding-top: 6rem;`}>
            <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 100; font-size: 40px; line-height: 55px; text-align: center; letter-spacing: -0.04em; color: #383838;`}>실을 많이 넣어서</div>
            <div css={css`position: relative`}>
              <div css={css`width: 100%; display: flex; justify-content: center; padding-top: 1rem;`}>
                <Image src={FacePromoTitle} css={css`width: 522px; height: 52px`} loading="lazy"/>
              </div>
              <div css={css`position: absolute; right: 0px;`}>
                <Image src={Line} css={css`width: 522px; height: 52px`} loading="lazy"/>
              </div>
            </div>
            <div css={css`display: flex; justify-content: center; align-items: center`}>
              <Image src={FaceLift} css={css`width: 570px; height: 620px`} loading="lazy"/>
            </div>
            <div css={css`display: flex; justify-content: center; align-items: center;`}>
              <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 100; font-size: 40px; line-height: 48px; text-align: center; letter-spacing: -0.02em; color: #383838;`}>정답은</div>
              <div css={css`padding-left: 1rem; display: flex; justify-content: center; align-items: center;`}><Image src={NoSvg} css={css`width: 93px; height: 80px`} loading="lazy"/></div>
            </div>
            <div css={css`display: flex; justify-content: center; align-items: center; padding-top: 2rem;`}>
              <div css={css`display: grid; grid-template-columns: repeat(3, minmax(0, 1fr));`}>
                <div css={css`padding-left: 0.5rem;`}><Image src={FaceUp} css={css`width: 265px; height: 205px`} loading="lazy"/></div>
                <div css={css`padding-left: 0.5rem;`}><Image src={ChinUp} css={css`width: 265px; height: 205px`} loading="lazy"/></div>
                <div css={css`padding-left: 0.5rem;`}><Image src={FaceDown} css={css`width: 265px; height: 205px`} loading="lazy"/></div>
              </div>
            </div>
            <div css={css`font-family: 'Pretendard'; font-style: normal; padding-top: 2rem; font-weight: 100; font-size: 22px; line-height: 32px; text-align: center; letter-spacing: -0.02em; color: #383838; padding-top: 3rem;`}>많은 실을 넣으면 적게 넣는 것보다는 큰 효과를 볼 수 있지만, <br/> 중요한 건 실의 갯수가 아닌 <span css={css`font-weight: 800;`}>정확한 위치에 섬세하게 시술하는 것</span>입니다.</div>
          </div>
        </div>
      </div>
    )
}

export default FacePromo;