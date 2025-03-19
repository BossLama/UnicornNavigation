var UnicornNavigation = /** @class */ (function () {
    function UnicornNavigation(company, theme) {
        if (company === void 0) { company = 'UnicornNavigation'; }
        if (theme === void 0) { theme = 'default'; }
        this.debug_enabled = false;
        this.company = company;
        this.theme = theme;
        this.navItems = new Array();
    }
    /**
     * Create a new navigation item
     * @param label
     * @param onClick
     * @returns void
     */
    UnicornNavigation.prototype.addNavItem = function (label, onClick, isActive) {
        if (isActive === void 0) { isActive = false; }
        this.navItems.push(new NavigationItem(label, onClick, isActive));
    };
    /**
     * Render the navigation to top of the page
     * @returns void
     */
    UnicornNavigation.prototype.render = function () {
        var _this = this;
        var existingNav = document.querySelector(".unicorn-nav");
        if (existingNav != null) {
            console.error("Unicorn Navigation already exists");
            console.error("Removing existing navigation");
            existingNav.remove();
        }
        var header = document.createElement("header");
        header.classList.add("unicorn-nav");
        header.classList.add(this.theme);
        var company = document.createElement("h1");
        company.classList.add("logo");
        company.textContent = this.company;
        header.appendChild(company);
        var ul = document.createElement("ul");
        this.navItems.forEach(function (item) {
            ul.appendChild(item.getElement());
            _this.printDebug("Added navigation item: ".concat(item.getLabel()));
        });
        var mobileToggle = this.getMobileToggle(header);
        header.appendChild(mobileToggle);
        header.appendChild(ul);
        document.body.prepend(header);
    };
    /**
     * Returns the mobile toggle button
     * @returns HTMLElement
     */
    UnicornNavigation.prototype.getMobileToggle = function (parent) {
        var button = document.createElement("button");
        button.classList.add("mobile-toggle");
        button.textContent = "☰";
        button.onclick = function () {
            parent.classList.toggle("open");
            if (parent.classList.contains("open")) {
                button.textContent = "✖";
            }
            else {
                button.textContent = "☰";
            }
        };
        return button;
    };
    /**
     * Returns the navigation items
     * @returns Array<NavigationItem>
     */
    UnicornNavigation.prototype.getNavItems = function () {
        return this.navItems;
    };
    /**
     * Enable debug mode
     * @returns void
     */
    UnicornNavigation.prototype.enableDebug = function () {
        this.debug_enabled = true;
    };
    /**
     * Print debug message
     * @param message
     * @returns void
     */
    UnicornNavigation.prototype.printDebug = function (message) {
        if (!this.debug_enabled)
            return;
        var timestamp = new Date().toLocaleTimeString();
        console.log("[".concat(timestamp, "] ").concat(message));
    };
    return UnicornNavigation;
}());
var NavigationItem = /** @class */ (function () {
    function NavigationItem(label, onClick, isActive) {
        if (isActive === void 0) { isActive = false; }
        this.label = label;
        this.onClick = onClick;
        this.isActive = isActive;
    }
    NavigationItem.prototype.click = function () {
        this.onClick();
    };
    NavigationItem.prototype.getLabel = function () {
        return this.label;
    };
    NavigationItem.prototype.getElement = function () {
        var _this = this;
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = "#";
        a.textContent = this.label;
        if (this.isActive) {
            a.classList.add("active");
        }
        a.onclick = function () { return _this.onClick(); };
        li.appendChild(a);
        return li;
    };
    return NavigationItem;
}());
