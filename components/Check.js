/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import Image from 'next/image';
import Background from '../public/static/images/check.png';
import Pinkline from '../public/static/images/pinkline_web.png';
import PinkCheck from '../public/static/images/pinkcheck_web.png';

function Check () {
    return (
        <div css={css`width: 100%; height: 490px; display: flex; justify-content: center;`}>
            <div css={css`width: 1920px; height: 490px; position: relative; overflow: hidden; background: #E6EDFA;`}>
                <div css={css`position: absolute; z-index: 30; top: 20%; left: 50%`}>
                    <div css={css`position: relative`}>
                        <div css={css`display: flex`}>
                            <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 800; font-size: 35px; line-height: 42px; letter-spacing: -0.02em; color: #383838; padding-right: 0.5rem; display: flex; align-items: center;`}>다시 한 번</div>
                            <div css={css`font-family: 'Poppins'; font-style: normal; font-weight: 800; font-size: 40px; line-height: 60px; color: #F9A5B8; transform: matrix(1, 0, -0.26, 0.97, 0, 0);`}>Check!</div>
                        </div>
                        <div css={css`position: absolute; top: -10px; left: 30%;`}>
                            <Image src={Pinkline} css={css`width: 242px; height: 86px;`} loading="lazy"/>
                        </div>
                    </div>
                    <div css={css`padding-top: 3rem;`}>
                        <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 100; font-size: 24px; line-height: 29px; letter-spacing: -0.02em; color: #383838;`}>중요한 건 실의 갯수가 아닌</div>
                        <div css={css`display: flex; align-items: center; margin: 1rem 0;`}>
                            <div css={css`display: felx; align-items: center;`}><Image src={PinkCheck} css={css`padding-right: 0.5rem; width: 28px; height: 18px;`} loading="lazy"/></div>
                            <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 800; font-size: 28px; line-height: 14px; letter-spacing: -0.02em; color: #383838; display: flex; align-items: center; padding-top: 0.5rem;`}>정확한 위치<span css={css`font-weight: 100;`}>에</span></div>
                        </div>
                        <div css={css`display: flex; align-items: center; margin: 1rem 0;`}>
                            <div css={css`display: felx; align-items: center;`}><Image src={PinkCheck} css={css`padding-right: 0.5rem; width: 28px; height: 18px;`} loading="lazy"/></div>
                            <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 800; font-size: 28px; line-height: 14px; letter-spacing: -0.02em; color: #383838; display: flex; align-items: center; padding-top: 0.5rem;`}>섬세하게 시술<span css={css`font-weight: 100;`}>하는 것</span></div>
                        </div>
                    </div>
                    <div css={css`font-family: 'Pretendard'; padding-top: 2rem; font-style: normal; font-weight: 300; font-size: 18px; line-height: 26px; letter-spacing: -0.02em; color: #383838;`}>내 얼굴에 맞는 디자인, 내 얼굴에 맞는 시술 방법<br/>고민된다면 지금 바로 상담 받아보세요.</div>
                </div>
                <Image
                src={Background}
                css={css`width: 100%; height: 100%; object-fit: cover`}
                />
            </div>
        </div>
    );
}

export default Check;