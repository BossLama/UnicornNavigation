class UnicornNavigation
{
    private debug_enabled : boolean;
    private company : string;
    private theme : string;
    private navItems : Array<NavigationItem>;

    constructor(company : string = 'UnicornNavigation', theme : string = 'default')
    {
        this.debug_enabled = false;
        this.company = company;
        this.theme = theme;
        this.navItems = new Array<NavigationItem>();
    }

    /**
     * Create a new navigation item
     * @param label 
     * @param onClick
     * @returns void 
     */
    public addNavItem(label : string, onClick : Function, isActive : boolean = false) : void
    {
        this.navItems.push(new NavigationItem(label, onClick, isActive));
    }

    /**
     * Render the navigation to top of the page
     * @returns void
     */
    public render() : void
    {
        let existingNav = document.querySelector(".unicorn-nav");
        if(existingNav != null)
        {
            console.error("Unicorn Navigation already exists");
            console.error("Removing existing navigation");
            existingNav.remove();
        }

        let header = document.createElement("header");
        header.classList.add("unicorn-nav");
        header.classList.add(this.theme);
        
        let company = document.createElement("h1");
        company.classList.add("logo");
        company.textContent = this.company;
        header.appendChild(company);

        let nav = document.createElement("nav");
        let ul = document.createElement("ul");

        this.navItems.forEach(item => {
            ul.appendChild(item.getElement());
            this.printDebug(`Added navigation item: ${item.getLabel()}`);
        });

        nav.appendChild(ul);
        header.appendChild(nav);

        document.body.prepend(header);
    }

    /**
     * Returns the navigation items
     * @returns Array<NavigationItem>
     */
    public getNavItems() : Array<NavigationItem>
    {
        return this.navItems;
    }

    /**
     * Enable debug mode
     * @returns void
     */
    public enableDebug() : void
    {
        this.debug_enabled = true;
    }

    /**
     * Print debug message
     * @param message 
     * @returns void
     */
    private printDebug(message : string) : void
    {
        if(!this.debug_enabled) return;
        let timestamp = new Date().toLocaleTimeString();
        console.log(`[${timestamp}] ${message}`);
    }
}



class NavigationItem
{

    private label : string;
    private onClick : Function;
    private isActive : boolean;

    constructor(label : string, onClick : Function, isActive : boolean = false)
    {
        this.label = label;
        this.onClick = onClick;
        this.isActive = isActive;
    }

    public click() : void
    {
        this.onClick();
    }

    public getLabel() : string
    {
        return this.label;
    }

    public getElement() : HTMLElement
    {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.href = "#";
        a.textContent = this.label;

        if(this.isActive)
        {
            a.classList.add("active");
        }

        a.onclick = () => this.onClick();
        li.appendChild(a);
        return li;
    }
}