import React, { useState } from "react";

import knxAlbum from "../../assets/mock-albums/1988.jpg";
import celia from '../../assets/mock-albums/celia.jpg';
import dr4 from '../../assets/mock-albums/dr4.jpg';
import selfish from '../../assets/mock-albums/selfish.jpg';

import { Album, AlbumInfo, Container } from './CoverFlowItem.styles';

const albums = [
  {path: knxAlbum, info: 'Knxledge - 1988' },
  {path: celia, info: 'Tiwa Savage - Celia' }, 
  {path: dr4, info: 'Sango - Da Rochina 4'},
  {path: selfish, info: 'Kacy Hill - Is It Selfish If...'}
];

const CoverFlowItem = () => {
  const albumDimensions = "320px";
  const [currentAlbum, setCurrentAlbum] = useState(0);

  const changeAlbum = () => {
    const nextAlbum = currentAlbum + 1 <= albums.length - 1 ? currentAlbum + 1 : 0;
    setCurrentAlbum(nextAlbum);
  };

  return (
    <Container>
      <Album onClick={() => changeAlbum()}>
        <img
          alt="album"
          width={albumDimensions}
          height={albumDimensions}
          src={albums[currentAlbum].path}
        />
      </Album>
      <AlbumInfo>{albums[currentAlbum].info}</AlbumInfo>
    </Container>
  );
};

export default CoverFlowItem;
