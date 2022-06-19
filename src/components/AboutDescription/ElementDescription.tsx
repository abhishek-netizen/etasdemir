import React from 'react';
import styled from 'styled-components';

import { AboutElement } from '../../shared/Types';

interface Props {
  descriptions: AboutElement["descriptions"];
}

function ElementDescription(props: Props) {
  const { descriptions } = props;
  return (
    <ElementContainer>
      {descriptions.map((element, index) =>
        <Description key={index}>{element}</Description>
      )}
    </ElementContainer>
  );
}

const ElementContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.span`
  font-size: 2.1rem;
  margin-top: 0.5em;
  font-weight: 300;
  &::before {
    content: "▸";
    color: var(--primary-dark);
    font-size: 1.4rem;
  }
`;

export default ElementDescription;