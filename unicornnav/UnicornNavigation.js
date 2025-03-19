var UnicornNavigation = /** @class */ (function () {
    function UnicornNavigation(company) {
        this.debug_enabled = false;
        this.company = company;
        this.navItems = new Array();
    }
    UnicornNavigation.prototype.addNavItem = function (label, onClick) {
        this.navItems.push(new NavigationItem(label, onClick));
    };
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
        var company = document.createElement("h1");
        company.textContent = this.company;
        header.appendChild(company);
        var nav = document.createElement("nav");
        var ul = document.createElement("ul");
        this.navItems.forEach(function (item) {
            ul.appendChild(item.getElement());
            _this.printDebug("Added navigation item: ".concat(item.getLabel()));
        });
        nav.appendChild(ul);
        header.appendChild(nav);
        document.body.prepend(header);
    };
    UnicornNavigation.prototype.getNavItems = function () {
        return this.navItems;
    };
    UnicornNavigation.prototype.enableDebug = function () {
        this.debug_enabled = true;
    };
    UnicornNavigation.prototype.printDebug = function (message) {
        var timestamp = new Date().toLocaleTimeString();
        console.log("[".concat(timestamp, "] ").concat(message));
    };
    return UnicornNavigation;
}());
var NavigationItem = /** @class */ (function () {
    function NavigationItem(label, onClick) {
        this.label = label;
        this.onClick = onClick;
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
        a.onclick = function () { return _this.onClick(); };
        li.appendChild(a);
        return li;
    };
    return NavigationItem;
}());
