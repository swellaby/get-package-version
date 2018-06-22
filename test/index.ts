'use strict';

import Chai = require('chai');
import Sinon = require('sinon');

import child = require('child_process');
import fs = require('fs');

import getPackageVersion = require('../src/index');

const assert = Chai.assert;

const happyPackageJson = '{ "version": "1.0.0" }';
const globalDirErr = 'Failed to retireve global install directory';
const packageJsonErr = 'Failed to find package, are you sure it is installed globally?';

suite('getPackageVersion Suite -', () => {
    let execStub: Sinon.SinonStub;
    let existsStub: Sinon.SinonStub;
    let readStub: Sinon.SinonStub;
    let sandbox: Sinon.SinonSandbox;

    suite('getHostedZoneId Suite -', () => {

        suiteSetup(() => {
            sandbox = Sinon.createSandbox();
            execStub = Sinon.stub(child, 'exec');
            existsStub = Sinon.stub(fs, 'existsSync');
            readStub = Sinon.stub(fs, 'readFileSync');
        });

        suiteTeardown(() => {
            sandbox.restore();
        });

        test('Calls proper methods ', (done: () => void) => {
            execStub.yields(null, '');
            existsStub.returns(true);
            readStub.returns(happyPackageJson);
            getPackageVersion('').then(() => {
                assert.isTrue(execStub.called);
                assert.isTrue(existsStub.called);
                assert.isTrue(readStub.called);
                done();
            }).catch(err => {
                throw err;
            });
        });

        test('Parses version correctly', (done: () => void) => {
            execStub.yields(null, '');
            existsStub.returns(true);
            readStub.returns(happyPackageJson);
            getPackageVersion('').then((version) => {
                assert.equal(version, JSON.parse(happyPackageJson).version);
                assert.isTrue(execStub.called);
                assert.isTrue(existsStub.called);
                assert.isTrue(readStub.called);
                done();
            }).catch(err => {
                throw err;
            });
        });

        test('Handles unable to determine global install dir failure gracefully', (done: () => void) => {
            execStub.yields(new Error(), '');
            getPackageVersion('').catch((err) => {
                assert.equal(err, globalDirErr);
                assert.isTrue(execStub.called);
                done();
            });
        });

        test('Handles cant find package.json gracefully', (done: () => void) => {
            execStub.yields(null, '');
            existsStub.returns(false);
            getPackageVersion('').catch((err) => {
                assert.equal(err, packageJsonErr);
                assert.isTrue(execStub.called);
                done();
            });
        });
    });
});