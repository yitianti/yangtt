/**
 * 文件名: tab-switch.js
 * 作者: 杨婷婷
 * 建立时间: 2026-11-02
 * 使用模型: Trae
 * 功能名称: Tab 选项卡切换（可复用）
 * 功能简介: 通用的 Tab 切换工具。同一页面可实例化多组 Tab，
 *          每组独立配置「选中类名 / 切换类名 / 默认激活索引」。
 *          内部实现采用"先清除全部选中态，再设置当前元素选中态"
 *          的经典模式，避免状态残留。
 */

/* ===== TabSwitch =====
 * 功能: Tab 切换控制器，对 DOM 中一组 tab 与对应的 panel 进行切换
 * 参数: options —— 配置对象
 *       options.tabSelector   —— tab 元素选择器（必填）
 *       options.panelSelector —— panel 元素选择器（必填）
 *       options.activeClass   —— tab 激活时加上的 class（默认 ytt_active）
 *       options.panelClass    —— panel 显示时加上的 class（默认 ytt_active_panel）
 *       options.defaultIndex  —— 初始激活索引（默认 0）
 * 返回: TabSwitch 实例，提供 .switchTo(index) 和 .destroy() 方法
 * 示例:
 *   var newsTabs = TabSwitch.init({
 *     tabSelector:   '.ytt_news_tab',
 *     panelSelector: '.ytt_news_panel',
 *     defaultIndex:  0
 *   });
 */
var TabSwitch = (function(){

    /* ===== TabSwitch 构造器 =====
     * 功能: 构造并初始化一组 Tab
     * 参数: options —— 同上
     * 返回: this —— 当前实例
     */
    function TabSwitch(options){
        this.tabs          = document.querySelectorAll(options.tabSelector);
        this.panels        = document.querySelectorAll(options.panelSelector);
        this.activeClass   = options.activeClass   || 'ytt_active';
        this.panelClass    = options.panelClass    || 'ytt_active_panel';
        this.defaultIndex  = typeof options.defaultIndex === 'number' ? options.defaultIndex : 0;
        this._bindEvents();
        this.switchTo(this.defaultIndex);
    }

    /* ===== _bindEvents =====
     * 功能: 给所有 tab 绑定 click 事件监听；点击时读取 data-index 并切换
     * 参数: 无（使用 this.tabs）
     * 返回: 无
     */
    TabSwitch.prototype._bindEvents = function(){
        var self = this;
        this.tabs.forEach(function(tab, index){
            tab.setAttribute('data-index', index);
            tab.addEventListener('click', function(){
                self.switchTo(index);
            });
        });
    };

    /* ===== _clearAll =====
     * 功能: 清除所有 tab 的选中态，同时隐藏所有 panel
     * 参数: 无
     * 返回: 无
     * 核心实现：先移除全部 activeClass，再移除全部 panelClass
     */
    TabSwitch.prototype._clearAll = function(){
        var cls = this.activeClass;
        var pcls = this.panelClass;
        this.tabs.forEach(function(tab){
            tab.classList.remove(cls);
        });
        this.panels.forEach(function(panel){
            panel.classList.remove(pcls);
        });
    };

    /* ===== switchTo =====
     * 功能: 切换到指定索引的 tab（外部主入口）
     * 参数: index —— 目标索引（0 起）
     * 返回: 无
     * 流程: ① 清除所有选中态  ② 给当前 tab 加 activeClass  ③ 给对应 panel 加 panelClass
     */
    TabSwitch.prototype.switchTo = function(index){
        if(index < 0 || index >= this.tabs.length) return;
        this._clearAll();
        this.tabs[index].classList.add(this.activeClass);
        this.panels[index].classList.add(this.panelClass);
    };

    /* ===== destroy =====
     * 功能: 解绑所有事件监听（通过重绑空函数实现），用于页面卸载或重新初始化
     * 参数: 无
     * 返回: 无
     */
    TabSwitch.prototype.destroy = function(){
        var self = this;
        this.tabs.forEach(function(tab){
            var clone = tab.cloneNode(true);
            tab.parentNode.replaceChild(clone, tab);
        });
        this.tabs = document.querySelectorAll('.' + this.activeClass.replace('ytt_', ''));
    };

    /* ===== init =====
     * 功能: 工厂方法，返回一个 TabSwitch 实例
     * 参数: options —— 同构造器
     * 返回: TabSwitch 实例
     */
    function init(options){
        return new TabSwitch(options);
    }

    return { init: init };
})();

/* ===== DOMContentLoaded 入口 =====
 * 功能: 页面加载后，自动初始化页面上所有标记了 data-tab-group 的 tab 组
 * 参数: 无
 * 返回: 无
 * 约定: 容器元素上需带 data-tab-group 属性，内部子元素按默认选择器命名
 */
document.addEventListener('DOMContentLoaded', function(){
    var groups = document.querySelectorAll('[data-tab-group]');
    groups.forEach(function(group){
        TabSwitch.init({
            tabSelector:   '[data-tab-group="' + group.getAttribute('data-tab-group') + '"] .ytt_tab',
            panelSelector: '[data-tab-group="' + group.getAttribute('data-tab-group') + '"] .ytt_panel',
            defaultIndex:  parseInt(group.getAttribute('data-default')) || 0
        });
    });
});
