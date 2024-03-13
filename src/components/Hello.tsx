import Child from '../child'
import Text from './Message'
const Hello = () => {
    const onClick = () => {
        alert('hello')
    }
    const text = 'Hello, React'

    return (
        <div onClick={onClick}>
            {text}
      <Child sendChild={'hoge'} />
            <Text content={'fugafuga'} />
        </div>
    )
}

export default Hello;