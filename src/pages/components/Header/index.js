import React from 'react';
import {Container} from './styles';
import {Image} from 'react-native';
import Logo from '../../../assets/logo.png';

const Header = () => {
  return(
    <Container>
      <Image source={Logo} />
    </Container>
  )
}

export default Header;
