import {api} from './API'

// const ItemsPage = () => {
//     const [items, setItems] = useState([])
//     const [status, setStatus] = useState('idle')
//     const [error, setError] = useState(null)
//

//     useEffect(() => {
//     setStatus('loading')
//     api.loadItems().then((res) => {
//         setStatus('success')
//         setItems(res.data)
//     }).catch(err =>{
//         setStatus('error')
//         setError(err)
//     })
// }, [])
//
// const deleteItem = (id) => {
//     setStatus('loading')
//     api.loadItems(id).then((res) => {
//         setStatus('success')
//         setItems(items.filter(i => i.id !== id))
//     }).catch(err =>{
//         setStatus('error')
//         setError(err)
//     })
// }
//
// return <div>
//     {(status === 'loading') && <span>loading...</span>}
//     {(status === 'error') && <span>{error.toSring()}</span>}
//
//     <ul> {
//         items.map(i => {
//             return <Item
//                 key={i.id}
//                 item={i}
//                 deleteItem={deleteItem}
//             />
//         })}
//     </ul>
// </div>
// }

// с сокращенным кодом
//
// useEffect(() => {
//     setStatus('loading')
//     setError(null)
//     // для того, чтобы исчезла ошибка, когда она отработала, но далее все-таки запрос прошел. Она может отображаться и не исчезнуть.
//     api.loadItems().then((res) => {
//         setItems(res.data)
//     }).catch(err =>{
//         setError(err)
//     }).finally(()=>setStatus('idle'))
// }, [])
//
// const deleteItem = (id) => {
//     setStatus('loading')
//     setError(null)
//     // для того, чтобы исчезла ошибка, когда она отработала, но далее все-таки запрос прошел. Она может отображаться и не исчезнуть.
//     api.loadItems(id).then((res) => {
//         setItems(items.filter(i => i.id !== id))
//     }).catch(err =>{
//         setError(err)
//     }).finally(()=>setStatus('idle'))
// }
//
// return <div>
//     {(status === 'loading') && <span>loading...</span>}
//     {!!error && <span>{error.toSring()}</span>}
//
//     <ul> {
//         items.map(i => {
//             return <Item
//                 key={i.id}
//                 item={i}
//                 deleteItem={deleteItem}
//             />
//         })}
//     </ul>
// </div>
// }
//
// const Item = (props) =><li>
//     {props.item.title}
//     <button onClick={()=>props.deleteItem(props.item.id)}>X</button>
//
// </li>