/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import colors from '../utils/colors';
import Blayout from '../components/Blayout/BLayout';
const Privacy = () => (
  <Blayout>
    <div bg={colors.primary}>
      <div
        width={[1, 1, 1 / 2]}
        m={['3.5rem 0 0 0', '3.5rem 0 0 0', '3.5rem auto 0 auto']}
        px={[3, 3, 0]}
        color={colors.secondary}
      >
        <h1>Privacy Policy</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  </Blayout>
);

export default Privacy;
