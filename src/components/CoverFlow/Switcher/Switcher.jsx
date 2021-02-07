import React, { useEffect, useState } from 'react';

import {
  Container,
  LeftChevron,
  RightChevron,
  TopCount
} from './Switcher.styles';

const Switcher = () => {
  const directionEnum = {
    BACK: 'BACK',
    FORWARD: 'FORWARD'
  };

  const [albumDisplayed, setAlbumDisplayed] = useState(1);
  const totalAlbums = 4;

  // useEffect(() => {
  // }, []);

  const switchAlbum = (direction) => {
    updateAlbumCount(direction);
    // console.log('inform store that another album should be displayed');
  };

  const updateAlbumCount = (direction) => {
    let nextAlbum;
    if (direction === directionEnum.FORWARD) {
      nextAlbum =
        albumDisplayed + 1 <= totalAlbums ? albumDisplayed + 1 : totalAlbums;
    } else if (direction === directionEnum.BACK) {
      nextAlbum = albumDisplayed - 1 >= 1 ? albumDisplayed - 1 : 1;
    }
    setAlbumDisplayed(nextAlbum);
  };

  return (
    <Container>
      <LeftChevron onClick={() => switchAlbum(directionEnum.BACK)} />
      <TopCount>{albumDisplayed} / {totalAlbums}</TopCount>
      <RightChevron onClick={() => switchAlbum(directionEnum.FORWARD)} />
    </Container>
  );
};

export default Switcher;
