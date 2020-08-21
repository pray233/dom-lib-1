window.$ = window.jQuery = function (selector) {
    let elements;
    if (typeof selector === 'string') {
        elements = this.document.querySelectorAll(selector);
    } else if (selector instanceof Array) {
        elements = selector;
    }
    //创建一个对象，这个对象的__proto__为括号内的东西
    const api = this.Object.create(jQuery.prototype)
    // api.elements = elements;
    // api.oldApi = selector.oldApi;
    // 将对象属性拷贝到api
    Object.assign(api, {
        elements: elements,
        oldApi: selector.oldApi
    })
    //返回一个对象(api) 可以操作elements
    return api;
}
// jQuery对象 原型函数
jQuery.fn = jQuery.prototype = {
    constructor: jQuery,
    //闭包：访问外部变量的函数
    //添加类
    addClass(className) {
        for (let i = 0; i < this.elements.length; i++) {
            elements[i].classList.add(className);
        }
        return this;   //即 return API{调用这个方法的对象} => 用于链式操作
    },
    //查找元素
    find(selector) {
        let array = [];
        for (let i = 0; i < this.elements.length; i++) {
            array = array.concat(Array.from(this.elements[i].querySelectorAll(selector)));
        }
        array.oldApi = this; //this 旧api
        return jQuery(array); //return 新的API对象用于操作array
    },
    //遍历元素
    each(fn) {
        for (let i = 0; i < this.elements.length; i++) {
            fn.call(null, this.elements[i], i);
        }
        return this;
    },
    //打印元素
    print() {
        console.log(this.elements);
    },
    //查询父元素
    parent() {
        let array = [];
        this.each((node) => {
            //array里没有node.parentNode
            if (array.indexOf(node.parentNode) === -1)
                array.push(node.parentNode);
        })
        return jQuery(array);
    },
    //查询子元素
    children() {
        let array = [];
        this.each((node) => {
            //展开运算符(...)，取出对象中所有可遍历属性，拷贝到当前对象中
            array.push(...node.children);
        })
        return jQuery(array);
    },
    //返回上级API

    end() {
        return this.oldApi; //返回旧api this 新Api
    }
}