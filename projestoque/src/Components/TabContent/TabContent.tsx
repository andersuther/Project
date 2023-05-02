import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import * as Styled from './TabContent.styled';
import { ITab } from './TabContent.types';

export const TabContent: React.FC<ITab> = ({
  titleTab1 = 'tab1',
  titleTab2 = 'tab2',
  titleColorSelect = '#1C3A6D',
  titlwColorUnselect = '#fff',
  tabColorSelect = '#fff',
  tabColorUnselect = '#646464',
  content1,
  content2,
  currentTab ,
  initialTab = 1,

}) => {
  const [tabSelect, setTabSelect] = useState();
  const switchTab = (tabId) => {
    setTabSelect(tabId);
    
  };
  useEffect(() => {
    switchTab(initialTab);
  }, [initialTab]);
  return (
    <Styled.ContainerTab>
      <Styled.Row>
        <Styled.TabButon
          onPress={() => switchTab(1)}
          color={tabSelect === 1 ? tabColorSelect : tabColorUnselect}
        >
          <Styled.CustomText
            color={tabSelect === 1 ? titleColorSelect : titlwColorUnselect}
          >
            {titleTab1}
          </Styled.CustomText>
        </Styled.TabButon>
        <Styled.TabButon
          color={tabSelect === 2 ? tabColorSelect : tabColorUnselect}
          onPress={() => switchTab(2)}
        >
          <Styled.CustomText
            color={tabSelect === 2 ? titleColorSelect : titlwColorUnselect}
          >
            {titleTab2}
          </Styled.CustomText>
        </Styled.TabButon>
      </Styled.Row>
      <Styled.TabView>
        {tabSelect === 1 ? (
          <Styled.TabContent>{content1}</Styled.TabContent>
        ) : (
          <Styled.TabContent>{content2}</Styled.TabContent>
        )}
      </Styled.TabView>
    </Styled.ContainerTab>
  );
};
