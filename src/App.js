import React from 'react';
import FruitsClass from './component/FruitsClass';


const fruits = [
  {'id':' 0','picture': 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 'title': 'Яблоко', 'description': 'Самое полезное в яблоках – макроэлемент калий. Он оказывает комплексное действие: с одной стороны – мочегонное, с другой – благотворно действует на сердце, поддерживает нашу нервную систему.', 'price': '100P'},

  {'id':' 1','picture': 'https://images.unsplash.com/photo-1620217491382-4772d58bc863?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 'title': 'Апельсин', 'description': 'Чрезвычайно полезный фрукт, в его составе – бета-каротин, фолиевая кислота, витамины группы В, аскорбиновая кислота (витамин С), витамины Н и РР. Наши апельсины самые вкусные.', 'price': '200P'},

  {'id':' 2','picture': 'https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80', 'title': 'Банан', 'description': 'Они богаты витаминами А, В6, С, Е и К, а также считаются хорошим источником кальция, фосфора, магния, калия и натрия. Благодаря своему составу бананы помогают, к примеру, в борьбе с анемией, менструальными болями.', 'price': '100P'},

  {'id':' 3','picture': 'https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', 'title': 'Ананас', 'description': 'тропический фрукт, содержащий много ферментов, витаминов и антиоксидантов. Особенно он ценится за высокое содержание витамина С, марганца и бромелайна. Наши ананасы самые спелые.', 'price': '500P'}
]
console.log(fruits)

class App extends React.Component {
  render() {
    return (
      <div className="blockOfFruitss">
     {
      fruits.map((fruit) => 
        <FruitsClass key={fruit.id} picture = {fruit.picture} title = {fruit.title} description = {fruit.description} price = {fruit.price}></FruitsClass>
      )
     }
     
     {/*ВАРИАНТ НАПИСАНИЯ КОДА, НЕИСПОЛЬЗУЯ МЕТОД .map: */}

      {/* <FruitsClass title = {fruits[0].title} picture = {fruits[0].picture} price = {fruits[0].price} description = {fruits[0].description} ></FruitsClass>

      <FruitsClass title = {fruits[1].title} picture = {fruits[1].picture} price = {fruits[1].price} description = {fruits[1].description} ></FruitsClass>

      <FruitsClass title = {fruits[2].title} picture = {fruits[2].picture} price = {fruits[2].price} description = {fruits[2].description} ></FruitsClass>
      
      <FruitsClass title = {fruits[3].title} picture = {fruits[3].picture} price = {fruits[3].price} description = {fruits[3].description} ></FruitsClass> */}
      
      </div>
    );
  }
}


export default App;
