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


class UnicornNavigation
{
    constructor()
    {
        if(!this.isCSSLoaded())
        {
            this.logError('CSS not loaded. Make sure to include the CSS file before the JS file.');
        }
    }

    // Checks if specific CSS is loaded
    private isCSSLoaded(): boolean
    {
        let styles = window.getComputedStyle(document.body);
        return styles.getPropertyValue('--unicorn-navigation-js-identifier') !== '';
    }

    // Logs an error message to the console
    private logError(message: string): void
    {
        let timestamp = new Date().toLocaleTimeString();
        console.error(`[${timestamp}] Unicorn Navigation: ${message}`);
    }
}


class UnicornNavigationItem
{
    constructor()
    {

    }
}


document.addEventListener('DOMContentLoaded', () => {
    new UnicornNavigation();
});