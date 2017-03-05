/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './messages.component';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from './message-input.component';
import * as import11 from './message-list.component';
import * as import12 from './message-input.component.ngfactory';
import * as import13 from './message.service';
import * as import14 from './message-list.component.ngfactory';
var renderType_MessagesComponent_Host = null;
var _View_MessagesComponent_Host0 = (function (_super) {
    __extends(_View_MessagesComponent_Host0, _super);
    function _View_MessagesComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_MessagesComponent_Host0, renderType_MessagesComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_MessagesComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('app-messages', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_MessagesComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._MessagesComponent_0_4 = new import3.MessagesComponent();
        this._appEl_0.initComponent(this._MessagesComponent_0_4, [], compView_0);
        compView_0.create(this._MessagesComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_MessagesComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.MessagesComponent) && (0 === requestNodeIndex))) {
            return this._MessagesComponent_0_4;
        }
        return notFoundResult;
    };
    return _View_MessagesComponent_Host0;
}(import1.AppView));
function viewFactory_MessagesComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_MessagesComponent_Host === null)) {
        (renderType_MessagesComponent_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_MessagesComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var MessagesComponentNgFactory = new import9.ComponentFactory('app-messages', viewFactory_MessagesComponent_Host0, import3.MessagesComponent);
var styles_MessagesComponent = [];
var renderType_MessagesComponent = null;
var _View_MessagesComponent0 = (function (_super) {
    __extends(_View_MessagesComponent0, _super);
    function _View_MessagesComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_MessagesComponent0, renderType_MessagesComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_MessagesComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n        ', null);
        this._el_1 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_1, 'class', 'row');
        this._text_2 = this.renderer.createText(this._el_1, '\n            ', null);
        this._el_3 = this.renderer.createElement(this._el_1, 'app-message-input', null);
        this._appEl_3 = new import2.AppElement(3, 1, this, this._el_3);
        var compView_3 = import12.viewFactory_MessageInputComponent0(this.viewUtils, this.injector(3), this._appEl_3);
        this._MessageInputComponent_3_4 = new import10.MessageInputComponent(this.parentInjector.get(import13.MessageService));
        this._appEl_3.initComponent(this._MessageInputComponent_3_4, [], compView_3);
        compView_3.create(this._MessageInputComponent_3_4, [], null);
        this._text_4 = this.renderer.createText(this._el_1, '\n        ', null);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n        ', null);
        this._el_6 = this.renderer.createElement(parentRenderNode, 'hr', null);
        this._text_7 = this.renderer.createText(parentRenderNode, '\n        ', null);
        this._el_8 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_8, 'class', 'row');
        this._text_9 = this.renderer.createText(this._el_8, '\n            ', null);
        this._el_10 = this.renderer.createElement(this._el_8, 'app-message-list', null);
        this._appEl_10 = new import2.AppElement(10, 8, this, this._el_10);
        var compView_10 = import14.viewFactory_MessageListComponent0(this.viewUtils, this.injector(10), this._appEl_10);
        this._MessageListComponent_10_4 = new import11.MessageListComponent(this.parentInjector.get(import13.MessageService));
        this._appEl_10.initComponent(this._MessageListComponent_10_4, [], compView_10);
        compView_10.create(this._MessageListComponent_10_4, [], null);
        this._text_11 = this.renderer.createText(this._el_8, '\n        ', null);
        this._text_12 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this.init([], [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._text_12
        ], [], []);
        return null;
    };
    _View_MessagesComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import10.MessageInputComponent) && (3 === requestNodeIndex))) {
            return this._MessageInputComponent_3_4;
        }
        if (((token === import11.MessageListComponent) && (10 === requestNodeIndex))) {
            return this._MessageListComponent_10_4;
        }
        return notFoundResult;
    };
    _View_MessagesComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._MessageInputComponent_3_4.ngOnInit();
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._MessageListComponent_10_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_MessagesComponent0;
}(import1.AppView));
export function viewFactory_MessagesComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_MessagesComponent === null)) {
        (renderType_MessagesComponent = viewUtils.createRenderComponentType('C:/Users/timot/Documents/Coding/Udemy/MEAN/MEAN-CommentsApp/assets/app/messages/messages.component.ts class MessagesComponent - inline template', 0, import8.ViewEncapsulation.None, styles_MessagesComponent, {}));
    }
    return new _View_MessagesComponent0(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=messages.component.ngfactory.js.map