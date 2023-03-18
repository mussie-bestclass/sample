/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import PullRight from '../public/static/images/pullright.png';
import PullLeft from '../public/static/images/pullleft.png';
import FaceImage from '../public/static/images/FaceImage_web.png';
import One from '../public/static/images/one.png';
import Two from '../public/static/images/two.png';
import Three from '../public/static/images/three.png';
import Four from '../public/static/images/four.png';
import Five from '../public/static/images/five.png';
import Six from '../public/static/images/six.png';
import Seven from '../public/static/images/seven.png';
import Image from 'next/image';
import { useState } from 'react';
import CategoriesFont from '../public/static/images/CategoriesFont.png';
import { useMediaQuery } from 'react-responsive';

function Categories() {

    const [isHover, setIsHover] = useState(false);
    const [selectedData, setSelectedData] = useState('');

    // const is4k = useMediaQuery({query: '(min-width: 1920px)'})
    // const isVeryBigScreen = useMediaQuery({query: '(min-width: 1600px)'})
    // const isFHD = useMediaQuery({query: '(min-width: 1440px)'})
    // const isHD = useMediaQuery({query: '(min-width: 1360px)'})
    // const isBigScreen = useMediaQuery({query: '(min-width: 1280px)'})
    // const isLaptop = useMediaQuery({query: '(min-width: 1024px)'})
    // const isTablet = useMediaQuery({query: '(min-width: 1000px)'})

    const handleHover = () => {
        setIsHover(true);
    }
    const handleLeave = () => {
        setIsHover(false);
    }

    const handleMouthOver = (e) => {
        setSelectedData(e.currentTarget.id);
    }
    const handleMouthLeave = () => {
        setSelectedData('');
    }

    

    return (
        <div css={css`width: 100%; display: flex; justify-content: center;`}>
            <div css={css`width: 1920px; overflow: hidden;`}>
                <div css={css``}>
                    <div css={css`font-family: 'Pretendard'; padding-top: 6rem; padding-bottom: 0.5rem; font-style: normal; font-weight: 100; font-size: 24px; line-height: 29px; text-align: center; letter-spacing: -0.02em; color: #383838`}>더 오랫동안! 더 확실하게!</div>
                    <div css={css`font-family: 'Pretendard'; padding-top: 0.5rem; padding-bottom: 2rem; font-style: normal; font-weight: 800; font-size: 40px; line-height: 48px; text-align: center; letter-spacing: -0.02em; color: #383838;`}>하모니 밸런스</div>
                    <div css={css`font-family: 'Pretendard'; padding-top: 2rem; padding-bottom: 2rem; font-style: normal; font-weight: 300; font-size: 20px; line-height: 24px; text-align: center; letter-spacing: -0.02em; color: #383838;`}>리프팅 구간과 고정 구간 <span css={css`font-weight: 800;`}>밸런스</span>를 맞춰보았다!</div>
                    <div css={css`display: flex; justify-content: center; padding-top: 2rem; padding-bottom: 2rem;`}>
                        <div css={css`display: grid; grid-template-columns: repeat(3, minmax(0, 1fr));`}>
                            <div css={css`position: relative; width: 250px`}>
                                <div css={css`background: #6776C2; padding-top: 0.5rem; padding-bottom: 0.5rem; font-family: 'Pretendard'; font-style: normal; font-weight: 700; font-size: 15px; line-height: 18px; text-align: center; letter-spacing: -0.02em; color: #FFFFFF;`}>리프팅 구간</div>
                                <div css={css`position: absolute; left: 21%; z-index: -1; top: 3rem;`}>
                                    <Image src={PullLeft} css={css`width: 332px; height: 59px; object-fit: cover;`} loading="lazy"/>
                                </div>
                                <div css={css`font-family: 'Pretendard'; padding-top: 7rem; font-style: normal; font-weight: 700; font-size: 15px; line-height: 25px; text-align: center; letter-spacing: -0.02em;`}><span css={css`color: #5991E7`}>효과1.</span> <br/>처음 디자인 그대로<br/>더 오랫동안 유지!</div>
                            </div>
                            <div css={css`width: 100%; display: flex; justify-content: center; width: 250px`}><Image src={FaceImage} css={css`width: 250px; height: 250px; object-fit: cover;`} loading="lazy"/></div>
                            <div css={css`position: relative; width: 250px`}>
                                <div css={css`background: #5991E7; padding-top: 0.5rem; padding-bottom: 0.5rem; font-family: 'Pretendard'; font-style: normal; font-weight: 700; font-size: 15px; line-height: 18px; text-align: center; letter-spacing: -0.02em; color: #FFFFFF;`}>고정 구간</div>
                                <div css={css`position: absolute; right: 20%; z-index: -1; top: 3rem`}>
                                    <Image src={PullRight} css={css`width: 332px; height: 59px; object-fit: cover;`}/>
                                </div>
                                <div css={css`font-family: 'Pretendard'; padding-top: 7rem; 'Pretendard'; font-style: normal; font-weight: 700; font-size: 15px; line-height: 25px; text-align: center; letter-spacing: -0.02em;`}><span css={css`color: #5991E7`}>효과2.</span><br/>실이 움직이지 않도록<br/>단단히 고정!</div>
                            </div>
                        </div>
                    </div>
                    <div css={css`font-family: 'Pretendard'; padding-top: 0.5rem; padding-bottom: 2rem; font-style: normal; font-weight: 400; font-size: 35px; line-height: 36px; text-align: center; letter-spacing: -0.04em; color: #383838;`}>
                        <Image src={CategoriesFont} css={css`width: 526px; height: 36px;`}/>
                    </div>
                    <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 300; font-size: 16px; line-height: 26px; text-align: center; letter-spacing: -0.02em; color: #383838;`}>리프팅실은 실의 리프팅(Lifting)구간과 고정(Anchoring)구간으로 구성되어 있습니다. <br/>하모니 밸런스는 이 구간을 최적의 비율로 맞추어, 더욱 오랫동안 안정적인 리프팅 효과를 선사합니다.</div>
                </div>
                <div css={css`padding-top: 5rem;`}>
                    <div css={css`font-family: 'Poppins'; font-style: normal; font-weight: 700; font-size: 16px; line-height: 24px; text-align: center; letter-spacing: 0.35em; color: #383838;`}>ONLIF LIFTING CENTER</div>
                    <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 800; font-size: 40px; line-height: 48px; text-align: center; letter-spacing: -0.02em; color: #383838;`}>온리프 리프팅 센터</div>
                    <div css={css`width: 1920px; display: flex; margin-top: 3rem; margin-bottom: 5rem;`}>
                        <div css={css`margin: auto; width: 1280px; height: 560px;`}>

                        <div css={css`--n: 1; --m: 7; --g: 0px; --f: .8; display: grid; gap: var(--g); width: 1280px; height: 560px; grid-template-columns: repeat(var(--m),auto); overflow: hidden;`} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                            <div css={css`position: relative;`}>
                                <Image
                                src={One}
                                css={css`width: 0; height: 0; min-height: 100%; min-width: 100%; object-fit: cover; cursor: pointer; filter: grayscale(${isHover? '80%' : '0'}); transition: .35s linear; &:hover { filter: grayscale(0); width:  calc(560px*var(--f)/var(--n)); height: calc(1280px*var(--f)/var(--m));}`}
                                onMouseOver={handleMouthOver} onMouseLeave={handleMouthLeave}
                                id="one"
                                />
                                {selectedData === 'one' ?
                                <div css={css`position: absolute; animate: fadeIn 5s ease; bottom: 10%; display: flex; align-items: center; justify-content: center; width: 100%`}>
                                    <div css={css``}>
                                        <div css={css`font-family: 'Pretendard'; padding-bottom: 1rem; font-style: normal; font-weight: 700; font-size: 28px; line-height: 34px; text-align: center; letter-spacing: -0.02em; color: #383838; text-shadow: 0px 0px 12px rgba(126, 155, 171, 0.2);`}>포인트 리프팅</div>
                                        <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 300; font-size: 20px; line-height: 24px; text-align: center; letter-spacing: -0.02em; color: #383838;`}>고민 부위별 섬세한 맞춤 리프팅!</div>
                                    </div>
                                </div>
                                :
                                <div css={css`position: absolute; bottom: 10%; font-family: 'Pretendard'; font-style: normal; font-weight: 700; font-size: 28px; line-height: 32px; text-align: center; letter-spacing: -0.02em; color: #FFFFFF; text-shadow: 0px 0px 12px rgba(56, 56, 56, 0.3); display: flex; align-items: center; justify-content: center; width: 100%`}>포인트<br/>리프팅</div>
                            }
                            </div>
                            <div css={css`position: relative`}>
                                <Image
                                src={Two}
                                css={css`width: 0; height: 0; min-height: 100%; min-width: 100%; object-fit: cover; cursor: pointer; filter: grayscale(${isHover? '80%' : '0'}); transition: .35s linear; &:hover { filter: grayscale(0); width:  calc(560px*var(--f)/var(--n)); height: calc(1280px*var(--f)/var(--m));}`}
                                onMouseOver={handleMouthOver} 
                                onMouseLeave={handleMouthLeave}
                                id="two"
                                />
                                {selectedData === 'two' ?
                                <div css={css`position: absolute; bottom: 10%; display: flex; align-items: center; justify-content: center; width: 100%`}>
                                    <div css={css`animate: fadeIn 5s ease`}>
                                        <div css={css`font-family: 'Pretendard';  padding-bottom: 1rem; font-style: normal; font-weight: 700; font-size: 28px; line-height: 34px; text-align: center; letter-spacing: -0.02em; color: #383838; text-shadow: 0px 0px 12px rgba(126, 155, 171, 0.2);`}>아이브로우 리프팅</div>
                                        <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 300; font-size: 20px; line-height: 24px; text-align: center; letter-spacing: -0.02em; color: #383838;`}>핵심은 필요한 부위에 정확히 시술하는 것!</div>
                                    </div>
                                </div>
                                :
                                <div css={css`position: absolute; bottom: 10%; font-family: 'Pretendard'; font-style: normal; font-weight: 700; font-size: 28px; line-height: 32px; text-align: center; letter-spacing: -0.02em; color: #FFFFFF; text-shadow: 0px 0px 12px rgba(56, 56, 56, 0.3); display: flex; align-items: center; justify-content: center; width: 100%`}>아이브로우<br/>리프팅</div>
                            }
                            </div>
                            <div css={css`position: relative`}>
                                <Image
                                src={Three}
                                css={css`width: 0; height: 0; min-height: 100%; min-width: 100%; object-fit: cover; cursor: pointer; filter: grayscale(${isHover? '80%' : '0'}); transition: .35s linear; &:hover { filter: grayscale(0); width:  calc(560px*var(--f)/var(--n)); height: calc(1280px*var(--f)/var(--m));}`}
                                onMouseOver={handleMouthOver} 
                                onMouseLeave={handleMouthLeave}
                                id="three"
                                />
                                {selectedData === 'three' ?
                                <div css={css`position: absolute; bottom: 10%; display: flex; align-items: center; justify-content: center; width: 100%`}>
                                    <div css={css`animate: fadeIn 5s ease`}>
                                        <div css={css`font-family: 'Pretendard';  padding-bottom: 1rem; font-style: normal; font-weight: 700; font-size: 28px; line-height: 34px; text-align: center; letter-spacing: -0.02em; color: #383838; text-shadow: 0px 0px 12px rgba(126, 155, 171, 0.2);`}>중안면 리프팅</div>
                                        <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 300; font-size: 20px; line-height: 24px; text-align: center; letter-spacing: -0.02em; color: #383838;`}>탄탄하게 고정하고 쫀쫀하게 당기자!</div>
                                    </div>
                                </div>
                                :
                                <div css={css`position: absolute; bottom: 10%; font-family: 'Pretendard'; font-style: normal; font-weight: 700; font-size: 28px; line-height: 32px; text-align: center; letter-spacing: -0.02em; color: #FFFFFF; text-shadow: 0px 0px 12px rgba(56, 56, 56, 0.3); display: flex; align-items: center; justify-content: center; width: 100%`}>중안면<br/>리프팅</div>
                            }
                            </div>
                            <div css={css`position: relative`}>
                                <Image
                                src={Four}
                                css={css`width: 0; height: 0; min-height: 100%; min-width: 100%; object-fit: cover; cursor: pointer; filter: grayscale(${isHover? '80%' : '0'}); transition: .35s linear; &:hover { filter: grayscale(0); width:  calc(560px*var(--f)/var(--n)); height: calc(1280px*var(--f)/var(--m));}`}
                                onMouseOver={handleMouthOver} 
                                onMouseLeave={handleMouthLeave}
                                id="four"
                                />
                                {selectedData === 'four' ?
                                <div css={css`position: absolute; bottom: 10%; display: flex; align-items: center; justify-content: center; width: 100%`}>
                                    <div css={css`animate: fadeIn 5s ease`}>
                                        <div css={css`font-family: 'Pretendard';  padding-bottom: 1rem; font-style: normal; font-weight: 700; font-size: 28px; line-height: 34px; text-align: center; letter-spacing: -0.02em; color: #383838; text-shadow: 0px 0px 12px rgba(126, 155, 171, 0.2);`}>V라인 리프팅</div>
                                        <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 300; font-size: 20px; line-height: 24px; text-align: center; letter-spacing: -0.02em; color: #383838;`}>후덕한 이중턱도 처진 턱선도 OUT!</div>
                                    </div>
                                </div>
                                :
                                <div css={css`position: absolute; bottom: 10%; font-family: 'Pretendard'; font-style: normal; font-weight: 700; font-size: 28px; line-height: 32px; text-align: center; letter-spacing: -0.02em; color: #FFFFFF; text-shadow: 0px 0px 12px rgba(56, 56, 56, 0.3); display: flex; align-items: center; justify-content: center; width: 100%`}>V라인<br/>리프팅</div>
                            }
                            </div>
                            <div css={css`position: relative`}>
                                <Image
                                src={Five}
                                css={css`width: 0; height: 0; min-height: 100%; min-width: 100%; object-fit: cover; cursor: pointer; filter: grayscale(${isHover? '80%' : '0'}); transition: .35s linear; &:hover { filter: grayscale(0); width:  calc(560px*var(--f)/var(--n)); height: calc(1280px*var(--f)/var(--m));}`}
                                onMouseOver={handleMouthOver} 
                                onMouseLeave={handleMouthLeave}
                                id="five"
                                />
                                {selectedData === 'five' ?
                                <div css={css`position: absolute; bottom: 10%; display: flex; align-items: center; justify-content: center; width: 100%`}>
                                    <div css={css`animate: fadeIn 5s ease`}>
                                        <div css={css`font-family: 'Pretendard';  padding-bottom: 1rem; font-style: normal; font-weight: 700; font-size: 28px; line-height: 34px; text-align: center; letter-spacing: -0.02em; color: #383838; text-shadow: 0px 0px 12px rgba(126, 155, 171, 0.2);`}>사이즈업 가슴 리프팅</div>
                                        <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 300; font-size: 20px; line-height: 24px; text-align: center; letter-spacing: -0.02em; color: #383838;`}>자가 조직 성장으로 볼륨 UP!</div>
                                    </div>
                                </div>
                                :
                                <div css={css`position: absolute; bottom: 10%; font-family: 'Pretendard'; font-style: normal; font-weight: 700; font-size: 28px; line-height: 32px; text-align: center; letter-spacing: -0.02em; color: #FFFFFF; text-shadow: 0px 0px 12px rgba(56, 56, 56, 0.3); display: flex; align-items: center; justify-content: center; width: 100%`}>사이즈업 가슴<br/>리프팅</div>
                            }
                            </div>
                            <div css={css`position: relative`}>
                                <Image
                                src={Six}
                                css={css`width: 0; height: 0; min-height: 100%; min-width: 100%; object-fit: cover; cursor: pointer; filter: grayscale(${isHover? '80%' : '0'}); transition: .35s linear; &:hover { filter: grayscale(0); width:  calc(560px*var(--f)/var(--n)); height: calc(1280px*var(--f)/var(--m));}`}
                                id="six" 
                                onMouseOver={handleMouthOver} 
                                onMouseLeave={handleMouthLeave}
                                />
                                {selectedData === 'six' ?
                                <div css={css`position: absolute; bottom: 10%; display: flex; align-items: center; justify-content: center; width: 100%`}>
                                    <div css={css`animate: fadeIn 5s ease`}>
                                        <div css={css`font-family: 'Pretendard';  padding-bottom: 1rem; font-style: normal; font-weight: 700; font-size: 28px; line-height: 34px; text-align: center; letter-spacing: -0.02em; color: #383838; text-shadow: 0px 0px 12px rgba(126, 155, 171, 0.2);`}>옆광대 축소 리프팅</div>
                                        <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 300; font-size: 20px; line-height: 24px; text-align: center; letter-spacing: -0.02em; color: #383838;`}>넘치는 볼륨은 DOWN! 부족한 볼륨은 UP!</div>
                                    </div>
                                </div>
                                :
                                <div css={css`position: absolute; bottom: 10%; font-family: 'Pretendard'; font-style: normal; font-weight: 700; font-size: 28px; line-height: 32px; text-align: center; letter-spacing: -0.02em; color: #FFFFFF; text-shadow: 0px 0px 12px rgba(56, 56, 56, 0.3); display: flex; align-items: center; justify-content: center; width: 100%`}>옆광대 축소<br/>리프팅</div>
                            }
                                
                            </div>
                            <div css={css`position: relative`}>
                                <Image
                                src={Seven}
                                css={css`width: 0; height: 0; min-height: 100%; min-width: 100%; object-fit: cover; cursor: pointer; filter: grayscale(${isHover? '80%' : '0'}); transition: .35s linear; &:hover { filter: grayscale(0); width:  calc(560px*var(--f)/var(--n)); height: calc(1280px*var(--f)/var(--m));}`}
                                id="seven" 
                                onMouseOver={handleMouthOver} 
                                onMouseLeave={handleMouthLeave}
                                />
                                {selectedData === 'seven' ?
                                <div css={css`position: absolute; bottom: 10%; display: flex; align-items: center; justify-content: center; width: 100%`}>
                                    <div css={css`animate: fadeIn 5s ease`}>
                                        <div css={css`font-family: 'Pretendard';  padding-bottom: 1rem; font-style: normal; font-weight: 700; font-size: 28px; line-height: 34px; text-align: center; letter-spacing: -0.02em; color: #383838; text-shadow: 0px 0px 12px rgba(126, 155, 171, 0.2);`}>비대칭교정 리프팅</div>
                                        <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 300; font-size: 20px; line-height: 24px; text-align: center; letter-spacing: -0.02em; color: #383838;`}>확실하게 고정하고, 확실하게 교정하자!</div>
                                    </div>
                                </div>
                                :
                                <div css={css`position: absolute; bottom: 10%; font-family: 'Pretendard'; font-style: normal; font-weight: 700; font-size: 28px; line-height: 32px; text-align: center; letter-spacing: -0.02em; color: #FFFFFF; text-shadow: 0px 0px 12px rgba(56, 56, 56, 0.3); display: flex; align-items: center; justify-content: center; width: 100%`}>비대칭교정<br/>리프팅</div>
                            }
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categories;