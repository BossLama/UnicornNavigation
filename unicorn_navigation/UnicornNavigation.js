/**
*   -------------------------------------------------------
*   Unicorn Navigation
*   -------------------------------------------------------
*   A navigation plugin devloped by Webdesign Riemer
*   Unicorn Navigation is part of the Unicorn Project
*
*   @version        1.0.0
*   @author         Jonas Riemer <contact@riemerjonas.de>
*   @license        MIT
*   -------------------------------------------------------
*/
var UnicornNavigation = /** @class */ (function () {
    function UnicornNavigation() {
        this.navigationItems = [];
        if (!this.isCSSLoaded()) {
            this.logError('CSS not loaded. Make sure to include the CSS file before the JS file.');
        }
    }
    // Adds a new navigation item
    UnicornNavigation.prototype.addItem = function (label, url, onClicked) {
        if (onClicked === void 0) { onClicked = null; }
        this.navigationItems.push(new UnicornNavigationItem(label, url, onClicked));
    };
    // Renders the navigation
    UnicornNavigation.prototype.render = function (target) {
        var parent = null;
        if (typeof target === 'string')
            parent = document.querySelector(target);
        else
            parent = target;
        if (parent === null) {
            this.logError('Target `' + target + '` not found.');
            return;
        }
        var navigation = document.createElement('ul');
        navigation.classList.add('unicorn-navigation');
        this.navigationItems.forEach(function (item) {
            navigation.appendChild(item.getHTMLElement());
        });
        if (parent !== null)
            parent.appendChild(navigation);
    };
    // Checks if specific CSS is loaded
    UnicornNavigation.prototype.isCSSLoaded = function () {
        var styles = window.getComputedStyle(document.body);
        return styles.getPropertyValue('--unicorn-navigation-js-identifier') !== '';
    };
    // Logs an error message to the console
    UnicornNavigation.prototype.logError = function (message) {
        var timestamp = new Date().toLocaleTimeString();
        console.error("[".concat(timestamp, "] Unicorn Navigation: ").concat(message));
    };
    return UnicornNavigation;
}());
var UnicornNavigationItem = /** @class */ (function () {
    function UnicornNavigationItem(label, url, onClicked) {
        if (onClicked === void 0) { onClicked = null; }
        this.label = label;
        this.url = url;
        this.onClicked = onClicked;
    }
    // Returns the label of the navigation item
    UnicornNavigationItem.prototype.getLabel = function () {
        return this.label;
    };
    // Returns the URL of the navigation item
    UnicornNavigationItem.prototype.getUrl = function () {
        return this.url;
    };
    // Calls the onClicked function
    UnicornNavigationItem.prototype.onClick = function () {
        if (this.onClicked !== null)
            this.onClicked(this.label);
    };
    // Get the HTMLElement of the navigation item
    UnicornNavigationItem.prototype.getHTMLElement = function () {
        var _this = this;
        var listItem = document.createElement('li');
        var element = document.createElement('a');
        element.innerText = this.label;
        if (this.onClicked !== null) {
            element.onclick = function () { return _this.onClick(); };
            element.href = '#';
        }
        else {
            element.href = this.url;
        }
        listItem.appendChild(element);
        return listItem;
    };
    return UnicornNavigationItem;
}());
document.addEventListener('DOMContentLoaded', function () {
    new UnicornNavigation();
});
