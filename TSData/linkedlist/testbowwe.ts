module.exports = Pagination;

const complexWidget = require('widgets/base/complexWidget');
const WidgetConstants = require('widgets/base/WidgetConst').WidgetConst;

//  attach base class to prototype
const Pagination = (widgetType: string, widgetId: string, isNewWidget: string, iconSrc: string): any => {

    complexWidget.call(this, widgetType, widgetId, isNewWidget, iconSrc, false);

    const public = this.public;

    public.advancedConfig = false;
    public.nestedWidget = true;
    public.draggable = false;
    public.removeIcon = false;
    public.enabledSettings = false;
    public.dialogTitle = dictWD.dialogTitles.paginator;
    public.DIALOG_CLASS = 'dialog-categories';
    public.targetStylesElement = '.pagination-element .pagination-a';
    public.isTextWidget = true;

    this.selectorSuffixes = {
        basic: { name: dictWD.selectorSuffixNormal, suffix: '' },
        hover: { name: dictWD.selectorSuffixHover, suffix: ':hover' },
        active: { name: dictWD.selectorSuffixActive, suffix: '.active', customSelector: true },
        other: { name: dictWD.selectorSuffixOther, suffix: ' ' }
    };

    public.getStyleSelector = (): string => {
        return '.pagination .pagination-element' + WidgetConstants.SELECTOR_SUFFIX_PLACEHOLDER + ' .pagination-a';
    };

    public.renderDialog = renderDialog;
    function renderDialog(): string {
        return '';
    }

    return this.public;
}

Pagination.prototype = new complexWidget();
Pagination.prototype.constructor = Pagination;



