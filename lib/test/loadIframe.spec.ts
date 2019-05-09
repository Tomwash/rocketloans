import { expect, assert } from 'chai';
import { describe, it } from 'mocha';
import * as jsdom from 'jsdom';

let jsdomObject: any;

before(function () {
    this.jsdom = require('jsdom-global')();
})

beforeEach((done) => {
    // instantiate jsdom
    jsdom.JSDOM.fromFile('example/vanilla-demo/index.html', {
        url: 'http://localhost',
        runScripts: 'dangerously'
    }).then((dom: any) => {
        jsdomObject = dom;

        // get script from dist folder
        var fs = require("fs");
        var requireJSFile = fs.readFileSync("dist/index.js", "utf8");

        // instantiate script object and set props
        var script = jsdomObject.window.document.createElement("script");
        script.type = "text/javascript";
        script.innerHTML = requireJSFile;

        // append script to jsdom head tag
        var head = jsdomObject.window.document.getElementsByTagName('head')[0];
        head.appendChild(script);

        done();
    }).catch((err) => {
        done(err);
    });
})

describe('Vanilla example test :: loadIFrame function', () => {
    it('Should assert the rocketloans object mounted properly on the jsdomObject', function (done) {
        assert.typeOf(jsdomObject.window.rocketloans.loadIFrame, 'function')
        done();
    })
    it('Should click the iframe-button in the vanilla example project and load an iframe with src containing localhost:4201', function (done) {
        const button = jsdomObject.window.document.getElementById('iframe-button')
        button.click();

        const rocketloansIframe = jsdomObject.window.document.getElementById('rocketloans-iframe')
        expect(rocketloansIframe).to.exist;
        expect(rocketloansIframe).to.be.a('htmliframeelement');
        expect(rocketloansIframe.src).to.contain('child.html');
        done();
    })
});
