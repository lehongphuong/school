/*
  filename: integralui.progressbar.js
  version : 1.0.0
  Copyright © 2016-2018 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends=this&&this.__extends||function(d,b){function a(){this.constructor=d}for(var e in b)b.hasOwnProperty(e)&&(d[e]=b[e]);d.prototype=null===b?Object.create(b):(a.prototype=b.prototype,new a)},__decorate=this&&this.__decorate||function(d,b,a,e){var c=arguments.length,f=3>c?b:null===e?e=Object.getOwnPropertyDescriptor(b,a):e,g;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)f=Reflect.decorate(d,b,a,e);else for(var h=d.length-1;0<=h;h--)if(g=d[h])f=(3>c?g(f):3<c?g(b,a,f):
g(b,a))||f;return 3<c&&f&&Object.defineProperty(b,a,f),f},__metadata=this&&this.__metadata||function(d,b){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(d,b)},core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),forms_1=require("@angular/forms"),IntegralUIProgressBar=IntegralUIProgressBar_1=function(d){function b(a,b){var c=d.call(this,a,b)||this;c.elemRef=
a;c.commonService=b;c.currentOrientation=integralui_core_1.IntegralUIOrientation.Horizontal;c.contentSize={width:0,height:0};c.orientationChanged=new core_1.EventEmitter;return c}__extends(b,d);Object.defineProperty(b.prototype,"orientation",{get:function(){return this.currentOrientation},set:function(a){this.currentOrientation!=a&&(this.currentOrientation=a,this.updateLayout(),this.orientationChanged.emit(null))},enumerable:!0,configurable:!0});b.prototype.ngOnInit=function(){this.generalClassName=
"iui-progressbar";this.contentClassName=this.generalClassName+"-content";this.initStyle()};b.prototype.ngAfterViewInit=function(){this.updateLayout()};b.prototype.ngAfterContentChecked=function(){1==this.autoUpdate&&(this.clientRect={width:this.elemRef.nativeElement.firstElementChild.clientWidth,height:this.elemRef.nativeElement.firstElementChild.clientHeight},this.clientRect.width!=this.prevClientRect.width?(this.updateLayout(),this.prevClientRect.width=this.clientRect.width):this.clientRect.height!=
this.prevClientRect.height&&(this.updateLayout(),this.prevClientRect.height=this.clientRect.height))};b.prototype.processValueChange=function(){this.updateLayout()};b.prototype.updateLayout=function(){var a=this,b=setTimeout(function(){var c=a.commonService.getPadding(a.elemRef.nativeElement.firstElementChild);a.clientRect={width:a.elemRef.nativeElement.firstElementChild.clientWidth-(c.left+c.right),height:a.elemRef.nativeElement.firstElementChild.clientHeight-(c.top+c.bottom)};a.contentSize={width:a.clientRect.width,
height:a.clientRect.height};a.currentOrientation==integralui_core_1.IntegralUIOrientation.Horizontal?a.contentSize.width=100>a.currentValue?Math.floor(a.clientRect.width*a.currentValue/100):a.clientRect.width:a.contentSize.height=100>a.currentValue?Math.floor(a.clientRect.height*a.currentValue/100):a.clientRect.height;clearTimeout(b)},1)};b.prototype.getProgressStyle=function(){return this.currentOrientation==integralui_core_1.IntegralUIOrientation.Horizontal?{width:this.contentSize.width+"px"}:{position:"absolute",
bottom:"-1px",height:this.contentSize.height+"px"}};return b}(integralui_core_1.IntegralUIBaseValueComponent);__decorate([core_1.Input(),__metadata("design:type",Number),__metadata("design:paramtypes",[Number])],IntegralUIProgressBar.prototype,"orientation",null);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],IntegralUIProgressBar.prototype,"orientationChanged",void 0);
IntegralUIProgressBar=IntegralUIProgressBar_1=__decorate([core_1.Component({selector:"iui-progressbar",template:'\n\t\t<div [ngClass]="getControlClass()">\n\t\t\t<div [ngClass]="getContentClass()" [ngStyle]="getProgressStyle()"></div>\n\t\t</div>\n\t',inputs:"autoUpdate controlStyle data enabled name state value".split(" "),outputs:["valueChanged"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useExisting:core_1.forwardRef(function(){return IntegralUIProgressBar_1}),multi:!0}],encapsulation:core_1.ViewEncapsulation.None}),
__metadata("design:paramtypes",[core_1.ElementRef,integralui_common_service_1.IntegralUICommonService])],IntegralUIProgressBar);exports.IntegralUIProgressBar=IntegralUIProgressBar;var IntegralUIProgressBar_1;