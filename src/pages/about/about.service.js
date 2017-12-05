var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
var URL_API = 'app/api/alumnos.php';
var AlumnosService = /** @class */ (function () {
    function AlumnosService(http) {
        this.http = http;
        this.data = null;
    }
    AlumnosService.prototype.load = function () {
        var _this = this;
        this.http.get('/api/items').subscribe(function (data) {
            // Read the result field from the JSON response.
            _this.results = data['results'];
        });
    };
    AlumnosService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], AlumnosService);
    return AlumnosService;
}());
export { AlumnosService };
//# sourceMappingURL=about.service.js.map