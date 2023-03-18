/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import Image from 'next/image';
import Background from '../public/static/images/check.png';
import Pinkline from '../public/static/images/pinkline_web.png';
import PinkCheck from '../public/static/images/pinkcheck_web.png';

function CheckMob () {
    return (
        <div css={css`width: 100%; height: 300px; display: flex; justify-content: center;`}>
            <div css={css`width: 920px; height: 300px; position: relative; overflow: hidden; background: #E6EDFA;`}>
                <div css={css`position: absolute; z-index: 30; top: 10%; left: 50%; width: 260px;`}>
                    <div css={css`position: relative`}>
                        <div css={css`display: flex; width: 260px`}>
                            <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 800; font-size: 14px; line-height: 42px; letter-spacing: -0.02em; color: #383838; padding-right: 0.5rem; display: flex; align-items: center;`}>다시 한 번</div>
                            <div css={css`font-family: 'Poppins'; font-style: normal; font-weight: 800; font-size: 20px; line-height: 60px; color: #F9A5B8; transform: matrix(1, 0, -0.26, 0.97, 0, 0);`}>Check!</div>
                        </div>
                        <div css={css`position: absolute; top: 20px; left: 25%;`}>
                            <Image src={Pinkline} css={css`width: 90px; height: 34px;`} loading="lazy"/>
                        </div>
                    </div>
                    <div css={css`padding-top: 0.5rem;`}>
                        <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 100; font-size: 10px; line-height: 29px; letter-spacing: -0.02em; color: #383838;`}>중요한 건 실의 갯수가 아닌</div>
                        <div css={css`display: flex; align-items: center; margin: 0.5rem 0;`}>
                            <div css={css`display: felx; align-items: center;`}><Image src={PinkCheck} css={css`padding-right: 0.5rem; width: 18px; height: 12px;`} loading="lazy"/></div>
                            <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 800; font-size: 12px; line-height: 14px; letter-spacing: -0.02em; color: #383838; display: flex; align-items: center; padding-top: 0.5rem;`}>정확한 위치<span css={css`font-weight: 100;`}>에</span></div>
                        </div>
                        <div css={css`display: flex; align-items: center;`}>
                            <div css={css`display: felx; align-items: center;`}><Image src={PinkCheck} css={css`padding-right: 0.5rem; width: 18px; height: 12px;`} loading="lazy"/></div>
                            <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 800; font-size: 12px; line-height: 14px; letter-spacing: -0.02em; color: #383838; display: flex; align-items: center; padding-top: 0.5rem;`}>섬세하게 시술<span css={css`font-weight: 100;`}>하는 것</span></div>
                        </div>
                    </div>
                    <div css={css`font-family: 'Pretendard'; padding-top: 2rem; font-style: normal; font-weight: 300; font-size: 12px; line-height: 14px; letter-spacing: -0.02em; color: #383838;`}>내 얼굴에 맞는 디자인, 내<br/> 얼굴에 맞는 시술 방법 고민<br/>된다면 지금 바로 상담 받아<br/>보세요.</div>
                </div>
                <Image
                src={Background}
                css={css`width: 100%; height: 100%; object-fit: cover`}
                />
            </div>
        </div>
    );
}

export default CheckMob;