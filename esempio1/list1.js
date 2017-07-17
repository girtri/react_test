
// Crea gli elementi da inserire nella lista
var item1 = React.DOM.li({ className: "item-1", key: "item-1"}, "Item 1");
var item2 = React.DOM.li({ className: "item-2", key: "item-2"}, "Item 2");
var item3 = React.DOM.li({ className: "item-3", key: "item-3"}, "Item 3");
 
// Crea un array degli elementi
var itemArray = [item1, item2, item3];
 
// Crea la lista degli elementi
var listElement = React.DOM.ul({ className: "list-of-items" }, itemArray);
 
// Lancia il rendering nella pagina
ReactDOM.render(listElement, document.getElementById("container"));