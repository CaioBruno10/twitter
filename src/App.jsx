import { Sidebar } from "./components/Sidebar"
import { TwitterForm } from "./components/TwitterForm"
import { TrendItem } from "./components/TrendItem";
import { Tweet } from "./components/Tweet"
import { v4 } from "uuid"
import { getAvatar, getRandomImage } from "./utils/generateImagens"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FollowItem } from "./components/FollowItem";

function App() {
  const [tweets, setTweets] = useState([])

  useEffect (() => {
    const interval = setInterval (() => {
      addNewRandomTweets ()
    }, 4000);
    return () => clearInterval (interval)
  }, [])


  const addNewRandomTweets = () => {
    const RandomTweets = [
      'Acabei de me juntar a uma comunidade vibrante de pessoas de todo o mundo, onde pode compartilhar pensamentos, notícias, e se conectar com interesses que você ama.',
      'Se precisar de ajuda, pergunte!😉',
      'Cada dia é uma nova oportunidade de recomeçar.',
      'Nossos erros nos ensinam mais do que nossos acertos...💪 ',
      'O que fazemos para os outros, fazemos para nós mesmos.😊'
    ]
    const RandomTweet = RandomTweets [Math.floor (Math.random () * RandomTweets.length)]

    addNewTweet (RandomTweet, Math.random () > 0.7)
  }



  const addNewTweet = (content, includeImage = false) => {
    const NewTweet = {
      id: v4 (),
      name:"User",
      username: `user${Math.floor(Math.random() * 1000)}`,
      avatar: getAvatar(`user${Math.floor(Math.random() * 1000)}@email.com`),
      content,
      time: new Date ().toLocaleDateString([], {
        hour: '2-digit',
        minute: '2-digit'
      }),
      image: includeImage ? getRandomImage () : null,
      likes:  0,
      retweets: 0,
      comments: 0
    }
    setTweets ((prevTweets) => [NewTweet,...prevTweets])


  } 


  return (

      <div className="flex mx-auto max-w-7xl">
        <Sidebar />
        <main className="flex-grow border-l border-r border-gray-700 max-w-xl">
          <header className="sticky top-0 z-10 bg-twitter-background bg-opacity-80 backdrop-blur-sm">
            <h2 className="px-4 py-3 text-xl font-bold">Página Inicial</h2>
          </header>
          <TwitterForm 
          onTweet={(content) => addNewTweet(content, Math.random() >0.6)} />
          <div>
            {tweets.map(tweet => (
              <Tweet key={tweet.id} tweet={tweet}/>
            ))}
            
          </div>
        </main>
        <aside className="hidden xl:block w-80 px-4">
          <div className="sticky top-0 pt-2">
            <div className="relative">
              <FontAwesomeIcon icon={faSearch} className="absolute top-3 left-3 text-gray-500"/>
              <input placeholder="Buscar no Twitter" className="w-full bg-gray-800 text-white rounded-full outline-none py-2 pl-10 pr-4"/>
            </div>

            <div className="bg-gray-800 rounded-xl mt-4 p-4">
              <h2 className="font-bold text-xl mb-4">Seja Premium</h2>
              <p className="text-gray-500 mb-4">Venha fazer parte do time Premium e tenha o perfil verificado</p>
              <button className="bg-twitter-blue text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-200">Premium</button>
            </div>
            <div className="bg-gray-800 rounded-xl mt-4 p-4">
            <h2 className="font-bold text-xl mb-4">O que está acontecendo</h2>
              <TrendItem category="Eleições 2024 · Ao vivo" name="Debate Eleitoral SP"/>
              <TrendItem category="Assuntos do Momento em Brasil" name="Pablo Marçal"/>
              <TrendItem category="Esportes · Assunto do Momento" name="Fla x Flu" tweetCount="13,424 mil Tweets"/>
              <TrendItem category="Esportes · Assunto do Momento" name="Real Madrid" tweetCount="2,524 mil Tweets"/>
              <TrendItem category="Eleições 2024 · Ao Vivo" name="Debate Eleitoral RJ" tweetCount="1,324 mil Tweets"/>
            </div>
            <div className="bg-gray-800 rounded-xl mt-4 p-4">
              <h2 className="font-bold text-xl mb-4"> Para você seguir</h2>
              <FollowItem name="Bill Gates" username="BillGates"/>
              <FollowItem name="Will Smith" username="WillSmith"/>
            </div>
          </div>
        </aside>
      </div>

  )
}

export default App
