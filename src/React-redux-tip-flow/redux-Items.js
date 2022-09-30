import {api} from './API'
import {useDispatch, useSelector} from "react-redux";

const ItemsPage = () => {
const items = useSelector(s => s.data.items)
const status = useState(s => s.data.status)
const error = useState(s => s.data.error)

const dispatch = useDispatch()

useEffect(() => {
dispatch(loadItemsTC())
}, [])

return <div>
    {(status === 'loading') && <span>loading...</span>}
    {!!error && <span>{error.toSring()}</span>}

    <ul> {
        items.map(i => {
            return <Item
                key={i.id}
                item={i}
            />
        })}
    </ul>
</div>
}

const Item = (props) => {
    const dispatch = useDispatch()

    const deleteItem = () => {
        dispatch(deleteItemsTC(props.item.id))
    }
    return <li>
        {props.item.title}
        <button onClick={deleteItem}>X</button>
    </li>
}