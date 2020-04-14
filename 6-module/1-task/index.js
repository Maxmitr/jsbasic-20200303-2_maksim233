/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: 'Ilia',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *      },
 *
 * @constructor
 */
class ClearedTable {
  constructor(data) {
    this.el = document.createElement('table');
    this.el.classList.add("pure-table");
    this.data = data;
    const thead = document.createElement('thead');
    thead.innerHTML = `<tr><td>Name</td><td>Age</td><td>Salary</td><td>City</td><td></td></tr>`
    const tbody = document.createElement('tbody');
    this.el.appendChild(thead);
    this.el.appendChild(tbody);
    console.log(data);
    tbody.innerHTML = data.map((list, num) =>{
      let row = '';
      for(let key of Object.keys(list)){
        if(key !== "id"){
          row+=`<td>${list[key]}</td>` ;
        }
      }
      row+=`<td><a href="#delete">X</a></td>` ;
      return `<tr data-id="${list.id}">${row}</tr>`
    }).join('');

    this.el.addEventListener('click', event => this.onClick(event));

    
  }
  
  onClick = function(event) {
    let target = event.target;
    if (target.tagName == 'A') {
     
 
      let ell = target.parentNode.parentNode;
      let id = ell.getAttribute('data-id');

     console.log(id);
      console.log(ell.parentElement);
      ell.parentElement.removeChild(ell); 
      this.onRemoved(parseInt(id, 10));
    }

  }

  /**
   * Метод который вызывается после удалении строки
   * @param {number} id - идентификатор удаляемого пользователя
   */
  onRemoved(id) {}
}

window.ClearedTable = ClearedTable;