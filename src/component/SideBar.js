import Link from './Link'

function SideBar() {
    const links = [
        {
            label: 'accordion',
            path: '/accordion'
        }, {
            label: 'dropdown',
            path: '/'
        }, {
            label: 'buttons',
            path: '/buttons'
        },{
            label:'modal',
            path:'/modal'
        },{
            label:'table',
            path:'/table'
        },{
            label:'chatgpt',
            path:'/chatgpt'
        },{
            label:'counter',
            path:'/counter'
        },{
            label:'movie-and-song',
            path:'/movieandsong'
        }
    ]
    const renderedLinks = links.map((link)=>{
        return <Link key={link.label} to={link.path} className='mb-5'
            activeClassName='font-bold border-l-4 border-blue-500 pl-2'>{link.label}</Link>
    })
    return(
        <div className='sticky top-0 flex flex-col items-start'>
            {renderedLinks}
        </div>
    )
}
export default SideBar