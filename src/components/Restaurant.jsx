import React from 'react';

export function Restaurant() {
  const dishes = [
    {
      id: 1,
      name: 'plato 1',
      description: 'Este es el plato 1',
      price: 10,
    },
    {
      id: 2,
      name: 'plato 2',
      description: 'Este es el plato 2',
      price: 20,
    },
    {
      id: 3,
      name: 'plato 3',
      description: 'Este es el plato 3',
      price: 15,
    },
  ]

  return (
    <>
      <Header />
      <Home>{dishes}</Home>
    </>
  )
}

function Header() {
  return (
    <>
      <a href="">Home</a>
      <a href="">Menu</a>
      <a href="">Restaurants</a>
      <a href="">About us</a>
    </>
  )
}

function Home(props) {
  const { children } = props;

  return (
    <>
      {children.map((i) => 
        <div key={i.id}>
          <span>{i.name}</span>
          <span>{i.description}</span>
          <span>{i.price}</span>
        </div>
      )}
    </>
  )
}
