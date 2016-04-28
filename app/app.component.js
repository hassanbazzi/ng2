System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent, HEROES;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Heroes of Newerth';
                    this.heroes = HEROES;
                }
                AppComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h1>{{title}}</h1>\n    <h2>My Heroes</h2>\n    <ul class=\"heroes\">\n      <li\n      *ngFor=\"#hero of heroes\"\n      (click)=\"onSelect(hero)\"\n      [class.selected]=\"hero === selectedHero\">\n        <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n      </li>\n    </ul>",
                        styles: ["\n  .heroes {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n  }\n  .heroes li {\n    cursor: pointer;\n    position: relative;\n    background-color: #524E50;\n    color: #eaeaea;\n    margin: 0 .75rem .75rem 0;\n    padding-right: .5em;\n    display: inline-block;\n    border-radius: 4px;\n    transition: all .3s;\n    border: 1px solid #232323;\n  }\n  .heroes li.selected {\n    transform: scale(1.1);\n    background-color: #3C383A;\n  }\n  .heroes li:hover {\n    background-color: #3C383A;\n  }\n  .heroes .badge {\n    display: inline-block;\n    font-size: .8rem;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    padding: .5em;\n    margin-right: .4rem;\n    border-radius: 4px 0 0 4px;\n  }\n"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            HEROES = [
                { "id": 11, "name": "Devourer" },
                { "id": 12, "name": "Panda" },
                { "id": 13, "name": "Nomad" },
                { "id": 14, "name": "Gauntlet" },
                { "id": 15, "name": "Deadwood" },
                { "id": 16, "name": "The Dark Lady" },
                { "id": 17, "name": "Magmus" },
                { "id": 18, "name": "Legionnaire" },
                { "id": 19, "name": "Tempest" },
                { "id": 20, "name": "Solstice" }
            ];
        }
    }
});
//# sourceMappingURL=app.component.js.map