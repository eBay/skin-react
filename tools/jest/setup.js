const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

Enzyme.configure({adapter: new Adapter()});
