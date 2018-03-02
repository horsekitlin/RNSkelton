import React from 'react';
import propTypes from "prop-types";
import {Container, Image } from 'semantic-ui-react';
import logo from '../../imgs/logo.png';

const FormBlock = (props) =>
  <Container text className='p-1'>
    <Image src={logo}  centered />
    {props.children}
  </Container>

FormBlock.propTypes = {
  children: propTypes.element
};

export default FormBlock;