import { Fragment } from 'react';
import Best from '../components/Best';
import FacePromo from '../components/FacePromo';
import Features from '../components/Features';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Lifting from '../components/Lifting';
import Solution from '../components/Solution';
import Check from '../components/Check';
import FacePromoMob from 'next/components/FacePromoMob';
import LiftingMob from 'next/components/LiftingMob';
import SolutionMob from 'next/components/SolutionMob';
import CategoriesMob from 'next/components/CategoriesMob';
import FeaturesMob from 'next/components/FeaturesMob';
import BestMob from 'next/components/BestMob';
import CheckMob from 'next/components/CheckMob';
import HeroMob from 'next/components/HeroMob';
import { useMediaQuery } from 'react-responsive';

function HomePage() {

  const isMobile = useMediaQuery({query: '(max-width: 900px)'});

  return (
    <Fragment>
        {isMobile ? <HeroMob/> :<Hero/>}
        {isMobile ? <FacePromoMob/> :<FacePromo/>}
        {isMobile ? <FeaturesMob/> :<Features/>}
        {isMobile ? <BestMob/> :<Best/>}
        {isMobile ? <LiftingMob/> :<Lifting/>}
        {isMobile ? <SolutionMob/> :<Solution/>}
        {isMobile ? <CategoriesMob/> :<Categories/>}
        {isMobile ? <CheckMob/> :<Check/>}
    </Fragment>

  )
} 


export default HomePage;