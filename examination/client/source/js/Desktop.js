"use strict";

var NewWindow = require("./window");
var Memory = require("./Memory");
var TaskBar = require("./taskbar");
var Chat = require("./Chat");

var Menu = new TaskBar();
Menu.dockBar();

var Window = new NewWindow();
Window.popupClose();

var Desktop = function() {
    this.ele = undefined;
    this.id = undefined;
    this.number = 0;
};

Desktop.prototype.generate = function() {
    var dockClearAll = document.querySelector("#clearAllButton");
    dockClearAll.addEventListener("click", function(event) {
    event.preventDefault();
    var Window = new NewWindow();
    Window.popupOpen();

    var popupClose = document.querySelector(".s3-btn-close");
    popupClose.addEventListener("click", function(event) {
        event.preventDefault();
        var Window = new NewWindow();
        Window.popupClose();
    }, false);

    var popupClose2 = document.querySelector(".cancelPopup");
    popupClose2.addEventListener("click", function(event) {
        event.preventDefault();
        var Window = new NewWindow();
        Window.popupClose();
    }, false);

    var popupClear = document.querySelector(".confirmPopup");
    popupClear.addEventListener("click", function(event) {
        event.preventDefault();
        var Window = new NewWindow();
        Window.clearAll();
        Window.popupClose();
    }, false);

}, false);

    var dockMemory = document.querySelector("#memoryButton");

    dockMemory.addEventListener("click", function(event) {
        event.preventDefault();

        var container = document.querySelector("#container");
        var template = document.querySelector("#memoryWindow");
        var temp = document.importNode(template.content, true);
        this.id = "id-" + this.number.toString();
        console.log(this.id);
        temp.firstElementChild.setAttribute("id", this.id);
        container.appendChild(temp);
        this.ele = document.getElementById(this.id);
        console.log(document.getElementById(this.id));
        this.number += 1;
        var game = new Memory(4, 4, this.ele);
        game.memory();
        var Window = new NewWindow();
        var windowDiv = document.querySelectorAll(".point");
        for (var i = 0; i < windowDiv.length; i += 1) {
            Window.newWindow(windowDiv[i]);
        }

        //var memoryWindow = document.querySelectorAll(".memoryWindow");
        //for (var j = 0; j < memoryWindow.length; j += 1) {

        //}
    }.bind(this), false);

    var dockChat = document.querySelector("#chatButton");

    dockChat.addEventListener("click", function(event) {
    event.preventDefault();
    var Window = new NewWindow();
    Window.genChat();
    var windowDiv = document.querySelectorAll(".point");
    for (var i = 0; i < windowDiv.length; i += 1) {
        Window.newWindow(windowDiv[i]);
    }

    var MyChat = new Chat();
    MyChat.server();
}, false);
};



module.exports = Desktop;
