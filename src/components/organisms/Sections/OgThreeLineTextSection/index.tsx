import React from 'react';
import { p, ja } from './index.css';
import { AtHeading } from '../../../atoms';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

export const OgThreeLineTextSection = () => {
  // const { contentfulOgThreeLineTextSection: threeLineTexts } = usePageSettings();

  // const { title, subTitle, description, subTitleEnglish, descriptionEnglish } = threeLineTexts;

  //Richテキストの改行のために必要なoption

  return (
    // <></>
    <section>
      <div className="inner">
        <AtHeading Tag="h2" justifyContent={'center'} marginBottom={'50'} mobileFontSize={'40'} desktopFontSize={'40'}>Our Vision</AtHeading>
        <div className={ja}>
          <AtHeading Tag="h3" justifyContent={'center'} marginBottom={'50'}>ここにコピーが入ります。ここにコピーが入ります。ここにコピーが入ります。</AtHeading>
          <p className={p}>
            親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。と囃したからである。小使に負ぶさって帰って来た時、おやじが大きな眼をして二階ぐらいから飛び降りて腰
          </p>
        </div>
      </div>
    </section >
  );
};
