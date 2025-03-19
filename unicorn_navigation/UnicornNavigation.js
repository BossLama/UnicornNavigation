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
        if (!this.isCSSLoaded()) {
            this.logError('CSS not loaded. Make sure to include the CSS file before the JS file.');
        }
    }
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
    function UnicornNavigationItem() {
    }
    return UnicornNavigationItem;
}());
document.addEventListener('DOMContentLoaded', function () {
    new UnicornNavigation();
});
