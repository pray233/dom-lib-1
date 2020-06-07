
// 对象风格封装DOM
window.dom = {
    //创建节点
    create(string) {    //string：HTML标签
        const template = document.createElement('template');   //template：容器
        template.innerHTML = string.trim();    //trim()：去除多余空格
        return template.content.firstChild;    //拿到template第一个子元素
    },
    //在后面添加节点
    after(node, node2) {
        node.parentNode.insertBefore(node2, node.nextSibling);
    },
    //在前面添加节点
    before(node, node2) {
        node.parentNode.insertBefore(node2, node);
    },
    //添加子节点
    append(parent, node) {
        parent.appendChild(node);
    },
    //添加父节点
    wrap(node, parent) {
        dom.before(node, parent);
        dom.append(parent, node);
    },
    //删除节点
    remove(node) {
        node.parentNode.removeChild(node);
        return node;
    },
    //删除全部子节点
    empty(node) {
        const array = [];
        let x = node.firstChild;
        while (x) {
            array.push(dom.remove(node.firstChild));
            x = node.firstChild;
        }
        return array;
    },
    //添加、获取属性
    attr(node, name, value) {   //重载
        if (arguments.length === 3) {
            node.setAttribute(name, value);
        } else if (arguments.length === 2) {
            return node.getAttribute(name);
        }
    },
    //添加、获取文本
    txt(node, string) {
        if (arguments.length === 2) {
            if ('innerText' in node) {
                node.innerText = string;
            } else {
                node.textContent = string;
            }
        } else if (arguments.length === 1) {
            if ('innerText' in node) {
                return node.innerText;
            } else {
                return node.textContent;
            }
        }
    },
    //添加、获取HTML内容
    html(node, string) {
        if (arguments.length === 2) {
            node.innerHTML = string;
        } else if (arguments.length === 1) {
            return node.innerHTML;
        }
    },
    //添加、获取、修改样式
    style(node, name, value) {
        if (arguments.length === 3) {
            node.style[name] = value;
        } else if (arguments.length === 2) {
            if (typeof name === "string") {
                return node.style[name];
            } else if (name instanceof Object) {
                const object = name;
                for (let key in object) {
                    node.style[key] = object[key];
                }
            }
        }
    },
    //添加、删除、查询类
    class: {
        add(node, className) {
            node.classList.add(className);
        },
        remove(node, className) {
            node.classList.remove(className);
        },
        has(node, className) {
            return node.classList.contains(className);
        }
    },
    //添加事件监听
    on(node, eventName, fn) {
        node.addEventListener(eventName, fn);
    },
    //删除事件监听
    off(node, eventName, fn) {
        node.removeEventListener(eventName, fn);
    },
    //查找节点
    find(selector, scope) {
        //如果规定范围scope,就在scope里找，否则在document里找
        return (scope || document).querySelectorAll(selector);
    },
    //查找父节点
    parent(node) {
        return node.parentNode;
    },
    //查找子节点
    children(node) {
        return node.children;
    },
    //查找兄弟节点
    siblings(node) {
        //将node父节点的子节点们变成数组，然后调用filter方法返回除了node本身的其他兄弟节点
        return Array.from(node.parentNode.children).filter(n => n !== node);
    },
    //查找下一个兄弟节点
    next(node) {
        let x = node.nextSibling;
        while (x && x.nodeType === 3) {
            x = x.nextSibling;
        }
        return x;
    },
    //查找上一个兄弟节点
    prev(node) {
        let x = node.previousSibling;
        while (x && x.nodeType === 3) {
            x = x.previousSibling;
        }
        return x;
    },
    //遍历节点表
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn(nodeList[i]);
        }
    },
    //查询节点顺序号
    index(node) {
        const list = dom.children(node.parentNode);
        let i;
        for (i = 0; i < list.length; i++) {
            if (list[i] === node) {
                break;
            }
        }
        return i;
    }
};
