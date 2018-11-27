'use strict';

var ipc = require('ipc');
var remote = require('remote');
var Tray = remote.require('tray');
var Menu = remote.require('menu');
var path = require('path');
var Quill = require('quill');

var closeEl = document.querySelector('.close');
var settingsEl = document.querySelector('.settings');

var trayIcon = null;
var trayMenu = null;

closeEl.addEventListener('click', function() {
    ipc.send('close-main-window');
});

settingsEl.addEventListener('click', function() {
    ipc.send('open-settings-window');
});

ipc.on('global-shortcut', function(arg) {
    var event = new MouseEvent('click');
});

if (process.platform === 'darwin') {
    trayIcon = new Tray(path.join(__dirname, 'img/tray-iconTemplate.png'));
} else {
    trayIcon = new Tray(path.join(__dirname, 'img/tray-icon-alt.png'));
}

var trayMenuTemplate = [{
        label: 'Covert Comms Desktop',
        enabled: false
    },
    {
        label: 'Settings',
        click: function() {
            ipc.send('open-settings-window');
        }
    },
    {
        label: 'Quit',
        click: function() {
            ipc.send('close-main-window');
        }
    }
];
trayMenu = Menu.buildFromTemplate(trayMenuTemplate);
trayIcon.setContextMenu(trayMenu);

var container = document.getElementById('editor');

var toolbarOptions = [
    // [{ 'font': fonts }],
    // [{ 'header': 1 }, { 'header': 2 }],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'size': ['small', false, 'large', 'huge'] }],
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    ['blockquote', 'code-block'],

    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    // [{ 'script': 'sub'}, { 'script': 'super' }],
    // [{ 'indent': '-1'}, { 'indent': '+1' }],
    // [{ 'direction': 'rtl' }],


    [{ 'color': [] }, { 'background': [] }],

    // [{align: []}],
    // [{ 'align': [false, 'right', 'center', 'justify'] }],
    [{ align: '' }, { align: 'right' }, { align: 'center' }, { align: 'justify' }],
    ['image', 'video'],
    ['clean'], // remove formatting button
    ['fullscreen']
];

var quill = new Quill('#editor', {
    theme: 'snow',
    debug: 'warn',
    modules: {
        formula: true,
        syntax: true,
        'history': { // Enable with custom configurations
            'delay': 2500,
            'userOnly': true
        },
        toolbar: toolbarOptions,
    },
    bounds: '#editor'
});