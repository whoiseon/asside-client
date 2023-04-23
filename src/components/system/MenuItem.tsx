import React from 'react';
import styled from '@emotion/styled';

interface Props {
  icon?: React.ReactNode;
  title: string;
  link?: string;
  onClick?: () => void;
  hasArrow?: boolean;
}

function MenuItem({ icon, title, link, onClick, hasArrow = true }: Props) {
  return <Block>{title}</Block>;
}

const Block = styled.div``;

export default MenuItem;
