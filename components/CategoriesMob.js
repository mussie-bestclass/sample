/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import PullRight from '../public/static/images/pullright.png';
import PullLeft from '../public/static/images/pullleft.png';
import FaceImage from '../public/static/images/faceimage.png';
import One from '../public/static/images/one.png';
import Two from '../public/static/images/two.png';
import Three from '../public/static/images/three.png';
import Four from '../public/static/images/four.png';
import Five from '../public/static/images/five.png';
import Six from '../public/static/images/six.png';
import Seven from '../public/static/images/seven.png';
import CategoriesMobTitle from '../public/static/images/CategoriesMobTitle.png';
import Image from 'next/image';

function CategoriesMob() {
    

    return (
        <div css={css`width: 100%; display: flex; justify-content: center;`}>
            <div css={css`overflow: hidden;`}>
                <div css={css``}>
                    <div css={css`font-family: 'Pretendard'; padding-top: 4rem; padding-bottom: 0.5rem; font-style: normal; font-weight: 100; font-size: 18px; line-height: 29px; text-align: center; letter-spacing: -0.02em; color: #383838`}>더 오랫동안! 더 확실하게!</div>
                    <div css={css`font-family: 'Pretendard'; padding-top: 0.5rem; padding-bottom: 1rem; font-style: normal; font-weight: 800; font-size: 28px; line-height: 28px; text-align: center; letter-spacing: -0.02em; color: #383838;`}>하모니 밸런스</div>
                    <div css={css`font-family: 'Pretendard'; padding-top: 1rem; padding-bottom: 2rem; font-style: normal; font-weight: 300; font-size: 16px; line-height: 24px; text-align: center; letter-spacing: -0.02em; color: #383838;`}>리프팅 구간과 고정 구간 <span css={css`font-weight: 800;`}>밸런스</span>를 맞춰보았다!</div>
                    <div css={css`padding-top: 2rem; padding-bottom: 2rem;`}>
                    <div css={css`width: 100%; display: flex; justify-content: center;`}>
                        <Image
                        src={FaceImage}
                        css={css`width: 360px; height: 180px; object-fit: cover;`}
                        loading="lazy"
                        />
                    </div>
                        <div css={css`display: flex; justify-content: center;`}>
                            <div css={css`position: relative; width: 180px`}>
                                <div css={css`background: #6776C2; padding-top: 0.5rem; width: 179px; padding-bottom: 0.5rem; font-family: 'Pretendard'; font-style: normal; font-weight: 700; font-size: 15px; line-height: 18px; text-align: center; letter-spacing: -0.02em; color: #FFFFFF;`}>리프팅 구간</div>
                                <div css={css`position: absolute; left: 20%; top: 3rem;`}>
                                    <Image src={PullLeft} css={css`width: 233px; height: 41px;`} loading="lazy"/>
                                    
                                </div>
                                <div css={css`font-family: 'Pretendard'; padding-top: 6rem; font-style: normal; font-weight: 700; font-size: 15px; line-height: 25px; text-align: center; letter-spacing: -0.02em;`}><span css={css`color: #5991E7`}>효과1.</span> <br/>처음 디자인 그대로<br/>더 오랫동안 유지!</div>
                            </div>
                            <div css={css`position: relative; width: 180px`}>
                                <div css={css`background: #5991E7; padding-top: 0.5rem; width: 180px; padding-bottom: 0.5rem; font-family: 'Pretendard'; font-style: normal; font-weight: 700; font-size: 15px; line-height: 18px; text-align: center; letter-spacing: -0.02em; color: #FFFFFF;`}>고정 구간</div>
                                <div css={css`position: absolute; right: 26%; top: 3rem;`}>
                                    <Image src={PullRight} css={css`width: 233px; height: 41px;`} loading="lazy"/>
                                </div>
                                <div css={css`font-family: 'Pretendard'; padding-top: 6rem; 'Pretendard'; font-style: normal; font-weight: 700; font-size: 15px; line-height: 25px; text-align: center; letter-spacing: -0.02em;`}><span css={css`color: #5991E7`}>효과2.</span><br/>실이 움직이지 않도록<br/>단단히 고정!</div>
                            </div>
                        </div>
                    </div>
                    <div css={css`font-family: 'Pretendard'; padding-top: 2rem; padding-bottom: 2rem; font-style: normal; font-weight: 400; font-size: 28px; line-height: 36px; text-align: center; letter-spacing: -0.04em; color: #383838;`}>
                        <Image src={CategoriesMobTitle} css={css``}/>
                    </div>
                    <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 300; font-size: 16px; line-height: 26px; text-align: center; letter-spacing: -0.02em; color: #383838;`}> 리프팅실은 실의 리프팅(Lifting)구간과 <br/>고정(Anchoring)구간으로 구성되어 있습니다. <br/>하모니 밸런스는 이 구간을 최적의 비율로 맞추어, <br/>더욱 오랫동안 안정적인 리프팅 효과를 선사합니다.</div>
                </div>
                <div css={css`padding-top: 5rem;`}>
                    <div css={css`font-family: 'Poppins'; font-style: normal; font-weight: 200; font-size: 12px; line-height: 14px; text-align: center; letter-spacing: 0.35em; color: #383838;`}>ONLIF LIFTING CENTER</div>
                    <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 800; font-size: 28px; line-height: 48px; text-align: center; letter-spacing: -0.02em; color: #383838;`}>온리프 리프팅 센터</div>
                    <div css={css`display: flex; margin-top: 1rem; margin-bottom: 6rem;`}>
                        <div css={css`margin: auto; width: 1280px; height: 560px;`}>

                        <div css={css`padding: 1rem;`}>
                            <div css={css`position: relative; height: 80px; margin-top: 0.5rem;`}>
                                <div css={css`position: absolute; top: 0; bottom: 0; left: 0; right: 0; background: #000; opacity: 0.5;`}/>
                                <Image
                                src={One}
                                css={css`width: 100%; height: 100%; object-fit: cover; object-position: 10px -100px;`}
                                id="one"
                                />
                                <div css={css`position: absolute; bottom: 30%; font-family: 'Pretendard'; font-style: normal; font-weight: 700; font-size: 20px; line-height: 24px; text-align: center; letter-spacing: -0.02em; color: #FFFFFF; text-shadow: 0px 0px 12px rgba(56, 56, 56, 0.3); display: flex; align-items: center; padding-left: 0.5rem; width: 100%`}>포인트 리프팅</div>
                                <div css={css`display: flex; justify-content: end; width: 100%; margin-left: -10px;`}><div css={css`position: absolute; bottom: 30%; font-family: 'Pretendard'; font-style: normal; font-weight: 700; font-size: 14px; line-height: 24px; background: rgba(255, 255, 255, 0.9); border-radius: 20px; text-align: center; letter-spacing: -0.02em; display: flex; align-items: center; justify-content: center; padding: 4px 7px; width: 76px;`}>바로가기</div></div>
                            </div>
                            <div css={css`position: relative; height: 80px; margin-top: 0.5rem;`}>
                                <div css={css`position: absolute; top: 0; bottom: 0; left: 0; right: 0; background: #000; opacity: 0.5;`}/>
                                <Image
                                src={Two}
                                css={css`width: 100%; height: 100%; object-fit: cover; object-position: 10px -80px;`}
                                id="two"
                                />
                                <div css={css`position: absolute; bottom: 30%; font-family: 'Pretendard'; font-style: normal; font-weight: 700; font-size: 20px; line-height: 24px; text-align: center; letter-spacing: -0.02em; color: #FFFFFF; text-shadow: 0px 0px 12px rgba(56, 56, 56, 0.3); display: flex; align-items: center; padding-left: 0.5rem; width: 100%`}>아이브로우 리프팅</div>
                                <div css={css`display: flex; justify-content: end; width: 100%; margin-left: -10px;`}><div css={css`position: absolute; bottom: 30%; font-family: 'Pretendard'; font-style: normal; font-weight: 700; font-size: 14px; line-height: 24px; background: rgba(255, 255, 255, 0.9); border-radius: 20px; text-align: center; letter-spacing: -0.02em; display: flex; align-items: center; justify-content: center; padding: 4px 7px; width: 76px;`}>바로가기</div></div>
                            </div>
                            <div css={css`position: relative; height: 80px; margin-top: 0.5rem;`}>
                                <div css={css`position: absolute; top: 0; bottom: 0; left: 0; right: 0; background: #000; opacity: 0.5;`}/>
                                <Image
                                src={Three}
                                css={css`width: 100%; height: 100%; object-fit: cover; object-position: 10px -80px;`}
                                id="three"
                                />
                                <div css={css`position: absolute; bottom: 30%; font-family: 'Pretendard'; font-style: normal; font-weight: 700; font-size: 20px; line-height: 24px; text-align: center; letter-spacing: -0.02em; color: #FFFFFF; text-shadow: 0px 0px 12px rgba(56, 56, 56, 0.3); display: flex; align-items: center; padding-left: 0.5rem; width: 100%`}>중안면 리프팅</div>
                                <div css={css`display: flex; justify-content: end; width: 100%; margin-left: -10px;`}><div css={css`position: absolute; bottom: 30%; font-family: 'Pretendard'; font-style: normal; font-weight: 700; font-size: 14px; line-height: 24px; background: rgba(255, 255, 255, 0.9); border-radius: 20px; text-align: center; letter-spacing: -0.02em; display: flex; align-items: center; justify-content: center; padding: 4px 7px; width: 76px;`}>바로가기</div></div>
                            </div>
                            <div css={css`position: relative; height: 80px; margin-top: 0.5rem;`}>
                                <div css={css`position: absolute; top: 0; bottom: 0; left: 0; right: 0; background: #000; opacity: 0.5;`}/>
                                <Image
                                src={Four}
                                css={css`width: 100%; height: 100%; object-fit: cover; object-position: 10px -100px;`}
                                id="four"
                                />
                                <div css={css`position: absolute; bottom: 30%; font-family: 'Pretendard'; font-style: normal; font-weight: 700; font-size: 20px; line-height: 24px; text-align: center; letter-spacing: -0.02em; color: #FFFFFF; text-shadow: 0px 0px 12px rgba(56, 56, 56, 0.3); display: flex; align-items: center; padding-left: 0.5rem; width: 100%`}>V라인 리프팅</div>
                                <div css={css`display: flex; justify-content: end; width: 100%; margin-left: -10px;`}><div css={css`position: absolute; bottom: 30%; font-family: 'Pretendard'; font-style: normal; font-weight: 700; font-size: 14px; line-height: 24px; background: rgba(255, 255, 255, 0.9); border-radius: 20px; text-align: center; letter-spacing: -0.02em; display: flex; align-items: center; justify-content: center; padding: 4px 7px; width: 76px;`}>바로가기</div></div>
                            </div>
                            <div css={css`position: relative; height: 80px; margin-top: 0.5rem;`}>
                                <div css={css`position: absolute; top: 0; bottom: 0; left: 0; right: 0; background: #000; opacity: 0.5;`}/>
                                <Image
                                src={Five}
                                css={css`width: 100%; height: 100%; object-fit: cover; object-position: 10px -110px;`}
                                id="five"
                                />
                                <div css={css`position: absolute; bottom: 30%; font-family: 'Pretendard'; font-style: normal; font-weight: 700; font-size: 20px; line-height: 24px; text-align: center; letter-spacing: -0.02em; color: #FFFFFF; text-shadow: 0px 0px 12px rgba(56, 56, 56, 0.3); display: flex; align-items: center; padding-left: 0.5rem; width: 100%`}>사이즈업 가슴 리프팅</div>
                                <div css={css`display: flex; justify-content: end; width: 100%; margin-left: -10px;`}><div css={css`position: absolute; bottom: 30%; font-family: 'Pretendard'; font-style: normal; font-weight: 700; font-size: 14px; line-height: 24px; background: rgba(255, 255, 255, 0.9); border-radius: 20px; text-align: center; letter-spacing: -0.02em; display: flex; align-items: center; justify-content: center; padding: 4px 7px; width: 76px;`}>바로가기</div></div>
                            </div>
                            <div css={css`position: relative; height: 80px; margin-top: 0.5rem;`}>
                                <div css={css`position: absolute; top: 0; bottom: 0; left: 0; right: 0; background: #000; opacity: 0.5;`}/>
                                <Image
                                src={Six}
                                css={css`width: 100%; height: 100%; object-fit: cover; object-position: 10px -100px;`}
                                id="six" 
                                />
                                <div css={css`position: absolute; bottom: 30%; font-family: 'Pretendard'; font-style: normal; font-weight: 700; font-size: 20px; line-height: 24px; text-align: center; letter-spacing: -0.02em; color: #FFFFFF; text-shadow: 0px 0px 12px rgba(56, 56, 56, 0.3); display: flex; align-items: center; padding-left: 0.5rem; width: 100%`}>옆광대 축소 리프팅</div>
                                <div css={css`display: flex; justify-content: end; width: 100%; margin-left: -10px;`}><div css={css`position: absolute; bottom: 30%; font-family: 'Pretendard'; font-style: normal; font-weight: 700; font-size: 14px; line-height: 24px; background: rgba(255, 255, 255, 0.9); border-radius: 20px; text-align: center; letter-spacing: -0.02em; display: flex; align-items: center; justify-content: center; padding: 4px 7px; width: 76px;`}>바로가기</div></div> 
                            </div>
                            <div css={css`position: relative; height: 80px; margin-top: 0.5rem;`}>
                                <div css={css`position: absolute; top: 0; bottom: 0; left: 0; right: 0; background: #000; opacity: 0.5;`}/>
                                <Image
                                src={Seven}
                                css={css`width: 100%; height: 100%; object-fit: cover; `}
                                id="seven" 
                                />
                                <div css={css`position: absolute; bottom: 30%; font-family: 'Pretendard'; font-style: normal; font-weight: 700; font-size: 20px; line-height: 24px; text-align: center; letter-spacing: -0.02em; color: #FFFFFF; text-shadow: 0px 0px 12px rgba(56, 56, 56, 0.3); display: flex; align-items: center; padding-left: 0.5rem; width: 100%`}>비대칭교정 리프팅</div>
                                <div css={css`display: flex; justify-content: end; width: 100%; margin-left: -10px;`}><div css={css`position: absolute; bottom: 30%; font-family: 'Pretendard'; font-style: normal; font-weight: 700; font-size: 14px; line-height: 24px; background: rgba(255, 255, 255, 0.9); border-radius: 20px; text-align: center; letter-spacing: -0.02em; display: flex; align-items: center; justify-content: center; padding: 4px 7px; width: 76px;`}>바로가기</div></div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoriesMob;