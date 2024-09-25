import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell, faBookmark, faEllipsisH, faEnvelope, faFeatherAlt, faHashtag, faHome, faUser, faUserFriends,} from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'


const NavItem = ({ icon, text, href}) => (
  <div className={"flex items-center p-3 rounded-full cursor-point hover:bg-gray-600 transition duration-200"}>
    <a href={href}>
      <FontAwesomeIcon icon={icon} className="text-2xl mr-4" />
      <span className="text-xl hidden xl:inline">{text}</span>
    </a>
  </div>
)

export function Sidebar() {
  return (
    <div className="w-20 xl:w-64 sticky top-0 px-2 h-screen">
      <FontAwesomeIcon icon={faTwitter} className='text-blue-400 text-3xl m-4'/>
      <nav>
        <NavItem icon={faHome} text="Página Inicial" href="/home" />
        <NavItem icon={faHashtag} text="Explorar" href="/explore" />
        <NavItem icon={faBell} text="Notificações" href="/notifications" />
        <NavItem icon={faEnvelope} text="Menssagens" href="/messages" />
        <NavItem icon={faBookmark} text="Itens Salvos" href="/home" />
        <NavItem icon={faUserFriends} text="Comunidades" href="/communities" />
        <NavItem icon={faTwitter} text="Premium" href="/premium" />
        <NavItem icon={faUser} text="Perfil" href="/profile" />
        <NavItem icon={faEllipsisH} text="Mais" href="/more" />     
      </nav>
      <button className="bg-blue-400 text-white rounded-full font-bold px-4 py-3 mt-4 w-full cursor-pointer">
        <FontAwesomeIcon icon={faFeatherAlt} className="text-white inline xl:hidden"/>
        <span className="hidden xl:inline">Tweetar</span>
      </button>
    </div>
  )
}