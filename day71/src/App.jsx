import React from 'react'
import Card from './components/Card'

const App = () => {
  const users = [
  {
    fullName: "Bruce Wayne",
    title: "The Dark Knight",
    profile: "https://upload.wikimedia.org/wikipedia/en/1/17/Batman-BenAffleck.jpg",
    coverImage: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb",
    likesCount: 8421,
    postCount: 312,
    viewsCount: 342900,
    follow: true
  },
  {
    fullName: "Clark Kent",
    title: "Man of Steel",
    profile: "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png",
    coverImage: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    likesCount: 15321,
    postCount: 421,
    viewsCount: 342900,
    follow: false
  },
  {
    fullName: "Diana Prince",
    title: "Wonder Woman",
    profile: "https://i.pinimg.com/736x/17/1e/e7/171ee7a7a6a237869827a5b93aec2920.jpg",
    coverImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    likesCount: 11234,
    postCount: 289,
    viewsCount: 342900,
    follow: true
  },
  {
    fullName: "Tony Stark",
    title: "Iron Man",
    profile: "https://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55.jpg",
    coverImage: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b",
    likesCount: 19876,
    postCount: 512,
    viewsCount: 342900,
    follow: true
  },
  {
    fullName: "Peter Parker",
    title: "Spider-Man",
    profile: "https://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b.jpg",
    coverImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
    likesCount: 9453,
    postCount: 278,
    viewsCount: 342900,
    follow: false
  },
  {
    fullName: "Steve Rogers",
    title: "Captain America",
    profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdU2-0IzQVlXvn33GHmlXOH32ZYgv12fVgRg&s",
    coverImage: "https://images.unsplash.com/photo-1500051638674-ff996a0ec29e",
    likesCount: 12345,
    postCount: 333,
    viewsCount: 342900,
    follow: true
  },
  {
    fullName: "Natasha Romanoff",
    title: "Black Widow",
    profile: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/marvel-studios-cinematic-universe/6/65/Widow1.jpg?width=640",
    coverImage: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455",
    likesCount: 8765,
    postCount: 244,
    viewsCount: 342900,
    follow: false
  },
  {
    fullName: "Barry Allen",
    title: "The Flash",
    profile: "https://upload.wikimedia.org/wikipedia/en/e/ed/The_Flash_Family.jpg",
    coverImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    likesCount: 10234,
    postCount: 301,
    viewsCount: 342900,
    follow: true
  }
];



  return (
    <div className='flex gap-5 flex-wrap justify-center items-center h-screen p-10'>
      {
        users.map((user,index)=>{
          return <Card key={index} user={user} />
        })
      }
    </div>
  )
}

export default App