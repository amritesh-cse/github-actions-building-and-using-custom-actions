import * as core from '@actions/core';
import * as github from '@actions/github';
import * as exec from '@actions/exec';

function run() {
    const person = core.getInput('person');
    core.notice('Hello ' + person + ' from my custom JavaScript Action - main.js');
}

run();