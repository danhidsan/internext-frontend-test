import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Image from './Image';

test('Image render', () => {
  render(<Image src="https://picsum.photos/200/300" />)
})