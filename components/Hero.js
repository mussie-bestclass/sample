/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import Image from 'next/image';
import heroImage from "../public/static/images/hero_img.png";
import star1 from '../public/static/images/star1.png';
import star2 from '../public/static/images/star2.png';
import circle1 from '../public/static/images/circle1.png';
import circle2 from '../public/static/images/circle2.png';
import stars from '../public/static/images/stars.png';
import LeftHero from '../public/static/images/LeftHero.png';
import RightHero from '../public/static/images/RightHero.png';
import { useMediaQuery } from 'react-responsive';

function Hero () {

    const isSmallScreen = useMediaQuery({query: '(max-width: 1000px)'})
    const isLaptop = useMediaQuery({query: '(max-width: 1440px)'})
    const isTablet = useMediaQuery({query: '(max-width: 1180px)'})
    return (
        <div css={css`width: 100%; height: 100vh; position: relative; display:flex; justify-content: center; overflow-x: hidden; background: radial-gradient(50% 100% at bottom, rgba(254, 162, 147, 0.8), #C6DBEE);`}>
        <div css={css`width: 100%; position: absolute; z-index: 10; height: 100vh; display: flex; justify-content: center; overflow-y: hidden;`}>
          <Image
          src={star1}
          alt="star_1"
          css={css`position: absolute; z-index: 10; ${isSmallScreen? 'width: 7%; height: 14%; left: 20.5%; bottom: 21%;': `${isTablet ?' width: 7%; height: 14%; left: 13.5%; bottom: 23%;' : `${isLaptop? ' width: 7%; height: 14%; left: 21%; bottom: 21%;' : 'width: 7%; height: 14%; left: 20.5%; bottom: 21%;'}`}`}`} 
          loading="lazy"
          />
          <Image
          src={star2}
          alt="star_2"
          css={css`position: absolute; ${isSmallScreen? 'width: 5%; height: 10%; left: 71%; top: 27%': `${isTablet ?'width: 5%; height: 10%; left: 80%; top: 27%' : `${isLaptop? 'width: 5%; height: 10%; left: 75.5%; top: 27%' : 'width: 5%; height: 10%; left: 71%; top: 27%'}`}`} `}
          loading="lazy"
          />
          <Image
          src={circle1}
          alt="circle_1"
          css={css`position: absolute; ${isSmallScreen? 'width: 50%; height: 100%; bottom: -50%; left: 20%':`${isTablet ?'width: 70%; height: 100%; bottom: -50%; left: 10%': `${isLaptop? 'width: 55%; height: 100%; bottom: -50%; left: 20%' : 'width: 50%; height: 100%; bottom: -50%; left: 20%'}`}`} `}
          loading="lazy"
          />
          <Image
          src={circle2}
          alt="circle_2"
          css={css`position: absolute; ${isSmallScreen? 'width: 25%; height: 50%; top: 20%; left: 50%':`${isTablet ?'width: 35%; height: 50%; top: 20%; left: 50%' : `${isLaptop? 'width: 30%; height: 50%; top: 20%; left: 50%' : 'width: 25%; height: 50%; top: 20%; left: 50%'}`}`}`}
          loading="lazy"
          />
        </div>
        <div css={css`width: 100%; height: 100vh; position: absolute; top: 0px; z-index: 10; justify-content: center; display: flex;`}>
          <Image
          src={heroImage}
          alt="image of hero"
          css={css`height: 100vh; ${isSmallScreen? 'width: 100%;': `${isTablet ?'width: 80%;' : `${isLaptop? 'width: 60%;' : 'width: 50%;'}`}`} width: 50%; object-fit: cover;`}
          loading="lazy"
          />
        </div>
        <Image
        src={stars}
        alt="circle_2"
        css={css`position: absolute; z-index: 20; ${isSmallScreen? 'width: 50%; height: 50%; bottom: 7%; left: 21%':`${isTablet ?'width: 70%; height: 70%; bottom: 5%; left: 10%' : `${isLaptop? 'width: 55%; height: 55%; bottom: 7%; left: 19%' : 'width: 50%; height: 50%; bottom: 7%; left: 21%'}`}`}`}
        loading="lazy"
        />
        <div css={css`position: absolute; z-index: 20; top: 45%; left: 15%; font-size: 2.5vw; width: 50%; color: #fff; font-weight: bold; text-shadow: 0px 2px 1px rgba(249, 181, 170, 0.4);`}>
          <Image src={LeftHero} css={css`width: 20vw; height: 6vh;`} loading="lazy"/>
        </div>
        <div css={css`position: absolute; z-index: 20; top: 32%; left: 62%; font-size: 2.5vw; width: 50%; color: #fff; font-weight: bold; text-shadow: 0px 2px 1px rgba(249, 181, 170, 0.4);`}>
          <Image src={RightHero} css={css`width: 20vw; height: 6vh;`} loading="lazy"/>
        </div>
        <div css={css`width: 100%; height: 100vh; position: absolute; top: 0px; z-index: 30; justify-content: center; display: flex;`}>
          <div css={css`width: calc(50% - 960px); background-color: #fff; height: 100vh;`}/>
          <div css={css`width: 1920px; height: 100%;`}>
            {/* <Header/> */}
            <div css={css`height: calc(90vh); display: flex; align-items: end; justify-content: center;`}>
              <div>
                <div css={css`font-family: 'Poppins'; font-style: normal; font-weight: 700; font-size: 20px; line-height: 30px; text-align: center; letter-spacing: 0.35em; color: white;`}>ONLIF PLASTIC SURGERY</div>
                <div css={css`font-family: 'Pretendard'; font-style: normal; font-weight: 400; font-size: 80px; line-height: 96px; text-align: center; letter-spacing: -0.02em; color: #FFFFFF; text-shadow: 0px 0px 10px rgba(217, 103, 141, 0.2);`}>온리프 실리프팅 솔루션</div>
              </div>
            </div>
          </div>
          <div css={css`width: calc(50% - 960px); background-color: #fff; height: 100vh;`}/>
        </div>
    </div>
    );
}

export default Hero;