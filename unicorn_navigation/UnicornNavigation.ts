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

    private navigationItems : UnicornNavigationItem[] = [];

    constructor()
    {
        if(!this.isCSSLoaded())
        {
            this.logError('CSS not loaded. Make sure to include the CSS file before the JS file.');
        }
    }

    // Adds a new navigation item
    public addItem(label: string, url: string, onClicked: Function | null = null): void
    {
        this.navigationItems.push(new UnicornNavigationItem(label, url, onClicked));
    }

    // Renders the navigation
    public render(target: HTMLElement | string): void
    {
        if(typeof target === 'string') target = document.querySelector(target);
        if(target === null) return this.logError('Target element not found.');

        let navigation      = document.createElement('ul');
        navigation.classList.add('unicorn-navigation');

        this.navigationItems.forEach(item => {
            navigation.appendChild(item.getHTMLElement());
        });

        target.appendChild(navigation);
    }

    // Checks if specific CSS is loaded
    private isCSSLoaded(): boolean
    {
        let styles      = window.getComputedStyle(document.body);
        return styles.getPropertyValue('--unicorn-navigation-js-identifier') !== '';
    }

    // Logs an error message to the console
    private logError(message: string): void
    {
        let timestamp   = new Date().toLocaleTimeString();
        console.error(`[${timestamp}] Unicorn Navigation: ${message}`);
    }
}


class UnicornNavigationItem
{

    private label       : string;
    private url         : string;
    private onClicked   : Function | null;

    constructor(label : string, url : string, onClicked : Function | null = null)
    {
        this.label          = label;
        this.url            = url;
        this.onClicked      = onClicked;
    }

    // Returns the label of the navigation item
    public getLabel(): string
    {
        return this.label;
    }

    // Returns the URL of the navigation item
    public getUrl(): string
    {
        return this.url;
    }

    // Calls the onClicked function
    public onClick(): void
    {
        if(this.onClicked !== null) this.onClicked(this.label);
    }

    // Get the HTMLElement of the navigation item
    public getHTMLElement(): HTMLElement
    {
        let listItem        = document.createElement('li');
        let element         = document.createElement('a');
        element.innerText   = this.label;
        
        if(this.onClicked !== null)
        {
            element.onclick = () => this.onClick();
            element.href    = '#';
        }
        else
        {
            element.href    = this.url;
        }

        listItem.appendChild(element);
        return listItem;
    }
}


document.addEventListener('DOMContentLoaded', () => {
    new UnicornNavigation();
});