import "./tempPolyfills";
import sinon from "sinon";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// Make Enzyme functions available in all test files without importing
const Jsdom = require("jsdom").JSDOM;

const documentHTML = "<!doctype html><html><body><div id=\"root\"></div></body></html>";
const dom = new Jsdom(documentHTML);
global._piq = [];
global.window = dom.window;
global.document = window.document;
global.navigator = window.navigator;
global.location = window.location;

const localStorageMock = {
  getItem: sinon.spy(),
  setItem: sinon.spy(),
  clear: sinon.spy()
};

global.localStorage = localStorageMock;

console.error = message => {
  throw new Error(message);
};
