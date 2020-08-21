//测试代码

// const div1 = dom.create("<div>NewDiv1</div>")
// const div2 = dom.create("<div>NewDiv2</div>")
// const div3 = dom.create("<div>NewDiv3</div>")
// dom.after(test, div2);
// dom.before(test, div1);
// dom.wrap(test, div3);
// // let arr = dom.empty(window.empty);
// // console.log(arr);
// dom.attr(test, 'title', 'hello')
// let title = dom.attr(test, 'title')
// console.log(title)
// dom.txt(test, '你好！这是新的内容')
// dom.html(div1, '<p>新的p标签</p>')
// console.log(dom.txt(test))
// console.log(dom.html(div1))
// console.log('hello world')
// dom.style(div2, { border: "1px solid yellow", color: "blue" })
// dom.class.add(div1, "yellow")
// dom.class.remove(div1, "yellow")
// console.log(dom.class.has(div2, "yellow"));
// console.log(div1);
// const fn = () => {
//     console.log("click")
// }
// dom.on(div1, "click", fn)
// dom.off(div1, "click", fn)
// console.log(dom.find("#test"), document.body);
// const parent = dom.find("#parent");
// const child2 = dom.find("#child2");
// console.log(dom.parent(child2));
// console.log(dom.children(parent));
// console.log(dom.siblings(child2));
// console.log(dom.next(child2));
// console.log(dom.prev(child2));
// dom.travel(parent.children, (x) => {
//     console.log(x)
// })
// console.log(dom.index(child2));


const div = dom.find('#test>.red')[0]// 获取对应的元素
dom.style(div, 'color', 'red') // 设置 div.style.color

const divList = dom.find('.red') // 获取多个 div.red 元素
dom.each(divList, (n) => console.log(n)) // 遍历 divList 里的所有元素
