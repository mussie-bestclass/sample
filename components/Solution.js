/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import SolutionIcon from '../public/static/images/solution.png';
import Check from '../public/static/images/check_web.png';
import Image from 'next/image';

function Solution() {
    return (
        <div css={css`width: 100%; height: 800px; display: flex; justify-content: center;`}>
            <div css={css`width: 1920px; height: 800px; overflow-x: hidden; background: #E6EDFA;`}>
                <div css={css`font-family: 'Pretendard'; padding-top: 6rem; padding-bottom: 0.5rem; font-style: normal; font-weight: 100; font-size: 24px; line-height: 29px; text-align: center; letter-spacing: -0.02em; color: #383838`}>오래 유지되는 견고한 리프팅을 위하여</div>
                <div css={css`font-family: 'Pretendard'; padding-top: 0.5rem; padding-bottom: 2rem; font-style: normal; font-weight: 800; font-size: 40px; line-height: 48px; text-align: center; letter-spacing: -0.02em; color: #383838;`}>고정 솔루션</div>
                <div css={css`display: flex; justify-content: center; margin: 3rem; align-items: center;`}>
                    <div css={css`width: 300px; height: 300px; background: #FFFFFF; border: 2px dashed #5991E7; border-radius: 15px; display: flex; align-items: center; justify-content: center;`}><Image src={SolutionIcon} css={css`width: 230px; height: 267px;`} loading="lazy"/></div>
                    <div css={css`padding-left: 4rem;`}>
                        <div css={css``}>
                            <div css={css``}><div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 700; font-size: 16px; line-height: 19px; text-align: center; letter-spacing: -0.02em; color: #FFFFFF; background: #5991E7; border-radius: 50px; padding: 5px 21px; width: 100px; height: 30px; display: flex; align-items: center; justify-content: center;`}>고정위치</div></div>
                            <div css={css`padding-top: 0.5rem 0; display: flex; margin: 1rem 0;`}>
                                <div css={css`display: felx; align-items: center;`}><Image src={Check} css={css`padding-right: 0.5rem; width: 18px; height: 8px;`}/></div>
                                <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 300; font-size: 16px; letter-spacing: -0.02em; color: #383838; `}>움직임이 적은 부위에 고정하여 길게 유지되는 고정효과</div>
                            </div>
                            <div css={css`padding-top: 0.5rem 0; display: flex; margin: 1rem 0;`}>
                                <div css={css`display: felx; align-items: center;`}><Image src={Check} css={css`padding-right: 0.5rem; width: 18px; height: 8px;`}/></div>
                                <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 300; font-size: 16px; letter-spacing: -0.02em; color: #383838; `}>노출이 적은 부위에 시술하여 더 빠른 일상 회복</div>
                            </div>
                        </div>
                        <div>
                        <div css={css`padding-top: 3rem`}>
                            <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 700; font-size: 16px; line-height: 19px; text-align: center; letter-spacing: -0.02em; color: #FFFFFF; background: #5991E7; border-radius: 50px; padding: 5px 21px; width: 100px; height: 30px; display: flex; align-items: center; justify-content: center;`}>고정방법</div></div>
                            <div css={css`padding-top: 0.5rem 0; display: flex; margin: 1rem 0;`}>
                                <div css={css`display: felx; align-items: center;`}><Image src={Check} css={css`padding-right: 0.5rem; width: 18px; height: 8px;`}/></div>
                                <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 300; font-size: 16px; letter-spacing: -0.02em; color: #383838; `}>각각의 디자인 및 시술 부위에 맞춘 고정방법</div>
                            </div>
                            <div css={css`padding-top: 0.5rem 0; display: flex; margin: 1rem 0;`}>
                                <div css={css`display: felx; align-items: center;`}><Image src={Check} css={css`padding-right: 0.5rem; width: 18px; height: 8px;`}/></div>
                                <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 300; font-size: 16px; letter-spacing: -0.02em; color: #383838; `}>하나의 실을 묶는 싱글 고정 솔루션</div>
                            </div>
                            <div css={css`padding-top: 0.5rem 0; display: flex; margin: 1rem 0;`}>
                                <div css={css`display: felx; align-items: center;`}><Image src={Check} css={css`padding-right: 0.5rem; width: 18px; height: 8px;`}/></div>
                                <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 300; font-size: 16px; letter-spacing: -0.02em; color: #383838; `}>더 강력한 효과를 위한 두 개의 실을 묶는 트윈 고정 솔루션</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    )
};

export default Solution;